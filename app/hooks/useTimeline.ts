import { useState, useEffect } from 'react'
import { TimelineItem } from '../types/profile'
import { saveTimelineToStorage, loadTimelineFromStorage } from '../utils/storage'
import { sortTimelineData, formatDateForTimeline, createNewTimelineItem } from '../utils/timeline'
import { DEFAULT_TIMELINE } from '../data/constants'

/**
 * 时间线管理Hook
 * 提供时间线数据的状态管理和本地存储功能
 */
export const useTimeline = () => {
    // 时间线状态
    const [timelineData, setTimelineData] = useState<TimelineItem[]>(DEFAULT_TIMELINE)
    const [editingTimeline, setEditingTimeline] = useState<TimelineItem[]>(DEFAULT_TIMELINE)

    // 日期选择器相关状态
    const [showDatePicker, setShowDatePicker] = useState<number | null>(null)
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())

    /**
     * 初始化时从localStorage加载数据
     */
    useEffect(() => {
        const savedTimeline = loadTimelineFromStorage()
        if (savedTimeline) {
            setTimelineData(savedTimeline)
            setEditingTimeline(savedTimeline)
        }
    }, [])

    /**
     * 保存时间线数据
     */
    const saveTimeline = () => {
        const sortedData = sortTimelineData(editingTimeline)
        setTimelineData(sortedData)
        saveTimelineToStorage(sortedData)
    }

    /**
     * 取消编辑，恢复到保存的状态
     */
    const cancelEdit = () => {
        setEditingTimeline(timelineData)
        setShowDatePicker(null)
    }

    /**
     * 添加新的时间线项目
     */
    const addTimelineItem = () => {
        setEditingTimeline(prev => [...prev, createNewTimelineItem()])
    }

    /**
     * 删除时间线项目
     * @param index 要删除的项目索引
     */
    const removeTimelineItem = (index: number) => {
        setEditingTimeline(prev => prev.filter((_, i) => i !== index))
    }

    /**
     * 更新时间线项目
     * @param index 项目索引
     * @param field 要更新的字段
     * @param value 新值
     */
    const updateTimelineItem = (index: number, field: 'event' | 'date', value: string) => {
        setEditingTimeline(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        )
    }

    /**
     * 处理日期选择
     * @param date 选择的日期字符串
     * @param index 时间线项目索引
     */
    const handleDateSelect = (date: string, index: number) => {
        // 格式化日期为 YYYY.M 格式
        const formattedDate = formatDateForTimeline(date)
        updateTimelineItem(index, 'date', formattedDate)
        setShowDatePicker(null)
    }

    /**
     * 处理日历中日期的选择
     * @param day 选择的日期
     * @param index 时间线项目索引
     */
    const handleCalendarDateSelect = (day: number, index: number) => {
        // 格式化为包含具体日期的格式：YYYY.M.D
        const formattedDate = `${selectedYear}.${selectedMonth + 1}.${day}`
        updateTimelineItem(index, 'date', formattedDate)
        setShowDatePicker(null)
    }

    /**
     * 切换到上一个月
     */
    const handlePrevMonth = () => {
        if (selectedMonth === 0) {
            setSelectedMonth(11)
            setSelectedYear(selectedYear - 1)
        } else {
            setSelectedMonth(selectedMonth - 1)
        }
    }

    /**
     * 切换到下一个月
     */
    const handleNextMonth = () => {
        if (selectedMonth === 11) {
            setSelectedMonth(0)
            setSelectedYear(selectedYear + 1)
        } else {
            setSelectedMonth(selectedMonth + 1)
        }
    }

    /**
     * 获取指定年月的天数
     * @param year 年份
     * @param month 月份（0-11）
     * @returns 该月的天数
     */
    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    /**
     * 获取指定年月第一天是星期几
     * @param year 年份
     * @param month 月份（0-11）
     * @returns 星期几（0-6，0是星期日）
     */
    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay()
    }

    /**
     * 生成日历网格数据
     * 包含当前月、上月末尾和下月开头的日期
     * @returns 日历天数数组
     */
    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(selectedYear, selectedMonth)
        const firstDay = getFirstDayOfMonth(selectedYear, selectedMonth)
        const days = []

        // 添加上个月的日期
        const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1
        const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear
        const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth)

        for (let i = firstDay - 1; i >= 0; i--) {
            days.push({
                day: daysInPrevMonth - i,
                isCurrentMonth: false,
                isPrevMonth: true
            })
        }

        // 添加当前月的日期
        for (let day = 1; day <= daysInMonth; day++) {
            days.push({
                day,
                isCurrentMonth: true,
                isPrevMonth: false
            })
        }

        // 添加下个月的日期，填满6行
        const remainingCells = 42 - days.length
        for (let day = 1; day <= remainingCells; day++) {
            days.push({
                day,
                isCurrentMonth: false,
                isPrevMonth: false
            })
        }

        return days
    }

    /**
     * 获取排序后的时间线数据
     */
    const getSortedTimelineData = () => {
        return sortTimelineData(timelineData)
    }

    return {
        // 状态
        timelineData,
        editingTimeline,
        showDatePicker,
        selectedYear,
        selectedMonth,

        // 操作函数
        saveTimeline,
        cancelEdit,
        addTimelineItem,
        removeTimelineItem,
        updateTimelineItem,
        handleDateSelect,
        handleCalendarDateSelect,
        handlePrevMonth,
        handleNextMonth,
        generateCalendarDays,
        getSortedTimelineData,

        // 状态设置函数
        setShowDatePicker,
        setSelectedYear,
        setSelectedMonth,

        // 便捷操作方法
        handleSaveTimeline: saveTimeline,
        handleCancelTimelineEdit: cancelEdit,
        handleAddTimelineItem: addTimelineItem,
        handleRemoveTimelineItem: removeTimelineItem,
        handleUpdateTimelineItem: updateTimelineItem
    }
} 
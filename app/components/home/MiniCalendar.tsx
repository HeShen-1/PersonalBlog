'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getLunarInfo, formatLunarInfo, LunarInfo } from '../../utils/lunar'

/**
 * 迷你日历组件
 * 显示当前月份的日历，支持月份切换
 */
export default function MiniCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [hoveredDay, setHoveredDay] = useState<number | null>(null)
    const [hoveredLunarInfo, setHoveredLunarInfo] = useState<LunarInfo | null>(null)

    const monthNames = [
        '一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
    ]

    const weekDays = ['日', '一', '二', '三', '四', '五', '六']

    /**
     * 获取当前月份的天数
     */
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }

    /**
     * 获取当前月份第一天是星期几
     */
    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    }

    /**
     * 生成日历天数数组
     */
    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentDate)
        const firstDay = getFirstDayOfMonth(currentDate)
        const days = []

        // 添加空白天数
        for (let i = 0; i < firstDay; i++) {
            days.push(null)
        }

        // 添加当前月的天数
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day)
        }

        return days
    }

    /**
     * 切换到上一个月
     */
    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    /**
     * 切换到下一个月
     */
    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    /**
     * 检查是否是今天
     */
    const isToday = (day: number) => {
        const today = new Date()
        return day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
    }

    /**
     * 检查是否是选中的日期
     */
    const isSelected = (day: number) => {
        return day === selectedDate.getDate() &&
            currentDate.getMonth() === selectedDate.getMonth() &&
            currentDate.getFullYear() === selectedDate.getFullYear()
    }

    /**
     * 处理鼠标悬停在日期上
     */
    const handleDayHover = (day: number | null) => {
        setHoveredDay(day)
        if (day) {
            const hoverDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            const lunarInfo = getLunarInfo(hoverDate)
            setHoveredLunarInfo(lunarInfo)
        } else {
            setHoveredLunarInfo(null)
        }
    }

    const calendarDays = generateCalendarDays()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[280px]"
        >
            {/* 日历头部 */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={prevMonth}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                    <ChevronLeft size={16} className="text-white/70" />
                </button>

                <h3 className="text-white font-medium">
                    {currentDate.getFullYear()}年{monthNames[currentDate.getMonth()]}
                </h3>

                <button
                    onClick={nextMonth}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                    <ChevronRight size={16} className="text-white/70" />
                </button>
            </div>

            {/* 星期标题 */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="text-center text-white/60 text-xs font-medium py-1"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* 日历天数 */}
            <div className="grid grid-cols-7 gap-1 relative">
                {calendarDays.map((day, index) => (
                    <motion.div
                        key={index}
                        whileHover={day ? { scale: 1.1 } : {}}
                        whileTap={day ? { scale: 0.95 } : {}}
                        className={`
                            h-8 w-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 relative
                            ${day ? 'hover:bg-white/10' : ''}
                            ${day && isToday(day) ? 'bg-blue-500/30 text-blue-300 border border-blue-400/30' : ''}
                            ${day && isSelected(day) && !isToday(day) ? 'bg-white/20 text-white' : ''}
                            ${day && !isToday(day) && !isSelected(day) ? 'text-white/70' : ''}
                        `}
                        onMouseEnter={() => handleDayHover(day)}
                        onMouseLeave={() => handleDayHover(null)}
                        onClick={() => {
                            if (day) {
                                setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
                            }
                        }}
                    >
                        {day}
                    </motion.div>
                ))}

                {/* 农历信息悬浮提示 */}
                <AnimatePresence>
                    {hoveredDay && hoveredLunarInfo && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/20 z-50"
                        >
                            <div className="text-center">
                                <div className="text-white/80 text-xs">
                                    {formatLunarInfo(hoveredLunarInfo)}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}
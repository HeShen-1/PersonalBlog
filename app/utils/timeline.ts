import { TimelineItem } from '../types/profile'

/**
 * 解析时间线日期字符串
 * 支持各种时间格式：单个时间点、时间段等
 * @param dateStr 日期字符串
 * @returns 解析出的年份数字
 */
export const parseTimelineDate = (dateStr: string): number => {
    // 处理各种日期格式
    if (dateStr.includes('-')) {
        // 处理时间段，如 "2022.9-2026.6" 或 "2022-2026"
        const parts = dateStr.split('-')
        const startDate = parts[0].trim()
        return parseYear(startDate)
    } else {
        // 处理单个时间点，如 "2026.7" 或 "2024"
        return parseYear(dateStr)
    }
}

/**
 * 从日期字符串中提取年份
 * @param dateStr 日期字符串
 * @returns 年份数字，解析失败返回0
 */
export const parseYear = (dateStr: string): number => {
    // 提取年份
    const match = dateStr.match(/(\d{4})/)
    return match ? parseInt(match[1]) : 0
}

/**
 * 对时间线数据进行排序
 * 按年份降序排列，最新的事件在前
 * @param data 时间线数据数组
 * @returns 排序后的时间线数据
 */
export const sortTimelineData = (data: TimelineItem[]): TimelineItem[] => {
    return [...data].sort((a, b) => {
        const yearA = parseTimelineDate(a.date)
        const yearB = parseTimelineDate(b.date)
        return yearB - yearA // 降序排列，最新的在上面
    })
}

/**
 * 格式化日期为时间线显示格式
 * @param dateString 日期字符串
 * @returns 格式化后的日期字符串 (YYYY.M)
 */
export const formatDateForTimeline = (dateString: string): string => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    return `${year}.${month}`
}

/**
 * 生成年月选择器选项
 * 生成过去10年到未来10年的年月选项
 * @returns 年月选项数组
 */
export const generateDateOptions = (): Array<{ value: string; label: string }> => {
    const currentYear = new Date().getFullYear()
    const years = []

    // 生成过去10年到未来10年的选项
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
        for (let month = 1; month <= 12; month++) {
            years.push({
                value: `${year}-${month.toString().padStart(2, '0')}-01`,
                label: `${year}年${month}月`
            })
        }
    }

    return years.reverse() // 最新的年份在前
}

/**
 * 验证时间线项目数据
 * @param item 时间线项目
 * @returns 是否有效
 */
export const validateTimelineItem = (item: TimelineItem): boolean => {
    return item.event.trim() !== '' && item.date.trim() !== ''
}

/**
 * 创建新的时间线项目
 * @returns 新的时间线项目
 */
export const createNewTimelineItem = (): TimelineItem => {
    return { event: '新事件', date: '2024' }
} 
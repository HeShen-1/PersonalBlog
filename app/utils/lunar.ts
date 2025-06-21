import { Lunar, Solar } from 'lunar-javascript'

/**
 * 农历信息接口
 */
export interface LunarInfo {
    lunarDate: string // 农历日期，如"正月初一"
    lunarYear: string // 农历年份，如"甲辰年"
    zodiac: string // 生肖，如"龙"
    festival: string // 节日，如"春节"
    solarTerm: string // 节气，如"立春"
    ganzhi: string // 干支，如"甲辰"
}

/**
 * 获取指定日期的农历信息
 * @param date 公历日期
 * @returns 农历信息对象
 */
export const getLunarInfo = (date: Date): LunarInfo => {
    try {
        // 创建公历日期对象
        const solar = Solar.fromDate(date)
        // 转换为农历
        const lunar = solar.getLunar()

        // 获取农历日期字符串
        const lunarMonth = lunar.getMonthInChinese()
        const lunarDay = lunar.getDayInChinese()
        const lunarDate = `${lunarDay}`

        // 获取农历年份
        const lunarYear = `${lunar.getYearInGanZhi()}年`

        // 获取生肖
        const zodiac = lunar.getYearShengXiao()

        // 获取节日信息
        const festivals = lunar.getFestivals()
        const festival = festivals.length > 0 ? festivals[0] : ''

        // 获取节气信息
        const jieQi = lunar.getJieQi()
        const solarTerm = jieQi || ''

        // 获取干支
        const ganzhi = lunar.getYearInGanZhi()


        return {
            lunarDate,
            lunarYear,
            zodiac,
            festival,
            solarTerm,
            ganzhi,
        }
    } catch (error) {
        console.error('获取农历信息失败:', error)
        return {
            lunarDate: '',
            lunarYear: '',
            zodiac: '',
            festival: '',
            solarTerm: '',
            ganzhi: '',
        }
    }
}

/**
 * 格式化农历信息为显示文本
 * @param lunarInfo 农历信息对象
 * @returns 格式化的显示文本
 */
export const formatLunarInfo = (lunarInfo: LunarInfo): string => {
    const parts = []

    if (lunarInfo.lunarDate) {
        parts.push(lunarInfo.lunarDate)
    }

    if (lunarInfo.festival) {
        parts.push(`🎉 ${lunarInfo.festival}`)
    }

    if (lunarInfo.solarTerm) {
        parts.push(`🌱 ${lunarInfo.solarTerm}`)
    }

    if (lunarInfo.zodiac) {
        parts.push(`${lunarInfo.zodiac}年`)
    }

    return parts.join(' • ')
}
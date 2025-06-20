import { ProfileData, TimelineItem } from '../types/profile'

/**
 * 本地存储键名常量
 */
const STORAGE_KEYS = {
    PROFILE: 'personalProfile',
    TIMELINE: 'timelineData'
} as const

/**
 * 保存个人信息到本地存储
 * @param data 个人信息数据
 */
export const saveProfileToStorage = (data: ProfileData): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(data))
    }
}

/**
 * 从本地存储加载个人信息
 * @returns 个人信息数据或null
 */
export const loadProfileFromStorage = (): ProfileData | null => {
    if (typeof window !== 'undefined') {
        const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE)
        if (savedProfile) {
            try {
                return JSON.parse(savedProfile)
            } catch (error) {
                console.error('解析个人信息数据失败:', error)
                return null
            }
        }
    }
    return null
}

/**
 * 保存时间线数据到本地存储
 * @param data 时间线数据
 */
export const saveTimelineToStorage = (data: TimelineItem[]): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(data))
    }
}

/**
 * 从本地存储加载时间线数据
 * @returns 时间线数据或null
 */
export const loadTimelineFromStorage = (): TimelineItem[] | null => {
    if (typeof window !== 'undefined') {
        const savedTimeline = localStorage.getItem(STORAGE_KEYS.TIMELINE)
        if (savedTimeline) {
            try {
                return JSON.parse(savedTimeline)
            } catch (error) {
                console.error('解析时间线数据失败:', error)
                return null
            }
        }
    }
    return null
}

/**
 * 清除所有本地存储数据
 */
export const clearAllStorage = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEYS.PROFILE)
        localStorage.removeItem(STORAGE_KEYS.TIMELINE)
    }
} 
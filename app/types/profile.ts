/**
 * 个人信息数据类型定义
 */
export interface ProfileData {
    name: string
    title: string
    location: string
    bio: string
    skills: string[]
    avatar: string
}

/**
 * 时间线事件数据类型定义
 */
export interface TimelineItem {
    event: string
    date: string
}

/**
 * 地址数据类型定义
 */
export interface LocationData {
    country: string
    provinces?: string[]
    cities?: string[]
}

/**
 * 背景图片配置类型定义
 */
export interface BackgroundImage {
    name: string
    label: string
}

/**
 * 背景模糊等级配置类型定义
 */
export interface BlurLevel {
    level: number
    label: string
    blur: string
}

/**
 * 社交链接配置类型定义
 */
export interface SocialLink {
    icon: any
    href?: string
    onClick?: () => void
    label: string
    type: 'link' | 'button'
}

/**
 * 站点配置类型定义
 */
export interface SiteConfig {
    title: string
    subtitle: string
    icon: string
    color: string
    href: string
}

/**
 * 项目配置类型定义
 */
export interface ProjectConfig {
    title: string
    subtitle: string
    icon: string
    color: string
    href: string
} 
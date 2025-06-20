/**
 * GitHub贡献数据类型定义
 */
export interface ContributionData {
    week: number
    day: number
    level: number
    date: Date
    count: number
}

/**
 * GitHub贡献图结果类型定义
 */
export interface ContributionResult {
    contributions: ContributionData[]
    totalContributions: number
    year: number
}

/**
 * GitHub事件数据类型定义（简化）
 */
export interface GitHubEvent {
    type: string
    created_at: string
    payload?: any
}

/**
 * GitHub API响应类型定义
 */
export interface GitHubApiResponse {
    weeks?: Array<{
        contributionDays: Array<{
            date: string
            contributionCount: number
        }>
    }>
} 
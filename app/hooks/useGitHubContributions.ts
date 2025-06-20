import { useState, useEffect } from 'react'
import { ContributionData } from '../types/github'
import {
    fetchGitHubContributions,
    transformContributionsData,
    generateRealisticContributions
} from '../utils/github'
import { GITHUB_USERNAME } from '../data/constants'

/**
 * GitHub贡献图管理Hook
 * 提供GitHub贡献图数据的获取和状态管理功能
 */
export const useGitHubContributions = () => {
    // GitHub贡献图相关状态
    const [contributions, setContributions] = useState<ContributionData[]>([])
    const [isLoadingContributions, setIsLoadingContributions] = useState(true)
    const [contributionsError, setContributionsError] = useState<string | null>(null)
    const [githubUsername, setGithubUsername] = useState(GITHUB_USERNAME)
    const [totalContributions, setTotalContributions] = useState(0)
    const [contributionsYear, setContributionsYear] = useState(new Date().getFullYear())

    /**
     * 手动刷新GitHub贡献数据
     * 重新获取指定用户的GitHub贡献数据
     * @param username 可选的GitHub用户名，默认使用当前设置的用户名
     */
    const refreshContributions = async (username?: string) => {
        const targetUsername = username || githubUsername
        try {
            setIsLoadingContributions(true)
            setContributionsError(null)

            // 尝试获取真实的GitHub贡献数据
            const data = await fetchGitHubContributions(targetUsername)
            const transformedData = transformContributionsData(data, contributionsYear)

            // 设置贡献数据
            setContributions(transformedData.contributions)
            setTotalContributions(transformedData.totalContributions)

            console.log(`成功获取 ${targetUsername} 的GitHub贡献数据`)

        } catch (error) {
            console.warn('获取GitHub贡献数据失败，使用模拟数据:', error)
            setContributionsError('无法获取真实数据，显示模拟贡献图')
            // 使用更真实的模拟数据作为备用方案，传入当前选中的年份
            const fallbackData = generateRealisticContributions(contributionsYear)
            setContributions(fallbackData.contributions)
            setTotalContributions(fallbackData.totalContributions)
        } finally {
            setIsLoadingContributions(false)
        }
    }

    /**
     * 更新贡献年份
     * @param year 新的年份
     */
    const updateContributionsYear = (year: number) => {
        setContributionsYear(year)
    }

    /**
     * 更新GitHub用户名
     * @param username 新的用户名
     */
    const updateGithubUsername = (username: string) => {
        setGithubUsername(username)
    }

    /**
     * 加载GitHub贡献数据副作用
     * 在组件挂载时获取真实的GitHub贡献数据
     */
    useEffect(() => {
        refreshContributions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /**
     * 监听年份变化并自动刷新贡献数据
     * 当用户切换年份时，自动重新获取对应年份的贡献数据
     */
    useEffect(() => {
        // 使用一个标记来避免初始加载时的重复刷新
        let isInitialLoad = contributionsYear === new Date().getFullYear() && contributions.length === 0

        if (!isInitialLoad) {
            refreshContributions()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contributionsYear])

    return {
        // 状态
        contributions,
        isLoadingContributions,
        contributionsError,
        githubUsername,
        totalContributions,
        contributionsYear,

        // 操作函数
        refreshContributions,
        updateContributionsYear,
        updateGithubUsername
    }
} 
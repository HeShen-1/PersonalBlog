import { motion, AnimatePresence } from 'framer-motion'
import { Github, RotateCcw } from 'lucide-react'
import { ContributionData } from '../../types/github'

interface GitHubContributionsProps {
    contributions: ContributionData[]
    isLoading: boolean
    error: string | null
    username: string
    totalContributions: number
    currentYear: number
    onRefresh: () => void
    onYearChange: (year: number) => void
}

/**
 * GitHub贡献图组件
 * 显示GitHub贡献图表和年份选择器
 */
export default function GitHubContributions({
    contributions,
    isLoading,
    error,
    username,
    totalContributions,
    currentYear,
    onRefresh,
    onYearChange
}: GitHubContributionsProps) {
    /**
     * 获取贡献等级对应的颜色
     */
    const getLevelColor = (level: number) => {
        if (level === -1) return 'bg-transparent'
        switch (level) {
            case 0: return 'bg-gray-700'
            case 1: return 'bg-green-600/60'
            case 2: return 'bg-green-600/80'
            case 3: return 'bg-green-500'
            case 4: return 'bg-green-400'
            default: return 'bg-gray-700'
        }
    }

    /**
     * 获取贡献等级对应的提示文本
     */
    const getLevelText = (level: number, count: number, date: Date) => {
        if (level === -1) return ''
        const dateStr = date.toLocaleDateString('zh-CN')
        if (level === 0) return `${dateStr}: 无贡献`
        return `${dateStr}: ${count} 次贡献`
    }

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-start space-x-4"
        >
            {/* GitHub贡献图主容器 */}
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-fit">
                {/* 头部标题和控制按钮 */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold flex items-center">
                            <Github size={20} className="mr-2" />
                            {totalContributions} contributions in {currentYear}
                        </h3>
                        <span className="text-white/60 text-sm">@{username}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        {isLoading && (
                            <div className="flex items-center text-white/60 text-sm">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                加载中...
                            </div>
                        )}
                        {error && (
                            <div className="text-yellow-400 text-xs bg-yellow-400/10 px-2 py-1 rounded">
                                {error}
                            </div>
                        )}
                        <button
                            onClick={onRefresh}
                            disabled={isLoading}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="刷新贡献图"
                        >
                            <motion.div
                                animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
                                transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
                            >
                                <RotateCcw size={16} className="text-white/70" />
                            </motion.div>
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    /* 加载状态 */
                    <div className="space-y-2">
                        <div className="flex mb-1">
                            <div className="w-8"></div>
                            <div className="flex-1 relative h-4">
                                <div className="absolute text-xs text-white/30 animate-pulse">Loading months...</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-8 flex flex-col space-y-0.5">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                    <div key={day} className="h-2.5 text-[10px] text-white/30 flex items-center animate-pulse">{day}</div>
                                ))}
                            </div>
                            <div className="grid grid-rows-7 grid-flow-col gap-0.5">
                                {Array.from({ length: 371 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-2.5 h-2.5 rounded-sm bg-gray-600/20 animate-pulse"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <div className="text-xs text-white/30 animate-pulse">Loading...</div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xs text-white/30 animate-pulse">Less</span>
                                <div className="flex space-x-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className="w-2.5 h-2.5 bg-gray-700/50 rounded-sm animate-pulse"></div>
                                    ))}
                                </div>
                                <span className="text-xs text-white/30 animate-pulse">More</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* 贡献图主体 */
                    <div className="space-y-2">
                        {/* 月份标签行 */}
                        <div className="flex mb-1">
                            <div className="w-8"></div>
                            <div className="flex-1 relative h-4">
                                {/* 月份标签逻辑 */}
                                {(() => {
                                    const monthLabels: JSX.Element[] = []
                                    const yearStart = new Date(currentYear, 0, 1)
                                    const startDayOfWeek = yearStart.getDay()
                                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                    const monthPositions: { [key: number]: number } = {}

                                    for (let weekIndex = 0; weekIndex < 53; weekIndex++) {
                                        const weekStart = new Date(yearStart.getTime() + (weekIndex * 7 - startDayOfWeek) * 24 * 60 * 60 * 1000)
                                        if (weekStart.getFullYear() === currentYear) {
                                            const currentMonth = weekStart.getMonth()
                                            if (monthPositions[currentMonth] === undefined) {
                                                monthPositions[currentMonth] = weekIndex
                                            }
                                        }
                                    }

                                    Object.entries(monthPositions).forEach(([month, weekIndex]) => {
                                        const monthIndex = parseInt(month)
                                        const leftPosition = `calc(${weekIndex} * (10px + 2px))`
                                        monthLabels.push(
                                            <div
                                                key={monthIndex}
                                                className="absolute text-xs text-white/50"
                                                style={{ left: leftPosition }}
                                            >
                                                {monthNames[monthIndex]}
                                            </div>
                                        )
                                    })

                                    return monthLabels
                                })()}
                            </div>
                        </div>

                        {/* 贡献图网格 */}
                        <div className="flex">
                            <div className="w-8 flex flex-col space-y-0.5">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                    <div key={day} className="h-2.5 text-[10px] text-white/50 flex items-center">{day}</div>
                                ))}
                            </div>
                            <div className="grid grid-rows-7 grid-flow-col gap-0.5">
                                {contributions.map((contribution, index) => (
                                    <div
                                        key={index}
                                        className={`w-2.5 h-2.5 rounded-sm ${getLevelColor(contribution.level)} hover:ring-1 hover:ring-white/50 transition-all cursor-pointer`}
                                        title={getLevelText(contribution.level, contribution.count, contribution.date)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* 底部图例 */}
                        <div className="flex items-center justify-between pt-2">
                            <a
                                href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-white/40 hover:text-white/60 transition-colors"
                            >
                                Learn how we count contributions
                            </a>
                            <div className="flex items-center space-x-2">
                                <span className="text-xs text-white/60">Less</span>
                                <div className="flex space-x-1">
                                    <div className="w-2.5 h-2.5 bg-gray-700 rounded-sm"></div>
                                    <div className="w-2.5 h-2.5 bg-green-600/60 rounded-sm"></div>
                                    <div className="w-2.5 h-2.5 bg-green-600/80 rounded-sm"></div>
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
                                    <div className="w-2.5 h-2.5 bg-green-400 rounded-sm"></div>
                                </div>
                                <span className="text-xs text-white/60">More</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* 年份选择按钮 */}
            <div className="flex flex-col space-y-2 ml-4">
                {[2025, 2024, 2023].map((year, index) => (
                    <motion.button
                        key={year}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        onClick={() => onYearChange(year)}
                        disabled={isLoading}
                        className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px] ${currentYear === year
                            ? 'bg-blue-500/30 text-blue-300 border border-blue-400/30'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                            }`}
                        title={`查看${year}年贡献`}
                    >
                        {year}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    )
} 
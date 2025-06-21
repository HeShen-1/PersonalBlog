'use client'

// React核心导入
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 组件导入
import { useTheme } from './components/ThemeProvider'
import Navbar from './components/Navbar'

// 新的自定义Hooks导入
import { useProfile } from './hooks/useProfile'
import { useTimeline } from './hooks/useTimeline'
import { useGitHubContributions } from './hooks/useGitHubContributions'

// 配置数据导入
import {
    getBackgroundImages,
    BLUR_LEVELS,
    getSocialLinks,
    SITE_CONFIGS,
    PROJECT_CONFIGS,
    GITHUB_USERNAME
} from './data/constants'

// 组件导入
import ProfileCard from './components/home/ProfileCard'
import SkillsSection from './components/home/SkillsSection'
import SkillsDisplay from './components/home/SkillsDisplay'
import TimelineSection from './components/home/TimelineSection'
import GitHubContributions from './components/home/GitHubContributions'
import SitesSection from './components/home/SitesSection'
import ProjectsSection from './components/home/ProjectsSection'
import BackgroundSelector from './components/home/BackgroundSelector'
import TimeCalendarWidget from './components/home/TimeCalendarWidget'

// 弹窗组件导入
import EmailCard from './components/home/modals/EmailCard'
import PraiseCode from './components/home/modals/PraiseCode'

/**
 * 个人博客首页组件
 * 静态展示版本，移除了所有设置功能
 */
export default function Home() {
    // 获取主题状态
    const { theme } = useTheme()

    // 基础路径配置
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

    // 背景设置状态
    const [currentBg, setCurrentBg] = useState(`${basePath}/image/bg/Aoyama Hara not old.png`)
    const [showBgSelector, setShowBgSelector] = useState(false)
    const [backgroundBlur, setBackgroundBlur] = useState(1)

    // 弹窗状态
    const [showPraiseCode, setShowPraiseCode] = useState(false)
    const [showEmailCard, setShowEmailCard] = useState(false)
    const [showCopySuccess, setShowCopySuccess] = useState(false)

    // 使用自定义Hooks管理状态
    const profile = useProfile(basePath)
    const timeline = useTimeline()
    const github = useGitHubContributions()

    // 获取配置数据
    const backgroundImages = getBackgroundImages(basePath)
    const socialLinks = getSocialLinks(setShowEmailCard, setShowPraiseCode)

    // 邮箱复制处理函数
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('river-911@qq.com')
            setShowCopySuccess(true)
            setTimeout(() => setShowCopySuccess(false), 700)
        } catch (err) {
            console.error('复制失败:', err)
        }
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* 导航栏 */}
            <Navbar
                onImageToggle={() => setShowBgSelector(!showBgSelector)}
                showImageToggle={theme === 'light'}
            />

            {/* 背景层 */}
            {theme === 'dark' ? (
                <div className="fixed inset-0 bg-black" />
            ) : (
                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                    style={{
                        backgroundImage: `url('${currentBg}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                />
            )}

            <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-black/30'} ${BLUR_LEVELS[backgroundBlur].blur}`} />

            {/* 背景选择器组件 */}
            {theme === 'light' && showBgSelector && (
                <BackgroundSelector
                    backgroundImages={backgroundImages}
                    currentBg={currentBg}
                    setCurrentBg={setCurrentBg}
                    backgroundBlur={backgroundBlur}
                    setBackgroundBlur={setBackgroundBlur}
                    onClose={() => setShowBgSelector(false)}
                />
            )}

            {/* 时间和日历组件 - 右上角浮动定位 */}
            <TimeCalendarWidget />

            {/* 主要内容区域 */}
            <div className="relative z-10 flex min-h-screen navbar-safe-area">
                {/* 左侧栏 */}
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-80 p-6 space-y-6 h-fit"
                >
                    {/* 个人信息卡片 */}
                    <ProfileCard
                        profileData={profile.profileData}
                    />

                    {/* 技能标签区域 */}
                    <SkillsSection skills={profile.profileData.skills} />

                    {/* 时间线区域 */}
                    <TimelineSection
                        timelineData={timeline.getSortedTimelineData()}
                    />


                </motion.div>

                {/* 主要内容区域 */}
                <div className="flex-1 p-6 space-y-8 min-h-screen flex flex-col">
                    {/* 欢迎区域 */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left w-80 mb-8"
                    >
                        <h1 className="text-6xl font-bold text-white mb-4">
                            Hello I&apos;m <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">River</span>
                        </h1>

                        {/* 动态文字效果 */}
                        <div className="mb-6">
                            <motion.span
                                className="text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.5 },
                                    y: { duration: 0.8, delay: 0.5 },
                                    backgroundPosition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                                style={{ backgroundSize: '200% 100%' }}
                            >
                                Interest is the best guiding factor for development.
                            </motion.span>
                        </div>

                        <motion.p
                            className="text-lg mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <motion.span
                                className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                style={{ backgroundSize: '200% 100%' }}
                            >
                                How there&apos;s so many things i wanna get to know.
                            </motion.span>
                        </motion.p>

                        {/* 社交链接 */}
                        <div className="flex space-x-4 mb-8">
                            {socialLinks.map((link) => {
                                if (link.type === 'button') {
                                    return (
                                        <button
                                            key={link.label}
                                            onClick={link.onClick}
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
                                            title={link.label}
                                        >
                                            <link.icon size={20} className="text-white" />
                                        </button>
                                    )
                                } else {
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={link.label}
                                        >
                                            <link.icon size={20} className="text-white" />
                                        </a>
                                    )
                                }
                            })}
                        </div>
                    </motion.div>

                    {/* GitHub贡献图 */}
                    <GitHubContributions
                        contributions={github.contributions}
                        isLoading={github.isLoadingContributions}
                        error={github.contributionsError}
                        username={github.githubUsername}
                        totalContributions={github.totalContributions}
                        currentYear={github.contributionsYear}
                        onRefresh={github.refreshContributions}
                        onYearChange={github.updateContributionsYear}
                    />

                    {/* 站点区域 */}
                    <SitesSection sites={SITE_CONFIGS} />

                    {/* 项目区域 */}
                    <ProjectsSection projects={PROJECT_CONFIGS} />

                    {/* 技能图标展示区域 */}
                    <SkillsDisplay />
                </div>
            </div>

            {/* 成功提示动画 */}
            <AnimatePresence>
                {showCopySuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60]"
                    >
                        <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl px-6 py-4 shadow-2xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center">
                                    <span className="text-green-300 text-lg">✓</span>
                                </div>
                                <div>
                                    <p className="text-green-300 font-medium">复制成功！</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 弹窗组件 */}
            {showEmailCard && (
                <EmailCard
                    onClose={() => setShowEmailCard(false)}
                    onCopy={handleCopyEmail}
                />
            )}

            {showPraiseCode && (
                <PraiseCode
                    onClose={() => setShowPraiseCode(false)}
                    basePath={basePath}
                />
            )}
        </div>
    )
} 
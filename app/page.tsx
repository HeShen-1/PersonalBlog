'use client'

import { motion } from 'framer-motion'
import { Github, Mail, MapPin, Calendar, ExternalLink, Heart, Image as ImageIcon, Gift } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import {
    SiBlender, SiDocker, SiGit, SiGithub, SiGo, SiHtml5, SiJavascript, SiLinux, SiMarkdown,
    SiPython, SiReact, SiRedis, SiTypescript, SiVuedotjs, SiNodedotjs, SiAdobephotoshop,
    SiTailwindcss, SiVite, SiNotion, SiAffinitydesigner
} from 'react-icons/si'

export default function Home() {
    const [currentTime, setCurrentTime] = useState('')
    const [currentBg, setCurrentBg] = useState(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/image/night.png`)
    const [showBgSelector, setShowBgSelector] = useState(false)
    const [showPraiseCode, setShowPraiseCode] = useState(false)
    const { theme } = useTheme()

    // 获取正确的资源路径前缀
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

    const backgroundImages = [
        { name: `${basePath}/image/bg/night.png`, label: '夜景' },
        { name: `${basePath}/image/bg/aurora.png`, label: '极光1' },
        { name: `${basePath}/image/bg/afterglow.png`, label: '余晖' },
        { name: `${basePath}/image/bg/sea_compressed.png`, label: '海景' },
        { name: `${basePath}/image/bg/lights.png`, label: '极光2' },
        { name: `${basePath}/image/bg/Aoyama Hara not old.png`, label: '青山' },
        { name: `${basePath}/image/bg/ZengJiaYan.png`, label: '重庆曾家岩' }
    ]

    useEffect(() => {
        // 更新时间
        const timer = setInterval(() => {
            const now = new Date()
            setCurrentTime(now.toLocaleTimeString('zh-CN', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            }))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    // GitHub贡献图模拟数据
    const generateContributions = () => {
        const contributions = []
        for (let week = 0; week < 52; week++) {
            for (let day = 0; day < 7; day++) {
                const level = Math.floor(Math.random() * 5)
                contributions.push({ week, day, level })
            }
        }
        return contributions
    }

    const contributions = generateContributions()

    const socialLinks = [
        { icon: Github, href: 'https://github.com/HeShen-1', label: 'GitHub', type: 'link' },
        { icon: Mail, href: 'mailto:river-911@qq.com', label: 'Email', type: 'link' },
        { icon: Gift, onClick: () => setShowPraiseCode(true), label: '赞赏码', type: 'button' }
    ]

    const sites = [
        {
            title: '博客',
            subtitle: '记录技术日常',
            icon: '📝',
            color: 'bg-blue-500/20',
            href: '/blog'
        },
        {
            title: '云盘',
            subtitle: '存储收藏文件',
            icon: '☁️',
            color: 'bg-yellow-500/20',
            href: '#'
        },
        {
            title: '实验室',
            subtitle: '收集有趣的作品',
            icon: '🔬',
            color: 'bg-pink-500/20',
            href: '#'
        },
        {
            title: '杂谈',
            subtitle: '记录生活',
            icon: '🍵',
            color: 'bg-green-500/20',
            href: '#'
        }
    ]

    const projects = [
        {
            title: '栅格地图编辑器',
            subtitle: '基于栅格地图的寻路算法可视化仿真平台',
            icon: '🗺️',
            color: 'bg-blue-500/20',
            href: 'https://github.com/HeShen-1/GridMapEditor'
        }
    ]

    const timeline = [
        { event: '敬请期待', date: '2026.7' },
        { event: '重庆理工大学', date: '2022.9-2026.6' }
    ]

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* 导航栏 */}
            <Navbar
                onImageToggle={() => setShowBgSelector(!showBgSelector)}
                showImageToggle={theme === 'light'}
            />

            {/* 背景图片 */}
            {theme === 'dark' ? (
                <div className="fixed inset-0 bg-black" />
            ) : (
                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                    style={{ backgroundImage: `url('${currentBg}')` }}
                />
            )}

            {/* 背景遮罩 */}
            <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-black/30'} backdrop-blur-sm`} />

            {/* 背景选择器（移到导航栏中管理） */}
            {theme === 'light' && showBgSelector && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed top-20 right-4 z-50 bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                >
                    <div className="grid grid-cols-2 gap-2 w-48">
                        {backgroundImages.map((bg) => (
                            <button
                                key={bg.name}
                                onClick={() => {
                                    setCurrentBg(bg.name)
                                    setShowBgSelector(false)
                                }}
                                className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentBg === bg.name
                                    ? 'border-white/50 ring-2 ring-white/30'
                                    : 'border-white/20 hover:border-white/40'
                                    }`}
                            >
                                <img
                                    src={bg.name}
                                    alt={bg.label}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <span className="text-white text-xs font-medium">{bg.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* 主要内容 */}
            <div className="relative z-10 flex min-h-screen navbar-safe-area">
                {/* 左侧边栏 */}
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-80 p-6 space-y-6 h-fit"
                >
                    {/* 个人信息卡片 */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center space-x-4 mb-4">
                            {/* 使用pic.png作为头像，显示完整的用户头像 */}
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                                <img
                                    src={`${basePath}/image/pic.png`}
                                    alt="River"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-white text-lg font-semibold">River</h2>
                                <p className="text-white/70 text-sm">Full Stack Developer</p>
                            </div>
                        </div>

                        <div className="text-white mb-2">
                            <div className="flex items-center space-x-2 text-sm text-white/70 mb-1">
                                <MapPin size={14} />
                                <span>China-Chongqing</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-white/70">
                                {/* <span>🏢</span> */}
                                <span>月下人独立。来去去，不见归鸿影。</span>
                            </div>
                        </div>
                    </div>

                    {/* 技能标签 */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <div className="flex flex-wrap gap-2">
                            {['DL', 'blue', '算法', '全栈', 'linux', '音乐'].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 时间线 */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <div className="space-y-4">
                            {timeline.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <div className="flex-1">
                                        <div className="text-white text-sm">{item.event}</div>
                                        <div className="text-white/60 text-xs">{item.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 主要内容区域 */}
                <div className="flex-1 p-6 space-y-8 min-h-screen flex flex-col">
                    {/* 头部介绍 - 移到左侧对齐 */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left w-80 mb-8"
                    >
                        <h1 className="text-6xl font-bold text-white mb-4">
                            Hello I&apos;m <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">River</span>
                        </h1>
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
                                style={{
                                    backgroundSize: '200% 100%'
                                }}
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
                                style={{
                                    backgroundSize: '200% 100%'
                                }}
                            >
                                How there&apos;s so many things i wanna get to know.
                            </motion.span>
                        </motion.p>

                        {/* 社交链接 - 左对齐 */}
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

                    {/* 剩余内容的容器 */}
                    <div className="flex-1 space-y-8">

                        {/* GitHub贡献图 */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                        >
                            <div className="grid grid-cols-52 gap-1 mb-4">
                                {contributions.map((contribution, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-sm ${contribution.level === 0 ? 'bg-gray-600/30' :
                                            contribution.level === 1 ? 'bg-green-400/40' :
                                                contribution.level === 2 ? 'bg-green-400/60' :
                                                    contribution.level === 3 ? 'bg-green-400/80' :
                                                        'bg-green-400'
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="h-2 bg-gradient-to-r from-green-400/30 to-green-400 rounded-full" />
                        </motion.div>

                        {/* 站点卡片 */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                📋 site
                            </h2>
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                {sites.map((site, index) => (
                                    <Link key={index} href={site.href}>
                                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 cursor-pointer group">
                                            <div className="text-4xl mb-3">{site.icon}</div>
                                            <h3 className="text-white font-semibold mb-1">{site.title}</h3>
                                            <p className="text-white/60 text-sm">{site.subtitle}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* 项目卡片 */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                💻 project
                            </h2>
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                {projects.map((project, index) => (
                                    <Link key={index} href={project.href}>
                                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 cursor-pointer">
                                            <div className="text-4xl mb-3">{project.icon}</div>
                                            <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                                            <p className="text-white/60 text-sm">{project.subtitle}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* 技能展示 */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                ⚡ skills
                            </h2>
                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                <div className="grid grid-cols-10 gap-4">
                                    {/* 第一行技能图标 */}
                                    <motion.div
                                        className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Blender"
                                    >
                                        <SiBlender className="text-orange-500 text-2xl group-hover:text-orange-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Docker"
                                    >
                                        <SiDocker className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Git"
                                    >
                                        <SiGit className="text-red-500 text-2xl group-hover:text-red-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="GitHub"
                                    >
                                        <SiGithub className="text-white text-2xl group-hover:text-gray-300 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Go"
                                    >
                                        <SiGo className="text-cyan-500 text-2xl group-hover:text-cyan-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="HTML5"
                                    >
                                        <SiHtml5 className="text-orange-600 text-2xl group-hover:text-orange-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-gray-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Terminal"
                                    >
                                        <span className="text-green-400 text-2xl font-mono group-hover:text-green-300 transition-colors">$</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Java"
                                    >
                                        <span className="text-blue-600 text-xl font-bold group-hover:text-blue-500 transition-colors">☕</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="JavaScript"
                                    >
                                        <SiJavascript className="text-yellow-500 text-2xl group-hover:text-yellow-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Linux"
                                    >
                                        <SiLinux className="text-yellow-600 text-2xl group-hover:text-yellow-500 transition-colors" />
                                    </motion.div>

                                    {/* 第二行技能图标 */}
                                    <motion.div
                                        className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Markdown"
                                    >
                                        <SiMarkdown className="text-gray-400 text-2xl group-hover:text-gray-300 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Python"
                                    >
                                        <SiPython className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Git UI"
                                    >
                                        <span className="text-red-500 text-lg font-bold group-hover:text-red-400 transition-colors">Git</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Qt"
                                    >
                                        <span className="text-green-600 text-lg font-bold group-hover:text-green-500 transition-colors">Qt</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="React"
                                    >
                                        <SiReact className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Redis"
                                    >
                                        <SiRedis className="text-red-600 text-2xl group-hover:text-red-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Database"
                                    >
                                        <span className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors">🗄️</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="SVG"
                                    >
                                        <span className="text-yellow-600 text-sm font-bold group-hover:text-yellow-500 transition-colors">SVG</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Tailwind CSS"
                                    >
                                        <SiTailwindcss className="text-teal-500 text-2xl group-hover:text-teal-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Social"
                                    >
                                        <span className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors">📱</span>
                                    </motion.div>

                                    {/* 第三行技能图标 */}
                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="TypeScript"
                                    >
                                        <SiTypescript className="text-blue-600 text-2xl group-hover:text-blue-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Affinity Designer"
                                    >
                                        <SiAffinitydesigner className="text-purple-600 text-2xl group-hover:text-purple-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Vite"
                                    >
                                        <SiVite className="text-purple-500 text-2xl group-hover:text-purple-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="VS Code"
                                    >
                                        <span className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors">💻</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Vue.js"
                                    >
                                        <SiVuedotjs className="text-green-500 text-2xl group-hover:text-green-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Node.js"
                                    >
                                        <SiNodedotjs className="text-green-600 text-2xl group-hover:text-green-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Photoshop"
                                    >
                                        <SiAdobephotoshop className="text-blue-600 text-2xl group-hover:text-blue-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-gray-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Notion"
                                    >
                                        <SiNotion className="text-gray-400 text-2xl group-hover:text-gray-300 transition-colors" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 时间显示 */}
            <div className="fixed bottom-6 right-6 text-white/70 text-xl font-mono">
                {currentTime}
            </div>

            {/* 背景选择器遮罩 */}
            {showBgSelector && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowBgSelector(false)}
                />
            )}

            {/* 赞赏码弹窗 */}
            {showPraiseCode && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setShowPraiseCode(false)}
                >
                    {/* 背景遮罩 */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* 赞赏码内容 */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-md mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 关闭按钮 */}
                        <button
                            onClick={() => setShowPraiseCode(false)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            <ImageIcon size={16} className="text-white transform rotate-45" />
                        </button>

                        {/* 标题 */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">💝 赞赏码</h3>
                            <p className="text-white/70 text-sm">感谢您的支持与鼓励</p>
                        </div>

                        {/* 赞赏码图片 */}
                        <div className="flex justify-center mb-6">
                            <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-2xl">
                                <img
                                    src={`${basePath}/image/ZanShangMa.jpg`}
                                    alt="赞赏码"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.currentTarget.src = `${basePath}/image/pic.png` // 如果图片加载失败，使用默认图片
                                    }}
                                />
                            </div>
                        </div>

                        {/* 提示文字 */}
                        <div className="text-center">
                            <p className="text-white/80 text-sm">
                                扫描二维码或长按保存图片
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
} 
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
    const [displayText, setDisplayText] = useState('')
    const fullText = '全栈开发者 | 技术博主 | 创新者'

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    const socialLinks = [
        { icon: Github, href: 'https://github.com/HeShen-1', label: 'GitHub' },
        { icon: Mail, href: 'mailto:river-911@qq.com', label: 'Email' },
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* 渐变背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900" />

            {/* 动态背景图案 */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-float" />
                <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500 rounded-full animate-float" style={{ animationDelay: '4s' }} />
                <div className="absolute bottom-10 right-10 w-18 h-18 bg-indigo-500 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* 头像 */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="text-4xl">👨‍💻</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 主标题 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            你好，我是
                        </span>
                        <br />
                        <span className="text-gray-900 dark:text-white">River</span>
                    </motion.h1>

                    {/* 打字机效果的副标题 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8"
                    >
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </motion.div>

                    {/* 描述文字 */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        热爱编程，专注于前端和后端技术。喜欢分享技术心得，探索新技术，
                        致力于创造有意义的数字产品。欢迎来到我的技术世界！
                    </motion.p>

                    {/* 社交链接 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="flex justify-center space-x-6 mb-12"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <link.icon size={24} className="text-gray-700 dark:text-gray-300" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA 按钮 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            查看我的作品
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            联系我
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* 滚动指示器 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.a
                        href="#about"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <span className="text-sm mb-2">向下滚动</span>
                        <ChevronDown size={24} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
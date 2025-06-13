'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Coffee, Heart, Lightbulb } from 'lucide-react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const highlights = [
        {
            icon: Code,
            title: '热爱编程',
            description: '从2018年开始编程，专注于现代Web技术栈',
        },
        {
            icon: Coffee,
            title: '咖啡爱好者',
            description: '每天至少两杯咖啡，最好的代码都诞生在咖啡香中',
        },
        {
            icon: Heart,
            title: '开源贡献',
            description: '积极参与开源项目，相信技术改变世界',
        },
        {
            icon: Lightbulb,
            title: '持续学习',
            description: '保持好奇心，每天都在学习新的技术和知识',
        },
    ]

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        关于我
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        让我介绍一下自己，以及我对技术的热情
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 左侧：个人介绍 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                我是一名充满激情的全栈开发者，拥有5年的软件开发经验。
                                我专注于使用现代技术栈创建优雅、高效的web应用程序。
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                我的技术栈主要包括React、Next.js、Node.js、TypeScript和Python。
                                我相信简洁的代码、用户体验和持续的学习。
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                在业余时间，我喜欢写技术博客，参与开源项目，
                                以及探索新的技术趋势。我的目标是通过技术创造有意义的产品。
                            </p>
                        </div>

                        {/* 个人统计 */}
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                            >
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                                <div className="text-gray-600 dark:text-gray-300">年经验</div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                            >
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                                <div className="text-gray-600 dark:text-gray-300">项目完成</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 右侧：特色亮点 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <highlight.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* 技术理念 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">我的技术理念</h3>
                        <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                            &quot;代码不仅仅是指令的集合，它是解决问题的艺术。
                            好的代码应该优雅、可维护，并且能够创造真正的价值。&quot;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 
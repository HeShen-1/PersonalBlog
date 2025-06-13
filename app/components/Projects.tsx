'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Calendar } from 'lucide-react'

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const projects = [
        {
            title: 'E-commerce平台',
            description: '一个功能完整的电商平台，包含商品管理、购物车、支付集成等功能。使用Next.js和Stripe构建。',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
            github: 'https://github.com/yourusername/ecommerce',
            demo: 'https://demo-ecommerce.vercel.app',
            date: '2023年12月',
        },
        {
            title: '任务管理应用',
            description: '一个现代化的任务管理应用，支持团队协作、实时同步、文件上传等功能。',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
            tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            github: 'https://github.com/yourusername/task-manager',
            demo: 'https://task-manager-demo.vercel.app',
            date: '2023年10月',
        },
        {
            title: '博客系统',
            description: '一个基于Markdown的博客系统，支持语法高亮、评论系统、SEO优化等功能。',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
            tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
            github: 'https://github.com/yourusername/blog-system',
            demo: 'https://blog-demo.vercel.app',
            date: '2023年8月',
        },
        {
            title: '数据可视化面板',
            description: '一个交互式的数据可视化面板，用于展示和分析业务数据，支持多种图表类型。',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            tags: ['React', 'D3.js', 'Python', 'FastAPI'],
            github: 'https://github.com/yourusername/data-dashboard',
            demo: 'https://data-dashboard-demo.vercel.app',
            date: '2023年6月',
        },
        {
            title: '实时聊天应用',
            description: '一个功能丰富的实时聊天应用，支持群组聊天、文件分享、表情包等功能。',
            image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
            tags: ['Vue.js', 'Socket.io', 'Express', 'Redis'],
            github: 'https://github.com/yourusername/chat-app',
            demo: 'https://chat-demo.vercel.app',
            date: '2023年4月',
        },
        {
            title: '天气预报应用',
            description: '一个精美的天气预报应用，提供详细的天气信息、7天预报和地理位置功能。',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
            tags: ['React Native', 'TypeScript', 'Weather API'],
            github: 'https://github.com/yourusername/weather-app',
            demo: 'https://weather-demo.vercel.app',
            date: '2023年2月',
        },
    ]

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        我的项目
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        这里展示了我最近完成的一些项目，涵盖了不同的技术栈和应用场景
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* 项目图片 */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* 项目链接 */}
                                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                                    >
                                        <Github size={20} className="text-gray-700" />
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                                    >
                                        <ExternalLink size={20} className="text-gray-700" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* 项目信息 */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                        <Calendar size={16} className="mr-1" />
                                        {project.date}
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* 技术标签 */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* 项目链接按钮 */}
                                <div className="flex space-x-3">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <Github size={16} className="mr-2" />
                                        代码
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <ExternalLink size={16} className="mr-2" />
                                        演示
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 更多项目链接 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <Github size={20} className="mr-2" />
                        查看更多项目
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
} 
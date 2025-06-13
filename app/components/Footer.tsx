'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: '首页', href: '#home' },
        { name: '关于', href: '#about' },
        { name: '技能', href: '#skills' },
        { name: '项目', href: '#projects' },
        { name: '博客', href: '/blog' },
        { name: '联系', href: '#contact' },
    ]

    const socialLinks = [
        { icon: Github, href: 'https://github.com/HeShen-1', label: 'GitHub' },
        { icon: Mail, href: 'river-911@qq.com', label: 'Email' },
    ]

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* 品牌信息 */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                我的博客
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                专注于分享前端技术、编程心得和生活感悟。
                                通过技术创造有意义的产品，让代码改变世界。
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300"
                                    >
                                        <link.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* 快速链接 */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <motion.a
                                            href={link.href}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block"
                                        >
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* 联系信息 */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
                            <div className="space-y-2 text-gray-300">
                                <p>📧 river-911@qq.com</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 分割线 */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 my-8"
                />

                {/* 底部信息 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                        <span>© {currentYear} 我的博客. Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mx-1"
                        >
                            <Heart size={16} className="text-red-500" fill="currentColor" />
                        </motion.div>
                        <span>by River</span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            隐私政策
                        </a>
                        <span>•</span>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            使用条款
                        </a>
                        <span>•</span>
                        <span>Powered by Next.js</span>
                    </div>
                </motion.div>
            </div>

            {/* 回到顶部按钮 */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    )
} 
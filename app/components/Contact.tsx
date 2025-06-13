'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // 模拟表单提交
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            setTimeout(() => {
                setSubmitStatus('idle')
            }, 3000)
        }, 2000)
    }

    const contactInfo = [
        {
            icon: Mail,
            label: '邮箱',
            value: 'river-911@qq.com',
            href: 'mailto:river-911@qq.com'
        }
    ]

    const socialLinks = [
        { icon: Github, href: 'https://github.com/River', label: 'GitHub' }
    ]

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        联系我
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        有想法要分享？想要合作？或者只是想说个&quot;嗨&quot;？我很乐意听到您的消息！
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* 左侧：联系信息 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                让我们开始对话吧
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                无论是技术讨论、项目合作还是简单的交流，我都很期待与您建立联系。
                                请随时通过以下方式联系我，我会尽快回复您的消息。
                            </p>
                        </div>

                        {/* 联系方式 */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                                        <div className="text-gray-900 dark:text-white font-medium">{info.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* 社交媒体链接 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                关注我的社交媒体
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <link.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* 右侧：联系表单 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        姓名 *
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                                        placeholder="请输入您的姓名"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        邮箱 *
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                                        placeholder="请输入您的邮箱"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    主题 *
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                                    placeholder="请输入邮件主题"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    消息 *
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                                    placeholder="请输入您的消息内容..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : submitStatus === 'success'
                                        ? 'bg-green-600 hover:bg-green-700'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                                    } text-white shadow-lg hover:shadow-xl`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>发送中...</span>
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <span>发送成功！</span>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>发送消息</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 
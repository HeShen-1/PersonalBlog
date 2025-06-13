'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

export default function BlogPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const blogPosts = [
        {
            title: 'Next.js 14的新特性详解',
            excerpt: '深入了解Next.js 14带来的Server Actions、Partial Prerendering等革命性特性，以及如何在项目中应用这些新功能。',
            date: '2023年12月15日',
            readTime: '8分钟',
            category: '前端开发',
            slug: 'nextjs-14-new-features',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
            tags: ['Next.js', 'React', 'JavaScript'],
        },
        {
            title: '构建高性能的React应用',
            excerpt: '分享一些优化React应用性能的实用技巧，包括代码分割、懒加载、虚拟化等技术的应用实践。',
            date: '2023年12月10日',
            readTime: '12分钟',
            category: '性能优化',
            slug: 'react-performance-optimization',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            tags: ['React', '性能优化', '前端'],
        },
        {
            title: 'TypeScript进阶技巧',
            excerpt: '探索TypeScript的高级特性，包括条件类型、映射类型、装饰器等，让你的代码更加类型安全。',
            date: '2023年12月05日',
            readTime: '10分钟',
            category: '编程语言',
            slug: 'typescript-advanced-tips',
            image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
            tags: ['TypeScript', '编程', '类型安全'],
        },
    ]

    return (
        <section id="blog-preview" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        最新博客
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        分享我在开发过程中的思考、学习心得和技术探索
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* 文章图片 */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                        <Tag size={14} className="mr-1" />
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* 文章内容 */}
                            <div className="p-6">
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar size={16} className="mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-1" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* 标签 */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* 阅读更多链接 */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group/link"
                                >
                                    阅读全文
                                    <ArrowRight
                                        size={16}
                                        className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200"
                                    />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* 查看所有博客按钮 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            查看所有博客
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* 博客统计 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { label: '文章数量', value: '25+' },
                        { label: '总阅读量', value: '10K+' },
                        { label: '技术分类', value: '8' },
                        { label: '更新频率', value: '周更' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
                        >
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
} 
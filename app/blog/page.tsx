'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('全部')

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
            featured: true,
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
            featured: false,
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
            featured: false,
        },
        {
            title: '微前端架构实战指南',
            excerpt: '从0到1搭建微前端架构，包括模块联邦、single-spa等方案的对比与选择，以及实际项目中的应用经验。',
            date: '2023年11月28日',
            readTime: '15分钟',
            category: '架构设计',
            slug: 'micro-frontend-guide',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
            tags: ['微前端', '架构', '工程化'],
            featured: true,
        },
        {
            title: 'CSS Grid与Flexbox完全指南',
            excerpt: '详细对比CSS Grid和Flexbox的使用场景，通过实例演示如何选择合适的布局方案。',
            date: '2023年11月20日',
            readTime: '9分钟',
            category: '前端开发',
            slug: 'css-grid-flexbox-guide',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
            tags: ['CSS', '布局', '响应式'],
            featured: false,
        },
        {
            title: 'Node.js性能优化实战',
            excerpt: '分享Node.js后端服务性能优化的实用技巧，包括内存管理、数据库优化、缓存策略等。',
            date: '2023年11月15日',
            readTime: '11分钟',
            category: '后端开发',
            slug: 'nodejs-performance-optimization',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
            tags: ['Node.js', '性能优化', '后端'],
            featured: false,
        },
    ]

    const categories = ['全部', ...Array.from(new Set(blogPosts.map(post => post.category)))]

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        const matchesCategory = selectedCategory === '全部' || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const featuredPosts = filteredPosts.filter(post => post.featured)
    const regularPosts = filteredPosts.filter(post => !post.featured)

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
            {/* 页面头部 */}
            <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                技术博客
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            分享编程技巧、技术心得和项目经验，记录我的技术成长之路
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 搜索和筛选 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* 搜索框 */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="搜索文章..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>

                        {/* 分类筛选 */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 精选文章 */}
                {featuredPosts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">精选文章</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post, index) => (
                                <motion.article
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                                                精选
                                            </span>
                                        </div>
                                    </div>

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

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group/link"
                                        >
                                            阅读全文
                                            <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* 所有文章 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        {featuredPosts.length > 0 ? '最新文章' : '所有文章'}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                            <Tag size={14} className="mr-1" />
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

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

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group/link"
                                    >
                                        阅读全文
                                        <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>

                {/* 无搜索结果 */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            没有找到相关文章
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            请尝试使用其他关键词或选择不同的分类
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    )
} 
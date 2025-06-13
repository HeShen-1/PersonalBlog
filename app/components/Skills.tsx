'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const skillCategories = [
        {
            title: '前端技术',
            skills: [
                { name: 'React/Next.js', level: 95, color: 'from-blue-400 to-blue-600' },
                { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
                { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-cyan-600' },
                { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-600' },
            ],
        },
        {
            title: '后端技术',
            skills: [
                { name: 'Node.js', level: 88, color: 'from-green-500 to-green-700' },
                { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600' },
                { name: 'Express/Fastify', level: 82, color: 'from-gray-400 to-gray-600' },
                { name: 'PostgreSQL', level: 78, color: 'from-blue-400 to-blue-600' },
            ],
        },
        {
            title: '工具与平台',
            skills: [
                { name: 'Git/GitHub', level: 92, color: 'from-orange-400 to-orange-600' },
                { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
                { name: 'AWS/Vercel', level: 80, color: 'from-purple-400 to-purple-600' },
                { name: 'Linux', level: 70, color: 'from-yellow-400 to-yellow-600' },
            ],
        },
    ]

    const softSkills = [
        '问题解决',
        '团队协作',
        '项目管理',
        '技术写作',
        '用户体验设计',
        '敏捷开发',
    ]

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        技能专长
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        这些是我在软件开发过程中积累的技术技能和工具经验
                    </p>
                </motion.div>

                {/* 技术技能 */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: categoryIndex * 0.2 + skillIndex * 0.1
                                        }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                                                    ease: "easeOut"
                                                }}
                                                className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 软技能 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        软技能
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1 + index * 0.1,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 学习心态 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            持续学习，永不止步
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            技术在不断发展，我也在不断学习。每天都是学习新知识、
                            提升技能的机会。这份热情驱动着我成为更好的开发者。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 
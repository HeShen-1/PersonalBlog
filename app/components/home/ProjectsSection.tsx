import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectConfig } from '../../types/profile'

interface ProjectsSectionProps {
    projects: ProjectConfig[]
}

/**
 * 项目展示组件
 * 显示个人项目卡片列表
 */
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
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
    )
} 
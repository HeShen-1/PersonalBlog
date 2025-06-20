import { motion } from 'framer-motion'
import Link from 'next/link'
import { SiteConfig } from '../../types/profile'

interface SitesSectionProps {
    sites: SiteConfig[]
}

/**
 * 站点展示组件
 * 显示个人站点卡片列表
 */
export default function SitesSection({ sites }: SitesSectionProps) {
    return (
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
    )
} 
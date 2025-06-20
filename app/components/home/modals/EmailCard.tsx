import { motion } from 'framer-motion'
import { Mail, X } from 'lucide-react'

interface EmailCardProps {
    onClose: () => void
    onCopy: () => void
}

/**
 * 邮箱卡片弹窗组件
 * 显示邮箱信息和复制功能
 */
export default function EmailCard({ onClose, onCopy }: EmailCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                    <X size={16} className="text-white" />
                </button>

                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail size={32} className="text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">📧 联系我</h3>
                    <p className="text-white/70 text-sm">随时欢迎您的来信</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-white/80 text-sm">邮箱地址</span>
                        <button
                            onClick={onCopy}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors"
                        >
                            复制
                        </button>
                    </div>
                    <div className="text-white text-lg font-mono">
                        river-911@qq.com
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
} 
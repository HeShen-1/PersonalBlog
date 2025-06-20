import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface PraiseCodeProps {
    onClose: () => void
    basePath: string
}

/**
 * 赞赏码弹窗组件
 * 显示赞赏二维码
 */
export default function PraiseCode({ onClose, basePath }: PraiseCodeProps) {
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
                    <h3 className="text-2xl font-bold text-white mb-2">💝 赞赏码</h3>
                    <p className="text-white/70 text-sm">感谢您的支持与鼓励</p>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-2xl">
                        <img
                            src={`${basePath}/image/ZanShangMa.jpg`}
                            alt="赞赏码"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.currentTarget.src = `${basePath}/image/pic.png`
                            }}
                        />
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-white/80 text-sm">
                        扫描二维码或长按保存图片
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
} 
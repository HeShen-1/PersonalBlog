import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { BackgroundImage, BlurLevel } from '../../types/profile'
import { BLUR_LEVELS } from '../../data/constants'

interface BackgroundSelectorProps {
    backgroundImages: BackgroundImage[]
    currentBg: string
    setCurrentBg: (bg: string) => void
    backgroundBlur: number
    setBackgroundBlur: (blur: number) => void
    onClose: () => void
}

/**
 * 背景选择器组件
 * 允许用户选择背景图片和模糊级别
 */
export default function BackgroundSelector({
    backgroundImages,
    currentBg,
    setCurrentBg,
    backgroundBlur,
    setBackgroundBlur,
    onClose
}: BackgroundSelectorProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed top-20 right-4 z-50 bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10"
        >
            <div className="mb-4">
                <h4 className="text-white text-sm font-medium mb-2">背景图片</h4>
                <div className="grid grid-cols-2 gap-2 w-48">
                    {backgroundImages.map((bg) => (
                        <button
                            key={bg.name}
                            onClick={() => setCurrentBg(bg.name)}
                            className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentBg === bg.name
                                ? 'border-white/50 ring-2 ring-white/30'
                                : 'border-white/20 hover:border-white/40'
                                }`}
                        >
                            <img
                                src={bg.name}
                                alt={bg.label}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <span className="text-white text-xs font-medium">{bg.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/10 pt-4">
                <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                    <Zap size={14} className="mr-2" />
                    模糊程度
                </h4>
                <div className="grid grid-cols-2 gap-2">
                    {BLUR_LEVELS.map((level) => (
                        <button
                            key={level.level}
                            onClick={() => setBackgroundBlur(level.level)}
                            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${backgroundBlur === level.level
                                ? 'bg-blue-500/30 text-blue-300 border border-blue-400/30'
                                : 'bg-white/10 text-white/70 hover:bg-white/20'
                                }`}
                        >
                            {level.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-4">
                <button
                    onClick={onClose}
                    className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 text-sm font-medium transition-colors"
                >
                    完成
                </button>
            </div>
        </motion.div>
    )
} 
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, Minus } from 'lucide-react'

interface TimeDisplayProps {
    isExpanded: boolean
    onToggle: () => void
}

/**
 * 时间显示组件
 * 显示当前时间和日期，带有动画效果和展开/收起功能
 */
export default function TimeDisplay({ isExpanded, onToggle }: TimeDisplayProps) {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('zh-CN', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                width: isExpanded ? 'auto' : 'fit-content',
                height: isExpanded ? 'auto' : 'fit-content'
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                width: { duration: 0.3 },
                height: { duration: 0.3 }
            }}
            className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 relative overflow-hidden"
            style={{
                padding: isExpanded ? '16px' : '8px 12px',
                minWidth: isExpanded ? '180px' : 'auto'
            }}
        >
            {/* 展开/收起按钮 */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggle}
                className="absolute top-2 right-2 p-1 bg-white/10 backdrop-blur-md rounded-md hover:bg-white/20 transition-all duration-300 z-10"
                title={isExpanded ? "收起" : "展开"}
            >
                <Minus
                    size={12}
                    className="text-white/70"
                    style={{
                        transform: isExpanded ? 'rotate(0deg)' : 'rotate(90deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </motion.button>

            {/* 时间显示 */}
            <div className="flex items-center space-x-2">
                <Clock size={14} className="text-white/70" />
                <span className="text-white font-mono text-sm font-medium whitespace-nowrap">
                    {formatTime(currentTime)}
                </span>
            </div>

            {/* 日期显示 - 只在展开时显示 */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? 'auto' : 0,
                    marginTop: isExpanded ? 8 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="overflow-hidden"
            >
                <div className="flex items-center space-x-2">
                    <Calendar size={14} className="text-white/70" />
                    <span className="text-white/80 text-xs">
                        {formatDate(currentTime)}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    )
}
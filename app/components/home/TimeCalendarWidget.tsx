'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TimeDisplay from './TimeDisplay'
import MiniCalendar from './MiniCalendar'

/**
 * 时间日历小部件容器组件
 * 包含收起/展开功能和切换按钮
 */
export default function TimeCalendarWidget() {
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="fixed top-24 right-6 z-40 space-y-4">
            {/* 时间组件 - 始终显示，内置控制按钮 */}
            <TimeDisplay
                isExpanded={isExpanded}
                onToggle={toggleExpanded}
            />

            {/* 日历组件 - 可收起 */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <MiniCalendar />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
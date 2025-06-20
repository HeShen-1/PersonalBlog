import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Save, X, Plus } from 'lucide-react'
import { useTimeline } from '../../../hooks/useTimeline'

interface TimelineSettingsProps {
    timeline: ReturnType<typeof useTimeline>
    onClose: () => void
}

/**
 * 时间线设置弹窗组件
 * 用于编辑时间线事件
 */
export default function TimelineSettings({ timeline, onClose }: TimelineSettingsProps) {
    const handleSave = () => {
        timeline.handleSaveTimeline()
        onClose()
    }

    const handleCancel = () => {
        timeline.handleCancelTimelineEdit()
        onClose()
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleCancel}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleCancel}
                    className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                    <X size={16} className="text-white" />
                </button>

                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">📅 时间线设置</h3>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <label className="block text-white text-sm font-medium">时间线事件</label>
                        <button
                            onClick={timeline.handleAddTimelineItem}
                            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs hover:bg-green-500/30 transition-colors flex items-center space-x-1"
                        >
                            <Plus size={12} />
                            <span>添加事件</span>
                        </button>
                    </div>

                    <div className="space-y-3">
                        <AnimatePresence>
                            {timeline.editingTimeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white/10 rounded-xl p-4 border border-white/20"
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                        <div className="flex-1 space-y-3">
                                            <input
                                                type="text"
                                                value={item.event}
                                                onChange={(e) => timeline.handleUpdateTimelineItem(index, 'event', e.target.value)}
                                                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-green-400/50 transition-colors"
                                                placeholder="事件描述"
                                            />
                                            <input
                                                type="text"
                                                value={item.date}
                                                onChange={(e) => timeline.handleUpdateTimelineItem(index, 'date', e.target.value)}
                                                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-green-400/50 transition-colors"
                                                placeholder="时间（如：2024.6 或 2022.9-2026.6）"
                                            />
                                        </div>
                                        <button
                                            onClick={() => timeline.handleRemoveTimelineItem(index)}
                                            className="p-2 text-white/50 hover:text-red-400 transition-colors flex-shrink-0"
                                            title="删除事件"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {timeline.editingTimeline.length === 0 && (
                        <div className="text-center py-8">
                            <Calendar size={48} className="text-white/30 mx-auto mb-3" />
                            <p className="text-white/50 text-sm">还没有时间线事件</p>
                            <p className="text-white/30 text-xs mt-1">点击上方&ldquo;添加事件&rdquo;按钮开始创建</p>
                        </div>
                    )}
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={handleSave}
                        className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl py-3 px-4 text-center transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                        <Save size={16} />
                        <span>保存时间线</span>
                    </button>
                    <button
                        onClick={handleCancel}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 text-center transition-colors font-medium"
                    >
                        取消
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
} 
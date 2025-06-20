import { Settings } from 'lucide-react'
import { TimelineItem } from '../../types/profile'

interface TimelineSectionProps {
    timelineData: TimelineItem[]
    onEditClick: () => void
}

/**
 * 时间线展示组件
 * 显示时间线事件列表，包含编辑按钮
 */
export default function TimelineSection({ timelineData, onEditClick }: TimelineSectionProps) {
    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative">
            <button
                onClick={onEditClick}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                title="编辑时间线"
            >
                <Settings size={16} className="text-white/70 group-hover:text-white transition-colors" />
            </button>

            <div className="space-y-4">
                {timelineData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <div className="flex-1">
                            <div className="text-white text-sm">{item.event}</div>
                            <div className="text-white/60 text-xs">{item.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 
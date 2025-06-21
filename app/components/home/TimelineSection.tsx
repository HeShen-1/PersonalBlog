import { TimelineItem } from '../../types/profile'

interface TimelineSectionProps {
    timelineData: TimelineItem[]
}

/**
 * 时间线展示组件
 * 显示时间线事件列表
 */
export default function TimelineSection({ timelineData }: TimelineSectionProps) {
    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative">

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
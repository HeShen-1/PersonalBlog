'use client'

import { motion } from 'framer-motion'
import { MapPin, Settings } from 'lucide-react'
import { ProfileData } from '../../types/profile'

interface ProfileCardProps {
    profileData: ProfileData
    onEditClick: () => void
}

/**
 * 个人信息卡片组件
 * 显示头像、姓名、标题、位置、简介和技能标签
 */
export default function ProfileCard({ profileData, onEditClick }: ProfileCardProps) {
    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative">
            {/* 编辑按钮 */}
            <button
                onClick={onEditClick}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                title="编辑个人信息"
            >
                <Settings size={16} className="text-white/70 group-hover:text-white transition-colors" />
            </button>

            {/* 头像和基本信息 */}
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                    <img
                        src={profileData.avatar}
                        alt={profileData.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-white text-lg font-semibold">{profileData.name}</h2>
                    <p className="text-white/70 text-sm">{profileData.title}</p>
                </div>
            </div>

            {/* 详细信息 */}
            <div className="text-white mb-2">
                <div className="flex items-center space-x-2 text-sm text-white/70 mb-1">
                    <MapPin size={14} />
                    <span>{profileData.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/70 w-64">
                    <span>{profileData.bio}</span>
                </div>
            </div>
        </div>
    )
} 
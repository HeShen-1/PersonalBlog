import { motion } from 'framer-motion'
import { Edit3, Save, X } from 'lucide-react'
import { useProfile } from '../../../hooks/useProfile'

interface ProfileSettingsProps {
    profile: ReturnType<typeof useProfile>
    onClose: () => void
}

/**
 * 个人信息设置弹窗组件
 * 用于编辑个人信息
 */
export default function ProfileSettings({ profile, onClose }: ProfileSettingsProps) {
    const handleSave = () => {
        profile.saveProfile()
        onClose()
    }

    const handleCancel = () => {
        profile.cancelEdit()
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
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Edit3 size={32} className="text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">⚙️ 个人信息设置</h3>
                </div>

                <div className="space-y-6">
                    {/* 头像上传区域 */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-3">头像</label>
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                                <img
                                    src={profile.editingProfile.avatar}
                                    alt="头像预览"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div
                                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all duration-300 ${profile.isDragging
                                        ? 'border-blue-400/70 bg-blue-500/10'
                                        : 'border-white/30 hover:border-blue-400/50 hover:bg-blue-500/5'
                                        }`}
                                    onDragOver={profile.handleDragOver}
                                    onDragLeave={profile.handleDragLeave}
                                    onDrop={profile.handleDrop}
                                    onClick={() => profile.fileInputRef.current?.click()}
                                >
                                    <p className="text-white/70 text-sm">点击上传或拖拽图片</p>
                                </div>
                                <input
                                    ref={profile.fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={profile.handleAvatarUpload}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 基本信息编辑 */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">姓名</label>
                        <input
                            type="text"
                            value={profile.editingProfile.name}
                            onChange={(e) => profile.setEditingProfile(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors"
                            placeholder="请输入您的姓名"
                        />
                    </div>

                    <div>
                        <label className="block text-white text-sm font-medium mb-2">个人标题</label>
                        <input
                            type="text"
                            value={profile.editingProfile.title}
                            onChange={(e) => profile.setEditingProfile(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors"
                            placeholder="请输入您的个人标题"
                        />
                    </div>

                    <div>
                        <label className="block text-white text-sm font-medium mb-2">所在地</label>
                        <input
                            type="text"
                            value={profile.editingProfile.location}
                            onChange={(e) => profile.setEditingProfile(prev => ({ ...prev, location: e.target.value }))}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors"
                            placeholder="请输入您的位置"
                        />
                    </div>

                    <div>
                        <label className="block text-white text-sm font-medium mb-2">个人简介</label>
                        <textarea
                            value={profile.editingProfile.bio}
                            onChange={(e) => profile.setEditingProfile(prev => ({ ...prev, bio: e.target.value }))}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                            placeholder="请输入您的个人简介"
                            rows={3}
                        />
                    </div>

                    {/* 技能标签编辑 */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">技能标签</label>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {profile.editingProfile.skills.map((skill, index) => (
                                <div key={index} className="flex items-center bg-white/10 rounded-full pl-3 pr-2 py-1">
                                    <input
                                        type="text"
                                        value={skill}
                                        onChange={(e) => profile.updateSkill(index, e.target.value)}
                                        className="bg-transparent text-white text-sm outline-none min-w-0 flex-1"
                                        style={{ width: `${Math.max(skill.length, 4)}ch` }}
                                    />
                                    <button
                                        onClick={() => profile.removeSkill(index)}
                                        className="ml-2 text-white/50 hover:text-red-400 transition-colors"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                            {profile.editingProfile.skills.length < 8 && (
                                <button
                                    onClick={() => profile.addSkill('新技能')}
                                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm hover:bg-blue-500/30 transition-colors"
                                >
                                    + 添加技能
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex space-x-3 mt-8">
                    <button
                        onClick={handleSave}
                        className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-xl py-3 px-4 text-center transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                        <Save size={16} />
                        <span>保存更改</span>
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
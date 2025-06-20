import { useState, useEffect, useRef } from 'react'
import { ProfileData } from '../types/profile'
import { saveProfileToStorage, loadProfileFromStorage } from '../utils/storage'
import { getDefaultProfile } from '../data/constants'

/**
 * 个人信息管理Hook
 * 提供个人信息的状态管理和本地存储功能
 */
export const useProfile = (basePath: string) => {
    // 个人信息状态
    const [profileData, setProfileData] = useState<ProfileData>(getDefaultProfile(basePath))
    const [editingProfile, setEditingProfile] = useState<ProfileData>(getDefaultProfile(basePath))

    // 文件上传相关状态
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    /**
     * 初始化时从localStorage加载数据
     */
    useEffect(() => {
        const savedProfile = loadProfileFromStorage()
        if (savedProfile) {
            setProfileData(savedProfile)
            setEditingProfile(savedProfile)
        }
    }, [])

    /**
     * 保存个人信息
     */
    const saveProfile = () => {
        setProfileData(editingProfile)
        saveProfileToStorage(editingProfile)
    }

    /**
     * 取消编辑，恢复到保存的状态
     */
    const cancelEdit = () => {
        setEditingProfile(profileData)
    }

    /**
     * 更新编辑中的个人信息
     * @param updates 要更新的字段
     */
    const updateEditingProfile = (updates: Partial<ProfileData>) => {
        setEditingProfile(prev => ({ ...prev, ...updates }))
    }

    /**
     * 添加技能标签
     * @param skill 技能名称
     */
    const addSkill = (skill: string) => {
        if (editingProfile.skills.length < 8 && !editingProfile.skills.includes(skill)) {
            setEditingProfile(prev => ({
                ...prev,
                skills: [...prev.skills, skill]
            }))
        }
    }

    /**
     * 删除技能标签
     * @param index 技能索引
     */
    const removeSkill = (index: number) => {
        setEditingProfile(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }))
    }

    /**
     * 更新技能标签
     * @param index 技能索引
     * @param value 新的技能名称
     */
    const updateSkill = (index: number, value: string) => {
        setEditingProfile(prev => ({
            ...prev,
            skills: prev.skills.map((skill, i) => i === index ? value : skill)
        }))
    }

    /**
     * 处理头像上传事件
     * @param event 文件输入事件
     */
    const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            handleFileUpload(file)
        }
    }

    /**
     * 处理文件上传
     * @param file 上传的文件
     */
    const handleFileUpload = (file: File) => {
        // 检查文件大小限制（5MB）
        if (file.size > 5 * 1024 * 1024) {
            alert('图片大小不能超过5MB')
            return
        }

        // 将文件转换为base64格式
        const reader = new FileReader()
        reader.onload = (e) => {
            const result = e.target?.result as string
            setEditingProfile(prev => ({ ...prev, avatar: result }))
        }
        reader.readAsDataURL(file)
    }

    /**
     * 处理拖拽悬停事件
     */
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    /**
     * 处理拖拽离开事件
     */
    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    /**
     * 处理文件拖拽释放事件
     */
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        const files = e.dataTransfer.files
        if (files[0]) {
            handleFileUpload(files[0])
        }
    }

    return {
        // 状态
        profileData,
        editingProfile,
        isDragging,
        fileInputRef,

        // 状态更新函数
        setEditingProfile,

        // 操作函数
        saveProfile,
        cancelEdit,
        updateEditingProfile,
        addSkill,
        removeSkill,
        updateSkill,
        handleAvatarUpload,
        handleFileUpload,
        handleDragOver,
        handleDragLeave,
        handleDrop,

        // 便捷操作方法
        handleAddSkill: addSkill,
        handleRemoveSkill: removeSkill,
        handleUpdateSkill: updateSkill,
        handleSaveProfile: saveProfile,
        handleCancelEdit: cancelEdit
    }
} 
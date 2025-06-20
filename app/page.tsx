'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Mail, MapPin, Calendar, ExternalLink, Heart, Image as ImageIcon, Gift, X, Zap, Settings, Save, Edit3, Upload, ChevronDown, Plus, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import {
    SiBlender, SiDocker, SiGit, SiGithub, SiGo, SiHtml5, SiJavascript, SiLinux, SiMarkdown,
    SiPython, SiReact, SiRedis, SiTypescript, SiVuedotjs, SiNodedotjs, SiAdobephotoshop,
    SiTailwindcss, SiVite, SiNotion, SiAffinitydesigner
} from 'react-icons/si'

export default function Home() {
    const [currentTime, setCurrentTime] = useState('')
    const [currentBg, setCurrentBg] = useState(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/image/bg/night.png`)
    const [showBgSelector, setShowBgSelector] = useState(false)
    const [showPraiseCode, setShowPraiseCode] = useState(false)
    const [showEmailCard, setShowEmailCard] = useState(false)
    const [showCopySuccess, setShowCopySuccess] = useState(false)
    const [backgroundBlur, setBackgroundBlur] = useState(0)
    const [showProfileSettings, setShowProfileSettings] = useState(false)
    const [profileData, setProfileData] = useState({
        name: 'River',
        title: 'Carpe Diem.',
        location: 'China-Chongqing',
        bio: '月下人独立。来去去，不见归鸿影。',
        skills: ['DL', 'blue', '算法', '全栈', 'linux', '音乐'],
        avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/image/pic.png`
    })
    const [editingProfile, setEditingProfile] = useState({
        name: 'River',
        title: 'Carpe Diem.',
        location: 'China-Chongqing',
        bio: '月下人独立。来去去，不见归鸿影。',
        skills: ['DL', 'blue', '算法', '全栈', 'linux', '音乐'],
        avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/image/pic.png`
    })
    const [showLocationDropdown, setShowLocationDropdown] = useState(false)
    const [locationSearch, setLocationSearch] = useState('')
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const locationDropdownRef = useRef<HTMLDivElement>(null)
    const [selectedLocationIndex, setSelectedLocationIndex] = useState(-1)
    const [showTimelineSettings, setShowTimelineSettings] = useState(false)
    const [timelineData, setTimelineData] = useState([
        { event: '敬请期待', date: '2026.7' },
        { event: '重庆理工大学', date: '2022.9-2026.6' }
    ])
    const [editingTimeline, setEditingTimeline] = useState([
        { event: '敬请期待', date: '2026.7' },
        { event: '重庆理工大学', date: '2022.9-2026.6' }
    ])
    const [showDatePicker, setShowDatePicker] = useState<number | null>(null)
    const [selectedDate, setSelectedDate] = useState('')
    const [calendarDate, setCalendarDate] = useState(new Date())
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const { theme } = useTheme()

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

    const locationData = [
        {
            country: 'China',
            provinces: [
                '北京市', '天津市', '上海市', '重庆市',
                '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省',
                '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省',
                '河南省', '湖北省', '湖南省', '广东省', '海南省',
                '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省',
                '台湾省',
                '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区',
                '香港特别行政区', '澳门特别行政区'
            ]
        },
        { country: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte'] },
        { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo', 'Kobe', 'Fukuoka', 'Kawasaki', 'Hiroshima'] },
        { country: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Sheffield', 'Edinburgh', 'Bristol', 'Glasgow', 'Leicester'] },
        { country: 'Germany', cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'] },
        { country: 'France', cities: ['Paris', 'Marseille', 'Lyon', 'Nice', 'Toulouse', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'] },
        { country: 'Canada', cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener'] },
        { country: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong'] }
    ]

    const skillSuggestions = [
        'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin',
        'React', 'Vue', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte', 'HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap',
        'Node.js', 'Express', 'Spring Boot', 'Django', 'Flask', 'Laravel', 'ASP.NET', 'GraphQL', 'REST API',
        'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'SQL Server',
        'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab', 'Jenkins', 'CI/CD',
        'React Native', 'Flutter', 'iOS', 'Android', 'Xamarin',
        'UI/UX', 'Figma', 'Photoshop', 'Illustrator', 'Sketch', 'Blender', '3D建模', 'After Effects',
        'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Data Science', 'AI', 'NLP', 'Computer Vision',
        'Linux', 'Windows', 'macOS', 'DevOps', 'Microservices', 'Blockchain', 'Web3', 'Gaming', '音乐', '摄影', '写作'
    ]

    const backgroundImages = [
        { name: `${basePath}/image/bg/dusk.jpg`, label: '黄昏' },
        { name: `${basePath}/image/bg/night.png`, label: '夜景' },
        { name: `${basePath}/image/bg/aurora.png`, label: '极光1' },
        { name: `${basePath}/image/bg/afterglow.png`, label: '余晖' },
        { name: `${basePath}/image/bg/sea_compressed.png`, label: '海景' },
        { name: `${basePath}/image/bg/lights.png`, label: '极光2' },
        { name: `${basePath}/image/bg/Aoyama Hara not old.png`, label: '雪原' },
        { name: `${basePath}/image/bg/ZengJiaYan.png`, label: '重庆曾家岩' }
    ]

    const blurLevels = [
        { level: 0, label: '无模糊', blur: 'backdrop-blur-none' },
        { level: 1, label: '轻微', blur: 'backdrop-blur-sm' },
        { level: 2, label: '适中', blur: 'backdrop-blur-md' },
        { level: 3, label: '强烈', blur: 'backdrop-blur-lg' }
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedProfile = localStorage.getItem('personalProfile')
            if (savedProfile) {
                const parsedProfile = JSON.parse(savedProfile)
                setProfileData(parsedProfile)
                setEditingProfile(parsedProfile)
            }

            // 加载时间线数据
            const savedTimeline = localStorage.getItem('timelineData')
            if (savedTimeline) {
                const parsedTimeline = JSON.parse(savedTimeline)
                setTimelineData(parsedTimeline)
                setEditingTimeline(parsedTimeline)
            }
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
                setShowLocationDropdown(false)
            }
        }

        if (showLocationDropdown) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showLocationDropdown])

    // 添加点击外部关闭日期选择器的效果
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // 检查点击是否在日期选择器外部
            const target = event.target as HTMLElement
            if (!target.closest('.date-picker-container')) {
                setShowDatePicker(null)
            }
        }

        if (showDatePicker !== null) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showDatePicker])

    const saveToLocalStorage = (data: typeof profileData) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('personalProfile', JSON.stringify(data))
        }
    }

    const saveTimelineToLocalStorage = (data: typeof timelineData) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('timelineData', JSON.stringify(data))
        }
    }

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('river-911@qq.com')
            setShowCopySuccess(true)
            setTimeout(() => {
                setShowCopySuccess(false)
            }, 700)
        } catch (err) {
            console.error('复制失败:', err)
        }
    }

    const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('图片大小不能超过5MB')
                return
            }

            const reader = new FileReader()
            reader.onload = (e) => {
                const result = e.target?.result as string
                setEditingProfile(prev => ({ ...prev, avatar: result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        const files = e.dataTransfer.files
        if (files[0]) {
            if (files[0].size > 5 * 1024 * 1024) {
                alert('图片大小不能超过5MB')
                return
            }

            const reader = new FileReader()
            reader.onload = (e) => {
                const result = e.target?.result as string
                setEditingProfile(prev => ({ ...prev, avatar: result }))
            }
            reader.readAsDataURL(files[0])
        }
    }

    const handleSaveProfile = () => {
        setProfileData(editingProfile)
        saveToLocalStorage(editingProfile)
        setShowProfileSettings(false)
    }

    const handleCancelEdit = () => {
        setEditingProfile(profileData)
        setShowProfileSettings(false)
        setShowLocationDropdown(false)
    }

    const handleAddSkill = (skill?: string) => {
        const newSkill = skill || '新技能'
        if (editingProfile.skills.length < 8 && !editingProfile.skills.includes(newSkill)) {
            setEditingProfile(prev => ({
                ...prev,
                skills: [...prev.skills, newSkill]
            }))
        }
    }

    const handleRemoveSkill = (index: number) => {
        setEditingProfile(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }))
    }

    const handleUpdateSkill = (index: number, value: string) => {
        setEditingProfile(prev => ({
            ...prev,
            skills: prev.skills.map((skill, i) => i === index ? value : skill)
        }))
    }

    const handleLocationSelect = (location: string) => {
        setEditingProfile(prev => ({ ...prev, location }))
        setShowLocationDropdown(false)
        setLocationSearch('')
        setSelectedLocationIndex(-1)
    }

    const handleLocationInputChange = (value: string) => {
        setLocationSearch(value)
        setSelectedLocationIndex(-1)
        if (value === '') {
            setEditingProfile(prev => ({ ...prev, location: '' }))
        }
        setShowLocationDropdown(true)
    }

    const filteredLocations = (() => {
        if (!locationSearch && !editingProfile.location) {
            return locationData.flatMap(country => {
                if (country.country === 'China') {
                    return (country as any).provinces.map((province: string) => `China-${province}`)
                } else {
                    return (country as any).cities.map((city: string) => `${country.country}-${city}`)
                }
            }).slice(0, 15)
        }

        const searchTerm = locationSearch.toLowerCase()
        return locationData.flatMap(country => {
            if (country.country === 'China') {
                return (country as any).provinces
                    .filter((province: string) =>
                        province.toLowerCase().includes(searchTerm) ||
                        country.country.toLowerCase().includes(searchTerm) ||
                        'china'.includes(searchTerm) ||
                        '中国'.includes(searchTerm)
                    )
                    .map((province: string) => `China-${province}`)
            } else {
                return (country as any).cities
                    .filter((city: string) =>
                        city.toLowerCase().includes(searchTerm) ||
                        country.country.toLowerCase().includes(searchTerm)
                    )
                    .map((city: string) => `${country.country}-${city}`)
            }
        }).slice(0, 15)
    })()

    const handleDropdownToggle = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowLocationDropdown(!showLocationDropdown)
    }

    const handleLocationFocus = () => {
        setShowLocationDropdown(true)
    }

    const handleLocationBlur = () => {
        setTimeout(() => {
            setShowLocationDropdown(false)
        }, 150)
    }

    const getFilteredSkillSuggestions = () => {
        return skillSuggestions.filter(skill =>
            !editingProfile.skills.includes(skill)
        ).slice(0, 12)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            setCurrentTime(now.toLocaleTimeString('zh-CN', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            }))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const generateContributions = () => {
        const contributions = []
        for (let week = 0; week < 52; week++) {
            for (let day = 0; day < 7; day++) {
                const level = Math.floor(Math.random() * 5)
                contributions.push({ week, day, level })
            }
        }
        return contributions
    }

    const contributions = generateContributions()

    const socialLinks = [
        { icon: Github, href: 'https://github.com/HeShen-1', label: 'GitHub', type: 'link' },
        { icon: Mail, onClick: () => setShowEmailCard(true), label: 'Email', type: 'button' },
        { icon: Gift, onClick: () => setShowPraiseCode(true), label: '赞赏码', type: 'button' }
    ]

    const sites = [
        {
            title: '博客',
            subtitle: '记录技术日常',
            icon: '📝',
            color: 'bg-blue-500/20',
            href: '/blog'
        },
        {
            title: '云盘',
            subtitle: '存储收藏文件',
            icon: '☁️',
            color: 'bg-yellow-500/20',
            href: '#'
        },
        {
            title: '实验室',
            subtitle: '收集有趣的作品',
            icon: '🔬',
            color: 'bg-pink-500/20',
            href: '#'
        },
        {
            title: '杂谈',
            subtitle: '记录生活',
            icon: '🍵',
            color: 'bg-green-500/20',
            href: '#'
        }
    ]

    const projects = [
        {
            title: '栅格地图编辑器',
            subtitle: '基于栅格地图的寻路算法可视化仿真平台',
            icon: '🗺️',
            color: 'bg-blue-500/20',
            href: 'https://github.com/HeShen-1/GridMapEditor'
        }
    ]

    const handleLocationKeyDown = (e: React.KeyboardEvent) => {
        if (!showLocationDropdown) return

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setSelectedLocationIndex(prev =>
                    prev < filteredLocations.length - 1 ? prev + 1 : 0
                )
                break
            case 'ArrowUp':
                e.preventDefault()
                setSelectedLocationIndex(prev =>
                    prev > 0 ? prev - 1 : filteredLocations.length - 1
                )
                break
            case 'Enter':
                e.preventDefault()
                if (selectedLocationIndex >= 0 && selectedLocationIndex < filteredLocations.length) {
                    handleLocationSelect(filteredLocations[selectedLocationIndex])
                }
                break
            case 'Escape':
                e.preventDefault()
                setShowLocationDropdown(false)
                setSelectedLocationIndex(-1)
                break
        }
    }

    const handleSaveTimeline = () => {
        const sortedData = sortTimelineData(editingTimeline)
        setTimelineData(sortedData)
        saveTimelineToLocalStorage(sortedData)
        setShowTimelineSettings(false)
    }

    const handleCancelTimelineEdit = () => {
        setEditingTimeline(timelineData)
        setShowTimelineSettings(false)
        setShowDatePicker(null)
    }

    const handleAddTimelineItem = () => {
        setEditingTimeline(prev => [...prev, { event: '新事件', date: '2024' }])
    }

    const handleRemoveTimelineItem = (index: number) => {
        setEditingTimeline(prev => prev.filter((_, i) => i !== index))
    }

    const handleUpdateTimelineItem = (index: number, field: 'event' | 'date', value: string) => {
        setEditingTimeline(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        )
    }

    // 日期选择器相关函数
    const handleDateSelect = (date: string, index: number) => {
        // 格式化日期为 YYYY.M 格式
        const formattedDate = formatDateForTimeline(date)
        handleUpdateTimelineItem(index, 'date', formattedDate)
        setShowDatePicker(null)
    }

    const formatDateForTimeline = (dateString: string) => {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        return `${year}.${month}`
    }

    // 生成年月选择器选项
    const generateDateOptions = () => {
        const currentYear = new Date().getFullYear()
        const years = []

        // 生成过去10年到未来10年的选项
        for (let year = currentYear - 10; year <= currentYear + 10; year++) {
            for (let month = 1; month <= 12; month++) {
                years.push({
                    value: `${year}-${month.toString().padStart(2, '0')}-01`,
                    label: `${year}年${month}月`
                })
            }
        }

        return years.reverse() // 最新的年份在前
    }

    // 日历组件相关函数
    const handleCalendarDateSelect = (day: number, index: number) => {
        const selectedDate = new Date(selectedYear, selectedMonth, day)
        // 格式化为包含具体日期的格式：YYYY.M.D
        const formattedDate = `${selectedYear}.${selectedMonth + 1}.${day}`
        handleUpdateTimelineItem(index, 'date', formattedDate)
        setShowDatePicker(null)
    }

    const handlePrevMonth = () => {
        if (selectedMonth === 0) {
            setSelectedMonth(11)
            setSelectedYear(selectedYear - 1)
        } else {
            setSelectedMonth(selectedMonth - 1)
        }
    }

    const handleNextMonth = () => {
        if (selectedMonth === 11) {
            setSelectedMonth(0)
            setSelectedYear(selectedYear + 1)
        } else {
            setSelectedMonth(selectedMonth + 1)
        }
    }

    // 获取月份的所有日期
    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    // 获取月份第一天是星期几 (0-6, 0是星期日)
    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay()
    }

    // 生成日历网格
    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(selectedYear, selectedMonth)
        const firstDay = getFirstDayOfMonth(selectedYear, selectedMonth)
        const days = []

        // 添加上个月的日期
        const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1
        const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear
        const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth)

        for (let i = firstDay - 1; i >= 0; i--) {
            days.push({
                day: daysInPrevMonth - i,
                isCurrentMonth: false,
                isPrevMonth: true
            })
        }

        // 添加当前月的日期
        for (let day = 1; day <= daysInMonth; day++) {
            days.push({
                day,
                isCurrentMonth: true,
                isPrevMonth: false
            })
        }

        // 添加下个月的日期，填满6行
        const remainingCells = 42 - days.length
        for (let day = 1; day <= remainingCells; day++) {
            days.push({
                day,
                isCurrentMonth: false,
                isPrevMonth: false
            })
        }

        return days
    }

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    // 时间排序函数 - 解析各种时间格式并排序
    const parseTimelineDate = (dateStr: string) => {
        // 处理各种日期格式
        if (dateStr.includes('-')) {
            // 处理时间段，如 "2022.9-2026.6" 或 "2022-2026"
            const parts = dateStr.split('-')
            const startDate = parts[0].trim()
            return parseYear(startDate)
        } else {
            // 处理单个时间点，如 "2026.7" 或 "2024"
            return parseYear(dateStr)
        }
    }

    const parseYear = (dateStr: string) => {
        // 提取年份
        const match = dateStr.match(/(\d{4})/)
        return match ? parseInt(match[1]) : 0
    }

    // 对时间线数据进行排序的函数
    const sortTimelineData = (data: typeof timelineData) => {
        return [...data].sort((a, b) => {
            const yearA = parseTimelineDate(a.date)
            const yearB = parseTimelineDate(b.date)
            return yearB - yearA // 降序排列，最新的在上面
        })
    }

    // 获取排序后的时间线数据
    const sortedTimelineData = sortTimelineData(timelineData)

    return (
        <div className="min-h-screen relative overflow-hidden">
            <Navbar
                onImageToggle={() => setShowBgSelector(!showBgSelector)}
                showImageToggle={theme === 'light'}
            />

            {theme === 'dark' ? (
                <div className="fixed inset-0 bg-black" />
            ) : (
                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                    style={{
                        backgroundImage: `url('${currentBg}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                />
            )}

            <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-black/30'} ${blurLevels[backgroundBlur].blur}`} />

            {theme === 'light' && showBgSelector && (
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
                                    onClick={() => {
                                        setCurrentBg(bg.name)
                                    }}
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
                            {blurLevels.map((level) => (
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
                            onClick={() => setShowBgSelector(false)}
                            className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 text-sm font-medium transition-colors"
                        >
                            完成
                        </button>
                    </div>
                </motion.div>
            )}

            <div className="relative z-10 flex min-h-screen navbar-safe-area">
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-80 p-6 space-y-6 h-fit"
                >
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative">
                        <button
                            onClick={() => {
                                setEditingProfile(profileData)
                                setShowProfileSettings(true)
                            }}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                            title="编辑个人信息"
                        >
                            <Settings size={16} className="text-white/70 group-hover:text-white transition-colors" />
                        </button>

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

                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <div className="flex flex-wrap gap-2">
                            {profileData.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative">
                        <button
                            onClick={() => {
                                setEditingTimeline(timelineData)
                                setShowTimelineSettings(true)
                            }}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                            title="编辑时间线"
                        >
                            <Settings size={16} className="text-white/70 group-hover:text-white transition-colors" />
                        </button>

                        <div className="space-y-4">
                            {sortedTimelineData.map((item, index) => (
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
                </motion.div>

                <div className="flex-1 p-6 space-y-8 min-h-screen flex flex-col">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left w-80 mb-8"
                    >
                        <h1 className="text-6xl font-bold text-white mb-4">
                            Hello I&apos;m <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">River</span>
                        </h1>
                        <div className="mb-6">
                            <motion.span
                                className="text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.5 },
                                    y: { duration: 0.8, delay: 0.5 },
                                    backgroundPosition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                                style={{
                                    backgroundSize: '200% 100%'
                                }}
                            >
                                Interest is the best guiding factor for development.
                            </motion.span>
                        </div>
                        <motion.p
                            className="text-lg mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <motion.span
                                className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                style={{
                                    backgroundSize: '200% 100%'
                                }}
                            >
                                How there&apos;s so many things i wanna get to know.
                            </motion.span>
                        </motion.p>

                        <div className="flex space-x-4 mb-8">
                            {socialLinks.map((link) => {
                                if (link.type === 'button') {
                                    return (
                                        <button
                                            key={link.label}
                                            onClick={link.onClick}
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
                                            title={link.label}
                                        >
                                            <link.icon size={20} className="text-white" />
                                        </button>
                                    )
                                } else {
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={link.label}
                                        >
                                            <link.icon size={20} className="text-white" />
                                        </a>
                                    )
                                }
                            })}
                        </div>
                    </motion.div>

                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                        >
                            <div className="grid grid-cols-52 gap-1 mb-4">
                                {contributions.map((contribution, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-sm ${contribution.level === 0 ? 'bg-gray-600/30' :
                                            contribution.level === 1 ? 'bg-green-400/40' :
                                                contribution.level === 2 ? 'bg-green-400/60' :
                                                    contribution.level === 3 ? 'bg-green-400/80' :
                                                        'bg-green-400'
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="h-2 bg-gradient-to-r from-green-400/30 to-green-400 rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                📋 site
                            </h2>
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                {sites.map((site, index) => (
                                    <Link key={index} href={site.href}>
                                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 cursor-pointer group">
                                            <div className="text-4xl mb-3">{site.icon}</div>
                                            <h3 className="text-white font-semibold mb-1">{site.title}</h3>
                                            <p className="text-white/60 text-sm">{site.subtitle}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                💻 project
                            </h2>
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                {projects.map((project, index) => (
                                    <Link key={index} href={project.href}>
                                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 cursor-pointer">
                                            <div className="text-4xl mb-3">{project.icon}</div>
                                            <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                                            <p className="text-white/60 text-sm">{project.subtitle}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                ⚡ skills
                            </h2>
                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                <div className="grid grid-cols-10 gap-4">
                                    <motion.div
                                        className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Blender"
                                    >
                                        <SiBlender className="text-orange-500 text-2xl group-hover:text-orange-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Docker"
                                    >
                                        <SiDocker className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Git"
                                    >
                                        <SiGit className="text-red-500 text-2xl group-hover:text-red-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="GitHub"
                                    >
                                        <SiGithub className="text-white text-2xl group-hover:text-gray-300 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Go"
                                    >
                                        <SiGo className="text-cyan-500 text-2xl group-hover:text-cyan-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="HTML5"
                                    >
                                        <SiHtml5 className="text-orange-600 text-2xl group-hover:text-orange-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-gray-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Terminal"
                                    >
                                        <span className="text-green-400 text-2xl font-mono group-hover:text-green-300 transition-colors">$</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Java"
                                    >
                                        <span className="text-blue-600 text-xl font-bold group-hover:text-blue-500 transition-colors">☕</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="JavaScript"
                                    >
                                        <SiJavascript className="text-yellow-500 text-2xl group-hover:text-yellow-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Linux"
                                    >
                                        <SiLinux className="text-yellow-600 text-2xl group-hover:text-yellow-500 transition-colors" />
                                    </motion.div>

                                    <motion.div
                                        className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Markdown"
                                    >
                                        <SiMarkdown className="text-gray-400 text-2xl group-hover:text-gray-300 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Python"
                                    >
                                        <SiPython className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Git UI"
                                    >
                                        <span className="text-red-500 text-lg font-bold group-hover:text-red-400 transition-colors">Git</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Qt"
                                    >
                                        <span className="text-green-600 text-lg font-bold group-hover:text-green-500 transition-colors">Qt</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="React"
                                    >
                                        <SiReact className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Redis"
                                    >
                                        <SiRedis className="text-red-600 text-2xl group-hover:text-red-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Database"
                                    >
                                        <span className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors">🗄️</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="SVG"
                                    >
                                        <span className="text-yellow-600 text-sm font-bold group-hover:text-yellow-500 transition-colors">SVG</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Tailwind CSS"
                                    >
                                        <SiTailwindcss className="text-teal-500 text-2xl group-hover:text-teal-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Social"
                                    >
                                        <span className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors">📱</span>
                                    </motion.div>

                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="TypeScript"
                                    >
                                        <SiTypescript className="text-blue-600 text-2xl group-hover:text-blue-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Affinity Designer"
                                    >
                                        <SiAffinitydesigner className="text-purple-600 text-2xl group-hover:text-purple-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Vite"
                                    >
                                        <SiVite className="text-purple-500 text-2xl group-hover:text-purple-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="VS Code"
                                    >
                                        <span className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors">💻</span>
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Vue.js"
                                    >
                                        <SiVuedotjs className="text-green-500 text-2xl group-hover:text-green-400 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Node.js"
                                    >
                                        <SiNodedotjs className="text-green-600 text-2xl group-hover:text-green-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Photoshop"
                                    >
                                        <SiAdobephotoshop className="text-blue-600 text-2xl group-hover:text-blue-500 transition-colors" />
                                    </motion.div>
                                    <motion.div
                                        className="w-12 h-12 bg-gray-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                        title="Notion"
                                    >
                                        <SiNotion className="text-gray-400 text-2xl group-hover:text-gray-300 transition-colors" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-6 right-6 text-white/70 text-xl font-mono">
                {currentTime}
            </div>

            {showBgSelector && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowBgSelector(false)}
                />
            )}

            <AnimatePresence>
                {showCopySuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60]"
                    >
                        <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl px-6 py-4 shadow-2xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center">
                                    <span className="text-green-300 text-lg">✓</span>
                                </div>
                                <div>
                                    <p className="text-green-300 font-medium">复制成功！</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {showEmailCard && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setShowEmailCard(false)}
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
                            onClick={() => setShowEmailCard(false)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            <X size={16} className="text-white" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail size={32} className="text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">📧 联系我</h3>
                            <p className="text-white/70 text-sm">随时欢迎您的来信</p>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-6 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-white/80 text-sm">邮箱地址</span>
                                <button
                                    onClick={handleCopyEmail}
                                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors"
                                >
                                    复制
                                </button>
                            </div>
                            <div className="text-white text-lg font-mono">
                                river-911@qq.com
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}

            {showPraiseCode && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setShowPraiseCode(false)}
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
                            onClick={() => setShowPraiseCode(false)}
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
            )}

            {showProfileSettings && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={handleCancelEdit}
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
                            onClick={handleCancelEdit}
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
                            <div>
                                <label className="block text-white text-sm font-medium mb-3">头像</label>
                                <div className="flex items-center space-x-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                                        <img
                                            src={editingProfile.avatar}
                                            alt="头像预览"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div
                                            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all duration-300 ${isDragging
                                                ? 'border-blue-400/70 bg-blue-500/10'
                                                : 'border-white/30 hover:border-blue-400/50 hover:bg-blue-500/5'
                                                }`}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={handleDrop}
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Upload size={24} className="text-white/70 mx-auto mb-2" />
                                            <p className="text-white/70 text-sm">
                                                点击上传或拖拽图片到此处
                                            </p>
                                            <p className="text-white/50 text-xs mt-1">
                                                支持 JPG、PNG 格式
                                            </p>
                                        </div>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleAvatarUpload}
                                            className="hidden"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">姓名</label>
                                <input
                                    type="text"
                                    value={editingProfile.name}
                                    onChange={(e) => setEditingProfile(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors"
                                    placeholder="请输入您的姓名"
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">个人标题</label>
                                <input
                                    type="text"
                                    value={editingProfile.title}
                                    onChange={(e) => setEditingProfile(prev => ({ ...prev, title: e.target.value }))}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors"
                                    placeholder="请输入您的个人标题"
                                />
                            </div>

                            <div className="relative" ref={locationDropdownRef}>
                                <label className="block text-white text-sm font-medium mb-2">所在地</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={locationSearch || editingProfile.location}
                                        onChange={(e) => {
                                            handleLocationInputChange(e.target.value)
                                        }}
                                        onFocus={handleLocationFocus}
                                        onKeyDown={handleLocationKeyDown}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors"
                                        placeholder="搜索或选择您的位置"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleDropdownToggle}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors p-1"
                                    >
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${showLocationDropdown ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {showLocationDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full left-0 right-0 mt-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl max-h-48 overflow-y-auto z-50"
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            {filteredLocations.map((location, index) => (
                                                <motion.button
                                                    key={location}
                                                    type="button"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onClick={() => handleLocationSelect(location)}
                                                    onMouseEnter={() => setSelectedLocationIndex(index)}
                                                    className={`w-full px-4 py-3 text-left text-white transition-colors text-sm first:rounded-t-xl last:rounded-b-xl ${index === selectedLocationIndex
                                                        ? 'bg-blue-500/20 text-blue-300'
                                                        : 'hover:bg-white/10'
                                                        }`}
                                                >
                                                    {location}
                                                </motion.button>
                                            ))}
                                            {filteredLocations.length === 0 && (
                                                <div className="px-4 py-3 text-white/50 text-sm text-center">
                                                    未找到匹配的地区
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">个人简介</label>
                                <textarea
                                    value={editingProfile.bio}
                                    onChange={(e) => setEditingProfile(prev => ({ ...prev, bio: e.target.value }))}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                                    placeholder="请输入您的个人简介"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="block text-white text-sm font-medium">技能标签</label>
                                    <button
                                        onClick={() => handleAddSkill()}
                                        disabled={editingProfile.skills.length >= 8}
                                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                                    >
                                        <Plus size={12} />
                                        <span>添加</span>
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <AnimatePresence>
                                        {editingProfile.skills.map((skill, index) => (
                                            <motion.div
                                                key={`${skill}-${index}`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex items-center bg-white/10 rounded-full pl-3 pr-2 py-1 group"
                                            >
                                                <input
                                                    type="text"
                                                    value={skill}
                                                    onChange={(e) => handleUpdateSkill(index, e.target.value)}
                                                    className="bg-transparent text-white text-sm outline-none min-w-0 flex-1"
                                                    style={{ width: `${Math.max(skill.length, 4)}ch` }}
                                                />
                                                <button
                                                    onClick={() => handleRemoveSkill(index)}
                                                    className="ml-2 text-white/50 hover:text-red-400 transition-colors"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {editingProfile.skills.length < 8 && (
                                    <div>
                                        <p className="text-white/70 text-xs mb-2">推荐技能标签：</p>
                                        <div className="flex flex-wrap gap-2">
                                            <AnimatePresence>
                                                {getFilteredSkillSuggestions().map((skill, index) => (
                                                    <motion.button
                                                        key={skill}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        onClick={() => handleAddSkill(skill)}
                                                        className="px-3 py-1 bg-white/5 hover:bg-blue-500/20 text-white/70 hover:text-blue-300 rounded-full text-xs transition-all duration-200 border border-white/10 hover:border-blue-400/30"
                                                    >
                                                        {skill}
                                                    </motion.button>
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                )}

                                <p className="text-white/50 text-xs mt-3">最多可添加8个技能标签</p>
                            </div>
                        </div>

                        <div className="flex space-x-3 mt-8">
                            <button
                                onClick={handleSaveProfile}
                                className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-xl py-3 px-4 text-center transition-colors font-medium flex items-center justify-center space-x-2"
                            >
                                <Save size={16} />
                                <span>保存更改</span>
                            </button>
                            <button
                                onClick={handleCancelEdit}
                                className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 text-center transition-colors font-medium"
                            >
                                取消
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {showTimelineSettings && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={handleCancelTimelineEdit}
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
                            onClick={handleCancelTimelineEdit}
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
                                    onClick={handleAddTimelineItem}
                                    className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs hover:bg-green-500/30 transition-colors flex items-center space-x-1"
                                >
                                    <Plus size={12} />
                                    <span>添加事件</span>
                                </button>
                            </div>

                            <div className="space-y-3">
                                <AnimatePresence>
                                    {editingTimeline.map((item, index) => (
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
                                                        onChange={(e) => handleUpdateTimelineItem(index, 'event', e.target.value)}
                                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-green-400/50 transition-colors"
                                                        placeholder="事件描述"
                                                    />
                                                    <div className="relative date-picker-container">
                                                        <input
                                                            type="text"
                                                            value={item.date}
                                                            onChange={(e) => handleUpdateTimelineItem(index, 'date', e.target.value)}
                                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 pr-10 text-white placeholder-white/50 focus:outline-none focus:border-green-400/50 transition-colors"
                                                            placeholder="时间（如：2024.6 或 2022.9-2026.6）"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (showDatePicker === index) {
                                                                    setShowDatePicker(null)
                                                                } else {
                                                                    // 打开日历时，初始化为当前年月
                                                                    const now = new Date()
                                                                    setSelectedYear(now.getFullYear())
                                                                    setSelectedMonth(now.getMonth())
                                                                    setShowDatePicker(index)
                                                                }
                                                            }}
                                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-white/50 hover:text-green-400 transition-colors"
                                                            title="选择日期"
                                                        >
                                                            <CalendarDays size={16} />
                                                        </button>

                                                        <AnimatePresence>
                                                            {showDatePicker === index && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl z-50 p-4 w-80"
                                                                >
                                                                    {/* 日历头部 */}
                                                                    <div className="flex items-center justify-between mb-4">
                                                                        <button
                                                                            type="button"
                                                                            onClick={handlePrevMonth}
                                                                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                                                        >
                                                                            <ChevronLeft size={16} className="text-white" />
                                                                        </button>
                                                                        <h3 className="text-white font-medium">
                                                                            {monthNames[selectedMonth]} {selectedYear}
                                                                        </h3>
                                                                        <button
                                                                            type="button"
                                                                            onClick={handleNextMonth}
                                                                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                                                        >
                                                                            <ChevronRight size={16} className="text-white" />
                                                                        </button>
                                                                    </div>

                                                                    {/* 星期标题 */}
                                                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                                                        {weekDays.map((day) => (
                                                                            <div key={day} className="text-center text-white/60 text-sm py-2 font-medium">
                                                                                {day}
                                                                            </div>
                                                                        ))}
                                                                    </div>

                                                                    {/* 日历网格 */}
                                                                    <div className="grid grid-cols-7 gap-1">
                                                                        {generateCalendarDays().map((dayInfo, dayIndex) => {
                                                                            const isToday = dayInfo.isCurrentMonth &&
                                                                                dayInfo.day === new Date().getDate() &&
                                                                                selectedMonth === new Date().getMonth() &&
                                                                                selectedYear === new Date().getFullYear()

                                                                            return (
                                                                                <button
                                                                                    key={dayIndex}
                                                                                    type="button"
                                                                                    onClick={() => dayInfo.isCurrentMonth && handleCalendarDateSelect(dayInfo.day, index)}
                                                                                    disabled={!dayInfo.isCurrentMonth}
                                                                                    className={`
                                                                                    h-8 w-8 text-sm rounded-lg transition-colors
                                                                                    ${dayInfo.isCurrentMonth
                                                                                            ? 'text-white hover:bg-green-500/20 cursor-pointer'
                                                                                            : 'text-white/30 cursor-not-allowed'
                                                                                        }
                                                                                    ${isToday ? 'bg-green-500/30 text-green-300 font-bold' : ''}
                                                                                `}
                                                                                >
                                                                                    {dayInfo.day}
                                                                                </button>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveTimelineItem(index)}
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

                            {editingTimeline.length === 0 && (
                                <div className="text-center py-8">
                                    <Calendar size={48} className="text-white/30 mx-auto mb-3" />
                                    <p className="text-white/50 text-sm">还没有时间线事件</p>
                                    <p className="text-white/30 text-xs mt-1">点击上方&ldquo;添加事件&rdquo;按钮开始创建</p>
                                </div>
                            )}
                        </div>

                        <div className="flex space-x-3">
                            <button
                                onClick={handleSaveTimeline}
                                className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl py-3 px-4 text-center transition-colors font-medium flex items-center justify-center space-x-2"
                            >
                                <Save size={16} />
                                <span>保存时间线</span>
                            </button>
                            <button
                                onClick={handleCancelTimelineEdit}
                                className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 text-center transition-colors font-medium"
                            >
                                取消
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
} 
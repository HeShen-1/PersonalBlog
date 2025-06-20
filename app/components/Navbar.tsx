'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, BookOpen, Mail, Sun, Moon, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

interface NavbarProps {
    onImageToggle?: () => void
    showImageToggle?: boolean
}

export default function Navbar({ onImageToggle, showImageToggle = false }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: '首页', href: '/', icon: Home },
        { name: '博客', href: '/blog', icon: BookOpen },
        { name: '关于', href: '#about', icon: User },
        { name: '项目', href: '#projects', icon: Briefcase },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-black/40 backdrop-blur-md border-b border-white/20 shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="w-full px-6 sm:px-8 lg:px-12">
                    <div className="flex items-center h-18">
                        {/* Logo区域 - 左端对齐 */}
                        <div className="w-80 flex items-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/" className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">R</span>
                                    </div>
                                    <span className="font-bold text-white text-2xl tracking-tight">River</span>
                                </Link>
                            </motion.div>
                        </div>

                        {/* 中间导航区域 */}
                        <div className="flex-1 flex justify-center">
                            <div className="hidden md:flex items-center space-x-1">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                                        >
                                            <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">{item.name}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 右侧按钮区域 */}
                        <div className="flex items-center justify-end space-x-4 w-80">
                            {/* 主题按钮 */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                            >
                                {theme === 'dark' ? (
                                    <Sun size={20} className="text-white" />
                                ) : (
                                    <Moon size={20} className="text-white" />
                                )}
                            </motion.button>

                            {/* 图片切换按钮 */}
                            {showImageToggle && (
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onImageToggle}
                                    className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                                >
                                    <ImageIcon size={20} className="text-white" />
                                </motion.button>
                            )}

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                                >
                                    {isOpen ? (
                                        <X size={22} className="text-white" />
                                    ) : (
                                        <Menu size={22} className="text-white" />
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    className="md:hidden overflow-hidden bg-black/40 backdrop-blur-md border-t border-white/20"
                >
                    <div className="px-6 py-4 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                                >
                                    <item.icon size={20} />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: navItems.length * 0.1 }}
                        >
                            <button
                                onClick={toggleTheme}
                                className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 w-full"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                <span className="font-medium">切换主题</span>
                            </button>
                        </motion.div>
                        {showImageToggle && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (navItems.length + 1) * 0.1 }}
                            >
                                <button
                                    onClick={() => {
                                        onImageToggle?.()
                                        setIsOpen(false)
                                    }}
                                    className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 w-full"
                                >
                                    <ImageIcon size={20} />
                                    <span className="font-medium">切换背景</span>
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile menu overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
} 
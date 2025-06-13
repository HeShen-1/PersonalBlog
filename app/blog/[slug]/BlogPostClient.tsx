'use client'

import { motion } from 'framer-motion'
import { Share2, Heart } from 'lucide-react'
import { useState } from 'react'

interface BlogPostClientProps {
    post: {
        title: string;
        likes: number;
    }
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
    const [liked, setLiked] = useState(false)

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.title,
                    url: window.location.href,
                })
            } catch (error) {
                console.log('Error sharing:', error)
            }
        } else {
            // 降级方案：复制链接到剪贴板
            navigator.clipboard.writeText(window.location.href)
            alert('链接已复制到剪贴板！')
        }
    }

    return (
        <div className="flex items-center space-x-4">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLiked(!liked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${liked
                    ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
            >
                <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
                <span>{post.likes + (liked ? 1 : 0)}</span>
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-all"
            >
                <Share2 size={20} />
                <span>分享</span>
            </motion.button>
        </div>
    )
} 
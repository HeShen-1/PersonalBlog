'use client'

import Navbar from '../components/Navbar'

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* 导航栏 */}
            <Navbar />

            <div className="navbar-safe-area">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            博客
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            内容正在建设中...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 
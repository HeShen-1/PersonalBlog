import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

export const metadata: Metadata = {
    title: '我的个人博客 | 技术分享与生活感悟',
    description: '欢迎来到我的个人博客，这里分享技术文章、项目经验和生活感悟',
    keywords: '个人博客,技术分享,前端开发,编程,生活',
    authors: [{ name: 'River' }],
    openGraph: {
        title: '我的个人博客',
        description: '技术分享与生活感悟',
        type: 'website',
        locale: 'zh_CN',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
            <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <ThemeProvider>
                    <ParticleBackground />
                    <div className="relative z-10">
                        <Navbar />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
} 
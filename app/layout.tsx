import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
    title: 'River | 世事漫随流水，算来一梦浮生。',
    description: '欢迎来到River的个人主页，这里分享技术文章、项目经验和生活感悟',
    keywords: '个人博客,技术分享,编程,生活,全栈开发者',
    authors: [{ name: 'River' }],
    icons: {
        icon: [
            { url: '/image/ico/R.png', sizes: '32x32', type: 'image/png' },
            { url: '/image/ico/R.png', sizes: '16x16', type: 'image/png' }
        ],
        shortcut: '/image/ico/R.png',
        apple: '/image/ico/R.png'
    },
    openGraph: {
        title: 'River | 世事漫随流水，算来一梦浮生。',
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
            <body className="min-h-screen">
                <ThemeProvider>
                    <div className="relative">
                        <main>
                            {children}
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
} 
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
    title: 'River | 全栈开发者个人主页',
    description: '欢迎来到River的个人主页，这里分享技术文章、项目经验和生活感悟',
    keywords: '个人博客,技术分享,前端开发,编程,生活,全栈开发者',
    authors: [{ name: 'River' }],
    openGraph: {
        title: 'River | 全栈开发者个人主页',
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
import { Calendar, Clock, ArrowLeft, Eye } from 'lucide-react'
import Link from 'next/link'
import BlogPostClient from './BlogPostClient'

// 这里通常会从数据库或API获取文章内容
// 定义博客文章类型
type BlogPost = {
    title: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    image: string;
    author: string;
    views: number;
    likes: number;
}

// 生成静态参数用于静态导出
export async function generateStaticParams() {
    // 这里应该返回所有可能的 slug 值
    // 在实际项目中，你会从数据库或API获取这些值
    return [
        { slug: 'nextjs-14-new-features' },
        // 添加其他博客文章的slug
    ]
}

const getPostBySlug = (slug: string): BlogPost | null => {
    const posts: Record<string, BlogPost> = {
        'nextjs-14-new-features': {
            title: 'Next.js 14的新特性详解',
            content: `
# Next.js 14的新特性详解

Next.js 14带来了许多令人兴奋的新特性，这些特性将彻底改变我们构建React应用的方式。

## Server Actions

Server Actions是Next.js 14最重要的新特性之一。它允许我们在React组件中直接调用服务器端函数，大大简化了数据处理流程。

\`\`\`javascript
// app/actions.js
'use server'

export async function createPost(formData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  // 直接在服务器上处理数据
  await db.posts.create({
    title,
    content
  })
  
  revalidatePath('/posts')
}
\`\`\`

## Partial Prerendering

Partial Prerendering允许我们将静态和动态内容结合在同一个页面中，提供更好的性能。

\`\`\`javascript
// app/dashboard/page.js
import { Suspense } from 'react'

export default function Dashboard() {
  return (
    <div>
      {/* 静态内容 */}
      <h1>Dashboard</h1>
      
      {/* 动态内容 */}
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicContent />
      </Suspense>
    </div>
  )
}
\`\`\`

## Turbopack改进

Next.js 14继续改进Turbopack，提供更快的开发体验：

- 更快的Hot Module Replacement
- 改进的错误处理
- 更好的TypeScript支持

## 总结

Next.js 14的这些新特性为开发者提供了更强大的工具来构建现代web应用。Server Actions简化了数据处理，Partial Prerendering提升了性能，而Turbopack则改善了开发体验。

这些特性的结合使得Next.js在React生态系统中的地位更加稳固，我强烈推荐升级到Next.js 14并尝试这些新功能。
      `,
            date: '2023年12月15日',
            readTime: '8分钟',
            category: '前端开发',
            tags: ['Next.js', 'React', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
            author: '张三',
            views: 1234,
            likes: 89,
        }
    }

    return posts[slug] || null
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        文章未找到
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        抱歉，您访问的文章不存在或已被删除。
                    </p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        返回博客列表
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
            {/* 文章头部 */}
            <div className="relative">
                <div
                    className="h-96 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${post.image})` }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl mx-auto px-4">
                            <div>
                                <div className="flex items-center justify-center space-x-4 mb-4">
                                    <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                    {post.title}
                                </h1>
                                <div className="flex items-center justify-center space-x-6 text-gray-200">
                                    <div className="flex items-center">
                                        <Calendar size={20} className="mr-2" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={20} className="mr-2" />
                                        {post.readTime}
                                    </div>
                                    <div className="flex items-center">
                                        <Eye size={20} className="mr-2" />
                                        {post.views} 次阅读
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 返回链接 */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        返回博客列表
                    </Link>
                </div>

                {/* 文章内容 */}
                <article className="prose prose-lg dark:prose-invert max-w-none">
                    <div
                        className="text-gray-800 dark:text-gray-200 leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: post.content
                                .split('\n')
                                .map(line => {
                                    if (line.startsWith('# ')) {
                                        return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">${line.slice(2)}</h1>`
                                    }
                                    if (line.startsWith('## ')) {
                                        return `<h2 class="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">${line.slice(3)}</h2>`
                                    }
                                    if (line.startsWith('```javascript')) {
                                        return '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">'
                                    }
                                    if (line.startsWith('```')) {
                                        return '</code></pre>'
                                    }
                                    if (line.trim() === '') {
                                        return '<br />'
                                    }
                                    return `<p class="mb-4">${line}</p>`
                                })
                                .join('')
                        }}
                    />
                </article>

                {/* 标签 */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">标签</h3>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 互动按钮 */}
                <div className="mt-8 flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <BlogPostClient post={{ title: post.title, likes: post.likes }} />
                </div>

                {/* 相关文章推荐 */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">相关文章推荐</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[1, 2].map((index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop"
                                    alt="相关文章"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        React 18新特性详解
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        深入了解React 18的新特性，包括并发渲染、自动批处理等...
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>2023年12月10日</span>
                                        <span>6分钟阅读</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 
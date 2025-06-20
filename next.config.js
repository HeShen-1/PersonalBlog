/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    // GitHub Pages配置
    basePath: process.env.NODE_ENV === 'production' ? '/PersonalBlog' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/PersonalBlog/' : '',
    // 确保静态资源路径正确
    env: {
        NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/PersonalBlog' : '',
    },
}

module.exports = nextConfig 
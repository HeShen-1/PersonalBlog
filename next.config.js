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
    assetPrefix: process.env.NODE_ENV === 'production' ? '/PersonalBlog' : '',
}

module.exports = nextConfig 
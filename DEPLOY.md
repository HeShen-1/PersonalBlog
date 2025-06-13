# 🚀 GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 `+` → `New repository`  
3. 仓库名称：`personal-blog` 或 `your-username.github.io`
4. 设置为 **Public**（重要：GitHub Pages 免费版要求公开仓库）
5. 不要初始化 README、.gitignore 或 license（因为本地已有）
6. 点击 `Create repository`

### 2. 连接本地仓库到 GitHub

复制 GitHub 给出的仓库 URL，然后运行：

```bash
# 添加远程仓库（替换为您的实际仓库URL）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 `Settings` 标签
2. 在左侧菜单中找到 `Pages`
3. 在 `Source` 部分选择 `GitHub Actions`
4. 保存设置

### 4. 自动部署

一旦推送代码到 `main` 分支，GitHub Actions 会自动：

1. 🔧 安装依赖
2. 📦 构建项目  
3. 🚀 部署到 GitHub Pages

### 5. 访问您的博客

部署完成后，您的博客将在以下地址可用：
- `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`
- 或者如果仓库名为 `your-username.github.io`：`https://YOUR_USERNAME.github.io/`

## 🔧 项目配置说明

### Next.js 静态导出配置 (`next.config.js`)
```javascript
const nextConfig = {
    output: 'export',           // 启用静态导出
    trailingSlash: true,        // 添加尾部斜杠
    skipTrailingSlashRedirect: true,
    distDir: 'dist',           // 输出目录
    images: {
        unoptimized: true      // 禁用图片优化（GitHub Pages要求）
    }
}
```

### GitHub Actions 工作流 (`.github/workflows/deploy.yml`)
- ✅ 自动触发：推送到 `main` 分支时
- ✅ Node.js 18 环境
- ✅ 自动安装依赖和构建
- ✅ 部署到 GitHub Pages

### GitHub Pages 优化
- ✅ `.nojekyll` 文件（禁用 Jekyll 处理）
- ✅ `robots.txt` 文件（SEO 优化）
- ✅ PWA manifest 文件

## 📝 更新博客内容

### 添加新博客文章

1. 编辑 `app/blog/[slug]/page.tsx` 中的 `posts` 对象
2. 添加新的 slug 到 `generateStaticParams()` 函数
3. 提交并推送到 GitHub

### 更新个人信息

编辑以下文件来更新您的信息：
- `app/components/Hero.tsx` - 首页介绍
- `app/components/About.tsx` - 关于页面
- `app/components/Contact.tsx` - 联系信息
- `app/layout.tsx` - 网站元数据

## 🎨 主题定制

### 修改颜色主题
编辑 `tailwind.config.js` 来自定义颜色方案。

### 添加新组件
在 `app/components/` 目录下添加新的 React 组件。

## 🔍 故障排除

### 部署失败
1. 检查 GitHub Actions 日志
2. 确保 `npm run build` 在本地能成功运行
3. 检查 `next.config.js` 配置

### 页面无法访问  
1. 确认仓库是公开的
2. 检查 GitHub Pages 设置
3. 等待 DNS 传播（可能需要几分钟）

### 样式或功能异常
1. 检查浏览器控制台错误
2. 确认所有资源路径正确
3. 验证静态导出兼容性

## 📊 性能优化

### 已集成的优化
- ✅ Tailwind CSS 压缩
- ✅ JavaScript 代码分割
- ✅ 静态页面预渲染
- ✅ 图片优化配置

### 建议的改进
- 🔄 添加服务端缓存头
- 🔄 使用 CDN 加速
- 🔄 压缩静态资源

## 🎯 下一步

1. **自定义域名**：在仓库设置中配置自定义域名
2. **Google Analytics**：添加分析代码追踪访问
3. **SEO 优化**：添加更多元数据和结构化数据
4. **评论系统**：集成 Disqus 或 Giscus
5. **搜索功能**：添加站内搜索

---

🎉 **恭喜！您的个人博客现在已经准备好部署到 GitHub Pages 了！** 
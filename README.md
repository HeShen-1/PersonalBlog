# 我的个人博客

一个基于 Next.js 14 构建的现代化个人博客网站，具有炫酷的动画效果和丰富的动态内容。

## ✨ 特性

- 🎨 **现代化设计** - 使用 Tailwind CSS 构建的响应式界面
- 🌙 **深色模式** - 支持深色/浅色主题切换
- 🎭 **动画效果** - 基于 Framer Motion 的流畅动画
- 📱 **响应式布局** - 完美适配各种设备
- 🚀 **高性能** - Next.js 14 静态导出，快速加载
- 🎯 **SEO 优化** - 完善的元数据和结构化数据
- 🔍 **搜索功能** - 博客文章搜索和分类筛选
- 💫 **粒子背景** - 动态粒子背景效果

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: GitHub Pages

## 📦 安装与运行

1. 克隆项目
```bash
git clone https://github.com/yourusername/personal-blog.git
cd personal-blog
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 🚀 构建与部署

### 本地构建
```bash
npm run build
```

### 部署到 GitHub Pages

1. 推送代码到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. GitHub Actions 会自动构建和部署网站

## 📁 项目结构

```
personal-blog/
├── app/                      # Next.js App Router
│   ├── components/          # React 组件
│   │   ├── Hero.tsx        # 首页英雄区域
│   │   ├── About.tsx       # 关于我组件
│   │   ├── Skills.tsx      # 技能展示
│   │   ├── Projects.tsx    # 项目展示
│   │   ├── BlogPreview.tsx # 博客预览
│   │   ├── Contact.tsx     # 联系表单
│   │   ├── Navbar.tsx      # 导航栏
│   │   ├── Footer.tsx      # 页脚
│   │   ├── ThemeProvider.tsx # 主题提供者
│   │   └── ParticleBackground.tsx # 粒子背景
│   ├── blog/               # 博客相关页面
│   │   ├── page.tsx        # 博客列表页
│   │   └── [slug]/page.tsx # 博客文章页
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── public/                  # 静态资源
├── .github/workflows/       # GitHub Actions
├── next.config.js          # Next.js 配置
├── tailwind.config.js      # Tailwind CSS 配置
└── package.json            # 项目配置
```

## 🎨 自定义配置

### 修改个人信息

1. 编辑 `app/components/Hero.tsx` 中的个人信息
2. 更新 `app/components/About.tsx` 中的个人介绍
3. 修改 `app/components/Contact.tsx` 中的联系方式
4. 替换 `app/layout.tsx` 中的网站元数据

### 添加博客文章

1. 在 `app/blog/[slug]/page.tsx` 中添加新的文章数据
2. 更新博客列表页面的文章数据

### 自定义主题

1. 修改 `tailwind.config.js` 中的颜色配置
2. 编辑 `app/globals.css` 中的自定义样式

## 📝 待办事项

- [ ] 添加评论系统
- [ ] 集成 CMS (如 Strapi 或 Contentful)
- [ ] 添加文章搜索功能
- [ ] 优化 SEO
- [ ] 添加 RSS 订阅
- [ ] 集成 Google Analytics

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🔗 链接

- [在线预览](https://yourusername.github.io/personal-blog)
- [GitHub 仓库](https://github.com/yourusername/personal-blog)

---

如果这个项目对您有帮助，请给它一个 ⭐️！ 
# River 个人主页

> 一个现代化、响应式的个人主页，采用 Next.js 14 + TypeScript + Tailwind CSS 构建

## ✨ 设计特色

### 🎨 视觉设计
- **多背景切换** - 8种精美背景图片可选（夜景、极光、余晖、海景等）
- **玻璃态设计** - 现代化的毛玻璃效果，透明度与模糊度完美结合
- **动画效果** - 丰富的进入动画和交互反馈
- **响应式布局** - 完美适配移动端和桌面端

### 🔧 功能特性
- **真实GitHub贡献图** - 集成真实GitHub API，显示实际贡献活动
- **个人信息展示** - 展示头像、姓名、标题、位置、简介等信息
- **技能标签展示** - 展示个人技能栈
- **项目展示区** - 博客、云盘、实验室等模块
- **个人时间线** - 重要事件时间记录展示
- **社交链接** - GitHub、邮箱、赞赏码等联系方式

### 🎯 技术栈
- **前端框架**: Next.js 14 (App Router)
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **动画库**: Framer Motion
- **图标库**: Lucide React

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 📁 项目结构

```
PersonalBlog/
├── app/                    # Next.js App Router
│   ├── components/         # 可复用组件
│   │   ├── Navbar.tsx     # 导航栏
│   │   └── ThemeProvider.tsx # 主题提供者
│   ├── blog/              # 博客相关页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── public/                # 静态资源
│   ├── night.png          # 夜景背景
│   ├── aurora.png         # 极光背景
│   ├── afterglow.png      # 余晖背景
│   ├── sea_compressed.png # 海景背景
│   ├── lights.png         # 灯光背景
│   ├── Aoyama Hara not old.png # 青山背景
│   └── Lovers' Baypng.png # 恋人湾背景
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── next.config.js         # Next.js 配置
```

## 🎨 设计理念

### 现代化玻璃态设计
- 使用 `backdrop-blur` 和半透明背景创造层次感
- 边框使用 `border-white/10` 营造精致感
- 悬停效果增强交互体验

### 动态背景系统
- 7种精选高质量背景图片
- 平滑过渡动画 (duration-1000)
- 右上角便捷切换按钮

### 响应式布局
- 左侧个人信息栏 (320px)
- 右侧内容区域自适应
- 移动端优化布局

## 🛠️ 自定义配置

### GitHub贡献图配置
#### 修改GitHub用户名
在 `app/data/constants.ts` 中修改：
```typescript
export const GITHUB_USERNAME = 'your-github-username'
```

#### 可选：添加GitHub Token (提高API限制)
创建 `.env.local` 文件：
```bash
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
```

### 修改个人信息
在 `app/data/constants.ts` 中修改默认个人信息：

```typescript
export const getDefaultProfile = (basePath: string) => ({
    name: '你的姓名',
    title: '你的标题',
    location: '你的位置',
    bio: '你的简介',
    skills: ['技能1', '技能2', '技能3'],
    avatar: `${basePath}/image/your-avatar.png`
})
```

### 修改时间线数据
在 `app/data/constants.ts` 中修改默认时间线：

```typescript
export const DEFAULT_TIMELINE = [
    { event: '你的事件', date: '2024.1' },
    { event: '另一个事件', date: '2023.9-2024.6' }
]
```

### 修改背景图片
在 `app/data/constants.ts` 中修改背景图片配置：

```typescript
export const getBackgroundImages = (basePath: string): BackgroundImage[] => [
    { name: `${basePath}/image/bg/your-image.jpg`, label: '你的标签' },
    // ... 更多背景
]
```

### 修改项目/站点
在 `app/data/constants.ts` 中修改站点和项目配置：

```typescript
export const SITE_CONFIGS: SiteConfig[] = [
    {
        title: '项目名',
        subtitle: '项目描述',
        icon: '📝',
        color: 'bg-blue-500/20',
        href: '/link'
    }
]
```

### 修改社交链接
社交链接在 `getSocialLinks` 函数中配置，包括GitHub、邮箱、赞赏码等。

## 📱 响应式设计

- **桌面端**: 左侧边栏 + 主内容区布局
- **平板端**: 适配中等屏幕尺寸
- **移动端**: 垂直堆叠布局，优化触控体验

## 🎯 性能优化

- 静态生成 (SSG) 用于最佳性能
- 图片懒加载
- CSS 压缩优化
- 代码分割和懒加载

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

💡 **提示**: 这是一个静态展示的个人主页模板，你可以通过修改配置文件来自定义内容、颜色、布局等。 
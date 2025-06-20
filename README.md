# River 个人主页

> 一个现代化、响应式的个人主页，采用 Next.js 14 + TypeScript + Tailwind CSS 构建

## ✨ 设计特色

### 🎨 视觉设计
- **多背景切换** - 7种精美背景图片可选（夜景、极光、余晖、海景等）
- **玻璃态设计** - 现代化的毛玻璃效果，透明度与模糊度完美结合
- **动画效果** - 丰富的进入动画和交互反馈
- **响应式布局** - 完美适配移动端和桌面端

### 🔧 功能特性
- **实时时间显示** - 右下角显示当前时间
- **真实GitHub贡献图** - 🎯 **新功能** 集成真实GitHub API，显示实际贡献活动
- **个人信息编辑** - 可视化编辑个人资料、技能标签、时间线
- **技能标签云** - 展示个人技能栈，支持动态添加/删除
- **项目展示区** - 博客、云盘、实验室等模块
- **个人时间线** - 重要事件时间记录，支持日期选择器
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
🎯 **新功能**: 真实GitHub贡献图集成

#### 修改GitHub用户名
```typescript
// 在 app/page.tsx 中修改
const [githubUsername, setGithubUsername] = useState('your-github-username')
```

#### 可选：添加GitHub Token (提高API限制)
创建 `.env.local` 文件：
```bash
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
```

详细配置请参考：[GitHub贡献图功能说明](./README_GITHUB_CONTRIBUTIONS.md)

### 修改背景图片
在 `app/page.tsx` 中修改 `backgroundImages` 数组：

```typescript
const backgroundImages = [
    { name: 'your-image.jpg', label: '你的标签' },
    // ... 更多背景
]
```

### 个人信息编辑
✨ 现在支持可视化编辑！点击个人信息卡片右上角的设置按钮即可编辑：
- 头像上传 (支持拖拽)
- 个人信息 (姓名、标题、地址、简介)
- 技能标签 (动态添加/删除，智能推荐)
- 时间线管理 (事件编辑，日期选择器)

所有修改会自动保存到本地存储。

### 修改项目/站点
```typescript
const sites = [
    {
        title: '项目名',
        subtitle: '项目描述',
        icon: '📝',
        href: '/link'
    }
]
```

### 修改社交链接
```typescript
const socialLinks = [
    { icon: Github, href: 'https://github.com/your-username', label: 'GitHub' },
    { icon: Mail, href: 'mailto:your-email@example.com', label: 'Email' },
]
```

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

💡 **提示**: 这是一个完全可定制的个人主页模板，你可以根据自己的需求修改颜色、布局、内容等。 
# GitHub贡献图功能说明

## 功能概述

本项目已集成真实的GitHub贡献图功能，可以显示指定GitHub用户的贡献活动图表，类似于GitHub个人页面上的绿色贡献图。

## 功能特性

### 1. 自动获取真实数据
- 🔄 **自动加载**：页面加载时自动获取GitHub贡献数据
- 🔄 **手动刷新**：点击刷新按钮手动更新贡献图
- 👤 **用户指定**：默认显示 `HeShen-1` 用户的贡献图
- 📊 **实时数据**：基于GitHub API获取最新的贡献活动

### 2. 多重数据源
项目采用三层数据获取策略，确保最佳的数据可用性：

1. **GitHub REST API** (首选)
   - 使用 `https://api.github.com/users/{username}/events`
   - 无需认证Token，但有API限制
   - 基于用户的公开事件生成贡献图

2. **第三方代理** (备选)
   - 使用 `https://api.allorigins.win` 代理服务
   - 获取GitHub用户页面HTML并解析
   - 适用于API限制时的备用方案

3. **智能模拟数据** (兜底)
   - 基于真实工作模式的模拟算法
   - 工作日更高活跃度，符合实际使用模式
   - 确保在所有情况下都有贡献图显示

### 3. 交互功能
- 🖱️ **悬停提示**：鼠标悬停显示详细贡献信息
- 🎨 **颜色层级**：5级颜色深度表示不同贡献量
- 📈 **视觉指示器**：底部显示贡献量等级说明
- ⚙️ **刷新按钮**：支持手动刷新数据，带有旋转动画

## 使用方法

### 1. 基本使用
项目默认显示用户 `HeShen-1` 的GitHub贡献图。贡献图会在页面加载时自动获取并显示。

### 2. 手动刷新
点击贡献图右上角的设置图标可以手动刷新数据：
- ⏳ 刷新时显示加载动画
- ✅ 成功时更新贡献图
- ⚠️ 失败时显示错误提示并使用模拟数据

### 3. 修改GitHub用户名
如果需要显示其他用户的贡献图，可以修改代码中的用户名：

```typescript
// 在 app/page.tsx 中找到这一行
const [githubUsername, setGithubUsername] = useState('HeShen-1')

// 将 'HeShen-1' 替换为目标GitHub用户名
const [githubUsername, setGithubUsername] = useState('your-github-username')
```

## 技术实现

### 数据结构
```typescript
interface ContributionData {
    week: number;    // 周数 (0-51)
    day: number;     // 天数 (0-6, 0=周日)
    level: number;   // 贡献等级 (0-4)
}
```

### 贡献等级映射
- **等级 0**: 无贡献 (灰色)
- **等级 1**: 少量贡献 (浅绿色)
- **等级 2**: 一般贡献 (中绿色)
- **等级 3**: 较多贡献 (深绿色)
- **等级 4**: 大量贡献 (最深绿色)

### API调用示例
```typescript
// 获取用户事件数据
const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
const events = await response.json();

// 转换为贡献图数据
const contributions = generateContributionsFromEvents(events);
```

## 高级配置

### 1. 添加GitHub Token (可选)
为了提高API调用限制，可以添加GitHub Personal Access Token：

1. 访问 [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. 创建新token，只需要 `public_repo` 权限
3. 在项目根目录创建 `.env.local` 文件：
```bash
# GitHub Personal Access Token (可选)
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
```

### 2. 自定义贡献图样式
可以修改贡献图的颜色和样式：

```typescript
// 在 getLevelColor 函数中修改颜色
const getLevelColor = (level: number) => {
    switch (level) {
        case 0: return 'bg-gray-600/30'      // 无贡献
        case 1: return 'bg-green-400/40'     // 少量贡献
        case 2: return 'bg-green-400/60'     // 一般贡献
        case 3: return 'bg-green-400/80'     // 较多贡献
        case 4: return 'bg-green-400'        // 大量贡献
        default: return 'bg-gray-600/30'
    }
}
```

## 错误处理

### 常见问题
1. **API限制**：GitHub API有调用频率限制
   - 解决方案：添加Personal Access Token
   - 自动降级：使用模拟数据作为备用方案

2. **网络问题**：无法访问GitHub API
   - 解决方案：自动重试机制
   - 备用方案：显示基于真实模式的模拟数据

3. **用户不存在**：指定的GitHub用户名不存在
   - 解决方案：显示错误提示
   - 备用方案：使用默认模拟数据

### 调试信息
打开浏览器开发者工具可以查看详细的调试信息：
```javascript
// 成功获取数据
console.log('成功获取 username 的GitHub贡献数据')

// 获取失败
console.warn('获取GitHub贡献数据失败，使用模拟数据:', error)
```

## 性能优化

1. **缓存机制**：数据存储在组件状态中，避免重复请求
2. **懒加载**：贡献图在需要时才加载，不影响页面首屏性能
3. **错误降级**：API失败时自动使用模拟数据，确保用户体验
4. **动画优化**：使用 framer-motion 提供流畅的加载动画

## 更新日志

### v1.0.0
- ✅ 集成GitHub REST API获取真实贡献数据
- ✅ 实现三层数据获取策略
- ✅ 添加交互式贡献图组件
- ✅ 支持手动刷新功能
- ✅ 添加加载状态和错误处理
- ✅ 实现智能模拟数据生成
- ✅ 添加悬停提示和视觉指示器

## 未来计划

- [ ] 添加用户名输入框，支持动态切换GitHub用户
- [ ] 集成GitHub GraphQL API，获取更详细的贡献数据
- [ ] 添加贡献图数据的本地缓存机制
- [ ] 支持显示特定时间范围的贡献数据
- [ ] 添加贡献统计信息（总提交数、连续天数等） 
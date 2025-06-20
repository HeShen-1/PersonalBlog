import { LocationData, BackgroundImage, BlurLevel, SocialLink, SiteConfig, ProjectConfig } from '../types/profile'
import { Github, Mail, Gift } from 'lucide-react'

/**
 * 地址数据配置
 * 包含中国省份和国外主要城市
 */
export const LOCATION_DATA: LocationData[] = [
    {
        country: 'China',
        provinces: [
            '北京市', '天津市', '上海市', '重庆市',
            '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省',
            '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省',
            '河南省', '湖北省', '湖南省', '广东省', '海南省',
            '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省',
            '台湾省',
            '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区',
            '香港特别行政区', '澳门特别行政区'
        ]
    },
    { country: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo', 'Kobe', 'Fukuoka', 'Kawasaki', 'Hiroshima'] },
    { country: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Sheffield', 'Edinburgh', 'Bristol', 'Glasgow', 'Leicester'] },
    { country: 'Germany', cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'] },
    { country: 'France', cities: ['Paris', 'Marseille', 'Lyon', 'Nice', 'Toulouse', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'] },
    { country: 'Canada', cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener'] },
    { country: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong'] }
]

/**
 * 技能建议列表
 * 用于技能标签的自动补全和推荐
 */
export const SKILL_SUGGESTIONS = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin',
    'React', 'Vue', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte', 'HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap',
    'Node.js', 'Express', 'Spring Boot', 'Django', 'Flask', 'Laravel', 'ASP.NET', 'GraphQL', 'REST API',
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'SQL Server',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab', 'Jenkins', 'CI/CD',
    'React Native', 'Flutter', 'iOS', 'Android', 'Xamarin',
    'UI/UX', 'Figma', 'Photoshop', 'Illustrator', 'Sketch', 'Blender', '3D建模', 'After Effects',
    'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Data Science', 'AI', 'NLP', 'Computer Vision',
    'Linux', 'Windows', 'macOS', 'DevOps', 'Microservices', 'Blockchain', 'Web3', 'Gaming', '音乐', '摄影', '写作'
]

/**
 * 获取背景图片配置
 * 包含图片路径和显示标签
 */
export const getBackgroundImages = (basePath: string): BackgroundImage[] => [
    { name: `${basePath}/image/bg/dusk.jpg`, label: '黄昏' },
    { name: `${basePath}/image/bg/night.png`, label: '夜景' },
    { name: `${basePath}/image/bg/aurora.png`, label: '极光1' },
    { name: `${basePath}/image/bg/afterglow.png`, label: '余晖' },
    { name: `${basePath}/image/bg/sea_compressed.png`, label: '海景' },
    { name: `${basePath}/image/bg/lights.png`, label: '极光2' },
    { name: `${basePath}/image/bg/Aoyama Hara not old.png`, label: '雪原' },
    { name: `${basePath}/image/bg/ZengJiaYan.png`, label: '重庆曾家岩' }
]

/**
 * 背景模糊等级配置
 * 提供不同程度的背景模糊效果
 */
export const BLUR_LEVELS: BlurLevel[] = [
    { level: 0, label: '无模糊', blur: 'backdrop-blur-none' },
    { level: 1, label: '轻微', blur: 'backdrop-blur-sm' },
    { level: 2, label: '适中', blur: 'backdrop-blur-md' },
    { level: 3, label: '强烈', blur: 'backdrop-blur-lg' }
]

/**
 * GitHub用户名配置
 */
export const GITHUB_USERNAME = 'HeShen-1'

/**
 * 获取社交链接配置
 * 包含GitHub、邮箱、赞赏码等链接
 */
export const getSocialLinks = (
    setShowEmailCard: (show: boolean) => void,
    setShowPraiseCode: (show: boolean) => void
): SocialLink[] => [
        { icon: Github, href: `https://github.com/${GITHUB_USERNAME}`, label: 'GitHub', type: 'link' },
        { icon: Mail, onClick: () => setShowEmailCard(true), label: 'Email', type: 'button' },
        { icon: Gift, onClick: () => setShowPraiseCode(true), label: '赞赏码', type: 'button' }
    ]

/**
 * 个人站点配置
 * 包含博客、云盘、实验室、杂谈等站点链接
 */
export const SITE_CONFIGS: SiteConfig[] = [
    {
        title: '博客',
        subtitle: '记录技术日常',
        icon: '📝',
        color: 'bg-blue-500/20',
        href: '/blog'
    },
    {
        title: '云盘',
        subtitle: '存储收藏文件',
        icon: '☁️',
        color: 'bg-yellow-500/20',
        href: '#'
    },
    {
        title: '实验室',
        subtitle: '收集有趣的作品',
        icon: '🔬',
        color: 'bg-pink-500/20',
        href: '#'
    },
    {
        title: '杂谈',
        subtitle: '记录生活',
        icon: '🍵',
        color: 'bg-green-500/20',
        href: '#'
    }
]

/**
 * 项目展示配置
 * 包含个人项目的展示信息
 */
export const PROJECT_CONFIGS: ProjectConfig[] = [
    {
        title: '栅格地图编辑器',
        subtitle: '基于栅格地图的寻路算法可视化仿真平台',
        icon: '🗺️',
        color: 'bg-blue-500/20',
        href: 'https://github.com/HeShen-1/GridMapEditor'
    }
]

/**
 * 默认个人信息配置
 */
export const getDefaultProfile = (basePath: string) => ({
    name: 'River',
    title: 'Carpe Diem.',
    location: 'China-Chongqing',
    bio: '月下人独立。来去去，不见归鸿影。',
    skills: ['DL', 'blue', '算法', '全栈', 'linux', '音乐'],
    avatar: `${basePath}/image/pic.png`
})

/**
 * 默认时间线数据
 */
export const DEFAULT_TIMELINE = [
    { event: '敬请期待', date: '2026.7' },
    { event: '重庆理工大学', date: '2022.9-2026.6' }
]

/**
 * 月份名称常量
 */
export const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

/**
 * 星期几缩写常量
 */
export const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] 
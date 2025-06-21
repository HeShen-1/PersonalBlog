import { motion } from 'framer-motion'
import {
    SiGit, SiGithub, SiJavascript, SiReact, SiVuedotjs, SiNodedotjs,
    SiRedis, SiHtml5, SiCss3, SiTailwindcss
} from 'react-icons/si'

interface SkillsDisplayProps {
    basePath?: string
}

/**
 * 技能图标展示组件
 * 显示各种技术栈图标网格
 */
export default function SkillsDisplay({ basePath = '' }: SkillsDisplayProps) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
        >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                ⚡ skills
            </h2>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="grid grid-cols-10 gap-4">

                    {/* springboot - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="SpringBoot"
                    >
                        <img
                            src={`${basePath}/image/svg/springboot.svg`}
                            alt="SpringBoot"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Docker - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-sky-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Docker"
                    >
                        <img
                            src={`${basePath}/image/svg/Docker.svg`}
                            alt="Docker"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Idea - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Idea"
                    >
                        <img
                            src={`${basePath}/image/svg/Idea.svg`}
                            alt="Idea"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Java - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-stone-300/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Java"
                    >
                        <img
                            src={`${basePath}/image/svg/java.svg`}
                            alt="Java"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Linux - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Linux"
                    >
                        <img
                            src={`${basePath}/image/svg/linux.svg`}
                            alt="Linux"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* MySQL - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="MySQL"
                    >
                        <img
                            src={`${basePath}/image/svg/mysql.svg`}
                            alt="MySQL"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Ollama - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-sky-50/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Ollama"
                    >
                        <img
                            src={`${basePath}/image/svg/ollama.svg`}
                            alt="Ollama"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Python - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Python"
                    >
                        <img
                            src={`${basePath}/image/svg/Python.svg`}
                            alt="Python"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Pytorch - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Pytorch"
                    >
                        <img
                            src={`${basePath}/image/svg/Pytorch.svg`}
                            alt="Pytorch"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Tensorflow - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Tensorflow"
                    >
                        <img
                            src={`${basePath}/image/svg/TensorFlow.svg`}
                            alt="Tensorflow"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Terminal - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-neutral-50/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Terminal"
                    >
                        <img
                            src={`${basePath}/image/svg/terminal.svg`}
                            alt="Terminal"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* VSCode - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="VSCode"
                    >
                        <img
                            src={`${basePath}/image/svg/vscode.svg`}
                            alt="VSCode"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* TypeScript - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-cyan-300/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="TypeScript"
                    >
                        <img
                            src={`${basePath}/image/svg/ts.svg`}
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* React - SVG 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="React"
                    >
                        <img
                            src={`${basePath}/image/svg/React.svg`}
                            alt="React"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Git - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Git"
                    >
                        <img
                            src={`${basePath}/image/svg/git.svg`}
                            alt="Git"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* GitHub - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-slate-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="GitHub"
                    >
                        <img
                            src={`${basePath}/image/svg/github.svg`}
                            alt="GitHub"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* JavaScript - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="JavaScript"
                    >
                        <img
                            src={`${basePath}/image/svg/javascript.svg`}
                            alt="JavaScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Vue - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Vue"
                    >
                        <img
                            src={`${basePath}/image/svg/vue.svg`}
                            alt="Vue"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Node.js - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Node.js"
                    >
                        <img
                            src={`${basePath}/image/svg/node.svg`}
                            alt="Node.js"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Redis - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Redis"
                    >
                        <img
                            src={`${basePath}/image/svg/redis.svg`}
                            alt="Redis"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
} 
import { motion } from 'framer-motion'
import {
    SiGit, SiGithub, SiJavascript, SiReact, SiVuedotjs, SiNodedotjs,
    SiRedis, SiHtml5, SiCss3, SiTailwindcss
} from 'react-icons/si'

/**
 * 技能图标展示组件
 * 显示各种技术栈图标网格
 */
export default function SkillsDisplay() {
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
                            src="/image/svg/springboot.svg"
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
                            src="/image/svg/Docker.svg"
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
                            src="/image/svg/idea.svg"
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
                            src="/image/svg/java.svg"
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
                            src="/image/svg/linux.svg"
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
                            src="/image/svg/mysql.svg"
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
                            src="/image/svg/ollama.svg"
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
                            src="/image/svg/Python.svg"
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
                            src="/image/svg/pytorch.svg"
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
                            src="/image/svg/tensorflow.svg"
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
                            src="/image/svg/terminal.svg"
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
                            src="/image/svg/vscode.svg"
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
                            src="/image/svg/ts.svg"
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
                            src="/image/svg/React.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Git - SVG 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Git"
                    >
                        <img
                            src="/image/svg/git.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* GitHub - SVG 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-violet-100/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="GitHub"
                    >
                        <img
                            src="/image/svg/github.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* JavaScript - SVG 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="JavaScript"
                    >
                        <img
                            src="/image/svg/javascript.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Vue.js - SVG 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-pink-50/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Vue.js"
                    >
                        <img
                            src="/image/svg/vue.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Node.js - SVG 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Node.js"
                    >
                        <img
                            src="/image/svg/node.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Redis - SVG 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Redis"
                    >
                        <img
                            src="/image/svg/redis.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>


                </div>
            </div>
        </motion.div>
    )
} 
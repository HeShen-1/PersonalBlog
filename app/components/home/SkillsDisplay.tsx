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
                    {/* Docker - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Docker"
                    >
                        <img
                            src="/image/svg/Docker.svg"
                            alt="Docker"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* Java - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Java"
                    >
                        <img
                            src="/image/svg/java.svg"
                            alt="Java"
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

                    {/* TypeScript - SVG 图标 */}
                    <motion.div
                        className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="TypeScript"
                    >
                        <img
                            src="/image/svg/ts.svg"
                            alt="TypeScript"
                            className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                    </motion.div>

                    {/* React - React 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="React"
                    >
                        <SiReact className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors" />
                    </motion.div>

                    {/* Git - React 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Git"
                    >
                        <SiGit className="text-red-500 text-2xl group-hover:text-red-400 transition-colors" />
                    </motion.div>

                    {/* GitHub - React 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="GitHub"
                    >
                        <SiGithub className="text-white text-2xl group-hover:text-gray-300 transition-colors" />
                    </motion.div>

                    {/* JavaScript - React 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="JavaScript"
                    >
                        <SiJavascript className="text-yellow-500 text-2xl group-hover:text-yellow-400 transition-colors" />
                    </motion.div>

                    {/* Vue.js - React 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Vue.js"
                    >
                        <SiVuedotjs className="text-green-500 text-2xl group-hover:text-green-400 transition-colors" />
                    </motion.div>

                    {/* Node.js - React 图标组件 */}
                    <motion.div
                        className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                        whileHover={{ scale: 1.1 }}
                        title="Node.js"
                    >
                        <SiNodedotjs className="text-green-600 text-2xl group-hover:text-green-500 transition-colors" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
} 
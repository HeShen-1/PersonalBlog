interface SkillsSectionProps {
    skills: string[]
}

/**
 * 技能标签展示组件
 * 显示技能标签列表
 */
export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
} 
import type React from "react";
import type { Skill } from "@/components/types/types";
interface SkillsCardProps {
    skill: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-lg w-full h-full p-6 transition-transform hover:scale-105">
            <img src={skill.img} alt={skill.alt} className="w-[60px] h-[60px] mb-4" />
            <p className="text-white text-xl font-semibold text-center">{skill.skill}</p>
        </div>
    )
}

export default SkillsCard;
import SectionHeader from "../SectionHeader/SectionHeader";
import type { Bullet, Skill } from "@/components/types/types";
import { fullStackReactDev, python, java, projectManagement, webDesign, typecript, adaptiveLearning, skilledTeamMember } from "@/utils/skills";
import SkillsCard from "./SkillsCard";
import CodeIcon from "@/assets/code.svg";

const StrengthSkills: React.FC = () => {
    const skills: Skill[] = [
        fullStackReactDev,
        python,
        java,
        projectManagement,
        webDesign,
        typecript,
        adaptiveLearning,
        skilledTeamMember
    ];
    const bullet: Bullet = {
        img: CodeIcon,
        alt: "Strengths and Skills icon",
        title: "Key Areas Where I Add Value",
        color: "emerald"
    }
  return(
    <div className="flex flex-col w-full h-full items-center justify-center mt-[80px] bg-[#040917] rounded-[12px] p-[40px]">
        <SectionHeader bullet={bullet} />
        <h2 className="text-white font-bold text-[32px] mt-[20px]">
            My Strengths and Contributions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] mt-[50px] w-full max-w-6xl">
            {skills.map((skill, index) => (
                <div key={index} className="w-full h-[180px] flex mt-[12px]">
                    <SkillsCard skill={skill} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default StrengthSkills;
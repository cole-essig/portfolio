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
        title: "Key Skills/Strengths",
    }
  return(
    <div className="flex flex-col min-h-[400px] items-center justify-center mt-[80px] bg-[#040917] rounded-[12px] p-20">
        <SectionHeader bullet={bullet} />
        <div className="flex flex-row flex-wrap w-[1040px] gap-[40px] justify-center items-center mt-[80px]">
            {skills.map((skill, index) => (
                <SkillsCard key={index} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default StrengthSkills;

// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
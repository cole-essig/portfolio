import SectionHeader from "../SectionHeader/SectionHeader";
import type { Bullet, Skill } from "@/components/types/types";
import { skills } from "@/utils/skills";
import SkillsCard from "./SkillsCard";
import SkillIcon from "@/assets/Icons/032-battery.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const StrengthSkills: React.FC = () => {
    const skillsBlockRef = useRef<HTMLDivElement>(null);
    const skillsList: Skill[] = skills;
    
    const bullet: Bullet = {
        img: SkillIcon,
        alt: "Strengths and Skills icon",
        title: "Key Skills/Strengths",
    }

    useEffect(() => {
        gsap.fromTo(
            skillsBlockRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    id: "skillsBlock",
                    trigger: skillsBlockRef.current,
                    start: "top 50%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);
  return(
    <div className="flex flex-col min-h-[400px] items-center justify-center mt-[80px] bg-[#040917] rounded-[12px] p-20" ref={skillsBlockRef}>
        <SectionHeader bullet={bullet} />
        <div className="flex flex-row flex-wrap w-[1040px] gap-[40px] justify-center items-center mt-[80px]">
            {skillsList.map((skill, index) => (
                <SkillsCard key={index} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default StrengthSkills;

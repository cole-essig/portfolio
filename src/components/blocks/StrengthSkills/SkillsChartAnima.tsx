import type { Skill } from "@/components/types/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface SkillsAnimaProps {
    skill: Skill
}

gsap.registerPlugin(useGSAP);

const SkillsChartAnima: React.FC<SkillsAnimaProps> = ({ skill }) => {
    const boxRef1 = useRef<HTMLDivElement>(null);
    const boxRef2 = useRef<HTMLDivElement>(null);
    const boxRef3 = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        const redStack1 = boxRef1.current;
        const stack1Height = skill.points.proc * 20

        const redStack2 = boxRef2.current;
        const stack2Height = skill.points.bk * 20

        const redStack3 = boxRef3.current;
        const stack3Height = skill.points.os * 20

        // const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        
        gsap.to(redStack1, { height: `${stack1Height}px`, duration: 4})
        gsap.to(redStack2, { height: `${stack2Height}px`, duration: 4})
        gsap.to(redStack3, { height: `${stack3Height}px`, duration: 4})     
      
    })

    return (
        <div className="flex flex-col items-center h-full">         
            <div className="flex flex-row gap-[80px] space-x-8">
                <div className="flex flex-col items-center justify-end">
                    <div className="h-[150px] flex flex-col-reverse justify-start">
                        <div className="bg-[#03b98b] w-[40px] h-[15px]" ref={boxRef1}></div>
                    </div>
                    <p className="mt-2 text-sm font-bold text-white">Proclivity: {skill.points.proc}/10</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-[150px] flex flex-col-reverse justify-start">
                        <div className="bg-[#03b98b] w-[40px] h-[15px]" ref={boxRef2}></div>
                    </div>
                    <p className="mt-2 text-sm font-bold text-white">Base knowledge: {skill.points.bk}/10</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-[150px] flex flex-col-reverse justify-start">
                        <div className="bg-[#03b98b] w-[40px] h-[15px]" ref={boxRef3}></div>
                    </div>
                    <p className="mt-2 text-sm font-bold text-white">Overall Skill: {skill.points.os}/10</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsChartAnima;
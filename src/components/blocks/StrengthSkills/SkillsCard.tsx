import React, { useRef, useEffect } from "react";
import type { Skill } from "@/components/types/types";
import { gsap } from "gsap/gsap-core";
interface SkillsCardProps {
    skill: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    gsap.to(cube, {
      rotateX: '+=360',
      rotateY: '+=360',
      duration: 6,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

 return (
  <div 
    className="relative w-[100px] h-[100px] my-12
    transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
    hover:transform hover:-translate-y-[15px] hover:scale-[1.02]"
  >
    <div className="absolute flex flex-col left-1/2 top-[70px] transform -translate-x-1/2 -translate-y-full text-md font-bold text-slate-100 drop-shadow-md z-10">
      <p className="text-white">{skill.skill}</p>
      {/* <img src={skill.img} alt={skill.alt} className="w-[60px] h-[60px] drop-shadow-md mt-[35px]" /> */}
    </div>

    <div
      ref={cubeRef}
      className="relative"
      style={{
        width: '100px',
        height: '100px',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(0deg) rotateY(0deg)',
      }}
    >
      <div
        className="absolute bg-[#03b98b] border border-3 border-black"
        style={{ width: '100px', height: '100px', transform: 'translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#03b98b] border border-3 border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateY(180deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#03b98b] border border-3 border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateY(90deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#03b98b] border border-3 border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateY(-90deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#03b98b] border border-3 border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateX(90deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#03b98b] border border-3 border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateX(-90deg) translateZ(50px)' }}
      />
    </div>
  </div>
);
};

export default SkillsCard;
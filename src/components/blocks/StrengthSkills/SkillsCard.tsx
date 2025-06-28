import React, { useRef, useEffect } from "react";
import type { Skill } from "@/components/types/types";
import { gsap } from "gsap/gsap-core";
interface SkillsCardProps {
    skill: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
//     return (
//         <div 
//             className="group relative flex flex-col w-full max-w-[300px] min-h-[175px] p-[15px]
//             bg-gray-800 rounded-[12px] border-2 border-[#00f0ff]
//             bg-gradient-to-br from-[#ffffff0a] to-[#e0f7fa0a]
//             shadow-[0_0_0_0_rgba(0,240,255,0)]
//             transition-all duration-300 ease-out
//             hover:-translate-y-2 hover:scale-[1.02]
//             hover:shadow-[0_10px_30px_rgba(0,240,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
//             backdrop-blur-md"
//         >
//             <img src={skill.img} alt={skill.alt} className="w-[60px] h-[60px] mb-4" />
//             <p className="text-white text-xl font-semibold text-center">{skill.skill}</p>
//         </div>
//     )
// }
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
  <div className="relative w-[100px] h-[100px] my-12">
    <div className="absolute flex flex-col left-1/2 top-[70px] transform -translate-x-1/2 -translate-y-full text-md font-bold text-slate-100 drop-shadow-md z-10">
      {skill.skill}
      <img src={skill.img} alt={skill.alt} className="w-[60px] h-[60px] drop-shadow-md mt-[35px]" />
    </div>
   {/* <div className="absolute left-1/2 top-[0px] transform -translate-x-1/2 z-10">
      <img src={skill.img} alt={skill.alt} className="w-[60px] h-[60px] drop-shadow-md" />
    </div> */}

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
        className="absolute bg-[#00f0ff] border border-black"
        style={{ width: '100px', height: '100px', transform: 'translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#00f0ff] border border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateY(180deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#00f0ff] border border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateY(90deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#00f0ff] border border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateY(-90deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#00f0ff] border border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateX(90deg) translateZ(50px)' }}
      />
      <div
        className="absolute bg-[#00f0ff] border border-black"
        style={{ width: '100px', height: '100px', transform: 'rotateX(-90deg) translateZ(50px)' }}
      />
    </div>
  </div>
);
};

export default SkillsCard;
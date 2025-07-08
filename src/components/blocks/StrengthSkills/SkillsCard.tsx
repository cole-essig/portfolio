import React, { useRef, useState } from "react";
import type { Skill } from "@/components/types/types";
import { gsap } from "gsap/gsap-core";
import SkillsChartAnima from "./SkillsChartAnima";

interface SkillsCardProps {
    skill: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
  const [clicked, setIsClicked] = useState(false);
  const [fakeBox, setFakeBox] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const fakeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

    const onClick = () => {
    const newState = !clicked;
    setIsClicked(newState);

    if (newState && boxRef.current) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const box = boxRef.current;
      const rect = box.getBoundingClientRect();

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onReverseComplete: () => { setFakeBox(false); setIsModal(false) },
        onComplete: () => { setIsModal(true); }
      });

      tl.set(box, {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        position: "fixed",
        margin: 0,
        zIndex: 10
      })
        .call(() => setFakeBox(true))
        .fromTo(box, {
          left: rect.left,
          top: rect.top,
          backgroundColor: "#03b98b"
        }, {
          left: vw / 2,
          top: vh / 2,
          x: "-50%",
          y: "-50%",
          backgroundColor: "#040917",
          duration: 0.8
        })
        .to(box, {
          width: vw * 0.5,
          height: vh * 0.6,
          duration: 0.8
        });

      timelineRef.current = tl;
      tl.play();
    } else {
      timelineRef.current?.reverse();
      setIsModal(false);
    }
  }

  return (
    <>
      <div 
        className={`${!isModal ? "justify-center" : ""} flex flex-col 
        items-center text-center w-[200px] h-[180px] p-[36px]
        bg-[#03b98b] rounded-[12px]
        bg-gradient-to-br from-[#ffffff0a] to-[#e0f7fa0a]
        shadow-[0_4px_12px_rgba(255,255,255,0.06)]
        transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
        hover:transform hover:-translate-y-[15px] hover:scale-[1.02]
        hover:shadow-[0_10px_30px_rgba(0,240,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
        backdrop-blur-md cursor-pointer`}
        ref={boxRef}
        onClick={onClick}
      >
        <div className={!isModal ? "text-white font-bold text-sm min-h-[48px]" : "p-4"}>
          { !isModal ? 
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white font-bold">{skill.skill}</h3>
              <img src={skill.img} alt={skill.alt} className="w-[64px] mt-4" />
            </div>
            : 
            <div>
              <h3 className="text-white font-bold text-[48px]">{skill.skill}</h3>
              <p className="text-white font-bold text-[20px]" style={{ margin: '60px 0 70px 0' }}>{skill.description}</p>
              <SkillsChartAnima skill={skill} />
            </div>
          }
        </div>
      </div>
      {fakeBox ? <div className="invisible top-0 left-0 w-[202px] h-[182px] pointer-events-none" ref={fakeRef}></div> : ""}
    </>
  )
};

export default SkillsCard;


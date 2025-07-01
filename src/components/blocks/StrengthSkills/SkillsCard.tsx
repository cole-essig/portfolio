import React, { useRef, useEffect, useState } from "react";
import type { Skill } from "@/components/types/types";
import { gsap } from "gsap/gsap-core";

interface SkillsCardProps {
    skill: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
  const [clicked, setIsClicked] = useState(false);
  const [fakeBox, setFakeBox] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const fakeRef = useRef<HTMLDivElement>(null);
  const divSkillRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const onClick = () => {
    if (!timelineRef.current) return 

    const newState: boolean = (!clicked)
    setIsClicked(newState);
 
    newState ? timelineRef.current.play() : timelineRef.current.reverse();
    if (!newState) setIsModal(false) 
  }
  
  useEffect(() => {
    if (!boxRef) return
    if (!fakeRef) return

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const boxLocation = boxRef.current?.getBoundingClientRect()
    const tl = gsap.timeline({ 
        paused: true, 
        defaults: { ease: "power2.inOut"}, 
        onReverseComplete: () => {setFakeBox(false); setIsModal(false)}, 
        onComplete: () => {
        setIsModal(true);
      }
    })

    tl.set(boxRef.current, {
        top: boxLocation?.top,
        right: boxLocation?.right,
        bottom: boxLocation?.bottom, 
        left: boxLocation?.left,
        width: boxLocation?.width,
        height: boxLocation?.height, 
        position: "fixed", 
        zIndex: 10 
      })
      .call(() => { setFakeBox(true)})
      .set(fakeRef.current, { position: "static" })
      .fromTo(boxRef.current, { left: boxLocation?.left, top: boxLocation?.top, backgroundColor: "#03b98b" }, {
      left: vw / 2,
      top: vh / 2,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#FFC800",
      duration: 2,
      ease: "power2.inOut"
      })
      .to(boxRef.current, {
      width: vw * 0.5,
      height: vh * 0.6,
      duration: 2,
      ease: "power2.out"
     })
    //  .to(divSkillRef.current, { width: vw * 0.5, height: vh * 0.6, backgroundColor: "#FF1A1A", duration: 4}, "+=3")



     timelineRef.current = tl
  }, []);

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
        <div className={!isModal ? "text-white font-bold text-[24px] min-h-[48px]" : "p-4"}>
          { !isModal ? skill.skill : 
            <div>
              <h3 className="text-black font-bold text-[48px]">{skill.skill}</h3>
              <p className="text-black font-bold text-[20px] mt-[80px]">{skill.description}</p>
            </div>
          }
        </div>
        <div ref={divSkillRef} className="w-0 h-0"></div>
      </div>
      {fakeBox ? <div className="invisible top-0 left-0 w-[202px] h-[182px] pointer-events-none" ref={fakeRef}></div> : ""}
    </>
  )
};

export default SkillsCard;


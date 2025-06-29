import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
interface ActiveCardProps {
    job: string;
}

const ActiveCard: React.FC<ActiveCardProps> = ({ job }) => {
    const [isActive, setIsActive] = useState(true);
    const boxRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
         if (job === 'Past') {
        setIsActive(false)
    }
    }, [job]);

    useEffect(() => {
      if (!boxRef.current) return;

      gsap.to(boxRef.current, {
        backgroundColor: 'rgba(39, 40, 43,0.25)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })

    }, [])
    
    return (
        <>
          {isActive ? (
          <div
            ref={boxRef}
            className="absolute right-[20px] top-1/4 -translate-y-1/2
            bg-[rgba(255,255,0,0.15)] border-[3px] border-[#ffc800]
            text-white rounded-[15px] w-[140px] h-[140px]
            flex items-center justify-center
            shadow-[0_0_20px_2px_rgba(255,200,0,0.4)]"
           > 
            <p className="text-[24px] font-bold animate-pulse-text">{job}</p>
           </div>) : (
          <div
            ref={boxRef}
            className="absolute right-[20px] top-1/3 -translate-y-1/2
            bg-[rgba(39, 40, 43,0.15)] border-[3px] 
            text-white rounded-[15px] w-[140px] h-[140px]
            flex items-center justify-center
            shadow-[0_0_20px_2px_rgba(39, 40, 43,0.4)]"
          >
            <p className="text-[24px] font-bold">{job}</p>
          </div>)}
        </>
    )
}

export default ActiveCard;
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import Animation from "./Animation";

gsap.registerPlugin(ScrambleTextPlugin);

const ContactAnimation: React.FC = () => {
    const textRef = useRef<HTMLParagraphElement>(null)
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (!start) return undefined

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(textRef.current, {
            duration: 4,
            scrambleText: "I'll get back to you ASAP"
        }, "+=4")
            .to(textRef.current, {
                duration: 4,
                scrambleText: "I'm Ready to be your best friend Keith"
            }, "+=4")
            .to(textRef.current, {
                duration: 4,
                scrambleText: "Creating Connections is the Gateway to Success"
            }, '+=4') 
        return () => setStart(false)
    }, [start]);

    return (
        < div className="flex relative flex-row w-full h-full">
          <p className="absolute bottom-[10%] left-[10px] text-white font-bold text-[28px] p-2 bg-[#03b98b] rounded-[12px] text-wrap shadow-[0_0_25px_10px_rgba(255,255,255,0.1)]">Connect with me</p>
          <Animation />
          <p className="absolute top-[15%] right-[-30px] max-w-xs w-auto text-white p-2 bg-[#03b98b] rounded-[12px] font-bold text-[28px] shadow-[0_0_25px_10px_rgba(255,255,255,0.1)] -translate-y-1/2">
            <span>Let's talk!</span>{' '}
            <span className="block sm:inline">Lets Build Something Great</span>
          </p>
        </div>
    )
}

export default ContactAnimation;
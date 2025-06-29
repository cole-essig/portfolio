import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
// Make sure ScrambleTextPlugin is imported if needed
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const ContactAnimation: React.FC = () => {
    const textRef = useRef<HTMLParagraphElement>(null)
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (!start) return
        if (textRef.current) {
            gsap.to(textRef.current, {
                duration: 3,
                scrambleText: "This is the New Text"
            });
        }
        setStart(false)
        return () => setStart(false)
    }, [start]);

    return (
        <div onClick={() => setStart(!start)}>
          <p ref={textRef} className="text-white">Yo big dicky is the shit homey</p>
        </div>
    )
}

export default ContactAnimation;
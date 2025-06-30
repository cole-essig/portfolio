import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);

const ContactAnimation: React.FC = () => {
    const textRef = useRef<HTMLParagraphElement>(null)
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (!start) return
        if (textRef.current) {
            gsap.to(textRef.current, {
                duration: 4,
                scrambleText: "I'll get Back to You ASAP"
            });
        }
        setTimeout(() => {
            gsap.to((textRef.current), {
                duration: 4,
                scrambleText: 'Creating Connections is the Gateway to Success'
            });
        }, 8000)

        setStart(false)
        return () => setStart(false)
    }, [start]);

    return (
        <div onClick={() => setStart(!start)}>
          <p ref={textRef} className="text-white font-bold text-[40px] text-wrap">Creating Connections is the Gateway to Success</p>
        </div>
    )
}

export default ContactAnimation;
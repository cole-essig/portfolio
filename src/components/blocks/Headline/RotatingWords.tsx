import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const words = [" Solutions ", " Innovation ", " Impact ", " Creativity "];
const colors = ["yellow", "emerald", "purple", "green"];

const RotatingWords: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("yellow");
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  const colorVariant: Record<string, string> = {
    yellow: "#FFC800",
    emerald: "#036655",
    purple: "#574ae2",
    green: "#03b98b",
  };

  useGSAP(() => {
    if (letterRefs.current.length) {
      gsap.set(letterRefs.current, { 
        opacity: 0,
        scale: 1 
      });

      gsap.to(letterRefs.current, {
        opacity: 1,
        scale: 1.1,
        duration: 0.2,
        stagger: 0.2,
        ease: "none",
      });
    }
  }, [index]);

  // Rotate index and update color every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % words.length;
        setColor(colors[next]);
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Prepare current word for animation
  const currentWord = words[index].split("");
  letterRefs.current = [];

  return (
    <p className={`text-[45px] font-extrabold text-white p-1`} style={{ color: colorVariant[color] }}>
      {currentWord.map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) letterRefs.current[i] = el;
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
};

export default RotatingWords;
import StatsCard from "./StatsCard";
import type { Stats } from "../../types/types";
import Icon from "@/assets/Icons/026-light-bulb.svg";
import ClientIcon from "@/assets/Icons/042-television.svg";
import ProjectIcon from "@/assets/Icons/011-motherboard.svg";
import ReviewIcon from "@/assets/Icons/021-browser.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const StatsBlock: React.FC = () => {
  const statsBlockRef = useRef<HTMLDivElement>(null);

  const stats: Stats = [
    { title: "3+", img: Icon, alt: "icon", description: "Years of Experience." },
    { title: "30+", img: ClientIcon, alt: "icon", description: "Satisfied Clients" },
    { title: "25+", img: ProjectIcon, alt: "icon", description: "Completed Projects" },
    { title: "100's", img: ReviewIcon, alt: "icon", description: "Positive Reviews" },
  ];

  useEffect(() => {
    gsap.fromTo(
      statsBlockRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsBlockRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-row w-full justify-between mt-[100px] gap-[20px]" ref={statsBlockRef}>
      {stats.map((stat, index) => (
        <StatsCard key={index} stat={stat} />
      ))}
    </div>
  );
};

export default StatsBlock;
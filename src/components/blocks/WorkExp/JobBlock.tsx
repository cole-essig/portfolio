import type { Job, Bullet } from "@/components/types/types";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "../SectionHeader/SectionHeader";
import ActiveCard from "./ActiveCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


interface JobBlockProps {
    job: Job;
}

const JobBlock: React.FC<JobBlockProps> = ({ job }) => {
    const jobBlockRef = useRef<HTMLDivElement>(null);

    const bullet: Bullet = {
        img: job.img,
        alt: job.date,
        title: job.date,
    };

    const isActive = job.active ? "Active" : "Past";

    useEffect(() => {
        gsap.fromTo(
            jobBlockRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: jobBlockRef.current,
                    start: "top 50%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
       <div 
          className="flex flex-col justify-center items-start 
          w-full max-w-[1200px] relative bg-[#040917] rounded-[12px] p-[40px]
          bg-gradient-to-br from-[#ffffff0a] to-[#e0f7fa0a]
          shadow-[0_4px_12px_rgba(255,255,255,0.06)]
          transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
          hover:transform hover:-translate-y-[15px] hover:scale-[1.02]
          hover:shadow-[0_10px_30px_rgba(0,240,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
          backdrop-blur-md"
          ref={jobBlockRef}
        >
          <SectionHeader bullet={bullet} />
          <h2 className="text-white text-[24px] mt-[20px] mb-[10px]">{job.position}-{job.company}</h2>
          <div className="flex flex-row gap-[10px]">
            {job.techstack.map((tech, index) => (
                <Badge 
                  key={index} 
                  className="bg-[#03B98B] mb-[30px] text-white transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(0,240,255,0.45)] cursor-default"
                >
                  {tech}
                </Badge>
            ))}
          </div>
          <p className="text-white text-[24px] mb-[10px]">Key Achievements</p>
          <div className="flex flex-col gap-[10px]">
            {job.acchievements.map((achievement, index) => (
                <ul key={index} className="text-white text-[18px] list-disc pl-6">
                    <li>{achievement}</li>
                </ul>
            ))}
          </div>
          <ActiveCard job={isActive} />
        </div>
    )
}

export default JobBlock;
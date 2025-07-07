import type { Project } from "@/components/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
    project: Project
}

const ProjectBlock: React.FC<ProjectProps> = ({ project }) => {
    const projectBlockRef = useRef<HTMLDivElement>(null);

    const liveClick = () => {
       if (project.demoLink) {
      window.open(project.demoLink, "_blank", "noopener,noreferrer");
      }
    }

    const gitHubClick = () => {
        if (project.githubLink) {
      window.open(project.githubLink, "_blank", "noopener,noreferrer");
      }
    }

    useEffect(() => {
        gsap.fromTo(
            projectBlockRef.current,
            { opacity: 0, y: 25 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: projectBlockRef.current,
                    start: "top 50%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);
    return (
        <div 
          className="flex flex-row min-h-[40vh] min-w-[70vw] rounded-[12px] 
          transition-shadow duration-200 
          hover:shadow-[0_0_10px_2px_rgba(0,240,255,0.45)] 
          overflow-hidden transition-all duration-300 linear
          transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
          hover:-translate-y-[10px] hover:scale-[1.02]"
          ref={projectBlockRef}
        >
          <div className="w-1/2">
            <img src={project.featureImg} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col p-25 bg-[#040917]">
            <div className="flex flex-row gap-[10px] mb-[20px]">
              {project.toolName.map((tool, index) => (
                <Badge key={index} className="bg-[#03B98B] text-white transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(0,240,255,0.45)] cursor-default">
                  {tool}
                </Badge>
              ))}
            </div>
            <h2 className="text-white text-[32px]">{project.title}</h2>
            <p className="text-white text-[18px] mb-[80px] break-words max-w-full">{project.description}</p>
            <div className="flex flex-row gap-[10px] mt-[auto]">
                <Button 
                  className="bg-[#27282B] transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(0,240,255,0.45)] text-white cursor-pointer" 
                  onClick={liveClick}
                >
                  Live Demo
                </Button>
                <Button 
                  className="bg-[#03B98B] transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(0,240,255,0.45)] text-white cursor-pointer" 
                  onClick={gitHubClick}
                >
                  GitHub Code
                </Button>
            </div>
          </div>
        </div>
    )
}

export default ProjectBlock;
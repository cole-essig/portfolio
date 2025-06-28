import type { Project } from "@/components/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectProps {
    project: Project
}

const ProjectBlock: React.FC<ProjectProps> = ({ project }) => {
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
    return (
        <div className="flex flex-row min-h-[40vh] min-w-[70vw] border border-orange-500 rounded-[12px] overflow-hidden">
          <div className="w-1/2">
            <img src={project.featureImg} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col p-25">
            <div className="flex flex-row gap-[10px] mb-[20px]">
              {project.toolName.map((tool, index) => (
                <Badge key={index} className="bg-orange-500 text-white transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] cursor-pointer">
                  {tool}
                </Badge>
              ))}
            </div>
            <h2 className="text-white text-[32px]">{project.title}</h2>
            <p className="text-white text-[18px] mb-[80px] break-words max-w-full">{project.description}</p>
            <div className="flex flex-row gap-[10px] mt-[auto]">
                <Button 
                  className="bg-green-500 transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] cursor-pointer" 
                  onClick={liveClick}
                >
                  Live Demo
                </Button>
                <Button 
                  className=" bg-blue-300 transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] cursor-pointer" 
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
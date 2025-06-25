import type { Project } from "@/components/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectProps {
    project: Project
}

const ProjectBlock: React.FC<ProjectProps> = ({ project }) => {
    const liveClick = () => {
       console.log(project.demoLink)
    }

    const gitHubClick = () => {
        console.log(project.githubLink)
    }
    return (
        <div className="flex flex-row min-h-[40vh] min-w-[70vw] border border-orange-500 rounded-[12px] overflow-hidden">
          <div className="w-1/2">
            <img src={project.featureImg} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col p-25">
            <div className="flex flex-row gap-[10px] mb-[20px]">
              <Badge>{project.toolName[0]}</Badge>
            </div>
            <h2 className="text-white text-[32px]">{project.title}</h2>
            <p className="text-white text-[18px] mb-auto truncate overflow-hidden whitespace-nowrap">{project.description}</p>
            <div className="flex flex-row gap-[10px]">
                <Button onClick={liveClick}>Live Demo</Button>
                <Button onClick={gitHubClick}>GitHub Code</Button>
            </div>
          </div>
        </div>
    )
}

export default ProjectBlock;
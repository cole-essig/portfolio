import SectionHeader from "../SectionHeader/SectionHeader";
import type { Projects } from "@/components/types/types";
import { FeatProj } from "@/utils/projects";
import type { Bullet } from "@/components/types/types";
import ProjectBlock from "./ProjectBlock";

const FeaturedProjects: React.FC = () => {
  const bullet: Bullet = {
    img: "/assets/code.svg",
    alt: "icon",
    title: "Built with cutting edge frameworks and tools"
  }
// Needs API call here, will hard code for now
  const projects: Projects = FeatProj 
    return (
        <div className="p-[80px]">
            <div className="flex flex-col items-center justify-center mt-[80px] mb-[80px]">
              <SectionHeader bullet={bullet} />
              <h2 className="text-white font-bold text-[32px]">Featured Projects</h2>
            </div>
            <div className="flex flex-col gap-[25px]">
                {projects.map((project, index) => (
                <ProjectBlock key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProjects;
import type { Job, Bullet } from "@/components/types/types";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "../SectionHeader/SectionHeader";
import CodeIcon from "@/assets/code.svg";


interface JobBlockProps {
    job: Job;
}

const JobBlock: React.FC<JobBlockProps> = ({ job }) => {
    const bullet: Bullet = {
        img: CodeIcon,
        alt: job.date,
        title: job.date,
        color: "yellow-400"
    };
    return (
        <div className="flex flex-col justify-center items-start w-full max-w-[1200px] relative">
          <SectionHeader bullet={bullet} />
          <h2 className="text-white text-[24px]">{job.position}-{job.company}</h2>
          <div className="flex flex-row gap-[10px]">
            {job.techstack.map((tech, index) => (
                <Badge 
                  key={index} 
                  className="bg-[#03B98B] text-white transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(0,240,255,0.45)] cursor-default"
                >
                  {tech}
                </Badge>
            ))}
          </div>
          <p className="text-white text-[24px]">Key Achievements</p>
          <div className="flex flex-col gap-[10px]">
            {job.acchievements.map((achievement, index) => (
                <p key={index} className="text-white text-[18px]">
                    - {achievement}
                </p>
            ))}
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <p>{job.active?"Active": "Past"}</p>
          </div>
        </div>
    )
}

export default JobBlock;
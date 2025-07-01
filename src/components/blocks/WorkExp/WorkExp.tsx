import JobBlock from "./JobBlock";
import SectionHeader from "../SectionHeader/SectionHeader";
import type { Jobs, Bullet } from "@/components/types/types";
import { SchoonLandscape, FreeLanceWebDev, OFCA } from "@/utils/jobs";
import CodeIcon from "@/assets/code.svg";


const WorkExp: React.FC = () => {
  const jobs: Jobs = [
    SchoonLandscape,
    FreeLanceWebDev,
    OFCA
  ];

  const bullet: Bullet = {
    img: CodeIcon,
    alt: "Career Header",
    title: "Career Overview"
  };  
    return (
        <div className="flex flex-col w-full max-w-[1200px] mx-auto mt-[100px] gap-[50px]">
          <div className="flex flex-col items-center justify-center mb-[50px]">
            <SectionHeader bullet={bullet}/>
          </div>
          {jobs.map((job, index) => (
            <JobBlock key={index} job={job} /> 
        ))}
        </div>
    )
}

export default WorkExp;
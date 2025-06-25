import JobBlock from "./JobBlock";
import SectionHeader from "../SectionHeader/SectionHeader";
import type { Jobs, Bullet } from "@/components/types/types";
import { SchoonLandscape, FreeLanceWebDev, OFCA } from "@/utils/jobs";


const WorkExp: React.FC = () => {
  const jobs: Jobs = [
    SchoonLandscape,
    FreeLanceWebDev,
    OFCA
  ];

  const bullet: Bullet = {
    img: "src/assets/code.svg",
    alt: "Career Header",
    title: "Career Overview"
  };  
    return (
        <div className="flex flex-col w-full max-w-[1200px] mx-auto mt-[100px] gap-[20px]">
          <div className="flex flex-col items-center justify-center">
            <SectionHeader bullet={bullet}/>
            <h2 className="text-white font-bold text-[32px]">Professional Work Experience</h2>
          </div>
          {jobs.map((job, index) => (
            <JobBlock key={index} job={job} /> 
        ))}
        </div>
    )
}

export default WorkExp;
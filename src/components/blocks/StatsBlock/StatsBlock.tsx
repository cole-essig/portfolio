import StatsCard from "./StatsCard";
import type { Stats } from "../../types/types";

const StatsBlock: React.FC = () => {
  const stats: Stats = [
    { title: "3+", img: "", alt: "", description: "Years of Experience." },
    { title: "30+", img: "", alt: "", description: "Satisfied Clients" },
    { title: "25+", img: "", alt: "", description: "Completed Projects" },
    { title: "100's", img: "", alt: "", description: "Positive Reviews" },
  ];

  return (
    <div className="flex flex-row w-full justify-between mt-[100px] gap-[20px]">
      {stats.map((stat, index) => (
        <StatsCard key={index} stat={stat} />
      ))}
    </div>
  );
};

export default StatsBlock;
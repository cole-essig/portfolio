import StatsCard from "./StatsCard";
import type { Stats } from "../../types/types";
import Icon from "@/assets/code.svg";

const StatsBlock: React.FC = () => {
  const stats: Stats = [
    { title: "3+", img: Icon, alt: "icon", description: "Years of Experience." },
    { title: "30+", img: Icon, alt: "icon", description: "Satisfied Clients" },
    { title: "25+", img: Icon, alt: "icon", description: "Completed Projects" },
    { title: "100's", img: Icon, alt: "icon", description: "Positive Reviews" },
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
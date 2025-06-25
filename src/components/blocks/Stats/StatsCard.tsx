import type { Stat } from "@/components/types/types";
interface StatsCardProps {
  stat: Stat;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  return (
    <div className="flex flex-col w-full max-w-[350px] min-h-[175px] p-[15px] rounded-[12px] border border-green-500 bg-gray-500 hover:bg-gray-400 transition-colors duration-200">
      <div className="text-white font-bold text-[32px]">{stat.title}</div>
      <div className="flex flex-row">
        <img src={stat.img} alt={stat.alt} className="w-[25px] h-[25px]" />
        <div className="text-white text-[20px]">{stat.description}</div>
      </div>
    </div>
  );
};

export default StatsCard;
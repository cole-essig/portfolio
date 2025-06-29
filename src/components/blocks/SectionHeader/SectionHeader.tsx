import type { Bullet } from "@/components/types/types";

interface SectionHeaderProps {
  bullet: Bullet;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ bullet }) => {
  const colorVariant: Record<string, string> = {
    yellow:  "border-[#FFC800]",
    emerald: "border-[#036655]",
  }
  return (
    <div className={`flex rounded-full w-max border-2 ${colorVariant[bullet.color]?? ""}
        bg-gradient-to-br from-[#ffffff0a] to-[#e0f7fa0a] bg-gray-800 p-5`}>
      <img
        src={bullet.img}
        alt={bullet.alt}
        className="w-[30px] h-[30px] mt-[5px] mr-[10px]"
      />
      <p className="text-white text-[24px] font-bold">{bullet.title}</p>
    </div>
  );
};

export default SectionHeader;
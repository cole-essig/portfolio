import type { Bullet } from "@/components/types/types";

interface SectionHeaderProps {
  bullet: Bullet;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ bullet }) => {
  return (
    <div className="flex rounded-full w-max p-6
        bg-gradient-to-br from-[#ffffff0a] to-[#e0f7fa0a] bg-gray-800 p-5"
    >
      <img
        src={bullet.img}
        alt={bullet.alt}
        className="w-[35px] mt-[5px] mr-[10px]"
      />
      <p className="text-white text-[30px] font-bold">{bullet.title}</p>
    </div>
  );
};

export default SectionHeader;
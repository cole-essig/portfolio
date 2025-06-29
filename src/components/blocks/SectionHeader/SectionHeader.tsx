import type { Bullet } from "@/components/types/types";

interface SectionHeaderProps {
  bullet: Bullet;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ bullet }) => {
  return (
    <div className="flex rounded-full w-max border border-white bg-gray-500 p-2">
      <img
        src={bullet.img}
        alt={bullet.alt}
        className="w-[30px] h-[30px] mt-[5px] mr-[10px]"
      />
      <p className="text-white text-[24px]">{bullet.title}</p>
    </div>
  );
};

export default SectionHeader;
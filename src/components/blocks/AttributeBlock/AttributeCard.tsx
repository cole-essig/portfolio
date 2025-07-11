import type { Attribute } from "@/components/types/types";
interface AttributeCardProps {
    attribute: Attribute;   
}

const AttributeCard: React.FC<AttributeCardProps> = ({ attribute }) => {
    return (
      <div 
        className="group flex flex-col items-center justify-start text-center
        w-full max-w-[400px] min-h-[270px] p-[36px]
        bg-[#040917] rounded-[12px]
        bg-gradient-to-br from-[#ffffff0a] to-[#e0f7fa0a]
        shadow-[0_4px_12px_rgba(255,255,255,0.06)]
        transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
        hover:transform hover:-translate-y-[15px] hover:scale-[1.02]
        hover:shadow-[0_10px_30px_rgba(0,240,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
        backdrop-blur-md"
      >
        <div className="text-white font-bold text-[30px] min-h-[48px]">
          {attribute.title}
        </div>
        <div className="flex flex-col items-center justify-start gap-4 mt-4">
          <img src={attribute.img} alt={attribute.alt} className="w-[45px]" />
          <div className="text-white text-[24px] text-center min-h-[60px]">
            {attribute.description}
          </div>
        </div>
      </div>
    )
}

export default AttributeCard;   
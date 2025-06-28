import type { Attribute } from "@/components/types/types";
interface AttributeCardProps {
    attribute: Attribute;   
}

const AttributeCard: React.FC<AttributeCardProps> = ({ attribute }) => {
    return (
        <div>
          <div 
            className="group relative flex flex-col w-full max-w-[300px] min-h-[175px] p-[15px]
            bg-gray-800 rounded-[12px] border-2 border-[#00f0ff]
            bg-gradient-to-br from-[#ffffff0a] to-[#e0f7fa0a]
            shadow-[0_0_0_0_rgba(0,240,255,0)]
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.02]
            hover:shadow-[0_10px_30px_rgba(0,240,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
            backdrop-blur-md"
          >
            <div className="text-white font-bold text-[32px]">{attribute.title}</div>
            <div className="flex flex-row">
                <img src={attribute.img} alt={attribute.alt} className="w-[25px] h-[25px]" />
                <div className="text-white text-[20px]">{attribute.description}</div>
            </div>
          </div>
        </div>
    )
}

export default AttributeCard;   
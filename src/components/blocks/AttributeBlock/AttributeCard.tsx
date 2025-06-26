import type { Attribute } from "@/components/types/types";
interface AttributeCardProps {
    attribute: Attribute;   
}

const AttributeCard: React.FC<AttributeCardProps> = ({ attribute }) => {
    return (
        <div>
          <div className="flex flex-col w-full max-w-[350px] min-h-[175px] p-[15px] rounded-[12px] border border-green-500 bg-gray-500 hover:bg-gray-400 transition-colors duration-200">
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
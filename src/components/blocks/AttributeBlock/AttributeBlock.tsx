import AttributeCard from "./AttributeCard";
import type { Attributes } from "@/components/types/types";
import CodeIcon from "@/assets/code.svg";

const AttributeBlock: React.FC = () => {
    const attributes: Attributes = [
        { title: "Responsive Design", img: CodeIcon, alt: "Responsive Design", description: "Ensuring your website looks great on all devices." },
        { title: "SEO Optimized", img: CodeIcon, alt: "SEO Optimized", description: "Improving your website's visibility on search engines." },
        { title: "Clean Code", img: CodeIcon, alt: "Fast Loading", description: "Writing well-structured, optimized code that's easy to read and maintain." },
        { title: "Fast & Quality", img: CodeIcon, alt: "User Friendly", description: "Shipping projects on time without compromising quality or performance." },
    ];
    return (
        <div className="flex flex-row w-full justify-between mt-[100px] gap-[20px]">
            {attributes.map((attribute, index) => (
                <AttributeCard key={index} attribute={attribute} />
            ))}
        </div>
    )
}

export default AttributeBlock;
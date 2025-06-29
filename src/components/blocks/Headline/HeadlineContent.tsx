import { Button } from "@/components/ui/button";
import RotatingWords from "./RotatingWords";
import SectionHeader from "../SectionHeader/SectionHeader";
import type { Bullet } from "@/components/types/types";
import CodeIcon from "@/assets/code.svg";

const HeadlineContent: React.FC = () => {
    const ViewWork = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log("Looky Looky Senator!")
    }

    const bullet: Bullet = {
        img: CodeIcon,
        alt: "icon",
        title: "Full-Stack Developer",
        color: "emerald" 
    }

    return (
        <div className="flex flex-col max-w-[50vw] mt-[150px]">
            <SectionHeader bullet={bullet} />
            <p className="text-white text-[45px] font-extrabold p-0 mt-[30px]">
                Logical by Nature, Creative by Practice
            </p>
            <div className="flex flex-row">
                <p className="text-white text-[45px] font-extrabold p-0">
                  Engineering
                </p>
                <RotatingWords />
            </div>
            <p className="text-white text-[18px] mt-[20px] max-w-[800px]">
                Im a full-stack software developer who loves turning complex problems into simple, scalable solutions. 
                With a focus on clean architecture and creative thinking, I build tools that make ideas real.
            </p>
            <Button 
                onClick={ViewWork} 
                className="w-[200px] h-[50px] p-[40px] bg-[#03B98B] rounded-[12px] font-bold text-[15px] text-white border-none mt-[25px]
                shadow-[0_4px_12px_rgba(255,255,255,0.06)]
                transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                hover:transform hover:-translate-y-[15px] hover:scale-[1.02]
                hover:shadow-[0_10px_30px_rgba(0,240,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
                backdrop-blur-md cursor-pointer"
            >
                View My Work
            </Button>
        </div>
    )
}

export default HeadlineContent;
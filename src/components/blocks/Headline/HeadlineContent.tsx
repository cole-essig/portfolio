import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RotatingWords from "./RotatingWords";

const HeadlineContent: React.FC = () => {
    const ViewWork = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log("Looky Looky Senator!")
    }
    return (
        <div className="flex flex-col max-w-[50vw] mt-[150px]">
            <div className="flex rounded-full w-max border border-white bg-gray-500 p-2">
                <img src="src\assets\code.svg" alt="icon" className="w-[30px] h-[30px] mt-[5px] mr-[10px]" />
                <p className="text-white text-[24px]">Full-Stack Developer</p>
            </div>
            <p className="text-white text-[45px] font-extrabold p-0">
                Logical by Nature, Creative by Practice
            </p>
            {/* <span className="rotate">Solutions | Innovation | Impact | Creativity </span> */}
            <p className="text-white text-[45px] font-extrabold p-0">
                <RotatingWords />
            </p>
            <p className="text-white text-[45px] font-extrabold p-0">
                Enginerring Ideas into Reality
            </p>
            <p className="text-white text-[18px]">
                I’m a full-stack software developer who loves turning complex problems into simple, scalable solutions. 
                With a focus on clean architecture and creative thinking, I build tools that make ideas real.
            </p>
            <Button onClick={ViewWork} className="bg-white w-max text-black mt-[25px]">View My Work</Button>
        </div>
    )
}

export default HeadlineContent;
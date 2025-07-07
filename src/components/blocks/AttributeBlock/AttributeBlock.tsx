import AttributeCard from "./AttributeCard";
import type { Attributes } from "@/components/types/types";
import BrowserIcon from "@/assets/Icons/021-browser.svg";
import SEOIcon from "@/assets/Icons/004-smartphone-1.svg";
import FastIcon from "@/assets/Icons/050-mechanical-arm.svg";
import CleanCodeIcon from "@/assets/Icons/009-microscope.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const AttributeBlock: React.FC = () => {
    const attributeBlockRef = useRef<HTMLDivElement>(null);

    const attributes: Attributes = [
        { title: "Responsive Design", img: BrowserIcon, alt: "Responsive Design", description: "Ensuring your website looks great on all devices." },
        { title: "SEO Optimized", img: SEOIcon, alt: "SEO Optimized", description: "Improving your website's visibility on search engines." },
        { title: "Clean Code", img: CleanCodeIcon, alt: "Clean Code", description: "Writing well-structured, optimized code that's easy to read and maintain." },
        { title: "Fast & Quality", img: FastIcon, alt: "Fast & Quality", description: "Shipping projects on time without compromising quality or performance." },
    ];

    useEffect(() => {
        gsap.fromTo(
            attributeBlockRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: attributeBlockRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);
    return (
        <div className="flex flex-row w-full justify-between mt-[100px] gap-[20px]" ref={attributeBlockRef}>
            {attributes.map((attribute, index) => (
                <AttributeCard key={index} attribute={attribute} />
            ))}
        </div>
    )
}

export default AttributeBlock;
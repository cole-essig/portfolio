import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollToPlugin)
interface HeaderProps {
    setMeteor: Function
}

const Header: React.FC<HeaderProps> = ({ setMeteor }) => {
    const getInTouch = (setMeteor: Function) => {
        setMeteor(true)
    }
    const scrollToSection = (sectionId: string) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#${sectionId}`,
                offsetY: 100 // Adjust this value to change the offset
            },
            ease: "power2.inOut"
        });
    }
    return (
        < div className="flex justify-between mb-[80px] w-full">
            <h1 className="text-[#03B98B] font-bold text-[24px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                Cole Essig
            </h1>
            <div className="flex flex-row gap-[20px]">
                <h2 
                    className="text-[#03B98B] font-bold text-[24px] hover:scale-115 transition-all duration-200 ease-in-out cursor-pointer"
                    onClick={() => scrollToSection("projects")}
                >
                    Projects
                </h2>
                <h2 
                    className="text-[#03B98B] font-bold text-[24px] hover:scale-115 transition-all duration-200 ease-in-out cursor-pointer"
                    onClick={() => scrollToSection("experience")}
                >
                    Experience
                </h2>
                <h2 
                    className="text-[#03B98B] font-bold text-[24px] hover:scale-115 transition-all duration-200 ease-in-out cursor-pointer"
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </h2>
            </div>
            <Button 
            className="bg-[#03B98B] transition-shadow duration-200 hover:shadow-[0_0_10px_2px_rgba(255,0,0,0.65)]
            text-white cursor-pointer" 
            onClick={() => getInTouch(setMeteor)}
            >
                Activate Meteors
            </Button>
        </div>
    )
}

export default Header
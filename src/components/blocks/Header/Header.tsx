import { Button } from "@/components/ui/button"

const Header: React.FC = () => {
    const getInTouch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("HEY You, Be Fren!!")
    }
    return (
        < div className="flex justify-between mb-[80px]">
            <h1 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                Cole Essig
            </h1>
            <div className="flex flex-row gap-[20px]">
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Projects
                </h2>
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Experience
                </h2>
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Skills
                </h2>
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Testimonials
                </h2>
            </div>
            <Button className="bg-white text-black cursor-pointer" onClick={getInTouch}>Get in Touch</Button>
        </div>
    )
}

export default Header
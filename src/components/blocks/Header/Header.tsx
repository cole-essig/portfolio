import { Button } from "@/components/ui/button"

const Header: React.FC = () => {
    const getInTouch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("HEY You, Be Fren!!")
    }
    return (
        < div className="flex justify-between mx-[80px] mb-[80px]">
            <h1 className="text-white font-bold text-[45px] hover:scale-105 transition-all duration-200 ease-in-out">
                Cole Essig
            </h1>
            <div className="flex flex-row gap-[20px]">
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-text">
                    Projects
                </h2>
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-text">
                    Experience
                </h2>
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-text">
                    Skills
                </h2>
                <h2 className="text-white font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-text">
                    Testimonials
                </h2>
            </div>
            <Button className="bg-white text-black px-4 py-2 rounded" onClick={getInTouch}>Get in Touch</Button>
        </div>
    )
}

export default Header
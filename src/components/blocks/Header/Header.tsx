import { Button } from "@/components/ui/button"
interface HeaderProps {
    setMeteor: Function
}

const Header: React.FC<HeaderProps> = ({ setMeteor }) => {
    const getInTouch = (setMeteor: Function) => {
        console.log("HEY You, Be Fren!!")
        setMeteor(true)
    }
    return (
        < div className="flex justify-between mb-[80px] w-full">
            <h1 className="text-[#03B98B] font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                Cole Essig
            </h1>
            <div className="flex flex-row gap-[20px]">
                <h2 className="text-[#03B98B] font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Projects
                </h2>
                <h2 className="text-[#03B98B] font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Experience
                </h2>
                <h2 className="text-[#03B98B] font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Skills
                </h2>
                <h2 className="text-[#03B98B] font-bold text-[32px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                    Testimonials
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
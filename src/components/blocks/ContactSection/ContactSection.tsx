import ContactForm from "./ContactForm";
import SectionHeader from "../SectionHeader/SectionHeader"; 
import ContactAnimation from "./ContactAnimation";
import type { Bullet } from "@/components/types/types"; 
import CodeIcon from "@/assets/code.svg";

const ContactSection: React.FC = () => {
    const bullet: Bullet = {
        img: CodeIcon,
        alt: "phone icon",
        title: "Have a question? Let's talk!",
    };
    return(
        <div className="flex flex-col items-center justify-center w-full h-full mt-[80px] p-8 relative">
            <SectionHeader bullet={bullet} />
            <div className="flex flex-row mt-[100px]">
              <ContactForm />
              <div 
                className="w-[55vw] ml-[15px] h-[60vh] flex bg-cover bg-contain bg-center bg-no-repeat rounded-[12px] z-0"
              >
                <ContactAnimation />
              </div>
            </div>
        </div>
    )
}

export default ContactSection;
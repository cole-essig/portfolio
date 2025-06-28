import ContactForm from "./ContactForm";
import SectionHeader from "../SectionHeader/SectionHeader"; 
import type { Bullet } from "@/components/types/types"; 
import CodeIcon from "@/assets/code.svg";

const ContactSection: React.FC = () => {
    const bullet: Bullet = {
        img: CodeIcon,
        alt: "phone icon",
        title: "Have a question? Let's talk!",
    };
    return(
        <div className="flex flex-col items-center justify-center w-full h-full p-8 relative">
            <SectionHeader bullet={bullet} />
            <h2 className=" text-white text-3xl font-bold text-center mb-8">
                Get in Touch - Lets Connect!
            </h2>
            <div className="flex flex-row">
              <ContactForm />
              <div className="w-[55vw] ml-[15px] h-[60vh] border border-green-500 z-0">
                {/* Will hold image and animation for mail */}
              </div>
            </div>
        </div>
    )
}

export default ContactSection;
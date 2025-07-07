import githubIcon from "../../../assets/Icons/github_icon.svg";
import linkedInIcon from "../../../assets/Icons/linkedIn_icon.svg";

const Footer: React.FC = () => {
    return (
        <div className="w-full flex flex-row justify-between mt-[250px]">
            <div className="w-full h-[100px] flex items-center justify-center">
                <p className="text-white text-lg">© 2023 Cole Essig. All rights reserved.</p>
            </div>
            <div className="flex flex-row gap-4 p-4">
                <a href="https://github.com/cole-essig" target="_blank" rel="noopener noreferrer">
                    <img
                        src={githubIcon}
                        alt="GitHub Icon"
                        className="w-20 h-10 border-2 border-white mt-5
                        transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                        hover:transform hover:-translate-y-[5px] hover:scale-[1.02]
                        hover:shadow-[0_10px_30px_rgba(255,255,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
                        backdrop-blur-md"
                    />
                </a>
                <a href="https://www.linkedin.com/in/cole-essig/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={linkedInIcon}
                        alt="LinkedIn Icon"
                        className="w-20 h-10 border-2 border-white mt-5
                        transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                        hover:transform hover:-translate-y-[5px] hover:scale-[1.02]
                        hover:shadow-[0_10px_30px_rgba(255,255,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
                        backdrop-blur-md"
                    />
                </a>
            </div>
            <div className="w-full h-[100px] flex items-center justify-center">
                <p className="text-white text-lg">Follow me online!</p>
            </div>
        </div>
    )
}

export default Footer;

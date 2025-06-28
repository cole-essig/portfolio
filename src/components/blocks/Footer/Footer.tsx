import githubIcon from "../../../assets/github_icon.svg";
import linkedInIcon from "../../../assets/linkedin_icon.svg";

const Footer: React.FC = () => {
    return (
        <div className="w-full flex flex-row jusitfy-between">
            <div className="w-full h-[100px] flex items-center justify-center">
                <p className="text-white text-lg">© 2023 Cole Essig. All rights reserved.</p>
            </div>
            <div className="flex flex-row gap-4 p-4">
                <a href="https://github.com/cole-essig" target="_blank" rel="noopener noreferrer">
                    <img
                        src={githubIcon}
                        alt="GitHub Icon"
                        className="w-20 h-10 border-2 border-white mt-5"
                    />
                </a>
                <a href="https://www.linkedin.com/in/cole-essig/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={linkedInIcon}
                        alt="LinkedIn Icon"
                        className="w-20 h-10 border-2 border-white mt-5"
                    />
                </a>
            </div>
            <div className="w-full h-[100px] flex items-center justify-center">
                <p className="text-white text-lg">Follow me online! Lets Connect! Lets Build.</p>
            </div>
        </div>
    )
}

export default Footer;

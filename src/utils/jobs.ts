import type { Job, Jobs } from "@/components/types/types";
import LandscapeIcon from "@/assets/Icons/005-tools.svg";
import FreeLanceIcon from "@/assets/Icons/003-usb.svg";
import OFCAIcon from "@/assets/Icons/037-satellite-dish.svg";

export const SchoonLandscape: Job = {
    company: "Schoon Landscape",
    position: "Owner/Operator",
    date: "2014 - Present",
    acchievements: [
        "Built a successful landscaping business from the ground up",
        "Managed all aspects of the business including client relations, project management, and financials",
        "Oversaw 200+ project lifecycles, achieving 95% client satisfaction by aligning creative, technical, and operational goals",
        "Blended craftsmanship in welding, carpentry, and landscaping with modern technologies to create integrated physical environments"
    ],
    techstack: ["Business Management", "Customer Service", "Project Management"],
    active: true,
    img: LandscapeIcon

};

export const FreeLanceWebDev: Job = {
    company: "Freelance Web Developer", 
    position: "Full-Stack Web Developer",  
    date: "2023 - Present",     
    acchievements: [
        "Developed and maintained multiple web applications for various clients",
        "Utilized modern web technologies to create responsive and user-friendly interfaces",
        "Collaborated with clients to understand their needs and deliver tailored solutions",
        "Delivered projects on time and within budget, ensuring high client satisfaction for over 10 projects",
    ],
    techstack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", "WordPress"],
    active: true,
    img: FreeLanceIcon
};

export const OFCA: Job = {
    company: "Oregon Fire Code Authority",
    position: "External Web Developer",
    date: "2025 - Present",
    acchievements: [
        "Developed a ground up web application for the Oregon Fire Code Authority with a team of developers",
        "Implemented custom themes and plugins to enhance functionality, enhancing user experience and data management",
        "Ensured website compliance with accessibility standards, and handled several backend tasks including database management and server configuration"
    ],
    techstack: ["TypeScript", "Apollo", "GraphQL", "React", "Antd", "keystoneJS"],
    active: true,
    img: OFCAIcon
};

export const JobList: Jobs = [
    SchoonLandscape,
    FreeLanceWebDev,
    OFCA
];
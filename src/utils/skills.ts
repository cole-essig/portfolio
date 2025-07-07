import type { Skill, Skills } from "@/components/types/types";
import CodeIcon from "@/assets/code.svg";

export const fullStackReactDev: Skill = {
    skill: "Full-Stack Developer",
    description: "I build full-stack applications with React, focusing on seamless user experiences and clean architecture. Writing code that connects frontend design to backend logic is where I’m most in flow.",
    img: CodeIcon,
    alt: "Full Stack Developer icon",
     points: {
        proc: 9,
        bk: 7,
        os: 8
    }
};

export const projectManagement: Skill = {
    skill: "Project Management",
    description: "I enjoy creating structure out of ambiguity and guiding projects from idea to execution. Staying organized, setting clear goals, and helping a team move forward gives me a strong sense of purpose.",
    img: CodeIcon,
    alt: "Project Management icon",
     points: {
        proc: 9,
        bk: 9,
        os: 9
    }
};

export const python: Skill = {
    skill: "Python",
    description: "Python is a tool I'm embracing for scripting, APIs, and backend tasks. I value its readability and power when building scalable, practical solutions.",
    img: CodeIcon,
    alt: "Python icon",
     points: {
        proc: 8,
        bk: 6,
        os: 7
    }
};

export const webDesign: Skill = {
    skill: "Web Design",
    description: "Design is where logic meets feeling, and I care deeply about how users experience what I build. I aim for interfaces that are visually clean, intuitive, and responsive across devices.",
    img: CodeIcon,
    alt: "Web Design icon",
     points: {
        proc: 8,
        bk: 8,
        os: 8
    }
};

export const typecript: Skill = {
    skill: "TypeScript",
    description: "TypeScript helps me build with confidence and scale with fewer surprises. I rely on it to catch errors early and make large codebases more maintainable, it is my natural progression in skilled js based tech stacks.",
    img: CodeIcon,
    alt: "TypeScript icon",
    points: {
        proc: 9,
        bk: 8,
        os: 8
    }
};

export const adaptiveLearning: Skill = {
    skill: "Adaptive Learning",
    description: "I pick things up quickly by breaking problems down and experimenting hands-on. Learning is part of my daily process, and I seek feedback often to improve faster.",
    img: CodeIcon,
    alt: "Adaptive Learning icon",
     points: {
        proc: 9,
        bk: 9,
        os: 9
    }
};

export const java: Skill = {
    skill: "Java",
    description: "I’m actively sharpening my Java skills to deepen my backend capabilities and understand larger system design. I appreciate its structure and performance, especially in enterprise contexts.",
    img: CodeIcon,
    alt: "Java icon",
     points: {
        proc: 8,
        bk: 5,
        os: 6
    }
};

export const skilledTeamMember: Skill = {
    skill: "Skilled Team Member",
    description: "I value being part of a collaborative, communicative team where everyone brings something unique to the table. I’m quick to support others, listen well, and take initiative when needed.",
    img: CodeIcon,
    alt: "Skilled Team Member icon",
     points: {
        proc: 9,
        bk: 9,
        os: 9
    }
};

export const skills: Skills = [
    fullStackReactDev,
    projectManagement,
    python,
    webDesign,
    typecript,
    adaptiveLearning,
    java,
    skilledTeamMember
];
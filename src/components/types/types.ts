export interface Stat {
    title: string;
    img: string;
    alt: string,
    description: string;
};

export type Stats = Stat[];

export interface Bullet {
    img: string,
    alt: string,
    title: string,
};

export interface Project {
  featureImg: string,
  toolName: string[],
  title: string,
  description: string,
  demoLink: string,
  githubLink: string 
};

export type Projects = Project[];

export interface Attribute {
    title: string,
    description: string,
    img: string,
    alt: string
};

export type Attributes = Attribute[]; 

export interface Job {
    company: string,
    position: string,
    date: string,
    acchievements: string[],
    techstack: string[],
    active: boolean
};

export type Jobs = Job[]; 

export interface Skill {
    skill: string,
    description: string,
    img: string,
    alt: string
};

export type Skills = Skill[];
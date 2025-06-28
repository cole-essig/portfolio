import type { Project, Projects } from "@/components/types/types"
export const WTWR: Project = {
    featureImg: "../assets/WTWR.jpg",
    toolName: ["React", "Node.js", "Express", "MongoDB"],
    title: "WTWR-What to Wear Right Now",
    description: "WTWR (What to Wear?) The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user",
    demoLink: "",
    githubLink: "https://github.com/cole-essig/se_project_react",
};

export const CoffeeShop: Project = {
    featureImg: "../assets/CoffeeShop.jpg",
    toolName: ["HTML", "CSS", "JavaScript", "BEM"],
    title: "TripleTen Coffee Shop",
    description: "This is a stylish, single-page layout project built to demonstrate clean, responsive UI with a strong visual hierarchy. Designed as part of a front-end practice series, it showcases semantic HTML, modern CSS layout (Flexbox/Grid), and subtle animations for a polished user experience. The layout is optimized for both desktop and mobile devices, ensuring accessibility and usability across various screen sizes.",
    demoLink: "",
    githubLink: "https://github.com/cole-essig/se_project_coffeeshop",
};

export const NewsSearch: Project = {
    featureImg: "../assets/NewsSearch.jpg",
    toolName: ["React", "NewsExplorerAPI", "Node.js"],
    title: "Custom News Search",
    description: "News Search Website Welcome to the News Search Website, a platform that allows users to search news articles, save them for later, and log in to manage their preferences. Powered by the NewsExplorerAPI, this app provides a simple, user-friendly interface to explore the latest news based on specific keywords.",
    demoLink: "",
    githubLink: "https://github.com/cole-essig/se_news_search",
};

export const AroundTheUS: Project = {
    featureImg: "../assets/AroundTheUS.jpg",
    toolName: ["HTML", "CSS", "JavaScript",],
    title: "Around The Us",
    description: "Built to display the beauty of travel and share what adventures we can all get even just here in the United States. A way to share, collaborate, explore all threw a webpage built for simplicity yet efficiency. Using key fundamentals of HTML CSS and expanding on them in a unique way this sight is meant as a connection to others and a display of my growing skill with web design.",
    demoLink: "",
    githubLink: "https://github.com/cole-essig/se_project_aroundtheus",
};

export const FeatProj: Projects = [
    WTWR, CoffeeShop, AroundTheUS, NewsSearch
]
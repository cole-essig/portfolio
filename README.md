# My Portfolio

My Portfolio is a web-based site showcasing my full-stack development projects, skills, and experience. It includes real-world applications and links to live demos and source code. Built to demonstrate both frontend and backend proficiency.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices.
- **Project Filtering**: Quickly filter and browse projects by category or technology.
- **About Me Section**: Background, skillset, and career goals.
- **Contact Form**: Send messages directly from the site.
- **Dark Mode Toggle**: Easily switch between light and dark themes.

## Tech Stack

- **Frontend**: React.js (with Vite)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/)
- Make sure `npm` is installed

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Contact

Send me a message on GitHub or email me at **colepessig@gmail.com**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

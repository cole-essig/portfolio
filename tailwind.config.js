/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // ✔️ root HTML file
    "./src/**/*.{js,ts,jsx,tsx}"  // ✔️ all files in /src
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
      });
    }
  ]
};


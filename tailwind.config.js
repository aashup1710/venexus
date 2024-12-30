/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
};



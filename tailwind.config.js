/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
      extend: {},

      colors: {
        bgColor : '#F7F7F7',
        gray : '#E1E1E1',
        white : '#FFFF',
        black: '#0000'
      },

      backgroundImage: {
        'main-img': "url('./dist/assets/maddi-bazzocco-pgVT_CvjsGE-unsplash.jpg')",
      }
  },
  plugins: [],
  darkMode: "class",
};
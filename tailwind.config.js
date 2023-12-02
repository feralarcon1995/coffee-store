/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'beige': '#FFEED8',
        'black': '#1E1E1E',
        'coffee': '#603809',
        'gray':'#707070',
        'yellow':'#F9C06A'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


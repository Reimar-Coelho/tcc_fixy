/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgHeader': `#FABE3B`,
        'colorTxt': `#ffffff`,
        'colorTitle': `cyan`,
        
      },
      fontFamily: {
        'body': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
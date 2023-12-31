/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        "loginBackGround" :"url(/backGround-login.jpg)"
      },
      height : {
        'large-box' :"335px"
      }
    },
  },
  plugins: [],
}

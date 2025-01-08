/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: "hsl(0, 0%, 100%)",
          100: "hsl(252, 6%, 83%)",
          200: "hsl(245, 15%, 58%)",
          300: "hsl(245, 19%, 35%)",
          400: "hsl(248, 70%, 10%)"
        },
        primary: {
          100: "hsl(7, 88%, 67%)",
          200: "hsl(7, 71%, 60%)"
        }
      },
      fontSize: {
        labels: "20px"
      },
      fontFamily: {
        body: ['Inconsolata'] 
      },
      backgroundImage: {
        desktop: "url('./background-desktop.png')",
        tablet: "url('./background-tablet.png')",
        mobile: "url('./background-mobile.png')",
      }
    },
  },
  plugins: [],
}
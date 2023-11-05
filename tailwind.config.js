/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#440952",
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      }
    },
  },
  daisyui: {
       themes: [
         {
           mytheme: {

                "primary": "#440952",

                "secondary": "#100115",

                "accent": "#829191",

                "neutral": "#2b3440",

                "base-100": "#ffffff",

                "info": "#3abff8",

                "success": "#36d399",

                "warning": "#fbbd23",

                "error": "#f87272",
           },
         },
       ],
     },
  plugins: [require("daisyui")],

}

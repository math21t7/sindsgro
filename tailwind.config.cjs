/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkgreen: "#66725F",
      lightgreen:"#A9B8A3",
      white: "#F3F3F3",
      black: "#403B3B",
      brown: "#9E9789",
      beige: "#F5E0CD",
    },
    fontSize:{
      display: "96px",
      text2xl: "64px",
      textxl:"40px",
      textl:"32px",
      textm:"24px",
      textsm:"20px",
      textxsm:"16px"
    },
    extend: {
      cursor: {
        mincursor: 'url(/images/cursor.png) 25 25, pointer',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

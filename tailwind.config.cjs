/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkgreen: "#6C7B66",
      lightgreen:"#A9B8A3",
      white: "#F3F3F3",
      black: "#403B3B",
      brown: "#9E9789",
      beige: "#F5E0CD",
    },
    fontSize:{
      mddisplay: "96px",
      mdtextxl: "64px",
      mdtextl:"40px",
      mdtextmedium:"32px",
      mdtextm:"24px",
      mdtextsm:"18px",
      mdtextxsm:"16px"
    },
    extend: {
      cursor: {
        mincursor: 'url(/images/cursor.png) 25 25, pointer',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

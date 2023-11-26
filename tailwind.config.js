/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      content: {
        sun: 'url("./dist/images/icons/sun.svg")',
        moon: 'url("./dist/images/icons/moon.svg")',
      },
      colors: {
        primary: "#E4F15F",
        secondary: "#9354FF",
        dark: "#0d0d0d",
        darkSec: "#2d2d2d",
      },
      screens: {
        xl: "1080px",
      },
      fontFamily: {
        poppins: "poppins",
        acornthin: "acornthin",
        acornsemi: "acornsemi",
        acornbold: "acornbold",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

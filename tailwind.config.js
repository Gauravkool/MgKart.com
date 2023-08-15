// /** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      margin: {
        43: "172px",
      },
      padding: {
        12.5: "50px",
      },
    },
    colors: {
      primary: {
        light: "rgb(245,148,148)",
        default: "rgb(245,81,81)",
        dark: "rgb(245,47,47)",
      },
      gray: {
        200: "rgb(244,245,246)",
      },
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
};

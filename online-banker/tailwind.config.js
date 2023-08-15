const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "Arial", "sans-serif"],
    },
    colors: {
      primary: {
        50: "#fbca8e", // Lightest
        100: "#fabf77",
        200: "#f9b461",
        300: "#f9a94a",
        400: "#f89f34",
        500: "#F7941D", // Original primary color
        600: "#f08708",
        700: "#d57808",
        800: "#bb6907",
        900: "#a05a06", // Darkest
      },
      secondary: {
        50: "#E5F6FF",
        100: "#CCEFFF",
        200: "#99DFFF",
        300: "#66CFFF",
        400: "#33BFFF",
        500: "#2DB7FF",
        600: "#008CBA",
        700: "#005E80",
        800: "#003045",
        900: "#001520",
      },
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      violet: colors.violet,
      blue: colors.blue,
      slate: colors.slate,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
};

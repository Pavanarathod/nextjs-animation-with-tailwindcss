const plugin = require("tailwindcss/plugin");

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   // primaryLight: "#7ed56f",
    //   // primary: "#55c57a",
    //   // primaryDark: "#28b485",
    //   // grayDark: "#777",
    //   // grayLight: "#f7f7f7",
    //   // white: "#fff",

    //   primary: "#eb2f64",
    //   primarylight: "#FF3366",
    //   primarydark: "#BA265D",
    //   gray: {
    //     100: "#faf9f9",
    //     200: "#f4f2f2",
    //     300: "#f0eeee",
    //     400: "#ccc",
    //     500: "#333",
    //     600: "#777",
    //     700: "#999",
    //   },
    // },
    extend: {},
  },
  plugins: [rotateX],
};

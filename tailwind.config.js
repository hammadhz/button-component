/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "2rem",
        sm: "1rem",
      },
      screens: {
        lg: "992px",
        md: "768px",
        sm: "425px",
      },
    },
    extend: {
      colors: {
        primary: {
          blue: "#3D5AFE",
          crayola: "#2962FF",
          chineseWhite: "#E0E0E0",
        },
        secondary: {
          silver: "#AEAEAE",
          sparkle: "#455A64",
          yankeesBlue: "#1C313A",
          persianRed: "#D32F2F",
          crimsonRed: "#9A0007",
          olive: "#3F3F3F",
          crayolaZero: "#0039CB",
        },
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
      boxShadow: {
        default: "0px 2px 3px rgba(51, 51, 51, 0.2)",
        primary: "0px 2px 3px rgba(41, 98, 255, 0.2)",
        secondary: "0px 2px 3px rgba(69, 90, 100, 0.2)",
        danger: "0px 2px 3px rgba(211, 47, 47, 0.2)",
      },
    },
  },
  plugins: [],
};

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
        },
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};

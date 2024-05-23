/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        blueDark: "#141778",
        red: "#FF5851",
        yellow: "#F3BA2F",
        orange: "#F7931A",
        blue: "#5F5FFF",
        bhc: "#FFBF22",
        bitcoin: "#F7931A",
        eth: "#1920E0",
        lightGray: "#F2F2FF",
        darkblack: "#000619",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "",
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        questrial: "Questrial",
        poppins: "Poppins",
      },
      colors: {
        primary: "#0bab7c",
        secondary: "#1a2926",
        "main-bg": "#080f0d",
        "text-color": "#f9fff9",
        "border-color": "#192624",
        "hover-bg": "#20302d",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".text-muted": {
          opacity: 0.8,
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

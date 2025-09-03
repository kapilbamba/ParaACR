/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryMain: "#389fd7",
        primaryLight: "#88c5e7",
        primaryLighter: "#d7ecf7",
        primaryDark: "#225f81",
        contrastText: "#ffffff",
        SecondaryText:"#70001d",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F5CD15",
        monkeyColor: "#000000",
        paraColor: "rgb(217 217 217 / 59%);",
        activeBg:"#000"
      },
    },
  },
  plugins: [],
};

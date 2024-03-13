/**   @type {import('tailwindcss').Config} */
//
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
      },
    },
  },
  plugins: [],
};

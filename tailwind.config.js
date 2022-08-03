/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#dff9fb",
        secondary: "#95afc0",
      },
    },
  },
  plugins: [],
};

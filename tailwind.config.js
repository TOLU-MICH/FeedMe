/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F65F5F",
        secondary: "#FDCE77",
      },
    },
  },
  plugins: [],
};

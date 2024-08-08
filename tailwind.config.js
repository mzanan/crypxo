/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6900FF",
      },
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};

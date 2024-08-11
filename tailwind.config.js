/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6900FF",
        secondary: "#8D43F8",
        dark: "#1B1B1B",
        gray: "#373737",
        "lilac-light": "#E9DFFF",
      },
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};

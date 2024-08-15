/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#6900FF",
        secondary: "#8D43F8",
        dark: "#1B1B1B",
        gray: "#373737",
        yellow: "#FFF42C",
        "lilac-light": "#E9DFFF",
      },
      backgroundImage: {
        "shape-left": "url('./assets/images/background-shape-left.png')",
        "shape-bottom": "url('./assets/images/background-shape-bottom.png')",
      },
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};

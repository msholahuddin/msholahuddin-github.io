/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b",
        dark: "#0f172a",
        input: "#93c5fd",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};

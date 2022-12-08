/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--clr-bg-primary)",
        secondary: "var(--clr-bg-secondary)",
      },
      textColor: {
        primary: "var(--clr-text-primary)",
        secondary: "var(--clr-text-secondary)",
      },
    },
  },
  plugins: [],
};

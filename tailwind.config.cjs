/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0deg, 0%, 100%)",
      gray: {
        100: "hsl(185deg, 5%, 95%)",
        300: "hsl(185deg, 5%, 95%)",
        500: "hsl(185deg, 5%, 95%)",
        700: "hsl(185deg, 5%, 95%)",
        900: "hsl(185deg, 5%, 95%)",
      },
      primary: "hsl(340deg, 65%, 47%)",
      secondary: "hsl(240deg, 60%, 63%)",
    },
    fontWeight: {
        normal: 500,
        medium: 600,
        bold: 800,
    },
    extend: {},
  },
  plugins: [],
};

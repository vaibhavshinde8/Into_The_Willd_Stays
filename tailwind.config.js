/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#012258",
        secondry: "#F77706",
      },
      fontFamily: {
        primaryF: ["Caveat", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        times: ['"Times New Roman"', "serif"], // Add Times New Roman
      },
    },
  },
  plugins: [],
};

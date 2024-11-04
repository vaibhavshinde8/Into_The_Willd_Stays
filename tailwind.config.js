/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ethereal: ["Ethereal", "sans-serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
      },
    },
  },
  plugins: [],
};

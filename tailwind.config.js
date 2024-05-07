/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      bri: ['"Bricolage Grotesque", sans-serif, system-ui'],
      com: ['"Cormorant Garamond", serif, system-ui'],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
        fadeOut: "fadeOut 0.2s ease-in-out forwards",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1, display: "initial" },
          "100%": { opacity: 0, display: "none" },
        },
      }),
    },
    fontFamily: {
      bri: ['"Bricolage Grotesque", sans-serif, system-ui'],
      com: ['"Cormorant Garamond", serif, system-ui'],
    },
  },
  plugins: [],
};

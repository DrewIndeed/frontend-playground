/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out forwards",
        fadeOut: "fadeOut 0.3s ease-in-out forwards",
        pageIn: "pageIn 2.1s ease-in-out forwards",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        pageIn: {
          "0%": {
            width: 10,
            height: "80dvh",
            borderRadius: "2rem",
          },
          "100%": {
            width: "100dvw",
            height: "100dvh",
            borderRadius: 0,
          },
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

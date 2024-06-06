/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pageIn: "pageIn 2.1s ease-in-out forwards",
      },
      keyframes: () => ({
        pageIn: {
          "0%": {
            width: 10,
            height: "80dvh",
            borderRadius: "1.5rem",
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

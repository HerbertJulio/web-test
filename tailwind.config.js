import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        robotomono: ["Roboto Mono"],
      },
    },
  },
  plugins: [typography],
};

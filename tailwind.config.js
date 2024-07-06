/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hiro: ["Hiro Misake", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        primary: "#F3EDE1",
        secondary: "#3F4A79",
        accent: "#E56E0C",
      },
      screens: {
        lg: { max: "1439px" },
        md: { max: "1023px" },
        sm: { max: "767px" },
      },
    },
  },
  plugins: [],
};

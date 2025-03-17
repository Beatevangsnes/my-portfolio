/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_beige: "#FEFDF5",
        custom_pink: "#FF007B",
        custom_black: "#14293a",
    },
   },
  },  
  plugins: [require("daisyui")],
};

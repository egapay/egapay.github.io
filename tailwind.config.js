/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "main-text": "#e0e0e0",
      "main-background": "#1f1f1f",
      "main-primary": "#84a3da",
      "main-secondary": "#333333",
      "main-accent": "#a69582",
      "main-black": "#000000",
    },
  },

  plugins: [daisyui],
};

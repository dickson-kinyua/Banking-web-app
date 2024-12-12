/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#f2f4f6",
        "custom-yellow": "#fed403",
        "Debit-bg": "#01151c",
      },
    },
  },
  plugins: [],
};

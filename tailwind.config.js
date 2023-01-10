/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgound-gred": "linear-gradient(180deg, #0F1010 0%, #181818 100%)",
      },
    },
  },
  plugins: [],
};

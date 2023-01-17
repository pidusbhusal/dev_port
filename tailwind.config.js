/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {},
      "backgroundImage": {
        "backgound-gred": "#101111",
        "navigation-gred":
          "linear-gradient(226.65deg, #262626 0%, #1C1B1B 103.05%)",
      },
    },
  },
  plugins: [],
};

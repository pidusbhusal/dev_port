/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {},
      "backgroundImage": {
        "timeline-bg":"linear-gradient(245.05deg, #141414 -13.09%, #0A0A0A 100.52%)",
        "backgound-gred": "#101111",
        "navigation-gred":"linear-gradient(226.65deg, #262626 0%, #1C1B1B 103.05%)",
        "work-gred":"linear-gradient(263.96deg, #262626 0%, #1B1A1A 99.67%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "last-gred-border": " linear-gradient(180deg, #313131 68.75%, rgba(34, 33, 33, 0) 100%)",
      },
      backgroundImage: {
        "timeline-bg":"linear-gradient(245.05deg, #141414 -13.09%, #0A0A0A 100.52%)",
        "backgound-gred":"#101111",
        "testimonial-gred" :"linear-gradient(226.65deg, #262626 0%, #1C1B1B 103.05%)",
        "last-gred-mobile":"linear-gradient(180deg, rgba(12, 12, 12, 0) 0%, rgba(13, 13, 13, 0.848958) 50%, #0D0D0D 100%)",

        "navigation-gred":"linear-gradient(226.65deg, #262626 0%, #1C1B1B 103.05%)",
        "work-gred": "linear-gradient(263.96deg, rgba(38, 38, 38, 0.9) 0%, rgba(27, 26, 26, 0.9) 99.67%)",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    width: {
      48: "48px",
    },
    height: {
      48: "48px",
    },
    backgroundImage: {
      "hero-img": 'url("./src/assets/home-img/HomeHeroImage.png")',
    },
  },
  plugins: [],
};

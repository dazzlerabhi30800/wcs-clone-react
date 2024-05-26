/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        movingBg: {
          "0%": { backgroundPosition: "0vh" },
          "50%": { backgroundPosition: "50vh" },
          "100%": { backgroundPosition: "100vh" },
        },
      },
      animation: {
        movingBg: "movingBg 8s linear infinite"
      },
      width: {
        48: "40px",
      },
      height: {
        48: "40px",
      },
      backgroundImage: {
        "hero-img": 'url("./src/assets/home-img/HomeHeroImage.png")',
      },

    }
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#fbb110',
          red: '#ff1333',
          brown: '#241917',
          cream: '#faf0e4',
        },
      },
      fontFamily: {
        race: ["var(--font-race)"],
        rajdhani: ["var(--font-rajdhani)"],
      },
    },
  },
  plugins: [],
};
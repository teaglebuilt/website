module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        "plus-2xl": { max: "1535px" },
        "plus-xl": { max: "1279px" },
        "plus-lg": { max: "1023px" },
        "plus-md": { max: "767px" },
        "plus-sm": { max: "520px" },
      },
    },
  },
  plugins: [],
};

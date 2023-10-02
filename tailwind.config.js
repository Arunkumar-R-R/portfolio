/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: { max: "700px" },
      custom_sm: {
        max: "380px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      extraTiny:'12px',
      tiny: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
    },
    screens: {
      lg: { max: "700px" },
      custom_sm: {
        max: "380px",
      },
    },
    container: {
      center: true,
    },
    colors: {
      custom_black: {
        500: "rgba(0, 0, 0, 0.1)",
        600: "rgba(0, 0, 0, 0.4)",
        700: "rgba(0, 0, 0, 0.6)",
        800: "#040404",
      },
      primaryColor: "#0267BC",
      textPrimary: "#212121",
    },
  },
  plugins: [],
};

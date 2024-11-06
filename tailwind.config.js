/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_text: "#18191F",
        secondary_text: "#FFFFFF",
        tertiary_text: "#D1D5DB",
        primary_color: "#09BC8A",
        secondary_color: "#004346",
        card_color: "#508991",
        dark_green: "#172A3A",
        red: "#992020",
      },
      fontSize: {
        "0xl": "26.2px",
        "4xl": "38px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
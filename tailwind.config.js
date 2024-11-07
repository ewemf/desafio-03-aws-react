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
        "5xl": "42px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      height: {
        "38": "170px",
        "100": "440px",
      },
      boxShadow: { 
        '3xl': '2px 2px rgba(0, 0, 0, 0), 6px 6px rgba(0, 0, 0, 0)',
        '4xl': '1px 1px 1px 3px rgba(0, 0, 0, 1), 4px 0 1px 0 rgba(0, 0, 0, 1)',
      },
      margin: {
        '100': '480px',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgtest': "url('/src/assets/images/question-bg.png')"
      },
      colors: {
        white: "#fff",
        royalblue: "#0148b7",
        bgblue: "#4F82D1",
        placeholdertext:"#C4C4C4",
        gray: {
          "100": "#030303",
          "200": "rgba(255, 255, 255, 0)",
        },
        black: "#000",
        cornflowerblue: "#4f82d1",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        open_sans:"Open Sans",
      },
      borderRadius: {
        "31xl": "50px",
        mini: "15px",
      },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      lg: "20px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

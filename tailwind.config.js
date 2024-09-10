/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust these paths based on your project structure
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        btnColor: "#8211e7",
        textGray: "#bababa",
        searchGray: "#323232",
        bgColor: "#FFFFFF",
      },
      fontSize: {
        'responsive-lg': 'calc(80px * (100vw / 1920))', // responsive font size using calc
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-image-custom": {
          WebkitMaskImage: "linear-gradient(#000, rgb(0,0,0,0.2))",
          maskImage: "linear-gradient(#000, rgb(0,0,0,0.2))",
        },
        ".btn-linear-gradient": {
          background: "linear-gradient(135deg, #083F9B, #7F56D9)",
        },
        ".hero-linear-gradient": {
          background: "linear-gradient(45deg, #04016C, #4A16BD)",
        },
        ".after-hero-linear-gradient": {
          background:
            "linear-gradient(180deg, #084FC7 0%, rgba(8, 79, 199, 0) 172.2%);",
        },
        ".section-gradient": {
          background:
            "linear-gradient(0deg, #D9ECFF 0%, rgba(217, 236, 255, 0) 100%)",
        },
        ".word-spacing-0": {
          "word-spacing": "0px",
        },
        ".gradient-box": {
          background: "linear-gradient(90deg, #D9ECFF 100%, #F0F3FF 0%)",
        },
        ".word-spacing-1": {
          "word-spacing": "0.25rem",
        },
        ".word-spacing-2": {
          "word-spacing": "0.5rem",
        },
        ".word-spacing-3": {
          "word-spacing": "1rem",
        },
      });
    },
  ],
};

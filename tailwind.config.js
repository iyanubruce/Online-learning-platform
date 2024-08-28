/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust these paths based on your project structure
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "btnColor": "#8211e7",
        "textGray": "#bababa",
        "searchGray": "#323232",
        "bgColor": "#161616"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-image-custom': {
          WebkitMaskImage: 'linear-gradient(#000, rgb(0,0,0,0.2))',
          maskImage: 'linear-gradient(#000, rgb(0,0,0,0.2))',
        }
      })
    }
  ],
}

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
        "searchGray": "#323232"
      }
    },
  },
  plugins: [],
}

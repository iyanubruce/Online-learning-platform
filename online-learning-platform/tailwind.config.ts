import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor: '#161616',
        bgCard: '#808080',
        bgCtext: '#ACACAC',
        btnColor: '#8211e7',
        searchGray:"#323232",
        textGray: '#c2c2c2',
        whitish: '#EAEAEA',
        whit2: "#ECECEC",
       searchGrayH: '#4B4B4B'
      }
    },
  },
  plugins: [],
};
export default config;

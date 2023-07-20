/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C5CDD",
        light: "#FBFBFB",
        dark: "#202124",
        "gray-002": "#F2F2F2",
        "gray-003": "#DFE1E5",
        "gray-004": "#70757A",
        "gray-005": "#ECECEC",
        "gray-006": "#9AA0A6",
        "gray-009": "#303134",
      },
    },
  },
  plugins: [],
};

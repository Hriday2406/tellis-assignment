/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-1": "#c28565",
        "theme-2": "#AB6A49",
        title: "#0D0D0D",
        body: "#B2B2B2",
        "smoke-1": "#E8CDBF",
        "smoke-2": "#F4E8EI",
        "smoke-3": "#f9f3f0",
      },
    },
  },
  plugins: [],
};


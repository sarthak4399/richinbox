/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#ffffff",
          text: "#343a40",
          sidebarBg: "#e9ecef",
          topbarBg: "#ced4da",
          border: "#adb5bd",
        },
        dark: {
          bg:"#111111",
          text: "#f8f9fa",
          sidebarBg: "#101113",
          topbarBg: "#495057",
          border: "#343a40",

        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  
  plugins: [],
};

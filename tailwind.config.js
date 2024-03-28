/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#121314",
        bgGrayColor: "#1D1E1F",
        whiteColor: "#FFFFFF",
        primaryColor: "#37B55C",
        grayColor: "#717579",
        blackColor: "#2D2F31",
      },
    },
  },
  plugins: [
    import("@tailwindcss/aspect-ratio"),
    import("@tailwindcss/typography"),
  ],
};

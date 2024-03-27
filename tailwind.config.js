/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#222629",
        whiteColor: "#FFFFFF",
        buttonColor: "#8AC832",
        grayColor: "#717579",
        blackColor: "#2D2F31",
        // blueGrey: "#5885AF",
        // midnightBlue: "#41729F",
        // darkBlue: "#274472",
        // babyBlue: "#C3E0E5",
        // gainsboro: "#E2DED0",
      },
    },
  },
  plugins: [
    import("@tailwindcss/aspect-ratio"),
    import("@tailwindcss/typography"),
  ],
};

/** @type {import('tailwindcss').Config} */
const rem = (px) => `${px / 16}rem`;
const plugin = require("tailwindcss/plugin");
const theme = {
  screens: {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  },
  colors: {
    white: "#fff",
    black: "#000",
  },
  fontFamily: {
    en: "Bohme",
    kr: "Pretendard",
  },
  opacity: {
    0: "0",
    10: "0.1",
    20: "0.2",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    80: "0.8",
    90: "0.9",
  },
  fontSize: [
    10, 11, 12, 13, 14, 15, 16, 17, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    30, 32, 34, 36, 38, 40, 42, 44, 54, 56, 58, 60, 64, 65, 70, 72, 127, 147,
    280, 130,
  ].reduce((previousValue, currentValue) => {
    previousValue[currentValue] = rem(currentValue);
    return previousValue;
  }, {}),
  spacing: [
    0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 20, 22, 24, 26, 28, 32, 30, 33, 40, 43, 44, 48, 50, 52, 55, 58, 60, 65,
    68, 70, 72, 80, 84, 92, 100, 120, 130, 142, 148, 150, 170, 200,
  ].reduce((previousValue, currentValue) => {
    previousValue[currentValue] = rem(currentValue);
    return previousValue;
  }, {}),
  letterSpacing: [
    -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ].reduce((previousValue, currentValue) => {
    previousValue[currentValue] = rem(currentValue);
    return previousValue;
  }, {}),
  extend: {
    easing: {
      0: "cubic-bezier(0.26, 0.06, 0, 1)",
      1: "cubic-bezier(0.18, 0.06, 0.23, 1)",
      2: "cubic-bezier(0.43, 0.05, 0.17, 1)",
      3: "cubic-bezier(0.47, 0.16, 0.24, 1)",
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
    },
  },
};

export default {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: theme,
  plugins: [
    plugin(({ addVariant, addComponents, theme }) => {
      addComponents({
        ".hidden": {
          width: "1px",
          height: "1px",
          position: "absolute",
          top: "-99999px",
          overflow: "hidden",
          visibility: "hidden",
        },
      });
    }),
  ],
};

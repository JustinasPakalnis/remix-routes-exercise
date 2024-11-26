import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": `0 0 0 1px var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color), 0 2px 4px var(--tw-shadow-color)`,
      },
      colors: {
        greenbg: "#f0fdf4",
        greenhl: "#16a34a",
        simbuka: "#5D1C59",
        simbuka2: "#461444",
        graybg: "#f9fafb",
        grayrow: "#fcfcfd",
        graysort: "#a8aeb9",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

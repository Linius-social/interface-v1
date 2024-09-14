import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--colors-common-orange-500))",
          foreground: "hsl(var(--colors-common-orange-50))",
          "50": "hsl(var(--colors-common-orange-50))",
          "100": "hsl(var(--colors-common-orange-100))",
          "200": "hsl(var(--colors-common-orange-200))",
          "300": "hsl(var(--colors-common-orange-300))",
          "400": "hsl(var(--colors-common-orange-400))",
          "500": "hsl(var(--colors-common-orange-500))",
          "600": "hsl(var(--colors-common-orange-600))",
          "700": "hsl(var(--colors-common-orange-700))",
          "800": "hsl(var(--colors-common-orange-800))",
          "900": "hsl(var(--colors-common-orange-900))",
        },
        focus: "hsl(var(--colors-common-orange-500))",
        background: "#0D0D0D",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
    }),
  ],
};

export default config;

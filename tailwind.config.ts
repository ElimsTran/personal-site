import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  important: "body",
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt-Regular", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      elims: {
        textColor: "#fff",
        backgroundColorLight: "#2f3045",
        backgroundColorDark: "#19151c",
        backgroundColorMedium: "#181928",
        hoverColor: "#ffc107",
      },

      DEFAULT: "#938d9e",
    },
  },

  plugins: [],
};
export default config;

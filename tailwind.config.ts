import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#74f0d3",
        greenLight: "#3ebb9d",
        subGreen: "#7cdfc7",
        subGreenLight: "#4cc7aa",
      },
      height: {
        "9/10": "110%",
      },
      backgroundImage: {
        "radial-at-c":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "linear-custom-gradient":
          "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

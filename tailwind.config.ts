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
        c2: "#41ba9d",
        c1: "#5ed2b7",
        c0: "#f6fbfa",
        action: "#00916e",
        "dark-text": "#002b20",
        gray: "#888888",
      },
      height: {
        "9/10": "110%",
      },
      backgroundImage: {
        "radial-at-c":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "linear-custom-gradient":
          "linear-gradient(180deg, var(--tw-gradient-stops))",
        leaf: "url('/images/leaf.png')",
      },
      boxShadow: {
        "top-shadow": "0 -1px 1px -1px rgba(0, 0, 0, 0.25)",
        "bottom-shadow": "0 1px 1px -1px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

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
        "light-cream": "#f3e9d2", // 배경색이나 부드러운 분위기
        "deep-green": "#004d47", // 강조 요소나 버튼
        "soft-sand": "#dcd1c5", // 텍스트 배경이나 구분선
        "pale-blue": "#a7cdd8", // 활기찬 느낌을 위해
        "deep-gray": "#565656", // 텍스트나 중요 요소 강조
        "wine-red": "#722f37", // 주의를 끌고 싶은 버튼이나 호출 액션
      },
      height: {
        "9/10": "110%",
      },
      backgroundImage: {
        "radial-at-c":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "linear-custom-gradient":
          "linear-gradient(180deg, var(--tw-gradient-stops))",
        leaf0: "url('/images/leaves/leaf0.png')",
        leaf1: "url('/images/leaves/leaf1.png')",
        leaf2: "url('/images/leaves/leaf2.png')",
        leaf3: "url('/images/leaves/leaf3.png')",
        leaf4: "url('/images/leaves/leaf4.png')",
        leaf5: "url('/images/leaves/leaf5.png')",
        leaf6: "url('/images/leaves/leaf6.png')",
        leaf7: "url('/images/leaves/leaf7.png')",
        leaf8: "url('/images/leaves/leaf8.png')",
        leaf9: "url('/images/leaves/leaf9.png')",
        leaf10: "url('/images/leaves/leaf10.png')",
        leaf11: "url('/images/leaves/leaf11.png')",
        leaf12: "url('/images/leaves/leaf12.png')",
      },
      boxShadow: {
        "top-shadow": "0 -1px 1px -1px rgba(0, 0, 0, 0.25)",
        "bottom-shadow": "0 1px 1px -1px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

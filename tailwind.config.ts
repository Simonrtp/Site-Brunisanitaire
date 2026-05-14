import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        /** Avis : vitesse desktop */
        marquee: "marquee-scroll 22s linear infinite",
        /** Avis : plus rapide sur téléphone (même keyframe, durée réduite) */
        "marquee-mobile": "marquee-scroll 9s linear infinite",
      },
      keyframes: {
        "marquee-scroll": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nude: "#F8EEE9",
        terracota: { DEFAULT: "#C77D69", dark: "#B06653" },
        rose: { DEFAULT: "#8C4F59", dark: "#733F48" },
        champagne: "#D9B8A6",
        cocoa: "#43312F",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 14px 40px -14px rgba(140,79,89,0.28)",
        card: "0 2px 18px -6px rgba(67,49,47,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;

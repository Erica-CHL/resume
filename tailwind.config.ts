import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0a0f1f",
        panel: "#101827",
        line: "rgba(148, 163, 184, 0.22)",
        cyan: {
          signal: "#44d9e8",
        },
        lime: {
          signal: "#a4f178",
        },
      },
      boxShadow: {
        glow: "0 0 45px rgba(68, 217, 232, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

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
        primary: {
          DEFAULT: "#0099FF",
          dark: "#0066CC",
          light: "#33ADFF",
        },
        background: "#FFFFFF",
        foreground: "#000000",
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#888888",
        },
        border: "#E5E5E5",
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

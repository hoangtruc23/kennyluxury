/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBF9F5",
        surface: "#F6F3ED",
        "surface-card": "#FFFFFF",
        "surface-border": "#EAE5DD",
        cognac: {
          DEFAULT: "#8C5824",
          light: "#A36B31",
          dark: "#724419",
          muted: "rgba(140, 88, 36, 0.1)",
        },
        gold: {
          DEFAULT: "#8C5824",
          light: "#A36B31",
          dark: "#724419",
          muted: "rgba(140, 88, 36, 0.1)",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#333333",
          muted: "#666666",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Montserrat", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

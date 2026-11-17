/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F6F2",
        stone: "#E7E7E1",
        charcoal: "#252C2A",
        sage: {
          DEFAULT: "#91A99B",
          // Sage at 45% over ivory, as a solid color so it also works on dark blocks.
          tint: "#C9D3CB",
        },
        slate: {
          DEFAULT: "#647C85",
          // Darker slate for small text on light backgrounds (DEFAULT is ~4:1 on ivory).
          deep: "#4F646C",
        },
        // Secondary body text on light backgrounds (~5.7:1 on ivory).
        muted: "#5A6361",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

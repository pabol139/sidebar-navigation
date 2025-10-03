/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        sidebar: "var(--sidebar-width)",
      },
      spacing: {
        sidebar: "var(--sidebar-width)",
      },
      colors: {
        sidebar: {
          text: "var(--sidebar-text)",
          background: "var(--sidebar-background)",
          border: "var(--border)",
        },
      },
    },
  },
  plugins: [],
};

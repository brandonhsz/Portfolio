module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gris-claro': '#ffffff18',
        'gris-oscuro': '#00000052',
      }
    },
  },
  plugins: [],
  variants: {
    borderCOlor: ["responsive", "hover", "focus", "focus-within"],
  },
}
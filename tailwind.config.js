module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f4',
        beige: '#f0e9e0',
        'warm-border': '#e2d9ce',
        'warm-muted': '#78716c',
        'warm-text': '#1c1917',
        rose: '#b07060',
        'rose-light': '#f5ede8',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'ui-serif', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

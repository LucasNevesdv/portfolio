/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#05070B',
        electric: {
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        'grid-line': '#111622',
      },
      backgroundImage: {
        grid: [
          'linear-gradient(to right, #111622 1px, transparent 1px)',
          'linear-gradient(to bottom, #111622 1px, transparent 1px)',
        ].join(', '),
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        'electric-glow': '0 0 12px rgba(59, 130, 246, 0.55), 0 0 32px rgba(29, 78, 216, 0.35)',
      },
    },
  },
  plugins: [],
}

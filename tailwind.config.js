/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          bg: '#3B3A3A',
          surface: '#000000',
          text: '#F1E6D6',
          red: '#550000',
          gold: '#CBA135',
        },
      },
      fontFamily: {
        title: ['Bebas Neue', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        body: ['Inter', 'Noto Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        title: '0.06em',
      },
      lineHeight: {
        relaxed: '1.35',
      },
      borderRadius: {
        noir: '12px',
      },
      boxShadow: {
        noir: '0 6px 16px rgba(0, 0, 0, 0.6)',
        'noir-deep': '0 6px 18px rgba(0, 0, 0, 0.64), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
        'noir-glow': '0 0 8px rgba(203, 161, 53, 0.3)',
      },
      transitionDuration: {
        noir: '300ms',
      },
    },
  },
  plugins: [],
}


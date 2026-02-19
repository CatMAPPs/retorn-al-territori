/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          bg:      '#0e0d0d',   // near-black, slightly warm
          surface: '#1b1918',   // dark warm surface (not pure black)
          text:    '#EDE0CE',   // warm cream
          red:     '#6b1414',   // deeper red, visible on dark bg
          gold:    '#D4A843',   // slightly brighter gold
          muted:   '#2a2826',   // mid-surface for subtle borders/dividers
        },
      },
      fontFamily: {
        title:    ['Bebas Neue', 'sans-serif'],
        bebas:    ['Bebas Neue', 'sans-serif'],
        heading:  ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        body:     ['Inter', 'Noto Sans', 'sans-serif'],
        mono:     ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        title: '0.06em',
      },
      borderRadius: {
        noir: '12px',
      },
      boxShadow: {
        noir:       '0 4px 24px rgba(0,0,0,0.7)',
        'noir-deep':'0 8px 32px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.03)',
        'noir-glow':'0 0 16px rgba(212,168,67,0.25)',
        'gold-soft':'0 0 32px rgba(212,168,67,0.12)',
      },
      transitionDuration: {
        noir: '280ms',
      },
    },
  },
  plugins: [],
}

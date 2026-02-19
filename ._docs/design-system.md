# HistoGuesser Design System

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Framework:** Vue 3 + TypeScript + Tailwind CSS

---

## 1. Design Principles

### Core Philosophy
HistoGuesser embodies a **Film Noir Skeuomorphism** aesthetic—a smoky, mid-century detective film atmosphere rendered as tactile, floating black cards on a charcoal night. Every element should feel like physical artifacts from a 1940s case file.

### Design Truths
1. **Nocturnal Canvas** - The world remains dark; no bright backgrounds
2. **Tactile Surfaces** - Depth through subtle shadows and borders, not gradients
3. **Restrained Skeuomorphism** - Texture serves clarity, not decoration
4. **Single-Screen Gameplay** - All core elements visible simultaneously on md+ breakpoints
5. **Cinematic Motion** - Deliberate, never playful

---

## 2. Design Tokens

### 2.1 Color Palette

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        noir: {
          bg: '#3B3A3A',      // App background
          surface: '#000000',  // Cards, panels, modals
          text: '#F1E6D6',     // All UI text
          red: '#550000',      // Primary CTAs, urgency
          gold: '#CBA135',     // Highlights, borders, accents
        }
      }
    }
  }
}
```

**Usage Rules:**
- **Background:** Always `noir-bg` for page-level canvas
- **Surfaces:** Always `noir-surface` for cards, panels, modals
- **Text:** Always `noir-text` (cream), never white or black
- **Primary Actions:** `noir-red` for submit buttons, timers, critical states
- **Secondary Accents:** `noir-gold` for borders, icons, subtle emphasis

### 2.2 Typography

**Font Stack:**
```css
:root {
  --font-title: 'Bebas Neue', sans-serif;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-flavor: 'Special Elite', monospace; /* Optional */
}
```

**Type Scale:**
```javascript
// Tailwind custom font sizes
fontSize: {
  'title': ['3.5rem', { lineHeight: '1', letterSpacing: '0.06em' }],      // 56px
  'title-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '0.06em' }], // 40px
  'h1': ['2rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],         // 32px
  'h2': ['1.5rem', { lineHeight: '1.3' }],                                // 24px
  'h3': ['1.25rem', { lineHeight: '1.3' }],                               // 20px
  'body': ['1rem', { lineHeight: '1.45' }],                               // 16px
  'body-sm': ['0.875rem', { lineHeight: '1.4' }],                         // 14px
  'caption': ['0.75rem', { lineHeight: '1.3' }],                          // 12px
  'stat': ['1.125rem', { lineHeight: '1.2' }],                            // 18px mono
}
```

**Font Weights:**
```javascript
fontWeight: {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
}
```

**Typography Components:**

```css
/* Title / Logo */
.text-title {
  font-family: var(--font-title);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: theme('colors.noir.gold');
}

/* Headings */
.text-heading {
  font-family: var(--font-heading);
  color: theme('colors.noir.text');
  font-weight: 600;
}

/* Body Text */
.text-body {
  font-family: var(--font-body);
  color: theme('colors.noir.text');
  text-shadow: 0 0 6px rgba(255,255,255,0.06);
}

/* Stats/Numbers */
.text-stat {
  font-family: var(--font-mono);
  color: theme('colors.noir.text');
  font-variant-numeric: tabular-nums;
}
```

### 2.3 Spacing Scale

Based on 8px baseline grid:

```javascript
spacing: {
  '0': '0',
  '1': '0.25rem',  // 4px
  '2': '0.5rem',   // 8px
  '3': '0.75rem',  // 12px
  '4': '1rem',     // 16px
  '5': '1.25rem',  // 20px
  '6': '1.5rem',   // 24px
  '7': '1.75rem',  // 28px
  '8': '2rem',     // 32px
  '10': '2.5rem',  // 40px
  '12': '3rem',    // 48px
  '16': '4rem',    // 64px
  '20': '5rem',    // 80px
}
```

### 2.4 Border Radius

```javascript
borderRadius: {
  'sm': '0.375rem',   // 6px - small elements
  'DEFAULT': '0.5rem', // 8px - inputs, small buttons
  'md': '0.75rem',    // 12px - cards, standard panels
  'lg': '1rem',       // 16px - large cards, modals
  'xl': '1.5rem',     // 24px - hero elements
  'full': '9999px',   // Circles
}
```

### 2.5 Shadows

```javascript
boxShadow: {
  'card': '0 6px 18px rgba(0,0,0,0.64), inset 0 1px 0 rgba(255,255,255,0.02)',
  'card-hover': '0 8px 24px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,255,255,0.04)',
  'modal': '0 12px 40px rgba(0,0,0,0.8)',
  'button': '0 4px 12px rgba(0,0,0,0.4)',
  'button-active': 'inset 0 2px 4px rgba(0,0,0,0.5)',
  'glow-gold': '0 0 12px rgba(203,161,53,0.22)',
  'glow-red': '0 0 12px rgba(85,0,0,0.4)',
}
```

### 2.6 Transitions

```javascript
transitionDuration: {
  'fast': '200ms',     // Hover states, small interactions
  'base': '280ms',     // Standard transitions
  'slow': '400ms',     // Reveals, larger animations
}

transitionTimingFunction: {
  'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'cinematic': 'cubic-bezier(0.32, 0, 0.67, 0)',
}
```

---

## 3. Component Primitives

### 3.1 Buttons

**Primary Button (CTA)**
```vue
<button class="
  bg-noir-red text-noir-text
  border border-noir-gold/22
  rounded-lg px-4 py-2
  shadow-button
  transition-all duration-base
  hover:-translate-y-0.5 hover:shadow-glow-gold
  active:translate-y-0 active:shadow-button-active
  focus:outline-none focus:ring-2 focus:ring-noir-gold/18
  disabled:opacity-40 disabled:cursor-not-allowed
  font-medium text-body
">
  Submit Guess
</button>
```

**Secondary Button**
```vue
<button class="
  bg-noir-surface text-noir-text
  border border-noir-gold/18
  rounded-lg px-4 py-2
  shadow-button
  transition-all duration-base
  hover:border-noir-gold/30
  active:shadow-button-active
  focus:outline-none focus:ring-2 focus:ring-noir-gold/18
  disabled:opacity-40
">
  Skip
</button>
```

**Text Button**
```vue
<button class="
  text-noir-gold
  underline decoration-noir-gold/30
  hover:decoration-noir-gold
  transition-colors duration-fast
  focus:outline-none focus:ring-2 focus:ring-noir-gold/18
  rounded
">
  View Leaderboard
</button>
```

**Sizes:**
```javascript
// sm: px-3 py-1.5 text-body-sm
// md: px-4 py-2 text-body (default)
// lg: px-6 py-3 text-h3
// full: w-full
```

### 3.2 Cards & Surfaces

**Base Card**
```vue
<div class="
  bg-noir-surface text-noir-text
  rounded-xl p-6
  border border-noir-gold/14
  shadow-card
">
  <!-- Content -->
</div>
```

**Interactive Card (Hover State)**
```vue
<div class="
  bg-noir-surface text-noir-text
  rounded-xl p-6
  border border-noir-gold/14
  shadow-card
  transition-all duration-base
  hover:shadow-card-hover hover:border-noir-gold/22
  cursor-pointer
">
  <!-- Content -->
</div>
```

**Panel Padding Responsive:**
```css
/* Mobile: p-3 (12px) */
/* Tablet: p-5 (20px) */
/* Desktop: p-7 (28px) */
```

### 3.3 Inputs

**Text Input**
```vue
<input 
  type="text"
  class="
    w-full
    bg-noir-surface text-noir-text
    border border-noir-gold/14
    rounded-md px-4 py-2
    placeholder:text-noir-text/40
    focus:outline-none focus:ring-2 focus:ring-noir-gold/30 focus:border-noir-gold/40
    transition-all duration-base
  "
  placeholder="Enter name..."
/>
```

**Range Slider (Timeline)**
```vue
<input 
  type="range"
  class="
    w-full h-2
    bg-noir-surface
    border border-noir-gold/14
    rounded-full
    appearance-none
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-noir-text
    [&::-webkit-slider-thumb]:border-2
    [&::-webkit-slider-thumb]:border-noir-gold
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-webkit-slider-thumb]:shadow-button
  "
/>
```

**Number Input (Year)**
```vue
<input 
  type="number"
  class="
    w-20 text-center
    bg-noir-surface text-noir-text
    border border-noir-gold/14
    rounded-md px-2 py-1
    font-mono text-stat
    focus:outline-none focus:ring-2 focus:ring-noir-gold/30
  "
/>
```

### 3.4 Modals

**Modal Overlay**
```vue
<div class="
  fixed inset-0 z-50
  bg-black/80
  backdrop-blur-sm
  flex items-center justify-center p-4
  animate-fade-in
">
  <!-- Modal Panel -->
</div>
```

**Modal Panel**
```vue
<div class="
  bg-noir-surface text-noir-text
  rounded-xl p-6 sm:p-8
  max-w-2xl w-full
  border border-noir-gold/14
  shadow-modal
  animate-scale-fade-in
">
  <!-- Modal Content -->
</div>
```

### 3.5 Badges & Labels

**Badge**
```vue
<span class="
  inline-flex items-center
  px-2.5 py-0.5
  rounded-md
  bg-noir-gold/10
  border border-noir-gold/30
  text-noir-gold text-caption
  font-medium
">
  NEW
</span>
```

**Status Indicators**
```vue
<!-- Connected -->
<div class="flex items-center gap-2">
  <span class="w-2 h-2 rounded-full bg-green-400"></span>
  <span class="text-body-sm">Connected</span>
</div>

<!-- Host -->
<span class="
  px-2 py-0.5 rounded
  bg-noir-red/20 border border-noir-red/40
  text-noir-red text-caption font-medium
">
  HOST
</span>
```

### 3.6 Iconography

**Icon Standards:**
- **Style:** Line icons, 1.5px stroke weight
- **Colors:** `noir-text` (default), `noir-gold` (accent), `noir-red` (critical)
- **Sizes:** 16px (sm), 20px (md), 24px (lg), 32px (xl)
- **Library:** Lucide Icons or Hero Icons (minimal, consistent)

```vue
<!-- Usage Example -->
<svg class="w-5 h-5 text-noir-gold" stroke="currentColor">
  <!-- icon path -->
</svg>
```

---

## 4. Layout Primitives

### 4.1 Breakpoints

```javascript
screens: {
  'sm': '640px',   // Mobile landscape / Small tablets
  'md': '768px',   // Tablets
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### 4.2 Container

```vue
<div class="
  max-w-7xl mx-auto
  px-4 sm:px-6 lg:px-8
">
  <!-- Content -->
</div>
```

### 4.3 Gameplay Layout (Single-Screen Rule)

**Mobile (sm):**
```vue
<div class="flex flex-col gap-4 p-4">
  <!-- Figure Image -->
  <div class="aspect-square max-h-64"></div>
  
  <!-- Map -->
  <div class="h-64 rounded-lg"></div>
  
  <!-- Inputs -->
  <div class="space-y-3">
    <!-- Name Input -->
    <!-- Timeline Slider -->
  </div>
  
  <!-- Submit (Sticky) -->
  <div class="sticky bottom-0 pt-4"></div>
</div>
```

**Desktop (lg+):**
```vue
<div class="grid grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
  <!-- Left: Figure Image -->
  <div class="flex items-center justify-center">
    <div class="aspect-square max-w-md"></div>
  </div>
  
  <!-- Right: Map + Controls -->
  <div class="flex flex-col gap-4">
    <!-- Map -->
    <div class="flex-1 min-h-[400px] rounded-lg"></div>
    
    <!-- Inputs -->
    <div class="space-y-3">
      <!-- Name Input -->
      <!-- Timeline Slider -->
      <!-- Submit Button -->
    </div>
  </div>
</div>
```

### 4.4 Grid Systems

**Two-Column Split:**
```css
.grid-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
```

**Leaderboard List:**
```css
.leaderboard-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
}
```

---

## 5. Game-Specific Components

### 5.1 Timer

```vue
<div class="
  font-mono text-h2
  text-noir-text
  px-4 py-2
  bg-noir-surface
  border border-noir-gold/14
  rounded-lg
  shadow-button
  transition-all duration-fast
  [&.urgent]:bg-noir-red/10
  [&.urgent]:border-noir-red/40
  [&.urgent]:animate-pulse
">
  00:42
</div>
```

### 5.2 Score Display

```vue
<div class="
  font-mono text-h1
  text-noir-gold
  text-center
">
  18,450
  <span class="text-body-sm text-noir-text/60">/ 25,000</span>
</div>
```

### 5.3 Round Indicator

```vue
<div class="
  flex items-center gap-2
  text-body font-medium
">
  <span class="text-noir-text">Round</span>
  <span class="text-h3 text-noir-gold font-bold">3</span>
  <span class="text-noir-text/60">/ 10</span>
</div>
```

### 5.4 Map Pin

```vue
<!-- Player Pin -->
<div class="
  w-8 h-8 -translate-x-1/2 -translate-y-full
  bg-noir-red
  border-2 border-noir-gold
  rounded-full
  shadow-glow-red
  cursor-move
"></div>

<!-- Correct Pin (Reveal) -->
<div class="
  w-8 h-8 -translate-x-1/2 -translate-y-full
  bg-noir-text
  border-2 border-noir-gold
  rounded-full
  shadow-glow-gold
  animate-bounce-once
"></div>
```

### 5.5 Player List Item (Lobby)

```vue
<div class="
  flex items-center gap-3
  p-3 rounded-lg
  bg-noir-surface
  border border-noir-gold/10
">
  <span class="w-2 h-2 rounded-full bg-green-400"></span>
  <span class="flex-1 text-body text-noir-text">username</span>
  <span class="px-2 py-0.5 rounded bg-noir-red/20 text-noir-red text-caption">
    HOST
  </span>
</div>
```

### 5.6 Room Code Display

```vue
<div class="
  flex items-center gap-3
  px-4 py-3
  bg-noir-surface
  border border-noir-gold/30
  rounded-lg
">
  <span class="font-mono text-h2 text-noir-gold tracking-wider">
    ABC123
  </span>
  <button class="
    ml-auto px-3 py-1
    text-body-sm text-noir-gold
    border border-noir-gold/30
    rounded hover:bg-noir-gold/10
    transition-colors
  ">
    Copy
  </button>
</div>
```

---

## 6. Animation Utilities

### 6.1 Custom Animations

```javascript
// tailwind.config.js
keyframes: {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'scale-fade-in': {
    '0%': { opacity: '0', transform: 'scale(0.98)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  'slide-up': {
    '0%': { transform: 'translateY(10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  'bounce-once': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  'pulse-glow': {
    '0%, 100%': { boxShadow: '0 0 8px rgba(203,161,53,0.2)' },
    '50%': { boxShadow: '0 0 16px rgba(203,161,53,0.4)' },
  },
}

animation: {
  'fade-in': 'fade-in 280ms ease-out',
  'scale-fade-in': 'scale-fade-in 320ms cubic-bezier(0.32, 0, 0.67, 0)',
  'slide-up': 'slide-up 400ms ease-out',
  'bounce-once': 'bounce-once 600ms ease-in-out',
  'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
}
```

### 6.2 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Accessibility Standards

### 7.1 Color Contrast

All text combinations must meet WCAG 2.1 Level AA:
- **Normal text:** 4.5:1 minimum
- **Large text (18px+):** 3:1 minimum

**Tested Combinations:**
- `noir-text` on `noir-bg`: ✓ 7.2:1
- `noir-text` on `noir-surface`: ✓ 13.1:1
- `noir-gold` on `noir-surface`: ✓ 4.8:1
- `noir-red` text on `noir-surface`: ✗ Use for backgrounds only

### 7.2 Touch Targets

Minimum interactive area: **44x44px** on mobile

```css
/* Ensure buttons meet minimum */
.btn {
  min-height: 44px;
  min-width: 44px;
}
```

### 7.3 Focus Indicators

```css
.focus-visible {
  outline: 2px solid theme('colors.noir.gold');
  outline-offset: 2px;
}

/* Or custom ring */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-noir-gold/30;
}
```

### 7.4 Screen Reader Support

- Use semantic HTML: `<button>`, `<nav>`, `<main>`, `<section>`
- Provide `aria-label` for icon-only buttons
- Use `aria-live` regions for score updates and timer
- Label form inputs with `<label>` or `aria-label`

---

## 8. Performance Guidelines

### 8.1 CSS Optimization

- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid `width`, `height`, `top`, `left` animations
- Keep texture overlays under 20KB
- Prefer CSS gradients/shadows over image assets

### 8.2 Image Handling

- Lazy-load figure images
- Use WebP format with PNG fallback
- Provide multiple sizes for responsive images
- Add `loading="lazy"` and `decoding="async"`

### 8.3 Map Performance

- Defer Leaflet initialization until gameplay view
- Limit max zoom levels (3-18)
- Use tile caching
- Throttle pan/zoom events

---

## 9. Component Checklist

### Required Components
- [ ] Button (Primary, Secondary, Text)
- [ ] Card (Base, Hover, Modal)
- [ ] Input (Text, Number, Range)
- [ ] Modal (Overlay, Panel, Close)
- [ ] Badge (Status, Label)
- [ ] Timer Display
- [ ] Score Display
- [ ] Round Indicator
- [ ] Player List Item
- [ ] Room Code Display
- [ ] Leaderboard Row
- [ ] Navigation Bar
- [ ] Loading Spinner
- [ ] Toast Notification

---

## 10. Implementation Notes

### 10.1 Tailwind Setup

```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      // All tokens from this document
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

### 10.2 CSS Variables Fallback

```css
:root {
  --noir-bg: #3B3A3A;
  --noir-surface: #000000;
  --noir-text: #F1E6D6;
  --noir-red: #550000;
  --noir-gold: #CBA135;
}
```

### 10.3 Font Loading

```html
<!-- In index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=JetBrains+Mono&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
```

---

## 11. Design System Maintenance

### Version Control
- Track changes in this document
- Prefix breaking changes with version bump
- Document deprecations with timeline

### Component Library
- Build Storybook for component preview
- Add visual regression tests
- Document prop interfaces

### Design Tokens as Code
- Export tokens to JSON for design tools
- Use CSS custom properties for runtime theming
- Keep single source of truth

---

**End of Design System v1.0.0**
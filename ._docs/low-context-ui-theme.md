# ui-theme-low-context.md

**Project:** HistoGuesser  
**Theme:** Film Noir Skeuomorphism  
**Stack:** Vue 3 + TailwindCSS + Supabase  
**Goal:** Concise UI rules for consistent noir aesthetic.

---

## PALETTE
| Token | Hex | Use |
|--------|------|-----|
| noir-bg | `#3B3A3A` | main background (charcoal) |
| noir-surface | `#000000` | cards, modals, panels |
| noir-text | `#F1E6D6` | text/icons |
| noir-red | `#550000` | CTAs, danger, focus |
| noir-gold | `#CBA135` | borders, highlights |

Rules:
- BG = charcoal, surfaces = black, text = cream.  
- Red → action, Gold → accent.  
- No white or bright surfaces.  
- Subtle noise texture (<6% opacity) optional on panels.

---

## TYPOGRAPHY
| Role | Font | Color |
|------|------|--------|
| Title | **Bebas Neue** | gold |
| Headings | **Playfair Display** | cream |
| Body | **Inter / Noto Sans** | cream |
| Stats | **JetBrains Mono** | cream/gold |

Specs: uppercase titles (+0.06em), lh 1.35, subtle text-shadow `0 0 6px rgba(255,255,255,0.06)`.

---

## LAYOUT
- BG charcoal, panels black w/ gold rim.  
- **Single-screen rule:** image, map, inputs, slider visible (per PRD).  
- Mobile: vertical stack; Desktop: centered two-column.  
- Grid spacing 8px base; radius 12px; padding 12–24px.  
- Breakpoints: sm 640, md 768, lg 1024, xl 1280.

---

## COMPONENTS
### Button
`bg-[#550000] text-[#F1E6D6] border-[#CBA135] rounded-lg px-4 py-2 shadow-md transition hover:shadow-[0_0_8px_rgba(203,161,53,0.3)] active:bg-[#3a0000]`
- Hover → gold glow + lift 2px  
- Active → inset shadow, darker red  
- Disabled → 40% opacity

### Card
`bg-black text-[#F1E6D6] border border-[rgba(203,161,53,0.15)] rounded-xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.6)]`

### Modal
Backdrop `rgba(0,0,0,0.8)`; panel black w/ gold border; fade+scale 300ms.

### Input/Slider
Black bg, cream text, gold focus ring, red active state.

---

## SKEUOMORPHISM
- Shadows show depth, not flash:  
  `0 6px 18px rgba(0,0,0,0.64), inset 0 1px 0 rgba(255,255,255,0.02)`  
- Gold inner glow for hover/focus.  
- Icon stroke ~1.5px, cream/gold.

---

## MOTION
- Transition 200–350ms ease-in-out.  
- Only use opacity/translate/scale.  
- Hover: glow + lift 1–2px.  
- Reveal: crossfade 300–400ms.  
- No bounce, elastic, or spring easing.

---

## ACCESSIBILITY + PERF
- Contrast ≥4.5:1.  
- Tap targets ≥48px.  
- Focus ring: gold.  
- Respect `prefers-reduced-motion`.  
- Lazy-load maps/images; CSS textures only.

---

## TOKENS
```js
// tailwind.config.js
extend:{
  colors:{
    noir:{
      bg:'#3B3A3A',
      surface:'#000000',
      text:'#F1E6D6',
      red:'#550000',
      gold:'#CBA135'
    }
  }
}

:root{
  --noir-bg:#3B3A3A;
  --noir-surface:#000000;
  --noir-text:#F1E6D6;
  --noir-red:#550000;
  --noir-gold:#CBA135;
}
---
## QUICK RECAP

Charcoal BG, black panels, cream text.

Red = CTA; Gold = accent.

Single-screen gameplay layout.

Subtle skeuomorphic depth, cinematic tone.

Responsive, clean, moody.
# **UI Theme Rules**

**Project:** HistoGuesser  
 **Theme:** Film Noir Skeuomorphism  
 **Purpose:** A single-source style guide that defines colors, typography, layout, components, motion, and accessibility rules so every screen in the app feels unified, tactile, and cinematic. This document is aligned to the PRD, user flow, and tech stack and written to be implementable with Tailwind \+ Vue 3\.

---

# **1\. High-level design intent**

HistoGuesser should look and feel like a smoky, mid-century detective film brought to the web. The UI should read as a tactile deck of black cards floating over a charcoal night, with cream text and rare red and gold punctuation to direct the player. The skeuomorphic treatment is restrained and functional \- visual texture and depth are used only to improve clarity and focus.

Key truths to carry everywhere

* Main canvas \- charcoal gray `#3B3A3A`. This is the app background.

* Foreground surfaces (cards, modals, panels) \- pure black `#000000`.

* All text and primary iconography \- cream `#F1E6D6`. Never use black text on the charcoal background.

* Accents \- dark red `#550000` for primary CTAs and urgency; faded gold `#CBA135` for highlights, borders, and subtle glows.

* Gameplay constraint from PRD \- the figure image, interactive map, timeline slider, and name input must be visible on the same screen simultaneously on supported breakpoints. Design layout rules to satisfy that requirement first.

---

# **2\. Palette and tokens**

## **2.1 Colors**

| Role | Hex | RGB | Use |
| ----- | ----- | ----- | ----- |
| Background (app) | `#3B3A3A` | (59,58,58) | Page background, behind all panels |
| Surface / Cards / Panels | `#000000` | (0,0,0) | All raised panels, cards, modals |
| Text (primary) | `#F1E6D6` | (241,230,214) | All UI text and primary icons |
| Accent \- Primary | `#550000` | (85,0,0) | Primary CTA, active timer, critical highlights |
| Accent \- Secondary | `#CBA135` | (203,161,53) | Borders, subtle glow, icons, non-urgent highlights |

## **2.2 Tailwind / CSS tokens (example)**

Add to `tailwind.config.js` and `:root`.

`// tailwind.config.js (excerpt)`  
`module.exports = {`  
  `theme: {`  
    `extend: {`  
      `colors: {`  
        `noir: {`  
          `bg: '#3B3A3A',`  
          `surface: '#000000',`  
          `text: '#F1E6D6',`  
          `red: '#550000',`  
          `gold: '#CBA135'`  
        `}`  
      `}`  
    `}`  
  `}`  
`}`

`/* :root */`  
`:root{`  
  `--noir-bg: #3B3A3A;`  
  `--noir-surface: #000000;`  
  `--noir-text: #F1E6D6;`  
  `--noir-red: #550000;`  
  `--noir-gold: #CBA135;`  
`}`

---

# **3\. Typography**

The type system must read cinematic and slightly pulp while remaining legible on dark backgrounds. No classical roman engraved fonts for titles.

## **3.1 Font choices (recommended)**

* **Title / Logo:** Bebas Neue \- condensed sans-serif, uppercase, poster style. Use for the main app name and large section titles.

* **Alternate Title / Flavor:** Special Elite \- typewriter style, optional for "case file" screens or overlays. Use sparingly.

* **Headings (h2, h3):** Playfair Display or Crimson Text \- subtle vintage serif for emphasis.

* **Body:** Inter or Noto Sans \- neutral, high legibility against dark surfaces.

* **Numbers / Timer / Stats:** JetBrains Mono \- monospaced for mechanical scoreboard feeling.

## **3.2 Pairs and rules**

* Title is condensed, uppercase, high letter spacing (+0.06em). Color: faded gold `#CBA135` or cream depending on context (gold for splash/logo, cream for inline headers).

* Body text: cream `#F1E6D6`. Never white. Never black.

* Headings use Playfair Display in cream with slightly heavier weight to set hierarchy.

* Timers and scores can be cream or gold to show emphasis.

## **3.3 Readability touches**

* Add a faint text shadow to improve legibility on subtle texture:

`text-shadow: 0 0 6px rgba(255,255,255,0.06);`

* Use line-height 1.3-1.45. Keep body font-size responsive: 14-18px depending on breakpoint.

---

# **4\. Layout and responsive rules**

Design is mobile-first, then expand to two-column and wide layouts. The UI must ensure the gameplay single-screen constraint: figure image, map, name input, and timeline visible without hidden tabs.

## **4.1 Breakpoints**

* `sm` \- \<= 639px : mobile stack

* `md` \- \>= 640px : small tablets / large phones

* `lg` \- \>= 1024px : desktop two-column

* `xl` \- \>= 1280px : wide desktop

## **4.2 Core layout rules**

* **Mobile (sm)** \- vertical stack: Figure (top) → Map (full width) → Inputs (name, year) → Submit (sticky bottom). Buttons are full width.

* **Tablet / Desktop (md/lg/xl)** \- two-column center-focused layout: left column image carousel (or single image), right column interactive map. Beneath or to the right of map place inputs so all four essential components are visible without scrolling on reasonable screen sizes. If vertical space is constrained, reduce image height but keep elements visible.

* **Single-screen guarantee rule** \- Always ensure the interactive map height \+ figure image height \+ input controls fit inside usable viewport for at least `md` and `lg`. On `sm`, inputs can be sticky so they remain in view while map or image scrolls, but core components must still be reachable without switching tabs. This matches the PRD requirement.

## **4.3 Spacing and alignment**

* Central focus zone is centered horizontally. Use a baseline grid: 8px increment for margin/padding.

* Card radius: 12px (rounded-lg).

* Panel padding: small 12px on mobile, 20-28px on desktop.

---

# **5\. Surface treatment \- skeuomorphism rules**

Skeuomorphic detail is restrained. Use light, depth, and subtle texture to imply material.

## **5.1 Cards and panels**

* Background: `#000000`.

* Border: thin `1px` gold rim `rgba(203,161,53,0.18)` or slightly desaturated depending on contrast.

* Shadows: layered to create lift:

`box-shadow:`  
  `0 6px 18px rgba(0,0,0,0.64),`  
  `inset 0 1px 0 rgba(255,255,255,0.02);`

* Inner bevel: slight inset highlight to suggest worn edge:

`background-image: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);`

* Subtle grain or paper texture overlay at very low opacity (\<= 0.06) to give tactile feel on hero/full-screen surfaces. Prefer CSS/svg textures to full images for performance.

## **5.2 Buttons as physical tokens**

* Buttons appear like pressed metal or lacquered tabs. Use two-step shadows: ambient shadow and inner press effect on active.

* Corners rounded medium-large (8-14px).

* All buttons have gold micro-border and cream label.

## **5.3 Icon and control treatment**

* Use thin-line icons in cream or gold. Keep stroke width consistent (\~1.5px).

* Map pins: gold outline with cream fill, selected pin glows in gold. Player-placed pin uses a slight red accent if active.

---

# **6\. Component specs (copyable examples)**

These are implementation-ready patterns intended for Tailwind usage. Adapt to project conventions.

## **6.1 Primary button (CTA)**

`<button class="bg-[#550000] text-[#F1E6D6] border border-[rgba(203,161,53,0.22)]`  
 `rounded-lg px-4 py-2 shadow-md transition transform hover:-translate-y-0.5`  
 `focus:outline-none focus:ring-2 focus:ring-[rgba(203,161,53,0.18)]">`  
  `Submit Guess`  
`</button>`

States:

* hover: `filter: drop-shadow(0 0 8px rgba(203,161,53,0.22)) translateY(-2px)`

* active: inset shadow, darker red background `#3a0000`

* disabled: reduce opacity to 0.4 and cursor not-allowed

## **6.2 Card**

`<div class="bg-[#000000] text-[#F1E6D6] rounded-xl p-6`  
 `border border-[rgba(203,161,53,0.14)] shadow-[0_8px_20px_rgba(0,0,0,0.6)]">`  
  `<!-- content -->`  
`</div>`

## **6.3 Modal**

Backdrop: `background-color: rgba(0,0,0,0.8)`  
 Panel:

`<div class="bg-[#000000] text-[#F1E6D6] rounded-xl p-6 max-w-2xl mx-auto`  
 `border border-[rgba(203,161,53,0.14)] transform transition duration-300">`  
  `<!-- modal content -->`  
`</div>`

Animation: fade \+ scale `scale(0.98) -> scale(1)`, opacity `0 -> 1` over 280ms.

## **6.4 Input / Slider**

* Inputs: full black surface, cream placeholder text, gold focus ring.

* Slider: dark track with gold progress fill, cream thumb with subtle gold edge.

---

# **7\. Motion and transitions**

Motion should feel cinematic and deliberate, never playful.

* Base transition timing: 200-320ms for hover/press; 300-450ms for larger reveals.

* Use `transform` and `opacity` only for animations to preserve 60fps (translate, scale, opacity).

* Reveal sequence for gameplay: Prompt fade in \-\> user action \-\> Submit uses a short dissolve \-\> Reveal uses cinematic crossfade with small scale nudge for the result. Keep reveal under 400ms so flow remains snappy.

* Respect `prefers-reduced-motion` to reduce or disable non-essential animations.

---

# **8\. Accessibility and performance**

## **8.1 Accessibility**

* Always ensure text contrast meets 4.5:1. The cream on charcoal and cream on black combination must be tested. If a UI element fails contrast for small text, add stronger glow or increase font weight.

* Buttons and interactive elements: minimum target size 44-48px touch area.

* Keyboard focus: use a clear gold ring or shadow to indicate focus.

* Semantic HTML and aria attributes on controls, especially map interactions and submit buttons.

* Always provide alternate text for images (figure names and brief attribution).

## **8.2 Performance**

* Lazy-load heavy assets like the Leaflet map and figure images. Defer map initialization until the gameplay view mounts.

* Keep texture overlays lightweight (SVG or small base64 repeated pattern under 20KB).

* Prefer CSS for shadows and highlights over image assets.

---

# **9\. Game-specific considerations (from PRD and user-flow)**

These rules exist to guarantee the product requirements are respected visually and functionally.

* **Single-screen gameplay**: On `md` and up, layout should show figure image \+ map \+ name input \+ timeline slider at a glance. Use responsive resizing to preserve that. Avoid collapsing an element into hidden tabs on these breakpoints.

* **Timer and speed bonus visuals**: Timer should be large, monospaced, cream; when time-critical, animate a subtle red pulse of the timer background (`#550000`) rather than switching color palettes.

* **Reveal phase**: Use cinematic crossfade to show correct location pin, timeline, and name. Points breakdown should appear on a black card overlay with gold separators.

* **Multiplayer UI**: Lobby screens use the same tokens; player rows are black surface, cream text, small gold or red badges for host/winner. Keep join code and start actions in prominent red CTA.

---

# **10\. Implementation checklist for engineers**

* Add color tokens to `tailwind.config.js` and CSS `:root`.

* Choose and locally host fonts: Bebas Neue, Playfair Display, Inter, JetBrains Mono, Special Elite if used.

* Create a small component library for `Button`, `Card`, `Modal`, `Input`, `Slider` using the tokens above. Keep component APIs simple.

* Ensure gameplay layout components follow the single-screen rule on `md` and larger breakpoints.

* Create a `ui-theme-rules.md` copy in the repo root and link it from `tech-stack.md`.

* Add tests for color contrast and mobile touch target sizes.

* Add `prefers-reduced-motion` support and keyboard focus styles.

---

# **11\. Non-goals \- what to avoid**

* No pastel backgrounds or bright white surfaces. The world should remain nocturnal.

* No excessive embossing or gaudy metal chrome effects. Keep depth subtle.

* No mixing of photo-realistic UI chrome and flat minimalism in the same view. Choose skeuomorphic texture consistently.

* No pure white text or bright saturated palettes that break the noir mood.

---

# **12\. Appendix \- code snippets and tokens**

Include the Tailwind tokens and the main CSS variables at the top of your UI library. See section 2.2.

---

# **13\. Final notes**

This design system is intentionally strict where it matters \- contrast, color hierarchy, and the gameplay single-screen rule \- and intentionally flexible where needed \- spacing, texture intensity, and micro-animations. If a specific component feels like it breaks the noir mood, default to darker surface, cream text, and a single accent (red or gold) to fix it.


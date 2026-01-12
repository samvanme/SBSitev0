# StrataBlue Design Tokens

## Design Philosophy

**Brutalism is about honesty, function, and raw materials.** This design system transforms a typical "dark tech startup" aesthetic into authentic brutalist visual language that communicates raw power and technical sophistication.

### Core Principles

1. **Typography as Architecture** - Massive, bold type that dominates. No glow effects.
2. **Hard Edges** - Offset shadows (no blur), thick borders, angular forms.
3. **Color Restraint** - Near-monochrome with ONE accent color used sparingly.
4. **Functional Motion Only** - Animations that communicate state. Zero decoration.
5. **Visible Grid** - Structure that feels intentional and industrial.

---

## Typography

### Font Families

```css
fontFamily: {
  sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
  display: ['Darker Grotesque', 'Space Grotesk', 'system-ui', 'sans-serif'],
  mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
}
```

| Font | Usage | Character |
|------|-------|-----------|
| **Darker Grotesque** | Display/headings | Tight, edgy neo-grotesque with brutalist energy |
| **Space Grotesk** | Body text | Geometric sans with character |
| **IBM Plex Mono** | Code, stats, data | Industrial heritage |

### Typography Scale

| Class | Usage | Properties |
|-------|-------|------------|
| `.text-display-xl` | Hero headlines | 6xl-8xl, font-black, uppercase, tracking-tight |
| `.text-display-lg` | Section headlines | 5xl-7xl, font-extrabold, tracking-tight |
| `.text-heading` | Section headers | 4xl-5xl, font-bold |
| `.text-heading-sm` | Card headers | 2xl-3xl, font-bold |
| `.text-body-lg` | Lead paragraphs | xl, text-slate-300 |
| `.text-body` | Body text | base, text-slate-400 |
| `.text-mono` | Data, labels | sm, tracking-wide |
| `.text-overline` | Category labels | xs, uppercase, tracking-[0.2em], text-brand-blue |

---

## Color Philosophy

### Constraint is Impact

Brand blue (`#00ABE2`) appears in **high-impact moments only**:
- Primary CTA buttons
- Active/selected states
- Critical status indicators
- Overline labels (sparingly)

### Color Usage

| Element | Color | Notes |
|---------|-------|-------|
| Background | `#030712` | Near-black slate |
| Primary surfaces | `slate-900` | Solid, opaque |
| Primary text | `white` | Maximum contrast |
| Secondary text | `slate-400` | Body text |
| Muted text | `slate-500` | Labels |
| Accent | `brand-blue` | CTAs only |
| Status (online) | `emerald-400` | Functional indicator |

### What We Avoid

- Brand blue on backgrounds or glows
- Decorative gradients
- Gradient text (except sparingly)
- Brand blue on every heading

---

## Shadow System

### Hard Offset Shadows (No Blur)

```css
.shadow-brutal-sm { box-shadow: 2px 2px 0 theme('colors.brand.blue'); }
.shadow-brutal { box-shadow: 4px 4px 0 theme('colors.brand.blue'); }
.shadow-brutal-lg { box-shadow: 6px 6px 0 theme('colors.brand.blue'); }
```

### White Shadows (Dark Backgrounds)

```css
.shadow-brutal-white-sm { box-shadow: 2px 2px 0 rgba(255, 255, 255, 0.9); }
.shadow-brutal-white { box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.9); }
```

### Interactive States

```css
/* Hover - shadow grows */
.hover\:shadow-brutal:hover { box-shadow: 6px 6px 0 theme('colors.brand.blue'); }
.hover\:shadow-brutal-lg:hover { box-shadow: 8px 8px 0 theme('colors.brand.blue'); }

/* Active - shadow shrinks, element shifts */
.active\:shadow-brutal-sm:active {
  box-shadow: 2px 2px 0 theme('colors.brand.blue');
  transform: translate(2px, 2px);
}
```

---

## Border System

### Brutalist Borders

```css
.border-brutal { @apply border-2 border-white; }
.border-brutal-thick { @apply border-3 border-white; }
.border-brutal-accent { @apply border-2 border-brand-blue; }
```

### Border Widths

```css
borderWidth: {
  '3': '3px',
  '4': '4px',
}
```

### Dividers

```css
.divider-brutal { @apply h-0.5 bg-white/20; }
.divider-brutal-vertical { @apply w-0.5 bg-white/20; }
```

---

## Spacing & Layout

### Custom Spacing

```css
spacing: {
  '18': '4.5rem',   // 72px
  '22': '5.5rem',   // 88px
  '30': '7.5rem',   // 120px - generous section spacing
  '36': '9rem',     // 144px - hero-level spacing
}
```

### Layout Components

```css
/* Section wrapper */
.section-brutal { @apply py-24 lg:py-36; }

/* Container */
.container-brutal { @apply max-w-7xl mx-auto px-6 lg:px-12; }
.container-brutal-wide { @apply max-w-[1400px] mx-auto px-6 lg:px-16; }

/* 12-column grid */
.grid-brutal {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}
```

---

## Animation Policy

### Functional Animation Only

**Allowed:**
- `waveform` - Shows audio state
- `ping` - Shows live/online status
- Fast transitions (150-200ms) for hover feedback

**Removed:**
- Aurora background animation
- Float animation on decorative elements
- All decorative hover effects

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Patterns

### Cards

```jsx
// Brutalist card
<div className="p-6 bg-slate-900 border-2 border-white/20 hover:border-white/40 transition-colors">
  {/* content */}
</div>
```

### Buttons

```jsx
// Primary CTA
<a className="px-8 py-4 bg-brand-blue text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm transition-all">
  Call to Action
</a>

// Secondary button
<button className="px-8 py-4 text-white font-bold border-2 border-white hover:bg-white hover:text-slate-900 transition-all">
  Secondary Action
</button>
```

### Section Headers

```jsx
<div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white/20 mb-6">
  <span className="text-overline">Category Label</span>
</div>
<h2 className="text-heading mb-4">
  Section Title <span className="text-brand-blue">Accent</span>
</h2>
<p className="text-body-lg">Supporting description text.</p>
```

---

## Migration Checklist

When updating components:

- [ ] Remove all `style={{textShadow: '...'}}` inline styles
- [ ] Remove all `style={{boxShadow: '...'}}` inline styles
- [ ] Remove `onMouseEnter`/`onMouseLeave` handlers
- [ ] Replace rounded corners with sharp edges
- [ ] Replace glass morphism with solid surfaces
- [ ] Replace gradient backgrounds with solid colors
- [ ] Use typography utility classes
- [ ] Use shadow-brutal classes for elevation
- [ ] Use border-2 with white/opacity for card borders

---

*Last updated: Phase 2 Design System Implementation*

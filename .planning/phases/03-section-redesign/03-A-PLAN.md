# Plan 03-A: Hero & VoiceDemo Redesign

## Objective
Redesign Hero and VoiceDemo sections with bold typography, stripped-down layouts, and impact-first hierarchy using the Phase 2 design system.

## Execution Context
- Design system tokens available in `tailwind.config.js` and `src/index.css`
- Typography: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (code)
- Shadows: Hard offset shadows (shadow-brutal-*)
- Animation policy: Functional motion only (waveform kept)

## Context
**Files to modify:**
- `src/components/Hero.jsx` - Main hero section
- `src/components/VoiceDemo.jsx` - Voice demo cards

**Design Decisions from Phase 2:**
- Brand blue on CTAs only
- No decorative animations
- Typography-forward, minimal decoration

## Tasks

### Task 1: Hero - Simplify Layout Structure
Refactor Hero.jsx to have cleaner visual hierarchy:
- Remove redundant wrapper divs
- Use CSS Grid for stats row instead of flexbox
- Consolidate CTA button styles
- Ensure headline is the clear focal point

**Acceptance**: Hero renders with simplified DOM structure, stats aligned in grid

### Task 2: Hero - Bold Typography Enhancement
Apply more aggressive typography treatment:
- Use text-display-xl for main headline (currently text-display-lg)
- Increase contrast on subheadline
- Make stats values more prominent with display typography

**Acceptance**: Headline dominates viewport, stats feel impactful

### Task 3: Hero - Reduce Visual Noise
Strip remaining decorative elements:
- Simplify grid overlay (reduce opacity or remove)
- Remove or reduce radial gradient intensity
- Ensure trust line doesn't compete with CTAs

**Acceptance**: Clean, high-contrast hero with focus on message and action

### Task 4: VoiceDemo - Card Refinement
Redesign demo cards for cleaner presentation:
- Unify agent header styling
- Simplify waveform container
- Make play button more prominent
- Reduce visual weight of status badges

**Acceptance**: Cards feel cleaner, play action is obvious

### Task 5: VoiceDemo - Section Header Polish
Improve section introduction:
- Tighten header spacing
- Ensure overline + headline + subhead have clear hierarchy
- Remove any visual elements that don't add meaning

**Acceptance**: Section header is clean and scannable

## Verification
```bash
npm run dev
# Visual check: Hero headline dominates, CTAs clear, stats impactful
# Visual check: VoiceDemo cards clean, play buttons prominent
# Check responsive: Test at 375px, 768px, 1024px, 1440px
```

## Success Criteria
- [ ] Hero headline is largest text on page
- [ ] Hero stats use consistent grid layout
- [ ] Hero CTAs have clear visual hierarchy (primary vs secondary)
- [ ] VoiceDemo cards have unified styling
- [ ] Both sections maintain brutalist aesthetic
- [ ] Responsive behavior preserved

## Output
- Modified `src/components/Hero.jsx`
- Modified `src/components/VoiceDemo.jsx`

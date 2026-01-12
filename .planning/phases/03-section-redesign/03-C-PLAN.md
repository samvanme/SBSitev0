# Plan 03-C: Stats, FinalCTA, Footer & Responsive

## Objective
Redesign Stats with data-forward presentation, FinalCTA with high-contrast action focus, Footer with utilitarian layout, and audit responsive behavior across all sections.

## Execution Context
- Design system tokens available in `tailwind.config.js` and `src/index.css`
- Typography: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (code)
- Brand blue restricted to CTAs only
- Hard shadows for interactive elements

## Context
**Files to modify:**
- `src/components/Stats.jsx` - Metrics and testimonial
- `src/components/FinalCTA.jsx` - Final call-to-action
- `src/components/Footer.jsx` - Footer links

**Current State:**
- Stats: 4-column grid with bordered cells, testimonial card
- FinalCTA: Display headline, dual CTA buttons, trust line
- Footer: 5-column grid (brand + 4 link columns)

## Tasks

### Task 1: Stats - Data-Forward Presentation
Make stats the hero of the section:
- Increase stat value typography size
- Use mono font for labels consistently
- Consider removing borders for cleaner look
- Make the data feel impactful and immediate

**Acceptance**: Stats values are the dominant visual element

### Task 2: Stats - Testimonial Refinement
Polish testimonial presentation:
- Tighten quote styling
- Improve author attribution layout
- Ensure quote icon doesn't compete with content
- Consider subtle background treatment

**Acceptance**: Testimonial feels credible and integrated

### Task 3: FinalCTA - High-Contrast Action Focus
Maximize conversion focus:
- Make primary CTA unmissable (size, color, shadow)
- Ensure secondary action doesn't compete
- Simplify surrounding content
- Consider removing trust line (already shown in Hero)

**Acceptance**: Primary CTA dominates, secondary is clearly secondary

### Task 4: FinalCTA - Layout Tightening
Optimize section layout:
- Tighten vertical spacing
- Center content more effectively
- Ensure headline + subhead + CTAs feel unified

**Acceptance**: Section feels compact and action-oriented

### Task 5: Footer - Utilitarian Layout
Apply brutalist treatment to footer:
- Simplify link column styling
- Make brand section more compact
- Use consistent typography for all links
- Consider reducing number of placeholder links

**Acceptance**: Footer is functional, not decorative

### Task 6: Footer - Bottom Bar Polish
Refine copyright and bottom section:
- Align with brutalist aesthetic
- Ensure proper spacing and alignment
- Update copyright year handling

**Acceptance**: Clean, minimal bottom bar

### Task 7: Responsive Audit - All Sections
Audit and fix responsive issues across all components:
- Test at 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)
- Fix any overflow issues
- Ensure typography scales appropriately
- Verify touch targets on mobile (min 44px)

**Acceptance**: All sections render correctly at all breakpoints

## Verification
```bash
npm run dev
# Visual check: Stats values are prominent
# Visual check: FinalCTA has clear primary action
# Visual check: Footer is utilitarian
# Responsive: Test all sections at 375px, 768px, 1024px, 1440px
```

## Success Criteria
- [ ] Stats values use display typography, feel impactful
- [ ] Testimonial integrates cleanly with stats
- [ ] FinalCTA primary button dominates
- [ ] Footer is functional and minimal
- [ ] All sections responsive at all breakpoints
- [ ] No horizontal overflow on mobile
- [ ] Touch targets meet 44px minimum

## Output
- Modified `src/components/Stats.jsx`
- Modified `src/components/FinalCTA.jsx`
- Modified `src/components/Footer.jsx`

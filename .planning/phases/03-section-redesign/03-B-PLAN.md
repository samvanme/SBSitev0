# Plan 03-B: UseCases & HowItWorks Redesign

## Objective
Redesign UseCases and HowItWorks sections with grid-based layouts, typographic hierarchy, and primitive step visualization.

## Execution Context
- Design system tokens available in `tailwind.config.js` and `src/index.css`
- Typography: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (code)
- Grid utility: `.grid-brutal` (12-column grid)
- Spacing: Generous section spacing (py-24 lg:py-36)

## Context
**Files to modify:**
- `src/components/UseCases.jsx` - Use case cards (Revenue, Service, HR)
- `src/components/HowItWorks.jsx` - 3-step process (Discover, Design, Deploy)

**Current State:**
- UseCases: 3-column grid, card-based, has icons + features lists
- HowItWorks: 3-column grid, step cards with number badges, connector lines

## Tasks

### Task 1: UseCases - Typographic Hierarchy
Enhance typography treatment in use case cards:
- Make category overline more subtle
- Use display typography for card titles
- Improve feature list readability
- Add visual weight to "Learn More" links

**Acceptance**: Cards have clear reading hierarchy (category → title → features → action)

### Task 2: UseCases - Card Layout Refinement
Simplify card structure:
- Reduce icon container visual weight
- Improve spacing between sections
- Make phase indicator (Install Phase X) more integrated
- Unify hover states

**Acceptance**: Cards feel lighter but content is more prominent

### Task 3: UseCases - Grid & Responsive
Ensure grid works across breakpoints:
- Full-width cards on mobile
- Proper gap at each breakpoint
- Card heights aligned on desktop

**Acceptance**: Grid responsive at 375px, 768px, 1024px, 1440px

### Task 4: HowItWorks - Step Visualization
Improve step visualization:
- Make step numbers more prominent (larger, bolder)
- Strengthen connector lines (visible structure)
- Consider left-aligned numbers with content for stronger grid
- Icon containers should feel more intentional

**Acceptance**: Steps have clear visual flow (1 → 2 → 3)

### Task 5: HowItWorks - Primitive Grid Layout
Apply more explicit grid structure:
- Use consistent alignment across steps
- Position step numbers consistently
- Ensure connector lines align with grid

**Acceptance**: Section feels structured and intentional

### Task 6: HowItWorks - Content Polish
Refine content presentation:
- Tighten description text
- Improve section header consistency with other sections
- Ensure CTA button matches design system

**Acceptance**: Content is scannable, CTA is clear

## Verification
```bash
npm run dev
# Visual check: UseCases cards have clear hierarchy
# Visual check: HowItWorks steps flow clearly 1-2-3
# Check responsive: Test at 375px, 768px, 1024px, 1440px
```

## Success Criteria
- [ ] UseCases cards have consistent typographic hierarchy
- [ ] UseCases grid is responsive and aligned
- [ ] HowItWorks step numbers are prominent
- [ ] HowItWorks connector lines create visual flow
- [ ] Both sections use design system tokens consistently
- [ ] Mobile experience maintains clarity

## Output
- Modified `src/components/UseCases.jsx`
- Modified `src/components/HowItWorks.jsx`

# Plan 03-B: UseCases, HowItWorks, Stats, FinalCTA, Footer Redesign

## Objective

Apply the left-aligned asymmetric brutalist aesthetic (established in Hero/VoiceDemo) to the remaining five sections. Add section numbering, refine typography hierarchy, and ensure responsive consistency across all sections.

## Execution Context

**Reference patterns from:**
- `src/components/Hero.jsx` — Left-aligned asymmetric layout, section numbering, responsive typography
- `src/components/VoiceDemo.jsx` — Section header with number and horizontal rule, card accent bars
- `src/styles/DESIGN-TOKENS.md` — Typography scale, shadow system, color restraint

**Design decisions (from STATE.md):**
- Layout: Left-aligned asymmetric (not centered)
- Section numbers: Use numbered prefixes (01, 02...) for section headers
- Color restraint: Brand blue on CTAs only
- Typography: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (code)

## Context

Phase 2 established the design system tokens. Phase 3-A applied bold brutalist aesthetic to Hero and VoiceDemo. These remaining sections already use the brutalist tokens but still have centered layouts and lack the asymmetric visual language.

**Current state of sections:**
- All already use brutalist tokens (section-brutal, container-brutal, text-* classes)
- All have centered headers (need left-align)
- None have section number prefixes (except HowItWorks steps use 01/02/03 internally)
- Footer still has gradient text on logo

## Tasks

### Task 1: Redesign UseCases section header and layout
**Goal**: Apply left-aligned asymmetric layout with section numbering

**Changes:**
- Add section number "02" with horizontal rule (matching VoiceDemo pattern)
- Left-align section header instead of centered
- Remove `text-center` and `mx-auto` from header wrapper
- Add vertical accent line like Hero (optional, on larger screens)
- Ensure grid cards maintain good visual balance

**Files**: `src/components/UseCases.jsx`

### Task 2: Enhance UseCases card styling
**Goal**: Improve card differentiation and visual hierarchy

**Changes:**
- Add left accent bars to cards (similar to VoiceDemo agent cards)
- Differentiate cards by phase: Phase 1 = blue accent, Phase 2/3 = white accents
- Update icon containers with more brutalist treatment (shadow-brutal)
- Improve feature list checkmarks to be more consistent
- Ensure CTA link has proper brutalist underline styling

**Files**: `src/components/UseCases.jsx`

### Task 3: Redesign HowItWorks section layout
**Goal**: Apply left-aligned asymmetric layout with section numbering

**Changes:**
- Add section number "03" with horizontal rule header pattern
- Left-align section header instead of centered
- Improve connector lines between steps (more visible, brutalist)
- Update step cards with asymmetric positioning
- Move step numbers to consistent position (top-left instead of top-right)

**Files**: `src/components/HowItWorks.jsx`

### Task 4: Enhance HowItWorks step visualization
**Goal**: Create clearer step progression with brutalist styling

**Changes:**
- Simplify step cards — remove inner border hover, use solid states
- Make step numbers more prominent (larger, bolder)
- Icon containers should use consistent shadow-brutal styling
- CTA button at bottom should match Hero primary button style
- Consider horizontal layout for steps on desktop

**Files**: `src/components/HowItWorks.jsx`

### Task 5: Redesign Stats section layout
**Goal**: Data-forward presentation with asymmetric layout

**Changes:**
- Add section number "04" with horizontal rule header pattern
- Left-align section header instead of centered
- Make stat values more prominent (increase typography weight/size)
- Consider asymmetric stat grid (not perfectly symmetrical)
- Add vertical accent line on left edge

**Files**: `src/components/Stats.jsx`

### Task 6: Enhance Stats testimonial styling
**Goal**: Brutalist testimonial card with proper color restraint

**Changes:**
- Change quote icon from brand-blue to white (color restraint)
- Add left accent bar to testimonial card (like VoiceDemo cards)
- Improve author info layout with brutalist treatment
- Ensure proper contrast and typography hierarchy

**Files**: `src/components/Stats.jsx`

### Task 7: Redesign FinalCTA section
**Goal**: High-contrast action focus with asymmetric layout

**Changes:**
- Consider left-aligned layout (or justify keeping centered for this CTA section)
- Simplify trust indicators (remove checkmark icons, use text dividers like Hero)
- Ensure CTA buttons match Hero button styling exactly
- Add subtle grid overlay for visual consistency
- Make headline more impactful with display typography

**Files**: `src/components/FinalCTA.jsx`

### Task 8: Redesign Footer section
**Goal**: Utilitarian brutalist footer

**Changes:**
- Remove gradient text on logo — use solid white or brand-blue
- Simplify layout with clear column structure
- Add horizontal rule above footer (brutalist divider)
- Update link styling (simpler, no hover color change to blue)
- Update copyright year from 2024 to current
- Consider reducing number of link columns or consolidating
- Remove bg-grid-dark if not consistent with rest of site

**Files**: `src/components/Footer.jsx`

### Task 9: Responsive improvements for all sections
**Goal**: Consistent mobile experience across all redesigned sections

**Changes:**
- Ensure all sections stack properly on mobile
- Typography scales appropriately at each breakpoint
- Touch targets meet 48px minimum
- Spacing adjusts for mobile (reduce padding/margins)
- Section numbers hide or scale on mobile
- Vertical accent lines hidden on mobile

**Files**: All 5 component files

### Task 10: Final verification and consistency check
**Goal**: Ensure all sections use consistent brutalist patterns

**Verification:**
- Run build to verify no errors
- Run lint to verify code quality
- Visual consistency check across all sections
- Section numbers are sequential (01 VoiceDemo, 02 UseCases, 03 HowItWorks, 04 Stats)
- All sections use left-aligned headers (except possibly FinalCTA)
- No brand-blue usage except CTAs and status indicators

## Success Criteria

- [ ] All 5 sections use left-aligned asymmetric layout (FinalCTA may be exception)
- [ ] Section numbers added: 02 UseCases, 03 HowItWorks, 04 Stats
- [ ] Brand blue used only on CTAs (not on decorative elements)
- [ ] Footer gradient removed, uses solid colors
- [ ] All sections responsive at all breakpoints
- [ ] Typography hierarchy consistent with Hero/VoiceDemo
- [ ] Build and lint pass with no errors

## Output

- Updated `src/components/UseCases.jsx`
- Updated `src/components/HowItWorks.jsx`
- Updated `src/components/Stats.jsx`
- Updated `src/components/FinalCTA.jsx`
- Updated `src/components/Footer.jsx`
- Updated `.planning/phases/03-section-redesign/03-B-SUMMARY.md`
- Updated `.planning/STATE.md` with progress
- Updated `.planning/ROADMAP.md` with completion status

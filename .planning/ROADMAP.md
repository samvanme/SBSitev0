# StrataBlue Website Redesign — Roadmap

## Milestone 1: AI-Native Website Launch

Transform the marketing landing page into an AI-native experience that demonstrates capabilities through interaction rather than description.

### Phase 1: Foundation & Cleanup ✅
**Goal**: Resolve blocking issues and establish clean development baseline

- ✅ Install dependencies and verify dev environment works
- ✅ Centralize hardcoded values (phone number in 6 files → config.js)
- ✅ Remove unused CSS (App.css) and fix broken links
- ✅ Set up environment variables (.env.example)
- ✅ Add basic error boundary for resilience

**Status**: Complete (2026-01-11)
**Plans**: 1 | **Commits**: 7

---

### Phase 2: Design System
**Goal**: Establish brutalist design tokens and typography-forward system

- Define brutalist design tokens (spacing, borders, grid system)
- Refine typography scale (Outfit, Plus Jakarta Sans hierarchy)
- Optimize dark mode contrast ratios
- Create animation primitives (thinking, progress, confidence states)
- Extract inline styles to Tailwind utilities/components
- Document design system for consistency

**Research needed**: Yes — brutalist web design patterns, dark mode best practices
**Estimated scope**: Medium

---

### Phase 3: Section Redesign
**Goal**: Apply minimalist brutalist aesthetic to all page sections

- Hero: Bold typography, stripped-down layout, impact-first
- VoiceDemo: Clean demo card styling, purposeful motion
- UseCases: Grid-based cards with typographic hierarchy
- HowItWorks: Primitive grid layout, step visualization
- Stats: Data-forward presentation, minimal decoration
- FinalCTA: High-contrast action focus
- Footer: Utilitarian links layout
- Responsive improvements across breakpoints

**Research needed**: No — design system from Phase 2 guides this
**Estimated scope**: Large

---

### Phase 4: Animation & State System
**Goal**: Implement state-expressive animations and adaptive UI behaviors

- Build animation component library (ThinkingState, Progress, Confidence)
- Implement adaptive UI patterns (respond to user behavior)
- Add loading/transition states throughout
- Replace direct DOM manipulation with React state/CSS
- Ensure animations are purposeful (explain, guide, confirm)

**Research needed**: Yes — accessible motion patterns, reduced-motion support
**Estimated scope**: Medium

---

### Phase 5: AI Demo Integration
**Goal**: Embed live AI agent demo as first-class UI element

- Design demo architecture (backend requirements, API structure)
- Build voice/chat hybrid component with visible tool calls
- Implement thinking state visualization
- Create hybrid demo flow: simulated intro → real interaction
- Handle edge cases (errors, timeouts, fallbacks)
- Connect to AI backend (requires infrastructure decision)

**Research needed**: Yes — AI backend options, WebSocket vs polling, voice API integration
**Estimated scope**: Large

---

### Phase 6: Content & Lead Flow
**Goal**: Implement messaging and consultation conversion path

- Partner vs vendor differentiation messaging throughout
- End-to-end solution narrative (strategy → production)
- Industry/vertical capability showcase (unified, not separate pages)
- Consultation form integrated into experience
- Form submission handling (backend integration)
- Clear CTAs with booking/contact flow

**Research needed**: Yes — form handling options (serverless, CRM integration)
**Estimated scope**: Medium

---

### Phase 7: Polish & Launch
**Goal**: Production-ready quality and deployment

- Accessibility audit (ARIA labels, keyboard nav, screen reader)
- Performance optimization (bundle size, lazy loading, Core Web Vitals)
- Cross-browser testing
- Analytics integration for demo engagement tracking
- Final content review
- Production deployment configuration

**Research needed**: No
**Estimated scope**: Medium

---

## Success Criteria

1. ✓ Visitors understand StrataBlue is a partner, not a chatbot vendor
2. ✓ Demo creates "aha moment" within 30 seconds
3. ✓ Clear path from interest → consultation booking
4. ✓ Site reflects technical sophistication of the offering
5. ✓ Performance: fast, lean, carbon-aware

---
*Created: 2026-01-11*

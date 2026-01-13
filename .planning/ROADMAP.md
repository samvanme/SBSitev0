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

### Phase 2: Design System ✅
**Goal**: Establish brutalist design tokens and typography-forward system

- ✅ Install brutalist typography (Darker Grotesque, Space Grotesk, IBM Plex Mono)
- ✅ Define hard shadow system (no blur, offset shadows)
- ✅ Define thick border system
- ✅ Define brutalist spacing & grid
- ✅ Define typography scale
- ✅ Remove decorative animations (aurora, float)
- ✅ Define reduced motion support
- ✅ Refactor all major components (Hero, VoiceDemo, Stats, HowItWorks, FinalCTA, UseCases, Header)
- ✅ Audit and reduce brand-blue usage
- ✅ Document design system

**Status**: Complete (2026-01-12)
**Plans**: 1 | **Commits**: 15

---

### Phase 3: Section Redesign ✅
**Goal**: Apply minimalist brutalist aesthetic to all page sections

- ✅ Hero: Bold typography, stripped-down layout, impact-first
- ✅ VoiceDemo: Clean demo card styling, purposeful motion
- ✅ UseCases: Left-aligned layout, accent bars, phase differentiation
- ✅ HowItWorks: Left-aligned layout, step progression cards
- ✅ Stats: Data-forward presentation, brutalist testimonial
- ✅ FinalCTA: Display typography, Hero-matched buttons
- ✅ Footer: Utilitarian layout, solid colors
- ✅ Responsive improvements (all sections)

**Status**: Complete (2026-01-12)
**Plans**: 2 (A: Hero & VoiceDemo, B: Remaining sections) | **Commits**: 15

---

### Phase 4: Animation & State System ✅
**Goal**: Implement state-expressive animations and adaptive UI behaviors

- ✅ Build animation component library (ThinkingState, ProgressIndicator, ConfidenceDisplay)
- ✅ Create StateTransition wrapper for visibility animations
- ✅ Extract Waveform as reusable component from VoiceDemo
- ✅ Add animation CSS variables and Tailwind keyframes
- ✅ Implement useInView hook for scroll-triggered animations
- ✅ Integrate thinking states into VoiceDemo with demo cycling
- ✅ Add entrance animations to Hero and VoiceDemo sections
- ✅ Ensure all animations respect prefers-reduced-motion

**Status**: Complete (2026-01-12)
**Plans**: 1 | **Commits**: 11

---

### Phase 5: AI Demo Integration ✅
**Goal**: Embed live AI agent demo as first-class UI element

- ✅ Design demo architecture (backend requirements, API structure)
- ✅ Build voice/chat hybrid component with visible tool calls
- ✅ Implement thinking state visualization
- ✅ Create hybrid demo flow: simulated intro → real interaction
- ✅ Handle edge cases (errors, timeouts, fallbacks)
- ✅ UI polish: dark scrollbars, bottom-anchored chat, avatar icons, rotating scenarios
- ⏸️ Connect to AI backend (deferred - requires infrastructure decision)

**Status**: Complete (UI framework done; backend deferred)
**Plans**: 2 | **Commits**: 14

---

### Phase 6: Content & Lead Flow
**Goal**: Implement messaging and consultation conversion path

- ✅ Partner vs vendor differentiation messaging throughout
- ✅ End-to-end solution narrative (strategy → production)
- ✅ Industry/vertical capability showcase (unified, not separate pages)
- ✅ Consultation form integrated into experience
- Form submission handling (backend integration)
- ✅ Clear CTAs with booking/contact flow

**Research needed**: Yes — form handling options (serverless, CRM integration)
**Estimated scope**: Medium

**Plans complete**: 06-01 (Content Messaging & Lead Form UI) | **Commits**: 7

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

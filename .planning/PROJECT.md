# StrataBlue Website Redesign

## Vision

Transform the current marketing landing page into an **AI-native experience** that demonstrates StrataBlue's capabilities rather than just describing them. Move from "telling" to "showing" — visitors should experience AI orchestration firsthand.

**Core positioning**: Consultation + end-to-end AI solutions partner (not a tool vendor)

## Context

StrataBlue does more than voice and chatbots:
- Full AI orchestration (agents, workflows, integrations)
- Strategy + implementation (consultants who build)
- Industry-specific solutions
- Custom AI infrastructure

The website should convey this breadth without commoditizing the offering.

## Design Direction

### Aesthetic
- **Minimalist brutalism**: Sparse layouts, bold typography, primitive grids
- **Blue theme**: Maintain brand colors (#00ABE2, #105665) for continuity
- **High-contrast dark mode**: Optimized for focused, analytical sessions
- **Typography-forward**: Let type do the visual lifting, minimal decoration

### Interaction Philosophy
- **Adaptive interfaces**: UI that responds to user behavior, not static pages
- **State-expressive motion**: Animations that show system thinking, confidence, progress
- **Post-decorative**: Every animation serves a purpose (explains, guides, confirms)

### AI-Native Patterns
- Embedded agents as first-class UI elements
- Mixed-mode interaction (click, prompt, form)
- Visible AI state (thinking, executing, confidence indicators)
- Tool calls shown transparently

## Requirements

### Validated

- ✓ React component architecture — existing
- ✓ Tailwind styling system with brand colors — existing
- ✓ Vite build pipeline — existing
- ✓ Responsive layout structure — existing
- ✓ Section-based page composition — existing

### Active

- [ ] Live AI agent demo in hero (voice/chat combo with visible tool calls)
- [ ] Hybrid demo flow: simulated intro → real agent interaction
- [ ] Onboarding/consultation form integrated into experience
- [ ] Minimalist brutalist redesign of all sections
- [ ] Adaptive UI elements that respond to user behavior
- [ ] State-expressive animations (thinking states, progress, confidence)
- [ ] Clear differentiation messaging (partner, not vendor)
- [ ] End-to-end solution narrative (strategy → production)
- [ ] Industry/vertical capability showcase (without separate pages)

### Out of Scope

- Pricing page — consultation-first model, no public pricing
- Self-serve signup — all leads go through consultation
- Separate industry vertical pages — unified experience for v1

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep React/Vite/Tailwind | Existing stack works, no reason to change | — Confirmed |
| Maintain blue brand theme | Boss continuity, avoid brand change questions | — Confirmed |
| Live agent demo over static | "Show don't tell" - prove capability | — Confirmed |
| Hybrid demo approach | Lower barrier (watch first) then engage | — Confirmed |
| No pricing | Consultation-first sales model | — Confirmed |
| Minimalist brutalism | Clarity over gloss, matches AI/infra positioning | — Pending design |

## Success Criteria

1. Visitors understand StrataBlue is a partner, not a chatbot vendor
2. Demo creates "aha moment" within 30 seconds
3. Clear path from interest → consultation booking
4. Site reflects technical sophistication of the offering
5. Performance: fast, lean, carbon-aware

## Technical Considerations

### From Codebase Analysis
- Dependencies need installation (`npm install`)
- No tests currently — consider adding for critical flows
- Hardcoded values (phone number) should be centralized
- Some accessibility gaps to address (ARIA labels, broken links)

### New Integrations Needed
- AI backend for live agent demo
- Form submission handling for onboarding
- Possibly analytics to track demo engagement

## References

Design inspiration sources provided:
- Adaptive/predictive layouts
- Agentic conversational surfaces
- Post-decorative motion
- Calm minimalist brutalism
- Performance-first, accessible by default

---
*Last updated: 2026-01-11 after initialization*

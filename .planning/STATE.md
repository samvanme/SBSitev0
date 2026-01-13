# Project State

## Current Status

**Milestone**: 1 — AI-Native Website Launch
**Phase**: 5 — AI Demo Integration
**Plan**: 05-01 (Interactive Demo Architecture & UI Framework)
**Status**: Complete

## Progress

| Phase | Name | Status |
|-------|------|--------|
| 1 | Foundation & Cleanup | ✅ Complete |
| 2 | Design System | ✅ Complete |
| 3 | Section Redesign | ✅ Complete |
| 4 | Animation & State System | ✅ Complete |
| 5 | AI Demo Integration | 🔄 In Progress (05-01 complete) |
| 6 | Content & Lead Flow | ⏳ Pending |
| 7 | Polish & Launch | ⏳ Pending |

## Context

### Last Action
Phase 5-01 executed (Interactive Demo Architecture & UI Framework). 10 tasks, 10 commits:
- Created demo component architecture documentation
- Implemented useDemoState hook (finite state machine)
- Created ToolCallDisplay, ConversationTranscript components
- Created DemoError, DemoFallback, DemoTimeout components
- Implemented useDemoConnection hook with mock mode
- Created DemoAgent component (main interactive card)
- Created DemoController (orchestrates hybrid demo flow)
- Refactored VoiceDemo to use new architecture
- Verified build and lint pass

### Next Action
Plan Phase 5-02 (Backend Integration):
- Decide on connection mode: WebSocket vs polling
- Choose voice API: Web Speech API vs cloud service
- Select AI backend for agent responses
- Implement real connection and tool calls

OR skip to Phase 6 if demo improvements can wait.

### Blockers
None

### Decisions Made
- Phone numbers centralized in `src/constants/config.js`
- Base URL configurable via VITE_BASE_URL environment variable
- Footer links converted to non-interactive (pages don't exist yet)
- ESLint scoped to src/ for React rules
- **Typography**: Darker Grotesque (display), Space Grotesk (body), IBM Plex Mono (code)
- **Shadow system**: Hard offset shadows, no blur
- **Color restraint**: Brand blue on CTAs only
- **Animation policy**: Functional motion only (waveform, ping kept; aurora, float removed)
- **Layout approach**: Left-aligned asymmetric (not centered)
- **Section numbers**: Use numbered prefixes (01, 02...) for section headers
- **Agent differentiation**: Revenue = blue accent, Service = white accent
- **FinalCTA**: Kept centered layout (appropriate for CTA sections)
- **Footer**: Simplified links, solid white logo (no gradient)
- **Animation components**: CSS-first approach to avoid React state complexity
- **Reduced motion**: All animations respect prefers-reduced-motion with static fallbacks
- **Demo architecture**: State machine with useDemoState hook, dependency injection for connection

### Decisions Pending
- AI backend choice for Phase 5-02 (requires research)
- WebSocket vs polling for real-time updates
- Voice API integration (Web Speech API vs cloud service)
- Form submission handling for Phase 6 (serverless vs CRM)

### Session History
- 2026-01-11: Phase 1 executed (8 tasks, 7 commits)
- 2026-01-12: Phase 2 executed (16 tasks, 15 commits)
- 2026-01-12: Phase 3-A executed (8 tasks, 8 commits)
- 2026-01-12: Phase 3-B executed (10 tasks, 7 commits)
- 2026-01-12: Phase 4-01 executed (11 tasks, 11 commits)
- 2026-01-12: Phase 5-01 planned (10 tasks)
- 2026-01-13: Phase 5-01 executed (10 tasks, 10 commits)

---
*Last updated: 2026-01-13*

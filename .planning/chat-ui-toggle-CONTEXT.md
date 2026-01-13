# Chat UI Use Case Toggle — Context

## Vision

Transform the current side-by-side two-agent demo into a single, focused chat experience with a use case carousel. Users see all three capabilities showcased, then choose which one to interact with.

## How It Works

### Layout
- **Single chat window** replacing the current side-by-side agent layout
- **Tabs at top of container** for 3 use cases: Sales, Support, Operations
- Each tab has a **distinct color** (fits brutalist design system)
- Active tab highlighted, inactive tabs **slightly greyed out**
- Phone call CTA and "Available 24/7" text **removed**

### Simulation Flow
1. Demo auto-plays through all 3 use cases as a **horizontal carousel**
2. Each use case shows **~3 messages** of simulated conversation
3. **Horizontal swipe animation** transitions between use cases
4. Tabs indicate which use case is currently playing
5. **Clicking a tab skips** to that use case's simulation
6. After all 3 complete → **"Want to try it yourself?"** prompt appears

### Interactive Flow
1. User clicks a category tab to select that use case
2. Chat window switches to **interactive mode** for selected agent
3. Can **switch use cases** anytime by clicking different tab
4. Same tool call visualizations as current implementation

## What's Essential

- Single chat window with tab navigation
- Carousel effect with horizontal swipe animation between use cases
- Tabs interactive during simulation (skip to selected use case)
- Distinct colors per use case tab
- Smooth transition from simulation → interactive
- All 3 use cases: Sales, Support, Operations

## What's Out of Scope

- Nothing explicitly excluded
- Voice input, mobile gestures, script changes, tool call visualizations all fair game

## What's Being Removed

- Side-by-side two-agent layout
- Phone call CTA ("Try live agent now")
- "Available 24/7" text

## What's Staying

- Simulated demo plays first (before interactive)
- Transition prompt to interactive mode
- Tool call visualizations
- Existing conversation scripts (adapted for 3rd use case: Operations)

## Use Cases

| Tab | Agent | Color | Focus |
|-----|-------|-------|-------|
| Sales | Revenue conversations | TBD (brand-blue variant) | Lead handling, pricing, scheduling |
| Support | Service conversations | TBD | Order issues, refunds, tickets |
| Operations | HR/internal conversations | TBD | Candidate screening, scheduling |

## Technical Notes

- Currently: `DemoController.jsx` manages two agents with `activeAgent` state
- Currently: `REVENUE_SCENARIOS` and `SERVICE_SCENARIOS` arrays for simulations
- Need: Add `OPERATIONS_SCENARIOS` for third use case
- Need: Carousel animation system for horizontal transitions
- Need: Refactor from 2-column grid to single chat container with tabs

---
*Created: 2026-01-13*

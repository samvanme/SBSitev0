# Animation System

Functional animation components for AI state visualization. All animations explain, guide, or confirm - never decorate.

## Design Principles

1. **Functional Motion Only** - Animations communicate state, not style
2. **Reduced Motion Support** - All animations respect `prefers-reduced-motion`
3. **Brutalist Aesthetic** - Hard edges, no blur, no glow
4. **Performance** - CSS-based, GPU-accelerated transforms

## CSS Variables

```css
/* Timing */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Easing */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
```

## Components

### ThinkingState

Visual indicator for AI processing.

```jsx
import { ThinkingState } from '../components/animations';

// Pulsing dots (default)
<ThinkingState variant="dots" size="md" />

// Typing cursor
<ThinkingState variant="typing" size="lg" label="Generating..." />

// Processing bars
<ThinkingState variant="processing" size="sm" />
```

**Props:**
- `variant`: `'dots'` | `'typing'` | `'processing'`
- `size`: `'sm'` | `'md'` | `'lg'`
- `label`: Accessible label (default: "Thinking...")

### ProgressIndicator

Progress visualization for multi-step operations.

```jsx
import { ProgressIndicator } from '../components/animations';

// Determinate progress
<ProgressIndicator value={75} />

// Indeterminate loading
<ProgressIndicator />

// Step-based progress
<ProgressIndicator
  steps={['Listen', 'Process', 'Respond']}
  currentStep={1}
/>
```

**Props:**
- `value`: 0-100 (undefined for indeterminate)
- `steps`: Array of step labels
- `currentStep`: Current step index (0-based)
- `size`: `'sm'` | `'md'`

### ConfidenceDisplay

AI confidence level visualization.

```jsx
import { ConfidenceDisplay } from '../components/animations';

// Percentage badge
<ConfidenceDisplay value={94} format="percentage" />

// Level label (HIGH/MEDIUM/LOW)
<ConfidenceDisplay value={75} format="level" />

// Visual bar
<ConfidenceDisplay value={50} format="bar" />
```

**Props:**
- `value`: 0-100 (required)
- `format`: `'percentage'` | `'level'` | `'bar'`
- `size`: `'sm'` | `'md'`

**Thresholds:**
- High (emerald): >= 80%
- Medium (amber): >= 50%
- Low (red): < 50%

### StateTransition

Animated wrapper for visibility changes.

```jsx
import { StateTransition } from '../components/animations';

<StateTransition show={isVisible} enter="fade">
  <Content />
</StateTransition>

<StateTransition show={isOpen} enter="slide-up" duration="fast">
  <Modal />
</StateTransition>
```

**Props:**
- `show`: Boolean visibility control (required)
- `enter`: `'fade'` | `'slide-up'` | `'slide-down'` | `'scale'`
- `duration`: `'fast'` | `'normal'` | `'slow'`
- `onEnter`: Callback when enter animation starts
- `onExit`: Callback when exit animation starts

### Waveform

Audio waveform visualization.

```jsx
import { Waveform } from '../components/animations';

<Waveform state="playing" color="brand" />
<Waveform state="paused" color="white" bars={12} />
<Waveform state="inactive" />
```

**Props:**
- `state`: `'playing'` | `'paused'` | `'inactive'`
- `color`: `'brand'` | `'white'`
- `bars`: Number of bars (default: 16)

## Utility Classes

```css
/* State transitions (opacity + transform) */
.transition-state

/* Appearance transitions (opacity + visibility) */
.transition-appearance

/* All properties smooth transition */
.transition-all-smooth
```

## Tailwind Animations

```js
// Available via animate-* classes
'thinking-dots'        // Opacity pulse for dots
'thinking-typing'      // Cursor blink
'progress-indeterminate' // Sliding progress bar
'fade-in'              // Fade entrance
'slide-up'             // Slide up entrance
'scale-in'             // Scale entrance
```

## Reduced Motion

All components detect `prefers-reduced-motion` and provide static fallbacks:
- Animations disabled or set to single iteration
- Opacity reduced to indicate state without motion
- Transitions shortened to near-instant

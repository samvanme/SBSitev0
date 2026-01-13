---
name: qa:frontend-qa
description: Debug frontend issues, optimize for mobile devices, and perform comprehensive QA. Use when the user asks to "debug UI", "fix layout issues", "optimize for mobile", "test responsiveness", "check accessibility", "review performance", "troubleshoot CSS", "fix cross-browser issues", or mentions visual bugs, viewport problems, touch interactions, or frontend testing.
---

# Frontend Debug, Mobile Optimization & QA

This skill guides systematic debugging of frontend issues, mobile optimization, and comprehensive quality assurance. Apply structured diagnostic approaches to identify root causes, optimize for mobile experiences, and ensure production-ready quality.

## When to Activate

Activate this skill when:
- Debugging visual bugs, layout issues, or unexpected UI behavior
- Optimizing interfaces for mobile devices and touch interactions
- Performing pre-launch QA or reviewing frontend implementations
- Troubleshooting cross-browser compatibility issues
- Investigating performance problems (slow renders, janky animations)
- Checking accessibility compliance
- Reviewing responsive design implementations

## Core Debugging Workflow

### 1. Issue Identification

Before diving into code, gather information systematically:

**Reproduce the Issue**
- Identify exact steps to reproduce
- Note which browsers/devices are affected
- Check if issue is consistent or intermittent
- Document viewport sizes where issue appears

**Isolate the Scope**
- Is it a single component or system-wide?
- Does it affect one route or multiple?
- Is it related to specific user interactions?
- Does it occur on initial load or after state changes?

### 2. Diagnostic Techniques

**CSS Debugging**
```css
/* Visual debugging - add temporarily to identify layout issues */
* { outline: 1px solid red !important; }

/* Highlight specific elements */
.debug { background: rgba(255, 0, 0, 0.2) !important; }
```

**Common CSS Issues Checklist**
- Box model confusion (padding vs margin, border-box vs content-box)
- Flexbox/Grid alignment issues (justify vs align, main vs cross axis)
- Z-index stacking context problems
- Overflow hidden clipping content unexpectedly
- Position absolute/fixed without proper containing block
- Specificity conflicts overriding expected styles
- CSS custom properties not inherited correctly

**JavaScript Debugging**
- Check console for errors and warnings
- Verify event listeners are attached correctly
- Confirm state updates trigger re-renders
- Look for race conditions in async operations
- Validate data flow from parent to child components

**Network/Data Issues**
- Inspect network tab for failed requests
- Verify API responses match expected schema
- Check for CORS or authentication issues
- Look for timing issues with data loading

### 3. Root Cause Analysis

Work backwards from the symptom:
1. What is the expected behavior?
2. What is the actual behavior?
3. When did it start working differently?
4. What changed recently in this area of the codebase?

## Mobile Optimization

### Viewport Configuration

```html
<!-- Essential mobile viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

### Responsive Design Patterns

**Mobile-First Approach**
```css
/* Base styles for mobile */
.component {
  padding: 1rem;
  font-size: 1rem;
}

/* Scale up for larger screens */
@media (min-width: 768px) {
  .component {
    padding: 2rem;
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .component {
    padding: 3rem;
    font-size: 1.25rem;
  }
}
```

**Key Breakpoints**
- 320px - Small phones
- 375px - Standard phones (iPhone SE, etc.)
- 390px - Modern phones (iPhone 12+)
- 768px - Tablets
- 1024px - Small laptops/tablets landscape
- 1280px - Laptops
- 1536px - Large screens

### Touch Optimization

**Touch Target Sizes**
- Minimum 44x44px for interactive elements (WCAG)
- 48x48px recommended for primary actions
- Adequate spacing between touch targets (8px minimum)

**Touch-Friendly Interactions**
```css
/* Disable hover-dependent interactions on touch */
@media (hover: none) {
  .element:hover {
    /* Remove hover-only effects */
  }
}

/* Prevent tap highlight on iOS */
button, a {
  -webkit-tap-highlight-color: transparent;
}

/* Smooth scrolling for touch */
.scrollable {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
```

### Mobile Performance

**Critical Rendering Path**
- Inline critical CSS for above-the-fold content
- Defer non-critical JavaScript
- Lazy load images below the fold
- Use appropriate image formats (WebP with fallbacks)

**Image Optimization**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy" decoding="async">
</picture>
```

**Responsive Images**
```html
<img
  srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
  src="medium.jpg"
  alt="Description"
>
```

### Mobile-Specific Issues

**Common Problems & Solutions**

| Issue | Cause | Solution |
|-------|-------|----------|
| 300ms tap delay | Legacy touch handling | `touch-action: manipulation` |
| Viewport height issues | Mobile browser chrome | Use `dvh` or JS-based height |
| Horizontal scroll | Element exceeds viewport | Check for fixed widths, overflow |
| Text too small | Fixed font sizes | Use relative units (rem, em) |
| Inputs zoom on focus | Font size < 16px | Set input font-size to 16px+ |
| Bottom content hidden | Fixed footer overlap | Add safe area padding |

**Safe Area Handling (Notched Devices)**
```css
.container {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

**Dynamic Viewport Height**
```css
/* Modern approach */
.full-height {
  height: 100dvh; /* dynamic viewport height */
}

/* Fallback */
@supports not (height: 100dvh) {
  .full-height {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
}
```

## General QA Checklist

### Visual QA

- [ ] Layout matches design specifications
- [ ] Typography is consistent (sizes, weights, line heights)
- [ ] Colors match brand guidelines
- [ ] Spacing is consistent and follows design system
- [ ] Images load correctly and have appropriate alt text
- [ ] Icons render at correct sizes
- [ ] No text overflow or truncation issues
- [ ] Empty states are handled gracefully
- [ ] Loading states provide visual feedback
- [ ] Error states are clearly communicated

### Functional QA

- [ ] All interactive elements are clickable/tappable
- [ ] Forms validate correctly (client and server)
- [ ] Form submissions work and provide feedback
- [ ] Navigation works correctly
- [ ] Links point to correct destinations
- [ ] Back/forward browser navigation works
- [ ] Deep linking works (direct URL access)
- [ ] Search functionality returns expected results
- [ ] Filters and sorting work correctly
- [ ] Pagination or infinite scroll works

### Responsive QA

- [ ] Layout adapts correctly at all breakpoints
- [ ] No horizontal scrolling at any viewport
- [ ] Images scale appropriately
- [ ] Text remains readable at all sizes
- [ ] Touch targets are adequately sized
- [ ] Menus are accessible on mobile
- [ ] Modals/overlays work on mobile
- [ ] Landscape orientation handled

### Cross-Browser Testing

**Priority Browsers**
1. Chrome (latest) - Primary development
2. Safari (latest) - iOS and Mac users
3. Firefox (latest) - Standards compliance
4. Edge (latest) - Enterprise users
5. Mobile Safari - iPhone users
6. Chrome Mobile - Android users

**Common Cross-Browser Issues**
- CSS Grid/Flexbox gap support
- CSS custom properties in older browsers
- Scroll behavior differences
- Form element styling
- Date/time input support
- Video/audio codec support

### Accessibility QA

- [ ] Page has proper heading hierarchy (h1 > h2 > h3)
- [ ] All images have meaningful alt text
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 large text)
- [ ] Focus states are visible
- [ ] Tab order is logical
- [ ] Interactive elements are keyboard accessible
- [ ] ARIA labels on icon-only buttons
- [ ] Form inputs have associated labels
- [ ] Error messages are announced to screen readers
- [ ] Skip links for navigation
- [ ] No content relies solely on color

**Quick Accessibility Tests**
1. Navigate entire page with keyboard only (Tab, Enter, Escape)
2. Use browser zoom to 200% - layout should remain usable
3. Test with screen reader (VoiceOver, NVDA)
4. Check color contrast with browser dev tools
5. Validate HTML structure

### Performance QA

- [ ] Page loads in < 3 seconds on 3G
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] No render-blocking resources
- [ ] Images are optimized and lazy loaded
- [ ] JavaScript bundle is code-split
- [ ] No memory leaks in long sessions
- [ ] Animations run at 60fps

## Debugging Tools & Techniques

### Browser DevTools

**Elements Panel**
- Inspect computed styles to find which rules apply
- Use :hov to force hover/focus/active states
- Check box model visualization
- Look for inherited styles causing issues

**Console**
- Filter by errors, warnings, info
- Use `console.table()` for data inspection
- Set breakpoints with `debugger` statement
- Monitor events with `monitorEvents(element)`

**Network Panel**
- Check for slow/failed requests
- Verify caching headers
- Analyze waterfall for blocking resources
- Throttle to simulate slow connections

**Performance Panel**
- Record interactions to find jank
- Identify long tasks blocking main thread
- Check for layout thrashing
- Analyze memory usage over time

**Lighthouse**
- Run audits for Performance, Accessibility, SEO
- Follow recommendations for improvements
- Compare scores before/after changes

### Debugging Frameworks

**React DevTools**
- Component tree inspection
- Props and state visualization
- Component re-render highlighting
- Profiler for performance analysis

**Vue DevTools**
- Component hierarchy
- Vuex/Pinia state inspection
- Event tracking
- Performance timeline

## Common Issue Patterns

### Layout Issues

**Flexbox Alignment**
```css
/* Center both axes */
.container {
  display: flex;
  justify-content: center; /* main axis */
  align-items: center;     /* cross axis */
}
```

**Grid Overflow**
```css
/* Prevent grid items from overflowing */
.grid-item {
  min-width: 0; /* Allow flex/grid children to shrink */
  overflow: hidden;
}
```

### Animation Performance

```css
/* Use transform and opacity for smooth animations */
.animate {
  /* Good - GPU accelerated */
  transform: translateX(100px);
  opacity: 0.5;

  /* Avoid - triggers layout */
  /* left: 100px; */
  /* width: 200px; */
}

/* Force GPU layer */
.gpu-layer {
  will-change: transform;
  transform: translateZ(0);
}
```

### Z-Index Management

```css
/* Use CSS custom properties for z-index scale */
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal-backdrop: 300;
  --z-modal: 400;
  --z-toast: 500;
  --z-tooltip: 600;
}
```

## Integration

This skill works well with:
- **frontend-design** - For creating new interfaces after debugging existing ones
- **context-engineering:evaluation** - For systematic testing approaches

## Quick Reference

**Debug Commands (Browser Console)**
```javascript
// Log all event listeners on an element
getEventListeners(document.querySelector('.element'));

// Monitor all clicks
monitorEvents(window, 'click');

// Find elements by text content
$$('*').filter(el => el.textContent.includes('search text'));

// Check accessibility tree
await new Promise(r => setTimeout(r, 100)); // Wait for DOM
console.log(document.body.accessibilityLabel);
```

**CSS Debug Utilities**
```css
/* Add to troubleshoot layout issues */
.debug-outline * { outline: 1px solid red; }
.debug-bg * { background: rgba(255,0,0,0.1); }
```

---

## Skill Metadata

**Created**: 2025-01-13
**Last Updated**: 2025-01-13
**Author**: Claude Code Skill
**Version**: 1.0.0

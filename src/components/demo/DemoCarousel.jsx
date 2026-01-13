import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * DemoCarousel - Horizontal slide carousel with CSS transforms
 *
 * Provides programmatic control over slide transitions with smooth
 * animations. Uses CSS transforms (not scroll-snap) for precise control.
 *
 * @example
 * <DemoCarousel activeIndex={0} onTransitionEnd={handleEnd}>
 *   <SlideOne />
 *   <SlideTwo />
 *   <SlideThree />
 * </DemoCarousel>
 */
// Check reduced motion preference (runs once on mount)
const getInitialReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export default function DemoCarousel({
  activeIndex = 0,
  children,
  onTransitionEnd,
}) {
  const containerRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialReducedMotion);

  // Subscribe to reduced motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle transition end
  const handleTransitionEnd = (e) => {
    // Only fire for the main container transition
    if (e.target === containerRef.current) {
      onTransitionEnd?.();
    }
  };

  // Convert children to array for mapping
  const slides = Array.isArray(children) ? children : [children];

  return (
    <div
      className="relative overflow-hidden"
      role="region"
      aria-label="Demo carousel"
      aria-live="polite"
    >
      <div
        ref={containerRef}
        className={`flex ${prefersReducedMotion ? '' : 'transition-transform duration-500'}`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transitionTimingFunction: prefersReducedMotion ? undefined : 'var(--ease-out-expo)',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full"
            role="tabpanel"
            id={`panel-${index}`}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex ? '' : undefined}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

DemoCarousel.propTypes = {
  /** Index of the currently active slide (0-based) */
  activeIndex: PropTypes.number,
  /** Slide content - each child becomes a slide */
  children: PropTypes.node.isRequired,
  /** Callback fired when slide transition completes */
  onTransitionEnd: PropTypes.func,
};

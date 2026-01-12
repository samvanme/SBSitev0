import { useState, useEffect, useRef } from 'react';

/**
 * Check if user prefers reduced motion (SSR-safe)
 */
function checkReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * useInView - Intersection Observer hook for scroll-triggered animations
 *
 * @example
 * function MyComponent() {
 *   const [ref, isInView] = useInView({ threshold: 0.1 });
 *   return (
 *     <div ref={ref} className={isInView ? 'animate-fade-in' : 'opacity-0'}>
 *       Content
 *     </div>
 *   );
 * }
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  // Initialize to true if user prefers reduced motion (SSR-safe with lazy initializer)
  const [isInView, setIsInView] = useState(() => checkReducedMotion());
  const hasAnimatedRef = useRef(checkReducedMotion());

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip observer if user prefers reduced motion (already set in initial state)
    if (hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            hasAnimatedRef.current = true;
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export default useInView;

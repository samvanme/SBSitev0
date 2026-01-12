import { useState, useEffect, useRef } from 'react';

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
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      setHasAnimated(true);
      return;
    }

    // If already animated and triggerOnce, skip observer
    if (triggerOnce && hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            setHasAnimated(true);
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
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return [ref, isInView];
}

export default useInView;

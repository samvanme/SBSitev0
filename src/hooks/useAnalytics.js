/**
 * useAnalytics - Analytics tracking hook
 *
 * Provides track() and identify() functions for event tracking.
 * In development mode, events are logged to console.
 * In production mode, events are no-op (ready for analytics integration).
 *
 * Event types:
 * - page_view: Page view tracking
 * - demo_mode_change: When user switches demo modes
 * - form_submit: Form submission events
 * - cta_click: Call-to-action button clicks
 *
 * @example
 * const { track, identify } = useAnalytics();
 *
 * // Track an event
 * track('cta_click', { button: 'hero_book_demo' });
 *
 * // Identify a user (for future integration)
 * identify('user-123', { email: 'user@example.com' });
 */

const isDev = import.meta.env.DEV;

/**
 * Track an analytics event
 * @param {string} eventName - Name of the event
 * @param {object} properties - Event properties
 */
function track(eventName, properties = {}) {
  if (isDev) {
    console.log('[Analytics] Track:', eventName, properties);
  }
  // Production: Add analytics provider integration here
  // e.g., window.gtag?.('event', eventName, properties);
  // e.g., window.analytics?.track(eventName, properties);
}

/**
 * Identify a user for analytics
 * @param {string} userId - Unique user identifier
 * @param {object} traits - User traits/properties
 */
function identify(userId, traits = {}) {
  if (isDev) {
    console.log('[Analytics] Identify:', userId, traits);
  }
  // Production: Add analytics provider integration here
  // e.g., window.analytics?.identify(userId, traits);
}

/**
 * Analytics hook providing track and identify functions
 * @returns {{ track: Function, identify: Function }}
 */
export function useAnalytics() {
  return {
    track,
    identify,
  };
}

// Also export standalone functions for use outside React components
export { track, identify };

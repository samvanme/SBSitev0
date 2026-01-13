import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * StateTransition - Animated transitions between UI states
 *
 * Uses CSS transitions controlled by the show prop. No internal state needed.
 *
 * @example
 * <StateTransition show={isVisible} enter="fade">
 *   <Content />
 * </StateTransition>
 */
export default function StateTransition({
  show,
  enter = 'fade',
  duration = 'normal',
  children,
  onEnter,
  onExit,
}) {
  const nodeRef = useRef(null);
  const prevShowRef = useRef(show);

  const durations = {
    fast: 150,
    normal: 300,
    slow: 500,
  };

  const durationMs = durations[duration];

  // Call callbacks on show change
  useEffect(() => {
    if (show && !prevShowRef.current) {
      onEnter?.();
    } else if (!show && prevShowRef.current) {
      onExit?.();
    }
    prevShowRef.current = show;
  }, [show, onEnter, onExit]);

  // Animation classes based on enter type and show state
  const getAnimationClasses = () => {
    const baseTransition = `transition-all duration-${durationMs === 150 ? '150' : durationMs === 300 ? '300' : '500'}`;

    // Base collapse classes when hidden - prevents taking up space in layout
    const collapseHidden = 'h-0 overflow-hidden';

    const animations = {
      fade: {
        hidden: `opacity-0 pointer-events-none ${collapseHidden}`,
        visible: 'opacity-100 pointer-events-auto h-auto',
      },
      'slide-up': {
        hidden: `opacity-0 translate-y-4 pointer-events-none ${collapseHidden}`,
        visible: 'opacity-100 translate-y-0 pointer-events-auto h-auto',
      },
      'slide-down': {
        hidden: `opacity-0 -translate-y-4 pointer-events-none ${collapseHidden}`,
        visible: 'opacity-100 translate-y-0 pointer-events-auto h-auto',
      },
      scale: {
        hidden: `opacity-0 scale-95 pointer-events-none ${collapseHidden}`,
        visible: 'opacity-100 scale-100 pointer-events-auto h-auto',
      },
    };

    const anim = animations[enter] || animations.fade;
    const state = show ? anim.visible : anim.hidden;

    return `${baseTransition} ${state} motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100`;
  };

  // Always render but hide with CSS when not showing
  // This avoids complex mount/unmount state management
  return (
    <div
      ref={nodeRef}
      className={getAnimationClasses()}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: 'var(--ease-out-expo)',
      }}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
}

StateTransition.propTypes = {
  /** Control visibility */
  show: PropTypes.bool.isRequired,
  /** Enter animation type */
  enter: PropTypes.oneOf(['fade', 'slide-up', 'slide-down', 'scale']),
  /** Animation duration */
  duration: PropTypes.oneOf(['fast', 'normal', 'slow']),
  /** Content to transition */
  children: PropTypes.node.isRequired,
  /** Callback when enter animation starts */
  onEnter: PropTypes.func,
  /** Callback when exit animation starts */
  onExit: PropTypes.func,
};

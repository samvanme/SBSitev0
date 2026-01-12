import PropTypes from 'prop-types';

/**
 * ThinkingState - Visual indicator for AI processing states
 *
 * @example
 * <ThinkingState variant="dots" size="md" />
 * <ThinkingState variant="typing" size="lg" label="Processing..." />
 * <ThinkingState variant="processing" size="sm" />
 */
export default function ThinkingState({
  variant = 'dots',
  size = 'md',
  label = 'Thinking...',
}) {
  const sizeClasses = {
    sm: { dot: 'w-1.5 h-1.5', gap: 'gap-1', bar: 'h-3 w-0.5', cursor: 'w-0.5 h-3' },
    md: { dot: 'w-2 h-2', gap: 'gap-1.5', bar: 'h-4 w-1', cursor: 'w-0.5 h-4' },
    lg: { dot: 'w-2.5 h-2.5', gap: 'gap-2', bar: 'h-5 w-1', cursor: 'w-1 h-5' },
  };

  const sizes = sizeClasses[size];

  // Dots variant - three pulsing dots
  if (variant === 'dots') {
    return (
      <div
        className={`inline-flex items-center ${sizes.gap}`}
        role="status"
        aria-label={label}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`${sizes.dot} bg-brand-blue animate-thinking-dots motion-reduce:animate-none motion-reduce:opacity-60`}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  // Typing variant - cursor blink effect
  if (variant === 'typing') {
    return (
      <div
        className={`inline-flex items-center ${sizes.gap}`}
        role="status"
        aria-label={label}
      >
        <span className="text-mono text-slate-400 text-sm">_</span>
        <span
          className={`${sizes.cursor} bg-brand-blue animate-thinking-typing motion-reduce:animate-none`}
        />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  // Processing variant - animated bars
  if (variant === 'processing') {
    return (
      <div
        className={`inline-flex items-end ${sizes.gap}`}
        role="status"
        aria-label={label}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`${sizes.bar} bg-brand-blue animate-thinking-dots motion-reduce:animate-none motion-reduce:opacity-60`}
            style={{
              animationDelay: `${i * 100}ms`,
              height: `${12 + (i % 2) * 4}px`,
            }}
          />
        ))}
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return null;
}

ThinkingState.propTypes = {
  /** Visual style variant */
  variant: PropTypes.oneOf(['dots', 'typing', 'processing']),
  /** Component size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Accessible label for screen readers */
  label: PropTypes.string,
};

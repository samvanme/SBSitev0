import PropTypes from 'prop-types';

/**
 * ProgressIndicator - Visual progress for multi-step AI operations
 *
 * @example
 * // Determinate progress bar
 * <ProgressIndicator value={75} />
 *
 * // Indeterminate progress
 * <ProgressIndicator />
 *
 * // Step-based progress
 * <ProgressIndicator
 *   steps={['Listen', 'Process', 'Respond']}
 *   currentStep={1}
 * />
 */
export default function ProgressIndicator({
  value,
  steps,
  currentStep = 0,
  size = 'md',
}) {
  const sizeClasses = {
    sm: { bar: 'h-1', text: 'text-xs', step: 'w-6 h-6 text-xs' },
    md: { bar: 'h-2', text: 'text-sm', step: 'w-8 h-8 text-sm' },
  };

  const sizes = sizeClasses[size];
  const isDeterminate = typeof value === 'number';
  const isStepBased = Array.isArray(steps) && steps.length > 0;

  // Step-based progress
  if (isStepBased) {
    return (
      <div
        className="flex items-center gap-2"
        role="progressbar"
        aria-valuenow={currentStep + 1}
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuetext={`Step ${currentStep + 1} of ${steps.length}: ${steps[currentStep]}`}
      >
        {steps.map((step, i) => {
          const isComplete = i < currentStep;
          const isCurrent = i === currentStep;
          const isPending = i > currentStep;

          return (
            <div key={i} className="flex items-center gap-2">
              {/* Step indicator */}
              <div
                className={`
                  ${sizes.step} flex items-center justify-center font-mono font-bold
                  border-2 transition-all-smooth
                  ${isComplete ? 'bg-brand-blue border-brand-blue text-white' : ''}
                  ${isCurrent ? 'bg-transparent border-brand-blue text-brand-blue' : ''}
                  ${isPending ? 'bg-transparent border-white/20 text-slate-500' : ''}
                `}
              >
                {isComplete ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>

              {/* Step label */}
              <span
                className={`
                  ${sizes.text} font-mono uppercase tracking-wide
                  ${isComplete || isCurrent ? 'text-white' : 'text-slate-500'}
                `}
              >
                {step}
              </span>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className={`
                    w-8 h-0.5 mx-2
                    ${i < currentStep ? 'bg-brand-blue' : 'bg-white/20'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Bar-based progress (determinate or indeterminate)
  return (
    <div
      className="w-full"
      role="progressbar"
      aria-valuenow={isDeterminate ? value : undefined}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={isDeterminate ? `${value}% complete` : 'Loading'}
    >
      <div className={`${sizes.bar} bg-slate-800 border border-white/10 overflow-hidden`}>
        {isDeterminate ? (
          // Determinate progress bar
          <div
            className={`${sizes.bar} bg-brand-blue transition-all duration-300`}
            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          />
        ) : (
          // Indeterminate progress bar
          <div
            className={`${sizes.bar} bg-brand-blue w-1/3 animate-progress-indeterminate motion-reduce:animate-none motion-reduce:w-full motion-reduce:opacity-50`}
          />
        )}
      </div>
    </div>
  );
}

ProgressIndicator.propTypes = {
  /** Progress value 0-100, or undefined for indeterminate */
  value: PropTypes.number,
  /** Step labels for multi-stage progress */
  steps: PropTypes.arrayOf(PropTypes.string),
  /** Current step index (0-based) */
  currentStep: PropTypes.number,
  /** Component size */
  size: PropTypes.oneOf(['sm', 'md']),
};

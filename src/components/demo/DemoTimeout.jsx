import PropTypes from 'prop-types';
import { StateTransition, ThinkingState } from '../animations';

/**
 * DemoTimeout - Response timeout notice with cancel option
 *
 * Shows when the AI response is taking too long.
 * Provides options to continue waiting or cancel.
 *
 * @example
 * <DemoTimeout
 *   show={isTimedOut}
 *   onRetry={handleRetry}
 *   onCancel={handleCancel}
 * />
 */
export default function DemoTimeout({
  show = false,
  waitTime = 30,
  onRetry,
  onCancel,
}) {
  return (
    <StateTransition show={show} enter="scale" duration="normal">
      <div
        className="bg-slate-800/50 border-2 border-slate-600 p-4"
        role="status"
        aria-live="polite"
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          {/* Clock icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-slate-600 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              Taking Longer Than Expected
              <ThinkingState variant="dots" size="sm" label="Still processing" />
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              The response is taking longer than {waitTime} seconds. This could be due to high demand.
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-4 h-1 bg-slate-700 overflow-hidden">
          <div
            className="h-full bg-brand-blue animate-pulse motion-reduce:animate-none"
            style={{ width: '60%' }}
          />
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-brand-blue text-white font-bold text-sm uppercase tracking-wider border-2 border-white shadow-brutal-sm hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              Keep Waiting
            </button>
          )}
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-transparent text-slate-400 font-bold text-sm uppercase tracking-wider border-2 border-slate-600 hover:border-slate-500 hover:text-white transition-all"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Timer */}
        <p className="text-xs text-slate-600 font-mono mt-3">
          Elapsed: {waitTime}s
        </p>
      </div>
    </StateTransition>
  );
}

DemoTimeout.propTypes = {
  /** Control visibility */
  show: PropTypes.bool,
  /** How long the user has been waiting (seconds) */
  waitTime: PropTypes.number,
  /** Callback for continuing to wait */
  onRetry: PropTypes.func,
  /** Callback for canceling the request */
  onCancel: PropTypes.func,
};

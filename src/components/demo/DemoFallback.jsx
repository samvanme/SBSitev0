import PropTypes from 'prop-types';
import { StateTransition } from '../animations';

/**
 * DemoFallback - Backend unavailable fallback notice
 *
 * Shows when the backend is unavailable and the demo falls back
 * to simulated mode. Provides explanation and retry option.
 *
 * @example
 * <DemoFallback
 *   show={isInFallback}
 *   onRetry={handleRetry}
 *   onContinue={handleContinue}
 * />
 */
export default function DemoFallback({
  show = false,
  onRetry,
  onContinue,
}) {
  return (
    <StateTransition show={show} enter="scale" duration="normal">
      <div
        className="bg-amber-950/30 border-2 border-amber-500/50 p-4"
        role="status"
        aria-live="polite"
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          {/* Info icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-amber-500 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-slate-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="font-bold text-amber-400 text-sm uppercase tracking-wider">
              Demo Mode
            </h4>
            <p className="text-slate-300 text-sm mt-1">
              Live agent connection unavailable. Showing simulated demo instead.
            </p>
            <p className="text-slate-500 text-xs mt-2 font-mono">
              The interactive demo requires a backend connection.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-transparent text-amber-400 font-bold text-sm uppercase tracking-wider border-2 border-amber-500/50 hover:border-amber-400 hover:bg-amber-500/10 transition-all"
            >
              Try Again
            </button>
          )}
          {onContinue && (
            <button
              onClick={onContinue}
              className="px-4 py-2 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-wider border-2 border-amber-400 shadow-brutal-sm hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              Continue Demo
            </button>
          )}
        </div>
      </div>
    </StateTransition>
  );
}

DemoFallback.propTypes = {
  /** Control visibility */
  show: PropTypes.bool,
  /** Callback for retry connection */
  onRetry: PropTypes.func,
  /** Callback for continuing with simulated demo */
  onContinue: PropTypes.func,
};

import PropTypes from 'prop-types';
import { StateTransition } from '../animations';

/**
 * DemoError - Connection/API error display with retry option
 *
 * Shows when the demo encounters a recoverable error.
 * Provides a retry button to attempt reconnection.
 *
 * @example
 * <DemoError
 *   show={hasError}
 *   message="Connection lost"
 *   onRetry={handleRetry}
 *   onDismiss={handleDismiss}
 * />
 */
export default function DemoError({
  show = false,
  message = 'Something went wrong',
  onRetry,
  onDismiss,
}) {
  return (
    <StateTransition show={show} enter="scale" duration="normal">
      <div
        className="bg-red-950/50 border-2 border-red-500 p-4"
        role="alert"
        aria-live="assertive"
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          {/* Error icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-red-500 flex items-center justify-center">
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="font-bold text-red-400 text-sm uppercase tracking-wider">
              Error
            </h4>
            <p className="text-white text-sm mt-1">{message}</p>
          </div>

          {/* Dismiss button */}
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-shrink-0 text-slate-500 hover:text-white transition-colors"
              aria-label="Dismiss error"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-500 text-white font-bold text-sm uppercase tracking-wider border-2 border-red-400 shadow-brutal-sm hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              Retry
            </button>
          )}
          <span className="text-xs text-slate-500 font-mono">
            Error Code: CONN_ERR
          </span>
        </div>
      </div>
    </StateTransition>
  );
}

DemoError.propTypes = {
  /** Control visibility */
  show: PropTypes.bool,
  /** Error message to display */
  message: PropTypes.string,
  /** Callback for retry action */
  onRetry: PropTypes.func,
  /** Callback for dismiss action */
  onDismiss: PropTypes.func,
};

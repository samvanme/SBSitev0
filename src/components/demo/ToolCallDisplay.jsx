import { useState } from 'react';
import PropTypes from 'prop-types';
import { StateTransition, ThinkingState } from '../animations';

/**
 * ToolCallDisplay - Visualizes AI tool calls transparently
 *
 * Shows what the AI agent is doing with collapsible parameters
 * and animated status transitions.
 *
 * @example
 * <ToolCallDisplay
 *   toolName="search_database"
 *   params={{ query: "customer info", limit: 10 }}
 *   status="executing"
 *   onComplete={() => console.log('done')}
 * />
 */
export default function ToolCallDisplay({
  toolName,
  params = {},
  status = 'pending',
  onComplete,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Tool icons mapping
  const toolIcons = {
    search: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    database: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    api: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    calendar: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    default: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="square" strokeLinejoin="miter" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  // Get icon based on tool name
  const getIcon = () => {
    const name = toolName.toLowerCase();
    if (name.includes('search')) return toolIcons.search;
    if (name.includes('database') || name.includes('db')) return toolIcons.database;
    if (name.includes('api') || name.includes('fetch')) return toolIcons.api;
    if (name.includes('calendar') || name.includes('schedule')) return toolIcons.calendar;
    return toolIcons.default;
  };

  // Status styling
  const statusStyles = {
    pending: {
      border: 'border-slate-600',
      bg: 'bg-slate-800/50',
      text: 'text-slate-400',
      label: 'Pending',
    },
    executing: {
      border: 'border-brand-blue',
      bg: 'bg-brand-blue/10',
      text: 'text-brand-blue',
      label: 'Executing',
    },
    complete: {
      border: 'border-emerald-500',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      label: 'Complete',
    },
    failed: {
      border: 'border-red-500',
      bg: 'bg-red-500/10',
      text: 'text-red-400',
      label: 'Failed',
    },
  };

  const style = statusStyles[status] || statusStyles.pending;

  // Notify completion
  if (status === 'complete' && onComplete) {
    onComplete();
  }

  const hasParams = Object.keys(params).length > 0;

  return (
    <div
      className={`border-2 ${style.border} ${style.bg} transition-colors duration-200 motion-reduce:transition-none`}
      role="status"
      aria-label={`Tool call: ${toolName} - ${style.label}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <span className={`${style.text}`}>{getIcon()}</span>

          {/* Tool name */}
          <span className="font-mono text-sm text-white">{toolName}</span>

          {/* Status indicator */}
          <StateTransition show={status === 'executing'} enter="fade" duration="fast">
            <ThinkingState variant="dots" size="sm" label="Executing tool" />
          </StateTransition>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2">
          <span className={`text-xs font-mono ${style.text} uppercase`}>
            {style.label}
          </span>

          {/* Expand/collapse button if params exist */}
          {hasParams && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-slate-500 hover:text-white transition-colors"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Collapse parameters' : 'Expand parameters'}
            >
              <svg
                className={`w-4 h-4 transform transition-transform motion-reduce:transition-none ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Parameters (collapsible) */}
      <StateTransition show={isExpanded && hasParams} enter="slide-down" duration="fast">
        <div className="border-t-2 border-slate-700 p-3 bg-slate-900/50">
          <pre className="text-xs font-mono text-slate-400 overflow-x-auto">
            {JSON.stringify(params, null, 2)}
          </pre>
        </div>
      </StateTransition>
    </div>
  );
}

ToolCallDisplay.propTypes = {
  /** Name of the tool being called */
  toolName: PropTypes.string.isRequired,
  /** Parameters passed to the tool */
  params: PropTypes.object,
  /** Current execution status */
  status: PropTypes.oneOf(['pending', 'executing', 'complete', 'failed']),
  /** Callback when tool completes */
  onComplete: PropTypes.func,
};

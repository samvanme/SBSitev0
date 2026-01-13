import { useRef } from 'react';
import PropTypes from 'prop-types';
import { StateTransition, ThinkingState } from '../animations';

// Minimalist avatar icons - post-modern line art style (defined outside component for stability)
const AgentIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Circuit/chip style AI icon */}
    <rect x="4" y="4" width="12" height="12" strokeLinecap="square" />
    <circle cx="10" cy="10" r="2" />
    <line x1="10" y1="2" x2="10" y2="4" strokeLinecap="square" />
    <line x1="10" y1="16" x2="10" y2="18" strokeLinecap="square" />
    <line x1="2" y1="10" x2="4" y2="10" strokeLinecap="square" />
    <line x1="16" y1="10" x2="18" y2="10" strokeLinecap="square" />
  </svg>
);

AgentIcon.propTypes = {
  className: PropTypes.string,
};

const UserIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Simple person silhouette */}
    <circle cx="10" cy="6" r="3" />
    <path d="M4 18v-2c0-2.2 2.7-4 6-4s6 1.8 6 4v2" strokeLinecap="square" />
  </svg>
);

UserIcon.propTypes = {
  className: PropTypes.string,
};

// Tool icon for inline tool call artifacts
const ToolIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="square" />
    <circle cx="10" cy="10" r="2.5" />
  </svg>
);

ToolIcon.propTypes = {
  className: PropTypes.string,
};

/**
 * ConversationTranscript - Streaming conversation display
 *
 * Shows message bubbles with auto-scroll and streaming text effect.
 * Follows brutalist design: no rounded corners, hard shadows.
 *
 * @example
 * <ConversationTranscript
 *   messages={[{ id: '1', role: 'user', content: 'Hello', timestamp: Date.now() }]}
 *   isStreaming={true}
 *   streamingText="I'm responding..."
 *   agentAccent="brand"
 * />
 */
export default function ConversationTranscript({
  messages = [],
  isStreaming = false,
  streamingText = '',
  agentAccent = 'brand',
}) {
  const scrollRef = useRef(null);

  // With flex-col-reverse, scroll position 0 shows the latest content (visual bottom)
  // Auto-scroll happens naturally when new content arrives at position 0

  // Accent colors for agent messages
  const accentStyles = {
    brand: {
      border: 'border-brand-blue',
      bg: 'bg-brand-blue/10',
      accent: 'bg-brand-blue',
      iconColor: 'text-brand-blue',
    },
    white: {
      border: 'border-white/30',
      bg: 'bg-white/5',
      accent: 'bg-white',
      iconColor: 'text-white',
    },
  };

  const accent = accentStyles[agentAccent] || accentStyles.brand;

  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  // Custom scrollbar styles for brutalist dark theme
  const scrollbarStyles = {
    // Firefox
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgb(51 65 85 / 0.5) transparent',
  };

  return (
    <div
      ref={scrollRef}
      className="demo-transcript flex flex-col-reverse gap-3 flex-1 min-h-0 overflow-y-auto"
      style={scrollbarStyles}
      role="log"
      aria-label="Conversation transcript"
      aria-live="polite"
    >
      {/* WebKit scrollbar styling */}
      <style>{`
        .demo-transcript::-webkit-scrollbar {
          width: 6px;
        }
        .demo-transcript::-webkit-scrollbar-track {
          background: transparent;
        }
        .demo-transcript::-webkit-scrollbar-thumb {
          background: rgb(51 65 85 / 0.3);
          border: none;
        }
        .demo-transcript::-webkit-scrollbar-thumb:hover {
          background: rgb(51 65 85 / 0.6);
        }
        .demo-transcript::-webkit-scrollbar-thumb:active {
          background: rgb(71 85 105 / 0.8);
        }
      `}</style>

      {/* Streaming message - appears first in reverse order = visual bottom */}
      <StateTransition show={isStreaming} enter="slide-up" duration="fast">
        <div className="flex justify-start">
          <div className={`max-w-[85%] ${accent.bg} border-2 ${accent.border}`}>
            {/* Streaming header */}
            <div className="flex items-center justify-between gap-4 px-3 py-1.5 border-b border-slate-700/50">
              <span className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase">
                <AgentIcon className={`w-4 h-4 ${accent.iconColor}`} />
                Agent
              </span>
              <ThinkingState variant="typing" size="sm" label="Agent is typing" />
            </div>

            {/* Streaming content */}
            <div className="px-3 py-2">
              <p className="text-sm text-white leading-relaxed">
                {streamingText}
                <span className="inline-block w-2 h-4 bg-brand-blue ml-0.5 animate-thinking-typing motion-reduce:animate-none" />
              </p>
            </div>

            {/* Accent bar */}
            <div className={`h-0.5 ${accent.accent}`}></div>
          </div>
        </div>
      </StateTransition>

      {/* Message list - reversed so newest appears at visual bottom */}
      {[...messages].reverse().map((message, index) => (
        <StateTransition
          key={message.id}
          show={true}
          enter="slide-up"
          duration="fast"
        >
          <div
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] ${
                message.role === 'user'
                  ? 'bg-slate-700 border-2 border-slate-600'
                  : `${accent.bg} border-2 ${accent.border}`
              }`}
            >
              {/* Message header */}
              <div className="flex items-center justify-between gap-4 px-3 py-1.5 border-b border-slate-700/50">
                <span className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase">
                  {message.role === 'user' ? (
                    <UserIcon className="w-4 h-4 text-slate-400" />
                  ) : (
                    <AgentIcon className={`w-4 h-4 ${accent.iconColor}`} />
                  )}
                  {message.role === 'user' ? 'You' : 'Agent'}
                </span>
                <span className="text-xs font-mono text-slate-600">
                  {formatTime(message.timestamp)}
                </span>
              </div>

              {/* Message content */}
              <div className="px-3 py-2">
                <p className="text-sm text-white leading-relaxed">
                  {message.content}
                </p>
              </div>

              {/* Tool call artifact - shows completed tool calls as persistent artifacts */}
              {message.toolCall && (
                <div className="mx-3 mb-2 border border-emerald-500/30 bg-emerald-500/5">
                  <div className="flex items-center gap-2 px-2 py-1.5">
                    <ToolIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-mono text-xs text-emerald-400">
                      {message.toolCall.name}
                    </span>
                    <span className="ml-auto text-xs font-mono text-emerald-400/60 uppercase">
                      ✓
                    </span>
                  </div>
                  {message.toolCall.params && Object.keys(message.toolCall.params).length > 0 && (
                    <div className="border-t border-slate-700/50 px-2 py-1 bg-slate-900/30">
                      <pre className="text-xs font-mono text-slate-500 overflow-x-auto">
                        {JSON.stringify(message.toolCall.params, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              {/* Accent bar for agent messages */}
              {message.role === 'assistant' && (
                <div className={`h-0.5 ${accent.accent}`}></div>
              )}
            </div>
          </div>

          {/* Add delay for animation stagger effect */}
          <style>
            {`.message-${index} { animation-delay: ${index * 50}ms; }`}
          </style>
        </StateTransition>
      ))}

      {/* Empty state - appears last in reversed order = visual top when no content */}
      {messages.length === 0 && !isStreaming && (
        <p className="text-center text-slate-500 text-sm py-4 font-mono">
          Conversation will appear here...
        </p>
      )}
    </div>
  );
}

ConversationTranscript.propTypes = {
  /** Array of conversation messages */
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      role: PropTypes.oneOf(['user', 'assistant']).isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      toolCall: PropTypes.shape({
        name: PropTypes.string.isRequired,
        params: PropTypes.object,
        status: PropTypes.oneOf(['pending', 'executing', 'complete', 'failed']),
      }),
    })
  ),
  /** Whether the agent is currently streaming a response */
  isStreaming: PropTypes.bool,
  /** Current streaming text content */
  streamingText: PropTypes.string,
  /** Accent color for agent messages */
  agentAccent: PropTypes.oneOf(['brand', 'white']),
};

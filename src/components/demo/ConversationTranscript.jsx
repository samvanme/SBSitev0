import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StateTransition, ThinkingState } from '../animations';

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
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when messages change or streaming updates
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages, streamingText]);

  // Accent colors for agent messages
  const accentStyles = {
    brand: {
      border: 'border-brand-blue',
      bg: 'bg-brand-blue/10',
      accent: 'bg-brand-blue',
    },
    white: {
      border: 'border-white/30',
      bg: 'bg-white/5',
      accent: 'bg-white',
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

  return (
    <div
      ref={scrollRef}
      className="flex flex-col gap-3 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
      role="log"
      aria-label="Conversation transcript"
      aria-live="polite"
    >
      {/* Empty state */}
      {messages.length === 0 && !isStreaming && (
        <p className="text-center text-slate-500 text-sm py-4 font-mono">
          Conversation will appear here...
        </p>
      )}

      {/* Message list */}
      {messages.map((message, index) => (
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
                <span className="text-xs font-mono text-slate-500 uppercase">
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

      {/* Streaming message */}
      <StateTransition show={isStreaming} enter="slide-up" duration="fast">
        <div className="flex justify-start">
          <div className={`max-w-[85%] ${accent.bg} border-2 ${accent.border}`}>
            {/* Streaming header */}
            <div className="flex items-center justify-between gap-4 px-3 py-1.5 border-b border-slate-700/50">
              <span className="text-xs font-mono text-slate-500 uppercase">
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

      {/* Scroll anchor */}
      <div ref={bottomRef} className="h-0" />
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
    })
  ),
  /** Whether the agent is currently streaming a response */
  isStreaming: PropTypes.bool,
  /** Current streaming text content */
  streamingText: PropTypes.string,
  /** Accent color for agent messages */
  agentAccent: PropTypes.oneOf(['brand', 'white']),
};

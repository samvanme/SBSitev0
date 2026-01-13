import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Waveform, ThinkingState, StateTransition } from '../animations';
import ConversationTranscript from './ConversationTranscript';

/**
 * DemoAgent - Main interactive agent card component
 *
 * Displays a single AI agent with waveform, tool calls, transcript,
 * and input controls. Works with both simulated and interactive modes.
 *
 * @example
 * <DemoAgent
 *   agentType="revenue"
 *   agentName="Alex AI"
 *   status="processing"
 *   messages={messages}
 *   currentToolCall={toolCall}
 *   isStreaming={true}
 *   streamingText="I'm responding..."
 *   onStartListening={handleStart}
 *   onSendMessage={handleSend}
 * />
 */
export default function DemoAgent({
  agentType = 'revenue',
  agentName = 'AI Agent',
  status = 'idle',
  messages = [],
  _currentToolCall = null,
  isStreaming = false,
  streamingText = '',
  isInteractive = false,
  onStartListening,
  onStopListening,
  onSendMessage,
  onCancel,
  onStartInteractive,
}) {
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);

  // Agent styling based on type
  const agentStyles = {
    revenue: {
      accent: 'bg-brand-blue',
      accentBorder: 'border-brand-blue',
      accentText: 'text-brand-blue',
      accentBg: 'bg-brand-blue/10',
      buttonBg: 'bg-brand-blue',
      buttonBorder: 'border-white',
      buttonShadow: 'shadow-brutal-sm hover:shadow-brutal',
      waveformColor: 'brand',
      transcriptAccent: 'brand',
    },
    service: {
      accent: 'bg-white',
      accentBorder: 'border-white/30',
      accentText: 'text-white',
      accentBg: 'bg-white/5',
      buttonBg: 'bg-white',
      buttonBorder: 'border-white',
      buttonShadow: 'shadow-brutal-white-sm hover:shadow-brutal-white',
      buttonTextColor: 'text-slate-900',
      waveformColor: 'white',
      transcriptAccent: 'white',
    },
    support: {
      accent: 'bg-white',
      accentBorder: 'border-white/30',
      accentText: 'text-white',
      accentBg: 'bg-white/5',
      buttonBg: 'bg-white',
      buttonBorder: 'border-white',
      buttonShadow: 'shadow-brutal-white-sm hover:shadow-brutal-white',
      buttonTextColor: 'text-slate-900',
      waveformColor: 'white',
      transcriptAccent: 'white',
    },
    operations: {
      accent: 'bg-amber-500',
      accentBorder: 'border-amber-500',
      accentText: 'text-amber-500',
      accentBg: 'bg-amber-500/10',
      buttonBg: 'bg-amber-500',
      buttonBorder: 'border-white',
      buttonShadow: 'shadow-brutal-sm hover:shadow-brutal',
      buttonTextColor: 'text-slate-900',
      waveformColor: 'amber',
      transcriptAccent: 'amber',
    },
  };

  const style = agentStyles[agentType] || agentStyles.revenue;

  // Get waveform state based on status
  const getWaveformState = () => {
    if (status === 'responding' || status === 'simulated') return 'playing';
    if (status === 'listening') return 'paused';
    return 'inactive';
  };

  // Get status label
  const getStatusLabel = () => {
    switch (status) {
      case 'listening':
        return 'LISTENING';
      case 'processing':
        return 'PROCESSING';
      case 'responding':
        return 'RESPONDING';
      case 'simulated':
        return 'DEMO';
      case 'error':
        return 'ERROR';
      case 'timeout':
        return 'TIMEOUT';
      default:
        return 'LIVE';
    }
  };

  // Get status indicator color
  const getStatusColor = () => {
    switch (status) {
      case 'error':
      case 'timeout':
        return 'text-red-400';
      case 'processing':
        return 'text-amber-400';
      default:
        return 'text-emerald-400';
    }
  };

  // Handle text submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (textInput.trim() && onSendMessage) {
      onSendMessage(textInput.trim());
      setTextInput('');
    }
  }, [textInput, onSendMessage]);

  // Handle microphone click
  const handleMicClick = useCallback(() => {
    if (status === 'listening') {
      onStopListening?.();
    } else if (status === 'idle' || status === 'interactive' || status === 'complete') {
      onStartListening?.();
    }
  }, [status, onStartListening, onStopListening]);

  const isActiveState = ['listening', 'processing', 'responding'].includes(status);

  return (
    <div className="relative bg-slate-900/50 border-0 sm:border-2 border-white/10 hover:border-white/20 transition-colors min-h-[400px] sm:h-[calc(100vh-180px)] sm:min-h-[500px] flex flex-col overflow-hidden">
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${style.accent}`}></div>

      <div className="p-4 pl-6 sm:p-6 sm:pl-8 flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-overline block mb-1 capitalize">{agentType}</span>
            <h4 className="font-bold text-white text-lg">{agentName}</h4>
          </div>
          <span className={`flex items-center gap-2 text-xs ${getStatusColor()} font-mono`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                status === 'error' ? 'bg-red-400' :
                status === 'processing' ? 'bg-amber-400' : 'bg-emerald-400'
              } opacity-75 motion-reduce:animate-none`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                status === 'error' ? 'bg-red-400' :
                status === 'processing' ? 'bg-amber-400' : 'bg-emerald-400'
              }`}></span>
            </span>
            {getStatusLabel()}
          </span>
        </div>

        {/* Waveform */}
        <Waveform
          state={getWaveformState()}
          color={style.waveformColor}
          bars={16}
        />

        {/* Processing indicator */}
        <StateTransition show={status === 'processing'} enter="fade" duration="fast">
          <div className="mt-3 flex items-center gap-2">
            <ThinkingState variant="dots" size="sm" label="Processing request" />
            <span className="text-xs text-slate-500 font-mono">Processing...</span>
          </div>
        </StateTransition>

        {/* Conversation transcript - grows to fill available space */}
        <div className="mt-4 flex-1 min-h-0 relative">
          <div className="absolute inset-0 flex flex-col">
            <ConversationTranscript
              messages={messages}
              isStreaming={isStreaming}
              streamingText={streamingText}
              agentAccent={style.transcriptAccent}
            />
          </div>
        </div>

        {/* Input area - only show in interactive mode */}
        {isInteractive && (
          <StateTransition show={isInteractive} enter="slide-up" duration="normal">
            <div className="mt-4 border-t-2 border-slate-700 pt-4">
              {/* Input toggle */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-500 font-mono uppercase">
                  {showTextInput ? 'Text Input' : 'Voice Input'}
                </span>
                <button
                  onClick={() => setShowTextInput(!showTextInput)}
                  className="text-xs text-slate-500 hover:text-white font-mono transition-colors"
                >
                  Switch to {showTextInput ? 'Voice' : 'Text'}
                </button>
              </div>

              {/* Voice input */}
              <StateTransition show={!showTextInput} enter="fade" duration="fast">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleMicClick}
                    disabled={isActiveState && status !== 'listening'}
                    className={`w-12 h-12 ${style.buttonBg} ${
                      agentType === 'service' ? style.buttonTextColor : 'text-white'
                    } border-2 ${style.buttonBorder} flex items-center justify-center ${style.buttonShadow} active:translate-x-0.5 active:translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    aria-label={status === 'listening' ? 'Stop listening' : 'Start listening'}
                  >
                    {status === 'listening' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </button>
                  <span className="text-xs text-slate-500 font-mono">
                    {status === 'listening' ? 'Tap to stop' : 'Tap to speak'}
                  </span>
                  {isActiveState && status !== 'listening' && onCancel && (
                    <button
                      onClick={onCancel}
                      className="ml-auto px-3 py-1 text-xs text-slate-500 hover:text-white border border-slate-600 hover:border-slate-500 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </StateTransition>

              {/* Text input */}
              <StateTransition show={showTextInput} enter="fade" duration="fast">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isActiveState}
                    className="flex-1 bg-slate-800 border-2 border-slate-700 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-slate-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={!textInput.trim() || isActiveState}
                    className={`px-4 py-2 min-h-[44px] ${style.buttonBg} ${
                      agentType === 'service' ? style.buttonTextColor : 'text-white'
                    } border-2 ${style.buttonBorder} font-bold text-sm ${style.buttonShadow} active:translate-x-0.5 active:translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    Send
                  </button>
                </form>
              </StateTransition>
            </div>
          </StateTransition>
        )}

        {/* Start interactive button - shown when not in interactive mode */}
        {!isInteractive && (
          <StateTransition show={!isInteractive} enter="fade" duration="normal">
            <div className="mt-4 border-t-2 border-slate-700 pt-4">
              <button
                onClick={onStartInteractive}
                className={`w-full flex items-center justify-center gap-3 py-3 ${style.buttonBg} ${
                  agentType === 'service' || agentType === 'support' || agentType === 'operations' ? style.buttonTextColor : 'text-white'
                } border-2 ${style.buttonBorder} font-bold ${style.buttonShadow} active:translate-x-0.5 active:translate-y-0.5 transition-all`}
              >
                {/* Keyboard icon */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start Chatting
              </button>
            </div>
          </StateTransition>
        )}
      </div>
    </div>
  );
}

DemoAgent.propTypes = {
  /** Agent type determines accent color */
  agentType: PropTypes.oneOf(['revenue', 'service', 'support', 'operations']),
  /** Display name for the agent */
  agentName: PropTypes.string,
  /** Current demo status */
  status: PropTypes.oneOf([
    'idle',
    'simulated',
    'interactive',
    'listening',
    'processing',
    'responding',
    'complete',
    'error',
    'timeout',
  ]),
  /** Conversation messages */
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      role: PropTypes.oneOf(['user', 'assistant']).isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    })
  ),
  /** Current tool call being executed */
  currentToolCall: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    params: PropTypes.object,
    status: PropTypes.oneOf(['pending', 'executing', 'complete', 'failed']),
  }),
  /** Whether response is being streamed */
  isStreaming: PropTypes.bool,
  /** Current streaming text */
  streamingText: PropTypes.string,
  /** Whether interactive mode is enabled */
  isInteractive: PropTypes.bool,
  /** Callback to start voice listening */
  onStartListening: PropTypes.func,
  /** Callback to stop voice listening */
  onStopListening: PropTypes.func,
  /** Callback to send text message */
  onSendMessage: PropTypes.func,
  /** Callback to cancel current operation */
  onCancel: PropTypes.func,
  /** Callback to start interactive mode */
  onStartInteractive: PropTypes.func,
};

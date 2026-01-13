import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDemoState, DEMO_STATES, DEMO_EVENTS } from '../../hooks/useDemoState';
import { useDemoConnection, CONNECTION_STATUS } from '../../hooks/useDemoConnection';
import { StateTransition } from '../animations';
import DemoAgent from './DemoAgent';
import DemoError from './DemoError';
import DemoFallback from './DemoFallback';
import DemoTimeout from './DemoTimeout';

/**
 * DemoController - Manages hybrid demo flow
 *
 * Orchestrates the transition from simulated demo to interactive mode.
 * Handles connection management, state coordination, and error recovery.
 *
 * Flow:
 * 1. Simulated phase: Auto-plays scripted conversation
 * 2. Transition prompt: "Want to try it yourself?" CTA
 * 3. Interactive phase: Real input/output with connection
 *
 * @example
 * <DemoController autoStart={true} onModeChange={handleModeChange} />
 */

// Simulated conversation scripts
const SIMULATED_SCRIPTS = {
  revenue: [
    { role: 'assistant', content: "Hello! I'm Alex, your AI sales assistant. How can I help you today?", delay: 1500 },
    { role: 'user', content: "I'm interested in learning about your enterprise plan.", delay: 2500 },
    { role: 'assistant', content: "I'd be happy to help with that! Let me pull up the details for our enterprise offering.", delay: 2000, toolCall: { name: 'fetch_pricing', params: { plan: 'enterprise' } } },
    { role: 'assistant', content: "Our enterprise plan includes unlimited seats, dedicated support, and custom integrations. Would you like me to schedule a demo call to discuss your specific needs?", delay: 3000 },
  ],
  service: [
    { role: 'assistant', content: "Hi there! I'm Sarah, here to help resolve any issues. What can I assist you with?", delay: 1500 },
    { role: 'user', content: "My order hasn't arrived yet and it's been two weeks.", delay: 2500 },
    { role: 'assistant', content: "I apologize for the inconvenience. Let me look up your order right away.", delay: 2000, toolCall: { name: 'lookup_order', params: { status: 'delayed' } } },
    { role: 'assistant', content: "I found your order - there was a shipping delay. I've expedited a replacement that will arrive within 2 business days. Is there anything else I can help with?", delay: 3500 },
  ],
};

export default function DemoController({
  autoStart = true,
  onModeChange,
}) {
  // State management
  const { state: demoStatus, send, context } = useDemoState();
  const [activeAgent, setActiveAgent] = useState('revenue');
  const [showTransitionPrompt, setShowTransitionPrompt] = useState(false);
  const [timeoutDuration, setTimeoutDuration] = useState(0);
  const [agentMessages, setAgentMessages] = useState({ revenue: [], service: [] });
  const [agentToolCalls, setAgentToolCalls] = useState({ revenue: null, service: null });
  const [agentStreaming, setAgentStreaming] = useState({ revenue: { isStreaming: false, text: '' }, service: { isStreaming: false, text: '' } });
  const [simulatedStep, setSimulatedStep] = useState({ revenue: 0, service: 0 });

  // Refs for cleanup
  const simulationTimerRef = useRef(null);
  const timeoutTimerRef = useRef(null);

  // Connection hook
  const connection = useDemoConnection({
    mode: 'mock',
    onMessage: useCallback((msg) => {
      setAgentMessages((prev) => ({
        ...prev,
        [activeAgent]: [...prev[activeAgent], msg],
      }));
    }, [activeAgent]),
    onError: useCallback((error) => {
      send(DEMO_EVENTS.ERROR, { error });
    }, [send]),
    onToolCall: useCallback((tool) => {
      setAgentToolCalls((prev) => ({
        ...prev,
        [activeAgent]: tool,
      }));
      // Clear tool call after complete
      if (tool.status === 'complete' || tool.status === 'failed') {
        setTimeout(() => {
          setAgentToolCalls((prev) => ({
            ...prev,
            [activeAgent]: null,
          }));
        }, 1000);
      }
    }, [activeAgent]),
    onStatusChange: useCallback((status) => {
      if (status === CONNECTION_STATUS.CONNECTED) {
        send(DEMO_EVENTS.CONNECTED);
      } else if (status === CONNECTION_STATUS.ERROR) {
        send(DEMO_EVENTS.CONNECTION_FAILED);
      }
    }, [send]),
    onStreamStart: useCallback(() => {
      send(DEMO_EVENTS.RESPONSE_START);
      setAgentStreaming((prev) => ({
        ...prev,
        [activeAgent]: { isStreaming: true, text: '' },
      }));
    }, [send, activeAgent]),
    onStreamChunk: useCallback((text) => {
      setAgentStreaming((prev) => ({
        ...prev,
        [activeAgent]: { isStreaming: true, text },
      }));
    }, [activeAgent]),
    onStreamEnd: useCallback(() => {
      send(DEMO_EVENTS.RESPONSE_COMPLETE);
      setAgentStreaming((prev) => ({
        ...prev,
        [activeAgent]: { isStreaming: false, text: '' },
      }));
    }, [send, activeAgent]),
  });

  // Auto-start simulated demo
  useEffect(() => {
    if (autoStart && demoStatus === DEMO_STATES.IDLE) {
      send(DEMO_EVENTS.START_SIMULATED);
    }
  }, [autoStart, demoStatus, send]);

  // Run simulated conversation
  useEffect(() => {
    if (demoStatus !== DEMO_STATES.SIMULATED) return;

    const runSimulation = async (agent) => {
      const script = SIMULATED_SCRIPTS[agent];
      const step = simulatedStep[agent];

      if (step >= script.length) {
        // Simulation complete for this agent
        if (simulatedStep.revenue >= SIMULATED_SCRIPTS.revenue.length &&
            simulatedStep.service >= SIMULATED_SCRIPTS.service.length) {
          setShowTransitionPrompt(true);
        }
        return;
      }

      const message = script[step];

      simulationTimerRef.current = setTimeout(() => {
        // Add message
        const newMsg = {
          id: `sim-${agent}-${step}`,
          role: message.role,
          content: message.content,
          timestamp: Date.now(),
        };
        setAgentMessages((prev) => ({
          ...prev,
          [agent]: [...prev[agent], newMsg],
        }));

        // Show tool call if present
        if (message.toolCall) {
          setAgentToolCalls((prev) => ({
            ...prev,
            [agent]: { ...message.toolCall, status: 'executing' },
          }));
          setTimeout(() => {
            setAgentToolCalls((prev) => ({
              ...prev,
              [agent]: { ...message.toolCall, status: 'complete' },
            }));
            setTimeout(() => {
              setAgentToolCalls((prev) => ({
                ...prev,
                [agent]: null,
              }));
            }, 800);
          }, 1200);
        }

        // Advance step
        setSimulatedStep((prev) => ({
          ...prev,
          [agent]: prev[agent] + 1,
        }));
      }, message.delay);
    };

    // Run both agents with offset
    runSimulation('revenue');
    setTimeout(() => runSimulation('service'), 1000);

    return () => {
      if (simulationTimerRef.current) {
        clearTimeout(simulationTimerRef.current);
      }
    };
  }, [demoStatus, simulatedStep]);

  // Notify mode change
  useEffect(() => {
    const mode = demoStatus === DEMO_STATES.INTERACTIVE ||
                 demoStatus === DEMO_STATES.LISTENING ||
                 demoStatus === DEMO_STATES.PROCESSING ||
                 demoStatus === DEMO_STATES.RESPONDING
      ? 'interactive'
      : 'simulated';
    onModeChange?.(mode);
  }, [demoStatus, onModeChange]);

  // Handle timeout tracking
  // Using ref to track previous status to avoid calling setState synchronously
  const prevStatusRef = useRef(demoStatus);

  useEffect(() => {
    const wasProcessing = prevStatusRef.current === DEMO_STATES.PROCESSING;
    const isProcessing = demoStatus === DEMO_STATES.PROCESSING;
    prevStatusRef.current = demoStatus;

    if (isProcessing && !wasProcessing) {
      // Just entering processing state - start timer
      // Reset is handled by the interval itself starting fresh
      let count = 0;
      timeoutTimerRef.current = setInterval(() => {
        count += 1;
        setTimeoutDuration(count);
        if (count >= 30) {
          send(DEMO_EVENTS.TIMEOUT);
          clearInterval(timeoutTimerRef.current);
        }
      }, 1000);
    } else if (!isProcessing && wasProcessing) {
      // Left processing state - cleanup
      if (timeoutTimerRef.current) {
        clearInterval(timeoutTimerRef.current);
        timeoutTimerRef.current = null;
      }
    }

    return () => {
      if (timeoutTimerRef.current) {
        clearInterval(timeoutTimerRef.current);
      }
    };
  }, [demoStatus, send]);

  // Handlers
  const handleTryInteractive = useCallback(async () => {
    setShowTransitionPrompt(false);
    send(DEMO_EVENTS.TRY_INTERACTIVE);
    await connection.connect();
  }, [send, connection]);

  const handleRetry = useCallback(async () => {
    send(DEMO_EVENTS.RETRY);
    await connection.connect();
  }, [send, connection]);

  const handleFallback = useCallback(() => {
    send(DEMO_EVENTS.FALLBACK);
    setShowTransitionPrompt(false);
  }, [send]);

  const handleContinueSimulated = useCallback(() => {
    send(DEMO_EVENTS.START_SIMULATED);
    setSimulatedStep({ revenue: 0, service: 0 });
    setAgentMessages({ revenue: [], service: [] });
  }, [send]);

  const handleStartListening = useCallback((agent) => {
    setActiveAgent(agent);
    send(DEMO_EVENTS.START_LISTENING);
    send(DEMO_EVENTS.SET_AGENT, { agentType: agent });
  }, [send]);

  const handleStopListening = useCallback(() => {
    send(DEMO_EVENTS.STOP_LISTENING);
  }, [send]);

  const handleSendMessage = useCallback((agent, content) => {
    setActiveAgent(agent);
    send(DEMO_EVENTS.START_LISTENING);
    send(DEMO_EVENTS.STOP_LISTENING);
    // Add user message immediately
    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: Date.now(),
    };
    setAgentMessages((prev) => ({
      ...prev,
      [agent]: [...prev[agent], userMsg],
    }));
    // Send to connection
    connection.send({ type: 'text', content, agentType: agent });
  }, [send, connection]);

  const handleCancel = useCallback(() => {
    send(DEMO_EVENTS.CANCEL);
    connection.disconnect();
    connection.connect();
  }, [send, connection]);

  // Determine if interactive mode is available
  const isInteractive = [
    DEMO_STATES.INTERACTIVE,
    DEMO_STATES.LISTENING,
    DEMO_STATES.PROCESSING,
    DEMO_STATES.RESPONDING,
    DEMO_STATES.COMPLETE,
  ].includes(demoStatus);

  // Get status for each agent
  const getAgentStatus = (agent) => {
    if (agent === activeAgent) {
      return demoStatus;
    }
    return isInteractive ? 'interactive' : 'simulated';
  };

  return (
    <div className="space-y-6">
      {/* Agent cards grid */}
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Revenue Agent */}
        <DemoAgent
          agentType="revenue"
          agentName="Alex AI"
          status={getAgentStatus('revenue')}
          messages={agentMessages.revenue}
          currentToolCall={agentToolCalls.revenue}
          isStreaming={agentStreaming.revenue.isStreaming}
          streamingText={agentStreaming.revenue.text}
          isInteractive={isInteractive}
          onStartListening={() => handleStartListening('revenue')}
          onStopListening={handleStopListening}
          onSendMessage={(content) => handleSendMessage('revenue', content)}
          onCancel={handleCancel}
        />

        {/* Service Agent */}
        <DemoAgent
          agentType="service"
          agentName="Sarah AI"
          status={getAgentStatus('service')}
          messages={agentMessages.service}
          currentToolCall={agentToolCalls.service}
          isStreaming={agentStreaming.service.isStreaming}
          streamingText={agentStreaming.service.text}
          isInteractive={isInteractive}
          onStartListening={() => handleStartListening('service')}
          onStopListening={handleStopListening}
          onSendMessage={(content) => handleSendMessage('service', content)}
          onCancel={handleCancel}
        />
      </div>

      {/* Transition prompt */}
      <StateTransition show={showTransitionPrompt} enter="slide-up" duration="normal">
        <div className="bg-slate-800/50 border-2 border-brand-blue/50 p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Want to try it yourself?
          </h3>
          <p className="text-slate-400 mb-4">
            Switch to interactive mode and have a real conversation with our AI agents.
          </p>
          <button
            onClick={handleTryInteractive}
            className="px-6 py-3 bg-brand-blue text-white font-bold uppercase tracking-wider border-2 border-white shadow-brutal-sm hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            Try Interactive Demo
          </button>
        </div>
      </StateTransition>

      {/* Connecting state */}
      <StateTransition show={demoStatus === DEMO_STATES.CONNECTING} enter="fade" duration="fast">
        <div className="bg-slate-800/50 border-2 border-slate-600 p-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-brand-blue border-t-transparent animate-spin motion-reduce:animate-none" />
            <span className="text-white font-mono">Connecting to AI agent...</span>
          </div>
        </div>
      </StateTransition>

      {/* Error states */}
      <DemoError
        show={demoStatus === DEMO_STATES.ERROR}
        message={context.error?.message || 'Connection failed'}
        onRetry={handleRetry}
        onDismiss={handleFallback}
      />

      <DemoFallback
        show={demoStatus === DEMO_STATES.FALLBACK}
        onRetry={handleRetry}
        onContinue={handleContinueSimulated}
      />

      <DemoTimeout
        show={demoStatus === DEMO_STATES.TIMEOUT}
        waitTime={timeoutDuration}
        onRetry={() => send(DEMO_EVENTS.RETRY)}
        onCancel={handleCancel}
      />
    </div>
  );
}

DemoController.propTypes = {
  /** Start simulated demo automatically on mount */
  autoStart: PropTypes.bool,
  /** Callback when demo mode changes */
  onModeChange: PropTypes.func,
};

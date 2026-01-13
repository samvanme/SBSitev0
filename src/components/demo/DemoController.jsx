import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDemoState, DEMO_STATES, DEMO_EVENTS } from '../../hooks/useDemoState';
import { useDemoConnection, CONNECTION_STATUS } from '../../hooks/useDemoConnection';
import { StateTransition } from '../animations';
import DemoAgent from './DemoAgent';
import DemoTabs from './DemoTabs';
import DemoCarousel from './DemoCarousel';
import DemoError from './DemoError';
import DemoFallback from './DemoFallback';
import DemoTimeout from './DemoTimeout';

/**
 * DemoController - Manages hybrid demo flow with tabbed carousel
 *
 * Orchestrates the transition from simulated demo to interactive mode.
 * Features a single chat window with 3 use case tabs (Sales, Support, Operations).
 *
 * Flow:
 * 1. Simulated phase: Auto-plays through all 3 use cases via carousel
 * 2. Transition prompt: Prompts user to select a use case
 * 3. Interactive phase: Real input/output with selected agent
 *
 * @example
 * <DemoController autoStart={true} onModeChange={handleModeChange} />
 */

// Tab order for carousel
const TAB_ORDER = ['sales', 'support', 'operations'];

// Rotating simulated conversation scenarios
const SALES_SCENARIOS = [
  [
    { role: 'assistant', content: "Hello! I'm Alex, your AI sales assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "I'm interested in learning about your enterprise plan.", delay: 3500 },
    { role: 'assistant', content: "I'd be happy to help with that! Let me pull up the details for our enterprise offering.", delay: 3000, toolCall: { name: 'fetch_pricing', params: { plan: 'enterprise' } } },
    { role: 'assistant', content: "Our enterprise plan includes unlimited seats, dedicated support, and custom integrations. Would you like me to schedule a demo call to discuss your specific needs?", delay: 4000 },
  ],
  [
    { role: 'assistant', content: "Hello! I'm Alex, your AI sales assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "Hi, I spoke with someone last week about a custom package.", delay: 3500 },
    { role: 'assistant', content: "Of course! Let me pull up your conversation history.", delay: 3000, toolCall: { name: 'crm_lookup', params: { type: 'recent_interactions' } } },
    { role: 'assistant', content: "I found your previous conversation with our team. You were discussing a 50-seat package with API access. Would you like to continue where you left off?", delay: 4000 },
  ],
  [
    { role: 'assistant', content: "Hello! I'm Alex, your AI sales assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "I'd like to schedule a demo with your team.", delay: 3500 },
    { role: 'assistant', content: "I'll check our team's availability right now.", delay: 3000, toolCall: { name: 'schedule_demo', params: { duration: '30min' } } },
    { role: 'assistant', content: "I have availability tomorrow at 2pm or Thursday at 10am. Which works better for you?", delay: 4000 },
  ],
  [
    { role: 'assistant', content: "Hello! I'm Alex, your AI sales assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "Can you send me a quote for 25 users?", delay: 3500 },
    { role: 'assistant', content: "Absolutely! Let me generate a custom quote for you.", delay: 3000, toolCall: { name: 'generate_quote', params: { seats: 25, plan: 'business' } } },
    { role: 'assistant', content: "I've prepared a quote for 25 seats on our Business plan. I'm sending it to your email now. The quote is valid for 30 days.", delay: 4000 },
  ],
];

const SUPPORT_SCENARIOS = [
  [
    { role: 'assistant', content: "Hi there! I'm Sarah, here to help resolve any issues. What can I assist you with?", delay: 2000 },
    { role: 'user', content: "My order hasn't arrived yet and it's been two weeks.", delay: 3500 },
    { role: 'assistant', content: "I apologize for the inconvenience. Let me look up your order right away.", delay: 3000, toolCall: { name: 'lookup_order', params: { status: 'delayed' } } },
    { role: 'assistant', content: "I found your order - there was a shipping delay. I've expedited a replacement that will arrive within 2 business days. Is there anything else I can help with?", delay: 4500 },
  ],
  [
    { role: 'assistant', content: "Hi there! I'm Sarah, here to help resolve any issues. What can I assist you with?", delay: 2000 },
    { role: 'user', content: "Where is my package? The tracking hasn't updated in days.", delay: 3500 },
    { role: 'assistant', content: "Let me check the tracking details for you.", delay: 3000, toolCall: { name: 'track_shipment', params: { carrier: 'auto-detect' } } },
    { role: 'assistant', content: "Your package is currently at the local distribution center and is scheduled for delivery tomorrow. The tracking delay was due to a system sync issue.", delay: 4500 },
  ],
  [
    { role: 'assistant', content: "Hi there! I'm Sarah, here to help resolve any issues. What can I assist you with?", delay: 2000 },
    { role: 'user', content: "I need to return an item and get a refund.", delay: 3500 },
    { role: 'assistant', content: "I can help with that. Let me start the refund process.", delay: 3000, toolCall: { name: 'process_refund', params: { type: 'full', reason: 'return' } } },
    { role: 'assistant', content: "I've initiated your refund - it will appear in your account within 3-5 business days. I'm also emailing you a prepaid return label.", delay: 4500 },
  ],
  [
    { role: 'assistant', content: "Hi there! I'm Sarah, here to help resolve any issues. What can I assist you with?", delay: 2000 },
    { role: 'user', content: "I'm having a technical issue with the product.", delay: 3500 },
    { role: 'assistant', content: "I'll create a support ticket and connect you with our technical team.", delay: 3000, toolCall: { name: 'create_ticket', params: { priority: 'high', category: 'technical' } } },
    { role: 'assistant', content: "I've created ticket #4827 and flagged it as high priority. A specialist will reach out within 2 hours. Is there anything else I can document for them?", delay: 4500 },
  ],
];

const OPERATIONS_SCENARIOS = [
  [
    { role: 'assistant', content: "Hello! I'm Jordan, your AI operations assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "I need to schedule interviews for the senior developer position.", delay: 3500 },
    { role: 'assistant', content: "I'll check the availability of your interview panel and the candidates.", delay: 3000, toolCall: { name: 'check_availability', params: { role: 'senior_developer', panel: ['hiring_manager', 'tech_lead'] } } },
    { role: 'assistant', content: "I've found slots that work for everyone. I can schedule three candidates this Thursday afternoon. Should I send the calendar invites?", delay: 4000 },
  ],
  [
    { role: 'assistant', content: "Hello! I'm Jordan, your AI operations assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "Can you do a quick phone screen for the marketing manager applicant?", delay: 3500 },
    { role: 'assistant', content: "Of course! Let me pull up the job requirements and initiate the screening call.", delay: 3000, toolCall: { name: 'initiate_screening', params: { role: 'marketing_manager', type: 'phone_screen' } } },
    { role: 'assistant', content: "I've completed the initial screening. The candidate meets 8 of 10 requirements and has strong leadership experience. I'm sending you the summary now.", delay: 4500 },
  ],
  [
    { role: 'assistant', content: "Hello! I'm Jordan, your AI operations assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "Have we received all the reference checks for the finance director candidate?", delay: 3500 },
    { role: 'assistant', content: "Let me check the status of the reference requests.", delay: 3000, toolCall: { name: 'check_references', params: { candidate_id: 'FD-2024-089', status: 'pending' } } },
    { role: 'assistant', content: "Two of three references have responded with positive feedback. I've sent a follow-up to the third reference and will notify you once it's complete.", delay: 4500 },
  ],
  [
    { role: 'assistant', content: "Hello! I'm Jordan, your AI operations assistant. How can I help you today?", delay: 2000 },
    { role: 'user', content: "We have a new hire starting Monday. Is everything ready?", delay: 3500 },
    { role: 'assistant', content: "I'll verify the onboarding checklist for the new team member.", delay: 3000, toolCall: { name: 'verify_onboarding', params: { start_date: 'monday', checklist: ['equipment', 'accounts', 'badge', 'training'] } } },
    { role: 'assistant', content: "Equipment is ready, accounts are provisioned, and badge is at reception. I've scheduled their orientation for 9 AM Monday and notified their manager.", delay: 4500 },
  ],
];

// Use case configuration
const USE_CASES = {
  sales: { name: 'Sales', agent: 'Alex AI', color: 'brand-blue', scenarios: SALES_SCENARIOS },
  support: { name: 'Support', agent: 'Sarah AI', color: 'white', scenarios: SUPPORT_SCENARIOS },
  operations: { name: 'Operations', agent: 'Jordan AI', color: 'amber-500', scenarios: OPERATIONS_SCENARIOS },
};

// Helper to get next scenario index
const getNextScenarioIndex = (currentIndex, scenarios) => {
  return (currentIndex + 1) % scenarios.length;
};

export default function DemoController({
  autoStart = true,
  onModeChange,
}) {
  // State management
  const { state: demoStatus, send, context } = useDemoState();
  const [activeTab, setActiveTab] = useState('sales');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showTransitionPrompt, setShowTransitionPrompt] = useState(false);
  const [highlightTabs, setHighlightTabs] = useState(false);
  const [timeoutDuration, setTimeoutDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Per-agent state
  const [messages, setMessages] = useState({
    sales: [],
    support: [],
    operations: [],
  });
  const [toolCalls, setToolCalls] = useState({
    sales: null,
    support: null,
    operations: null,
  });
  const [streaming, setStreaming] = useState({
    sales: { isStreaming: false, text: '' },
    support: { isStreaming: false, text: '' },
    operations: { isStreaming: false, text: '' },
  });
  const [simulatedStep, setSimulatedStep] = useState({
    sales: 0,
    support: 0,
    operations: 0,
  });
  const [scenarioIndex, setScenarioIndex] = useState({
    sales: 0,
    support: 0,
    operations: 0,
  });

  // Refs for cleanup
  const simulationTimerRef = useRef(null);
  const autoAdvanceTimerRef = useRef(null);
  const timeoutTimerRef = useRef(null);

  // Connection hook
  const connection = useDemoConnection({
    mode: 'mock',
    onMessage: useCallback((msg) => {
      setMessages((prev) => ({
        ...prev,
        [activeTab]: [...prev[activeTab], msg],
      }));
    }, [activeTab]),
    onError: useCallback((error) => {
      send(DEMO_EVENTS.ERROR, { error });
    }, [send]),
    onToolCall: useCallback((tool) => {
      setToolCalls((prev) => ({
        ...prev,
        [activeTab]: tool,
      }));
      if (tool.status === 'complete' || tool.status === 'failed') {
        setTimeout(() => {
          setToolCalls((prev) => ({
            ...prev,
            [activeTab]: null,
          }));
        }, 1000);
      }
    }, [activeTab]),
    onStatusChange: useCallback((status) => {
      if (status === CONNECTION_STATUS.CONNECTED) {
        send(DEMO_EVENTS.CONNECTED);
      } else if (status === CONNECTION_STATUS.ERROR) {
        send(DEMO_EVENTS.CONNECTION_FAILED);
      }
    }, [send]),
    onStreamStart: useCallback(() => {
      send(DEMO_EVENTS.RESPONSE_START);
      setStreaming((prev) => ({
        ...prev,
        [activeTab]: { isStreaming: true, text: '' },
      }));
    }, [send, activeTab]),
    onStreamChunk: useCallback((text) => {
      setStreaming((prev) => ({
        ...prev,
        [activeTab]: { isStreaming: true, text },
      }));
    }, [activeTab]),
    onStreamEnd: useCallback(() => {
      send(DEMO_EVENTS.RESPONSE_COMPLETE);
      setStreaming((prev) => ({
        ...prev,
        [activeTab]: { isStreaming: false, text: '' },
      }));
    }, [send, activeTab]),
  });

  // Auto-start simulated demo
  // Note: setState here is intentional - we're synchronizing with the demo state machine
  useEffect(() => {
    if (autoStart && demoStatus === DEMO_STATES.IDLE) {
      send(DEMO_EVENTS.START_SIMULATED);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSimulating(true);
    }
  }, [autoStart, demoStatus, send]);

  // Run simulated conversation for current tab
  useEffect(() => {
    if (demoStatus !== DEMO_STATES.SIMULATED || !isSimulating || isPaused) return;

    const currentTab = TAB_ORDER[carouselIndex];
    const useCase = USE_CASES[currentTab];
    const currentScenarioIdx = scenarioIndex[currentTab];
    const script = useCase.scenarios[currentScenarioIdx];
    const step = simulatedStep[currentTab];

    // Check if simulation is complete for this tab
    if (step >= script.length) {
      // Check if we should advance to next tab
      const nextIndex = carouselIndex + 1;
      if (nextIndex < TAB_ORDER.length) {
        // Advance to next tab after delay
        autoAdvanceTimerRef.current = setTimeout(() => {
          setCarouselIndex(nextIndex);
          setActiveTab(TAB_ORDER[nextIndex]);
        }, 1000);
      } else {
        // All tabs complete - show transition prompt
        // Note: setState here is intentional - completing the simulation cycle
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsSimulating(false);
        setShowTransitionPrompt(true);
        setHighlightTabs(true);
      }
      return;
    }

    const message = script[step];

    simulationTimerRef.current = setTimeout(() => {
      // Add message
      const newMsg = {
        id: `sim-${currentTab}-${currentScenarioIdx}-${step}`,
        role: message.role,
        content: message.content,
        timestamp: Date.now(),
        ...(message.toolCall && { toolCall: { ...message.toolCall, status: 'complete' } }),
      };
      setMessages((prev) => ({
        ...prev,
        [currentTab]: [...prev[currentTab], newMsg],
      }));

      // Show tool call if present
      if (message.toolCall) {
        setToolCalls((prev) => ({
          ...prev,
          [currentTab]: { ...message.toolCall, status: 'executing' },
        }));
        setTimeout(() => {
          setToolCalls((prev) => ({
            ...prev,
            [currentTab]: { ...message.toolCall, status: 'complete' },
          }));
          setTimeout(() => {
            setToolCalls((prev) => ({
              ...prev,
              [currentTab]: null,
            }));
          }, 800);
        }, 1200);
      }

      // Advance step
      setSimulatedStep((prev) => ({
        ...prev,
        [currentTab]: prev[currentTab] + 1,
      }));
    }, message.delay);

    return () => {
      if (simulationTimerRef.current) {
        clearTimeout(simulationTimerRef.current);
      }
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [demoStatus, isSimulating, isPaused, carouselIndex, simulatedStep, scenarioIndex]);

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
  const prevStatusRef = useRef(demoStatus);

  useEffect(() => {
    const wasProcessing = prevStatusRef.current === DEMO_STATES.PROCESSING;
    const isProcessing = demoStatus === DEMO_STATES.PROCESSING;
    prevStatusRef.current = demoStatus;

    if (isProcessing && !wasProcessing) {
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
  const handleTabChange = useCallback((tab) => {
    const tabIndex = TAB_ORDER.indexOf(tab);
    setActiveTab(tab);
    setCarouselIndex(tabIndex);

    if (isSimulating) {
      // Clear timers and jump to new tab's simulation
      if (simulationTimerRef.current) {
        clearTimeout(simulationTimerRef.current);
      }
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    }
  }, [isSimulating]);

  const handleSelectUseCase = useCallback(async (tab) => {
    // Enter interactive mode with selected agent
    setActiveTab(tab);
    setCarouselIndex(TAB_ORDER.indexOf(tab));
    setShowTransitionPrompt(false);
    setHighlightTabs(false);
    // Clear simulated messages for fresh interactive session
    setMessages({
      sales: [],
      support: [],
      operations: [],
    });
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
    setHighlightTabs(false);
  }, [send]);

  const handleContinueSimulated = useCallback(() => {
    // Rotate to next scenario for each agent
    setScenarioIndex((prev) => ({
      sales: getNextScenarioIndex(prev.sales, SALES_SCENARIOS),
      support: getNextScenarioIndex(prev.support, SUPPORT_SCENARIOS),
      operations: getNextScenarioIndex(prev.operations, OPERATIONS_SCENARIOS),
    }));
    // Reset simulation state
    setSimulatedStep({ sales: 0, support: 0, operations: 0 });
    setMessages({ sales: [], support: [], operations: [] });
    setCarouselIndex(0);
    setActiveTab('sales');
    setIsSimulating(true);
    send(DEMO_EVENTS.START_SIMULATED);
  }, [send]);

  const handleStartListening = useCallback(() => {
    send(DEMO_EVENTS.START_LISTENING);
    send(DEMO_EVENTS.SET_AGENT, { agentType: activeTab });
  }, [send, activeTab]);

  const handleStopListening = useCallback(() => {
    send(DEMO_EVENTS.STOP_LISTENING);
  }, [send]);

  const handleSendMessage = useCallback((content) => {
    send(DEMO_EVENTS.START_LISTENING);
    send(DEMO_EVENTS.STOP_LISTENING);
    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: Date.now(),
    };
    setMessages((prev) => ({
      ...prev,
      [activeTab]: [...prev[activeTab], userMsg],
    }));
    connection.send({ type: 'text', content, agentType: activeTab });
  }, [send, connection, activeTab]);

  const handleCancel = useCallback(() => {
    send(DEMO_EVENTS.CANCEL);
    connection.disconnect();
    connection.connect();
  }, [send, connection]);

  // Pause handlers for hover/focus
  const handleMouseEnter = useCallback(() => {
    if (isSimulating) setIsPaused(true);
  }, [isSimulating]);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleFocus = useCallback(() => {
    if (isSimulating) setIsPaused(true);
  }, [isSimulating]);

  const handleBlur = useCallback((e) => {
    // Only unpause if focus leaves the container entirely
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsPaused(false);
    }
  }, []);

  // Determine if interactive mode is available
  const isInteractive = [
    DEMO_STATES.INTERACTIVE,
    DEMO_STATES.LISTENING,
    DEMO_STATES.PROCESSING,
    DEMO_STATES.RESPONDING,
    DEMO_STATES.COMPLETE,
  ].includes(demoStatus);

  // Get agent status
  const getAgentStatus = () => {
    if (isSimulating) return 'simulated';
    return demoStatus;
  };

  return (
    <div
      className="space-y-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Tab navigation */}
      <DemoTabs
        activeTab={activeTab}
        onTabChange={showTransitionPrompt ? handleSelectUseCase : handleTabChange}
        disabled={false}
        highlightTabs={highlightTabs}
      />

      {/* Single panel carousel */}
      <DemoCarousel activeIndex={carouselIndex}>
        {TAB_ORDER.map((tab) => {
          const useCase = USE_CASES[tab];
          return (
            <DemoAgent
              key={tab}
              agentType={tab}
              agentName={useCase.agent}
              status={getAgentStatus()}
              messages={messages[tab]}
              currentToolCall={toolCalls[tab]}
              isStreaming={streaming[tab].isStreaming}
              streamingText={streaming[tab].text}
              isInteractive={isInteractive}
              onStartListening={handleStartListening}
              onStopListening={handleStopListening}
              onSendMessage={handleSendMessage}
              onCancel={handleCancel}
            />
          );
        })}
      </DemoCarousel>

      {/* Transition prompt */}
      <StateTransition show={showTransitionPrompt} enter="slide-up" duration="normal">
        <div className="bg-slate-800/50 border-2 border-brand-blue/50 p-4 sm:p-6 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Ready to try it yourself?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Select a use case above to start an interactive conversation with that agent.
          </p>
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

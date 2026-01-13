import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * useDemoConnection - Abstracted connection interface for AI demo
 *
 * Supports multiple modes:
 * - 'mock': Simulates realistic delays and responses (default)
 * - 'websocket': Real WebSocket connection (future implementation)
 * - 'polling': REST API polling (future implementation)
 *
 * @example
 * const { connect, disconnect, send, status, messages } = useDemoConnection({
 *   mode: 'mock',
 *   onMessage: (msg) => console.log('Received:', msg),
 *   onError: (err) => console.error('Error:', err),
 *   onToolCall: (tool) => console.log('Tool call:', tool),
 * });
 */

// Connection status constants
export const CONNECTION_STATUS = {
  DISCONNECTED: 'disconnected',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  ERROR: 'error',
};

// Mock data for simulated conversations
const MOCK_RESPONSES = {
  revenue: [
    {
      message: "Thank you for your interest! I'd be happy to help qualify your needs and schedule a call with our team.",
      toolCalls: [
        { name: 'check_availability', params: { date: 'next week', timezone: 'EST' } },
      ],
    },
    {
      message: "I can see you're looking at our enterprise plan. Based on your requirements, I think that would be a great fit. Would you like me to walk you through the pricing?",
      toolCalls: [
        { name: 'fetch_pricing', params: { plan: 'enterprise', seats: 50 } },
      ],
    },
    {
      message: "Perfect! I've found some available slots for a demo call. Would Tuesday at 2pm or Wednesday at 10am work better for you?",
      toolCalls: [
        { name: 'search_calendar', params: { duration: 30, participants: 2 } },
      ],
    },
  ],
  service: [
    {
      message: "I've located your account and can help resolve that right away. Let me pull up your recent activity.",
      toolCalls: [
        { name: 'lookup_customer', params: { method: 'phone', verified: true } },
      ],
    },
    {
      message: "I can see the issue with your last order. It looks like there was a shipping delay. I'm going to expedite a replacement for you right now.",
      toolCalls: [
        { name: 'check_order_status', params: { orderId: 'ORD-12345' } },
        { name: 'create_replacement', params: { priority: 'high' } },
      ],
    },
    {
      message: "Great news - your replacement order has been created and will ship today with priority delivery. You'll receive a tracking number within the hour. Is there anything else I can help with?",
      toolCalls: [
        { name: 'send_notification', params: { type: 'shipping_update', channel: 'email' } },
      ],
    },
  ],
};

// Helper to generate unique IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mock connection implementation
 */
function useMockConnection({
  onMessage,
  onError,
  onToolCall,
  onStatusChange,
  onStreamStart,
  onStreamChunk,
  onStreamEnd,
}) {
  const [status, setStatus] = useState(CONNECTION_STATUS.DISCONNECTED);
  const [messages, setMessages] = useState([]);
  const responseIndexRef = useRef({ revenue: 0, service: 0 });
  const abortControllerRef = useRef(null);

  // Update status and notify
  const updateStatus = useCallback((newStatus) => {
    setStatus(newStatus);
    onStatusChange?.(newStatus);
  }, [onStatusChange]);

  // Connect (mock)
  const connect = useCallback(async () => {
    updateStatus(CONNECTION_STATUS.CONNECTING);

    // Simulate connection delay
    await delay(800 + Math.random() * 400);

    // 95% success rate for mock
    if (Math.random() > 0.05) {
      updateStatus(CONNECTION_STATUS.CONNECTED);
      return true;
    } else {
      updateStatus(CONNECTION_STATUS.ERROR);
      onError?.(new Error('Mock connection failed'));
      return false;
    }
  }, [updateStatus, onError]);

  // Disconnect
  const disconnect = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    updateStatus(CONNECTION_STATUS.DISCONNECTED);
    setMessages([]);
    responseIndexRef.current = { revenue: 0, service: 0 };
  }, [updateStatus]);

  // Send message (mock processing)
  const send = useCallback(async (input) => {
    if (status !== CONNECTION_STATUS.CONNECTED) {
      onError?.(new Error('Not connected'));
      return;
    }

    // Create abort controller for this request
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    try {
      // Add user message
      const userMessage = {
        id: generateId(),
        role: 'user',
        content: input.content,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMessage]);
      onMessage?.(userMessage);

      // Simulate processing delay
      await delay(500 + Math.random() * 500);
      if (signal.aborted) return;

      // Get mock response based on agent type
      const agentType = input.agentType || 'revenue';
      const responses = MOCK_RESPONSES[agentType];
      const index = responseIndexRef.current[agentType] % responses.length;
      const response = responses[index];
      responseIndexRef.current[agentType]++;

      // Simulate tool calls
      if (response.toolCalls) {
        for (const tool of response.toolCalls) {
          if (signal.aborted) return;

          // Notify tool call started
          const toolCall = {
            id: generateId(),
            name: tool.name,
            params: tool.params,
            status: 'pending',
          };
          onToolCall?.({ ...toolCall, status: 'pending' });

          await delay(200);
          if (signal.aborted) return;

          // Tool executing
          onToolCall?.({ ...toolCall, status: 'executing' });

          await delay(600 + Math.random() * 400);
          if (signal.aborted) return;

          // Tool complete
          onToolCall?.({ ...toolCall, status: 'complete', result: { success: true } });
        }
      }

      if (signal.aborted) return;

      // Start streaming response
      onStreamStart?.();

      // Simulate streaming text character by character
      const fullText = response.message;
      let streamedText = '';

      for (let i = 0; i < fullText.length; i++) {
        if (signal.aborted) return;

        streamedText += fullText[i];
        onStreamChunk?.(streamedText);

        // Variable delay for natural feel
        const charDelay = fullText[i] === ' ' ? 30 : fullText[i] === '.' ? 100 : 20;
        await delay(charDelay + Math.random() * 10);
      }

      if (signal.aborted) return;

      // Add assistant message
      const assistantMessage = {
        id: generateId(),
        role: 'assistant',
        content: fullText,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      onMessage?.(assistantMessage);
      onStreamEnd?.();

    } catch (error) {
      if (error.name !== 'AbortError') {
        onError?.(error);
      }
    }
  }, [status, onMessage, onError, onToolCall, onStreamStart, onStreamChunk, onStreamEnd]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return {
    connect,
    disconnect,
    send,
    status,
    messages,
  };
}

/**
 * Main hook - routes to appropriate implementation based on mode
 *
 * Note: Currently only mock mode is implemented. WebSocket and polling
 * modes will be added in Phase 05-02 when backend is available.
 */
export function useDemoConnection({
  mode = 'mock',
  // endpoint is reserved for future WebSocket/polling implementations
  // eslint-disable-next-line no-unused-vars
  endpoint: _endpoint,
  onMessage,
  onError,
  onToolCall,
  onStatusChange,
  onStreamStart,
  onStreamChunk,
  onStreamEnd,
} = {}) {
  // Log warning for unimplemented modes
  if (mode === 'websocket' || mode === 'polling') {
    // Only log once per mode
    console.warn(`${mode} mode not yet implemented, using mock mode`);
  }

  // Always use mock connection - hooks must be called unconditionally
  // Future: implement proper mode switching when WebSocket/polling are ready
  return useMockConnection({
    onMessage,
    onError,
    onToolCall,
    onStatusChange,
    onStreamStart,
    onStreamChunk,
    onStreamEnd,
  });
}

export default useDemoConnection;

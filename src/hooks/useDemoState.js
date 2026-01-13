import { useReducer, useCallback } from 'react';

/**
 * Demo State Machine Hook
 *
 * Manages the complete state machine for the interactive AI demo.
 * Uses useReducer for predictable state transitions.
 *
 * @example
 * const { state, send, context } = useDemoState();
 * // state: current demo status
 * // send: dispatch events to trigger transitions
 * // context: full state object including messages, toolCalls, etc.
 */

// State constants
export const DEMO_STATES = {
  IDLE: 'idle',
  SIMULATED: 'simulated',
  CONNECTING: 'connecting',
  INTERACTIVE: 'interactive',
  LISTENING: 'listening',
  PROCESSING: 'processing',
  RESPONDING: 'responding',
  COMPLETE: 'complete',
  ERROR: 'error',
  TIMEOUT: 'timeout',
  FALLBACK: 'fallback',
};

// Event constants
export const DEMO_EVENTS = {
  START_SIMULATED: 'START_SIMULATED',
  TRY_INTERACTIVE: 'TRY_INTERACTIVE',
  CONNECTED: 'CONNECTED',
  CONNECTION_FAILED: 'CONNECTION_FAILED',
  START_LISTENING: 'START_LISTENING',
  STOP_LISTENING: 'STOP_LISTENING',
  CANCEL: 'CANCEL',
  RESPONSE_START: 'RESPONSE_START',
  RESPONSE_COMPLETE: 'RESPONSE_COMPLETE',
  ADD_MESSAGE: 'ADD_MESSAGE',
  UPDATE_STREAMING: 'UPDATE_STREAMING',
  SET_TOOL_CALL: 'SET_TOOL_CALL',
  UPDATE_TOOL_CALL: 'UPDATE_TOOL_CALL',
  CLEAR_TOOL_CALL: 'CLEAR_TOOL_CALL',
  ERROR: 'ERROR',
  TIMEOUT: 'TIMEOUT',
  RETRY: 'RETRY',
  FALLBACK: 'FALLBACK',
  RESET: 'RESET',
  SET_AGENT: 'SET_AGENT',
};

// Initial state
const initialState = {
  status: DEMO_STATES.IDLE,
  mode: 'simulated', // 'simulated' | 'interactive'
  messages: [],
  currentToolCall: null,
  streamingText: '',
  isStreaming: false,
  error: null,
  agentType: null, // 'revenue' | 'service'
};

/**
 * State machine reducer
 * Handles all state transitions based on events
 */
function demoReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    // === Lifecycle Events ===

    case DEMO_EVENTS.START_SIMULATED:
      if (state.status !== DEMO_STATES.IDLE) return state;
      return {
        ...state,
        status: DEMO_STATES.SIMULATED,
        mode: 'simulated',
        messages: [],
        error: null,
      };

    case DEMO_EVENTS.TRY_INTERACTIVE:
      if (state.status !== DEMO_STATES.SIMULATED && state.status !== DEMO_STATES.COMPLETE) {
        return state;
      }
      return {
        ...state,
        status: DEMO_STATES.CONNECTING,
        mode: 'interactive',
        error: null,
      };

    case DEMO_EVENTS.CONNECTED:
      if (state.status !== DEMO_STATES.CONNECTING) return state;
      return {
        ...state,
        status: DEMO_STATES.INTERACTIVE,
        error: null,
      };

    case DEMO_EVENTS.CONNECTION_FAILED:
      if (state.status !== DEMO_STATES.CONNECTING) return state;
      return {
        ...state,
        status: DEMO_STATES.FALLBACK,
        mode: 'simulated',
        error: payload?.error || new Error('Connection failed'),
      };

    // === Active Interaction Events ===

    case DEMO_EVENTS.START_LISTENING:
      if (
        state.status !== DEMO_STATES.INTERACTIVE &&
        state.status !== DEMO_STATES.COMPLETE
      ) {
        return state;
      }
      return {
        ...state,
        status: DEMO_STATES.LISTENING,
        streamingText: '',
        isStreaming: false,
      };

    case DEMO_EVENTS.STOP_LISTENING:
      if (state.status !== DEMO_STATES.LISTENING) return state;
      return {
        ...state,
        status: DEMO_STATES.PROCESSING,
      };

    case DEMO_EVENTS.CANCEL:
      if (
        state.status !== DEMO_STATES.LISTENING &&
        state.status !== DEMO_STATES.PROCESSING
      ) {
        return state;
      }
      return {
        ...state,
        status: DEMO_STATES.INTERACTIVE,
        currentToolCall: null,
        streamingText: '',
        isStreaming: false,
      };

    case DEMO_EVENTS.RESPONSE_START:
      if (state.status !== DEMO_STATES.PROCESSING) return state;
      return {
        ...state,
        status: DEMO_STATES.RESPONDING,
        isStreaming: true,
        streamingText: '',
      };

    case DEMO_EVENTS.RESPONSE_COMPLETE:
      if (
        state.status !== DEMO_STATES.RESPONDING &&
        state.status !== DEMO_STATES.SIMULATED
      ) {
        return state;
      }
      return {
        ...state,
        status: DEMO_STATES.COMPLETE,
        isStreaming: false,
        streamingText: '',
        currentToolCall: null,
      };

    // === Message Management ===

    case DEMO_EVENTS.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: payload.id || `msg-${Date.now()}`,
            role: payload.role,
            content: payload.content,
            timestamp: payload.timestamp || Date.now(),
          },
        ],
      };

    case DEMO_EVENTS.UPDATE_STREAMING:
      return {
        ...state,
        streamingText: payload.text,
        isStreaming: true,
      };

    // === Tool Call Management ===

    case DEMO_EVENTS.SET_TOOL_CALL:
      return {
        ...state,
        currentToolCall: {
          id: payload.id || `tool-${Date.now()}`,
          name: payload.name,
          params: payload.params || {},
          status: 'pending',
        },
      };

    case DEMO_EVENTS.UPDATE_TOOL_CALL:
      if (!state.currentToolCall) return state;
      return {
        ...state,
        currentToolCall: {
          ...state.currentToolCall,
          status: payload.status,
          result: payload.result,
        },
      };

    case DEMO_EVENTS.CLEAR_TOOL_CALL:
      return {
        ...state,
        currentToolCall: null,
      };

    // === Error Handling ===

    case DEMO_EVENTS.ERROR:
      return {
        ...state,
        status: DEMO_STATES.ERROR,
        error: payload?.error || new Error('Unknown error'),
        isStreaming: false,
      };

    case DEMO_EVENTS.TIMEOUT:
      return {
        ...state,
        status: DEMO_STATES.TIMEOUT,
        error: new Error('Response timed out'),
        isStreaming: false,
      };

    case DEMO_EVENTS.RETRY:
      if (
        state.status !== DEMO_STATES.ERROR &&
        state.status !== DEMO_STATES.TIMEOUT &&
        state.status !== DEMO_STATES.FALLBACK
      ) {
        return state;
      }
      return {
        ...state,
        status: DEMO_STATES.CONNECTING,
        error: null,
      };

    case DEMO_EVENTS.FALLBACK:
      return {
        ...state,
        status: DEMO_STATES.FALLBACK,
        mode: 'simulated',
      };

    // === Reset ===

    case DEMO_EVENTS.RESET:
      return {
        ...initialState,
      };

    case DEMO_EVENTS.SET_AGENT:
      return {
        ...state,
        agentType: payload.agentType,
      };

    default:
      return state;
  }
}

/**
 * useDemoState Hook
 *
 * @returns {Object} - { state, send, context }
 *   - state: Current status string
 *   - send: Function to dispatch events
 *   - context: Full state object
 */
export function useDemoState() {
  const [state, dispatch] = useReducer(demoReducer, initialState);

  // Memoized send function
  const send = useCallback((event, payload) => {
    if (typeof event === 'string') {
      dispatch({ type: event, payload });
    } else {
      dispatch(event);
    }
  }, []);

  return {
    state: state.status,
    send,
    context: state,
  };
}

export default useDemoState;

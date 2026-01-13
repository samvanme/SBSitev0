# Demo Component Architecture

## Overview

This architecture enables a hybrid AI demo experience that can:
1. Play pre-scripted simulated conversations (no backend required)
2. Transition to real interactive mode when a backend is available
3. Gracefully fall back to simulated mode if the backend is unavailable

## State Machine

```
                                    +---------+
                                    |  idle   |
                                    +----+----+
                                         |
                                         | START_SIMULATED
                                         v
                                    +---------+
                            +------>|simulated|-------+
                            |       +----+----+       |
                            |            |            |
                            |            | TRY_INTERACTIVE
                            |            v            |
                            |       +---------+       |
                            |       |connecting|------+
                            |       +----+----+       |
                            |            |            |
                            |            | CONNECTED  | CONNECTION_FAILED
                            |            v            v
                            |       +-----------+   +--------+
                            |       |interactive|   |fallback|
                            |       +-----+-----+   +--------+
                            |             |
                            |             v
                            |    +------------------+
                            |    |   Active States  |
                            |    +------------------+
                            |    |                  |
                            |    |  +-----------+   |
                            |    |  | listening |   |
                            |    |  +-----+-----+   |
                            |    |        |         |
                            |    |        v         |
                            |    |  +-----------+   |
                            |    |  |processing |   |
                            |    |  +-----+-----+   |
                            |    |        |         |
                            |    |        v         |
                            |    |  +-----------+   |
                            |    |  |responding |   |
                            |    |  +-----+-----+   |
                            |    |        |         |
                            |    +--------+---------+
                            |             |
                            |             v
                            |       +-----------+
                            +-------|  complete |
                                    +-----------+
                                          |
                   +----------------------+----------------------+
                   |                                             |
                   v                                             v
              +---------+                                   +---------+
              |  error  |                                   | timeout |
              +---------+                                   +---------+
```

### States

| State | Description |
|-------|-------------|
| `idle` | Initial state, demo not started |
| `simulated` | Playing pre-scripted conversation |
| `connecting` | Attempting to connect to backend |
| `interactive` | Connected, ready for real interaction |
| `listening` | Capturing user voice/text input |
| `processing` | AI processing the request (tool calls visible) |
| `responding` | AI generating/streaming response |
| `complete` | Conversation turn complete |
| `error` | Connection or API error occurred |
| `timeout` | Response took too long |
| `fallback` | Backend unavailable, using simulated mode |

### Transitions

| From | Event | To |
|------|-------|-----|
| idle | START_SIMULATED | simulated |
| simulated | TRY_INTERACTIVE | connecting |
| simulated | COMPLETE | complete |
| connecting | CONNECTED | interactive |
| connecting | CONNECTION_FAILED | fallback |
| connecting | TIMEOUT | timeout |
| interactive | START_LISTENING | listening |
| listening | STOP_LISTENING | processing |
| listening | CANCEL | interactive |
| processing | RESPONSE_START | responding |
| processing | TIMEOUT | timeout |
| processing | ERROR | error |
| responding | RESPONSE_COMPLETE | complete |
| responding | ERROR | error |
| complete | START_LISTENING | listening |
| complete | RESET | idle |
| error | RETRY | connecting |
| error | FALLBACK | fallback |
| timeout | RETRY | processing |
| timeout | CANCEL | interactive |
| fallback | RETRY | connecting |

## Component Hierarchy

```
VoiceDemo (Section container)
└── DemoController
    ├── DemoAgent (Revenue - blue accent)
    │   ├── AgentHeader (name, type, status)
    │   ├── Waveform (from animations)
    │   ├── ToolCallDisplay[]
    │   │   └── StateTransition
    │   ├── ConversationTranscript
    │   │   └── Message[]
    │   └── InputArea
    │       ├── MicrophoneButton
    │       └── TextInput (toggle)
    │
    ├── DemoAgent (Service - white accent)
    │   └── (same structure)
    │
    ├── TransitionPrompt ("Try it yourself?")
    │
    └── Error States
        ├── DemoError
        ├── DemoFallback
        └── DemoTimeout
```

## API Interface

### useDemoConnection Hook

The connection hook provides a backend-agnostic interface. Implementations can use mock data, WebSocket, or polling.

```typescript
interface DemoConnectionConfig {
  mode: 'mock' | 'websocket' | 'polling';
  endpoint?: string;
  onMessage?: (message: Message) => void;
  onError?: (error: Error) => void;
  onToolCall?: (toolCall: ToolCall) => void;
  onStatusChange?: (status: ConnectionStatus) => void;
}

interface DemoConnection {
  // Connection lifecycle
  connect: () => Promise<void>;
  disconnect: () => void;

  // Communication
  send: (input: UserInput) => void;

  // State
  status: 'disconnected' | 'connecting' | 'connected' | 'error';
  messages: Message[];
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isStreaming?: boolean;
}

interface ToolCall {
  id: string;
  name: string;
  params: Record<string, unknown>;
  status: 'pending' | 'executing' | 'complete' | 'failed';
  result?: unknown;
}

interface UserInput {
  type: 'voice' | 'text';
  content: string;
  agentType: 'revenue' | 'service';
}
```

### useDemoState Hook

Manages the demo state machine with predictable transitions.

```typescript
interface DemoState {
  status: DemoStatus;
  mode: 'simulated' | 'interactive';
  messages: Message[];
  currentToolCall: ToolCall | null;
  error: Error | null;
  agentType: 'revenue' | 'service' | null;
}

type DemoStatus =
  | 'idle'
  | 'simulated'
  | 'connecting'
  | 'interactive'
  | 'listening'
  | 'processing'
  | 'responding'
  | 'complete'
  | 'error'
  | 'timeout'
  | 'fallback';

interface DemoStateHook {
  state: DemoState;
  send: (event: DemoEvent) => void;
  context: DemoState; // Alias for state
}
```

## Event Flow

### Simulated Mode Flow

```
1. User scrolls to demo section
2. DemoController.autoStart triggers START_SIMULATED
3. Simulated messages play with realistic delays
4. Tool calls animate during "processing" phase
5. After demo completes, TransitionPrompt appears
6. User clicks "Try it yourself"
7. TRY_INTERACTIVE triggers connection attempt
```

### Interactive Mode Flow

```
1. User clicks microphone button
2. START_LISTENING event → listening state
3. Voice captured (or text entered)
4. STOP_LISTENING → processing state
5. useDemoConnection.send() called
6. Tool calls stream in → ToolCallDisplay updates
7. Response streams in → ConversationTranscript updates
8. RESPONSE_COMPLETE → complete state
9. Ready for next turn
```

### Error Flow

```
1. Connection fails or times out
2. ERROR/TIMEOUT event dispatched
3. DemoError/DemoTimeout displayed
4. User can:
   - RETRY → attempt again
   - FALLBACK → return to simulated mode
5. All errors logged for debugging
```

## Component Props

### DemoController

```typescript
interface DemoControllerProps {
  autoStart?: boolean;        // Start simulated demo on mount
  onModeChange?: (mode: 'simulated' | 'interactive') => void;
}
```

### DemoAgent

```typescript
interface DemoAgentProps {
  agentType: 'revenue' | 'service';
  agentName: string;
  connection: DemoConnection;
  onInteractionStart?: () => void;
}
```

### ToolCallDisplay

```typescript
interface ToolCallDisplayProps {
  toolName: string;
  params: Record<string, unknown>;
  status: 'pending' | 'executing' | 'complete' | 'failed';
  onComplete?: () => void;
}
```

### ConversationTranscript

```typescript
interface ConversationTranscriptProps {
  messages: Message[];
  isStreaming: boolean;
  streamingText?: string;
}
```

## Styling Guidelines

All demo components follow the brutalist design system:

- **Shadows**: Hard offset (`shadow-brutal-*`), no blur
- **Corners**: No border-radius (0px)
- **Colors**:
  - Revenue agent: `brand-blue` accent
  - Service agent: `white` accent
- **Animations**: Use existing components (ThinkingState, StateTransition, Waveform)
- **Reduced motion**: All animations respect `prefers-reduced-motion`

## Integration Notes

### Backend Requirements (Phase 05-02)

When implementing real backend:
1. Implement WebSocket or polling transport
2. Provide streaming text responses
3. Send tool call updates as they occur
4. Handle authentication if required
5. Implement rate limiting

### Voice API Options

- **Web Speech API**: Browser-native, no API costs, limited browser support
- **Cloud services**: Whisper, Deepgram, etc. for production quality

---
*Created: 2026-01-13*
*Phase: 05-01 Interactive Demo Architecture*

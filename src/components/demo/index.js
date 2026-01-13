/**
 * Demo Components
 *
 * Interactive AI demo components for the voice demo section.
 * Supports both simulated and interactive modes.
 *
 * Main Components:
 * - DemoController: Orchestrates the full demo experience
 * - DemoAgent: Individual agent card with input/output
 *
 * Supporting Components:
 * - ToolCallDisplay: Shows AI tool calls transparently
 * - ConversationTranscript: Streaming conversation display
 * - DemoError: Connection/API error display
 * - DemoFallback: Backend unavailable fallback
 * - DemoTimeout: Response timeout notice
 */

export { default as DemoController } from './DemoController';
export { default as DemoAgent } from './DemoAgent';
export { default as DemoTabs } from './DemoTabs';
export { default as DemoCarousel } from './DemoCarousel';
export { default as ToolCallDisplay } from './ToolCallDisplay';
export { default as ConversationTranscript } from './ConversationTranscript';
export { default as DemoError } from './DemoError';
export { default as DemoFallback } from './DemoFallback';
export { default as DemoTimeout } from './DemoTimeout';

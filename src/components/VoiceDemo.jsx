import { useState, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import { DemoController } from './demo';

/**
 * VoiceDemo - AI Demo Section
 *
 * Showcases interactive AI agent capabilities with tabbed carousel:
 * - Revenue agent (Alex AI - lead qualification)
 * - Support agent (Sarah AI - issue resolution)
 * - Operations agent (Jordan AI - HR/scheduling)
 *
 * Supports hybrid flow:
 * 1. Simulated demo auto-plays through all 3 use cases
 * 2. User selects a use case for interactive mode
 * 3. Fallback to simulated if backend unavailable
 */
export default function VoiceDemo() {
  // Scroll-triggered animations
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2 });
  const [demoRef, isDemoInView] = useInView({ threshold: 0.1 });

  // Track demo mode for analytics/logging (unused variable prefixed)
  const [_demoMode, setDemoMode] = useState('simulated');

  // Handle mode changes
  const handleModeChange = useCallback((mode) => {
    setDemoMode(mode);
    // Future: Send analytics event
    // analytics.track('demo_mode_change', { mode });
  }, []);

  return (
    <section className="h-screen sm:h-auto sm:min-h-0 py-4 sm:py-16 lg:py-36 relative overflow-hidden flex flex-col" id="demo">
      {/* Grid overlay - responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      {/* Section header - hidden on mobile, visible on larger screens */}
      <div className="container-brutal relative z-10 hidden sm:block">
        <div
          ref={headerRef}
          className={`mb-10 lg:mb-16 max-w-2xl transition-all duration-500 motion-reduce:transition-none ${
            isHeaderInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <span className="text-mono text-slate-600 text-xs sm:text-sm">01</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
            Hear the System
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
            AI agents handling revenue and service conversations.
            Real voices. Real results.
          </p>
        </div>
      </div>

      {/* Demo controller - full width on desktop for Claude/ChatGPT-like experience */}
      <div
        ref={demoRef}
        className={`relative z-10 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-[1600px] mx-auto flex-1 flex flex-col transition-all duration-700 motion-reduce:transition-none ${
          isDemoInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out-expo)', transitionDelay: '150ms' }}
      >
        <DemoController
          autoStart={isDemoInView}
          onModeChange={handleModeChange}
        />
      </div>
    </section>
  );
}

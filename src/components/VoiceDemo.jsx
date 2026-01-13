import { useState, useCallback } from 'react';
import { CONTACT } from '../constants/config';
import { useInView } from '../hooks/useInView';
import { DemoController } from './demo';

/**
 * VoiceDemo - AI Demo Section
 *
 * Showcases interactive AI agent capabilities with:
 * - Revenue agent (sales/qualification)
 * - Service agent (support/resolution)
 *
 * Supports hybrid flow:
 * 1. Simulated demo plays automatically
 * 2. User can switch to interactive mode
 * 3. Fallback to simulated if backend unavailable
 */
export default function VoiceDemo() {
  // Scroll-triggered animations
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2 });
  const [demoRef, isDemoInView] = useInView({ threshold: 0.1 });

  // Track demo mode for analytics/logging
  const [demoMode, setDemoMode] = useState('simulated');

  // Handle mode changes
  const handleModeChange = useCallback((mode) => {
    setDemoMode(mode);
    // Future: Send analytics event
    // analytics.track('demo_mode_change', { mode });
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-36 relative overflow-hidden" id="demo">
      {/* Grid overlay - responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10">
        {/* Section header - asymmetric, left-aligned */}
        <div
          ref={headerRef}
          className={`mb-10 sm:mb-16 max-w-2xl transition-all duration-500 motion-reduce:transition-none ${
            isHeaderInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-mono text-slate-600 text-xs sm:text-sm">01</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-3 sm:mb-4">
            Hear the System
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            AI agents handling revenue and service conversations.
            Real voices. Real results.
          </p>
        </div>

        {/* Demo controller with agent cards */}
        <div
          ref={demoRef}
          className={`transition-all duration-700 motion-reduce:transition-none ${
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

        {/* Section CTA - responsive layout */}
        <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center justify-center sm:justify-start gap-3 px-5 sm:px-6 py-3 min-h-[48px] bg-transparent text-white font-bold border-2 border-white/30 hover:border-white hover:bg-white/5 transition-all group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span className="text-sm sm:text-base">Try live agent now</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <span className="text-mono text-slate-600 text-xs sm:text-sm hidden sm:inline">
            Available 24/7
          </span>
          {/* Mode indicator (hidden, for debugging) */}
          <span className="sr-only">Current mode: {demoMode}</span>
        </div>
      </div>
    </section>
  );
}

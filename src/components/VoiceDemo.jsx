import { useState, useEffect } from 'react';
import { CONTACT } from '../constants/config';
import { Waveform, ThinkingState, StateTransition } from './animations';
import { useInView } from '../hooks/useInView';

export default function VoiceDemo() {
  // Scroll-triggered animations
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2 });
  const [cardsRef, areCardsInView] = useInView({ threshold: 0.1 });

  // Demo states: 'idle' | 'listening' | 'processing' | 'responding'
  const [revenueState, setRevenueState] = useState('responding');
  const [serviceState, setServiceState] = useState('responding');

  // Simulate state cycling for demo purposes
  useEffect(() => {
    const states = ['responding', 'listening', 'processing', 'responding'];
    let revenueIdx = 0;
    let serviceIdx = 0;

    const revenueTimer = setInterval(() => {
      revenueIdx = (revenueIdx + 1) % states.length;
      setRevenueState(states[revenueIdx]);
    }, 4000);

    const serviceTimer = setInterval(() => {
      serviceIdx = (serviceIdx + 1) % states.length;
      setServiceState(states[serviceIdx]);
    }, 5000);

    return () => {
      clearInterval(revenueTimer);
      clearInterval(serviceTimer);
    };
  }, []);

  const getWaveformState = (demoState) => {
    if (demoState === 'responding') return 'playing';
    if (demoState === 'listening') return 'paused';
    return 'inactive';
  };

  const getStatusLabel = (demoState) => {
    if (demoState === 'processing') return 'PROCESSING';
    if (demoState === 'listening') return 'LISTENING';
    return 'LIVE';
  };

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

        <div
          ref={cardsRef}
          className={`grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 transition-all duration-700 motion-reduce:transition-none ${
            areCardsInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)', transitionDelay: '150ms' }}
        >
          {/* Revenue Agent Card - blue accent */}
          <div className="relative bg-slate-900/50 border-2 border-white/10 hover:border-white/20 transition-colors">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue"></div>

            <div className="p-4 pl-6 sm:p-6 sm:pl-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-overline block mb-1">Revenue</span>
                  <h4 className="font-bold text-white text-lg">Alex AI</h4>
                </div>
                <span className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  {getStatusLabel(revenueState)}
                </span>
              </div>

              {/* Waveform - using extracted component */}
              <Waveform
                state={getWaveformState(revenueState)}
                color="brand"
                bars={16}
              />

              {/* Thinking state indicator */}
              <StateTransition show={revenueState === 'processing'} enter="fade" duration="fast">
                <div className="mt-3 flex items-center gap-2">
                  <ThinkingState variant="dots" size="sm" label="Processing request" />
                  <span className="text-xs text-slate-500 font-mono">Processing...</span>
                </div>
              </StateTransition>

              {/* Transcript */}
              <p className="text-body text-sm mb-5 mt-4 italic">
                "I can help qualify your interest and schedule a call with our team..."
              </p>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button className="w-11 h-11 bg-brand-blue border-2 border-white text-white flex items-center justify-center shadow-brutal-sm hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
                <span className="text-mono text-slate-500 text-sm">0:32</span>
                <span className="ml-auto px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-mono">
                  94% CONV
                </span>
              </div>
            </div>
          </div>

          {/* Service Agent Card - white accent */}
          <div className="relative bg-slate-900/50 border-2 border-white/10 hover:border-white/20 transition-colors">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>

            <div className="p-4 pl-6 sm:p-6 sm:pl-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-overline block mb-1">Service</span>
                  <h4 className="font-bold text-white text-lg">Sarah AI</h4>
                </div>
                <span className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  {getStatusLabel(serviceState)}
                </span>
              </div>

              {/* Waveform - using extracted component */}
              <Waveform
                state={getWaveformState(serviceState)}
                color="white"
                bars={16}
              />

              {/* Thinking state indicator */}
              <StateTransition show={serviceState === 'processing'} enter="fade" duration="fast">
                <div className="mt-3 flex items-center gap-2">
                  <ThinkingState variant="processing" size="sm" label="Processing request" />
                  <span className="text-xs text-slate-500 font-mono">Processing...</span>
                </div>
              </StateTransition>

              {/* Transcript */}
              <p className="text-body text-sm mb-5 mt-4 italic">
                "I've located your account and can help resolve that right away..."
              </p>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button className="w-11 h-11 bg-white border-2 border-white text-slate-900 flex items-center justify-center shadow-brutal-white-sm hover:shadow-brutal-white active:translate-x-0.5 active:translate-y-0.5 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
                <span className="text-mono text-slate-500 text-sm">0:48</span>
                <span className="ml-auto px-3 py-1 bg-white/10 border border-white/30 text-white text-xs font-mono">
                  4.8 CSAT
                </span>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}

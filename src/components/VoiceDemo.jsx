import { CONTACT } from '../constants/config';

export default function VoiceDemo() {
  return (
    <section className="section-brutal relative overflow-hidden" id="demo">
      {/* Grid overlay - matches Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10">
        {/* Section header - asymmetric, left-aligned */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-mono text-slate-600">01</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-heading mb-4">
            Hear the System
          </h2>
          <p className="text-body-lg">
            AI agents handling revenue and service conversations.
            Real voices. Real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Revenue Agent Card - blue accent */}
          <div className="relative bg-slate-900/50 border-2 border-white/10 hover:border-white/20 transition-colors">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue"></div>

            <div className="p-6 pl-8">
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
                  LIVE
                </span>
              </div>

              {/* Waveform - brutalist container */}
              <div className="h-14 bg-slate-800 border-2 border-white/10 flex items-center justify-center gap-0.5 px-4 mb-4">
                {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5].map((delay, i) => (
                  <div
                    key={i}
                    className="w-1 bg-brand-blue animate-waveform"
                    style={{
                      height: `${16 + (i % 3) * 8}px`,
                      animationDelay: `${delay}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Transcript */}
              <p className="text-body text-sm mb-5 italic">
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

            <div className="p-6 pl-8">
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
                  LIVE
                </span>
              </div>

              {/* Waveform - brutalist container */}
              <div className="h-14 bg-slate-800 border-2 border-white/10 flex items-center justify-center gap-0.5 px-4 mb-4">
                {[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7].map((delay, i) => (
                  <div
                    key={i}
                    className="w-1 bg-white animate-waveform"
                    style={{
                      height: `${16 + (i % 4) * 6}px`,
                      animationDelay: `${delay}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Transcript */}
              <p className="text-body text-sm mb-5 italic">
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

        <div className="text-center mt-12">
          <a href={`tel:${CONTACT.phone}`}
             className="inline-flex items-center gap-2 text-white hover:text-brand-blue transition-colors font-bold group">
            Call now to experience an AI agent live
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

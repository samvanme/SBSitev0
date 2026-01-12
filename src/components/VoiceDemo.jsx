import { CONTACT } from '../constants/config';

export default function VoiceDemo() {
  return (
    <section className="section-brutal relative overflow-hidden" id="demo">
      <div className="container-brutal relative z-10">
        {/* Section header - left-aligned to match Hero */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-white/30 mb-6">
            <span className="text-mono text-xs uppercase tracking-widest text-white">
              Live Demo
            </span>
          </div>
          <h2 className="text-heading mb-4">
            Hear the System in Action
          </h2>
          <p className="text-body-lg">
            AI agents handling real revenue and service conversations
          </p>
        </div>

        {/* Asymmetric card layout - stacked mobile, 2-col tablet, 3:2 desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl">
          {/* Featured Card - Revenue Agent (larger on desktop) */}
          <div className="md:col-span-2 lg:col-span-3 p-5 sm:p-8 bg-slate-900 border-2 border-white/30 hover:border-white transition-colors">
            {/* Agent header - more prominent */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    Online
                  </span>
                </div>
                <h3 className="text-heading-sm">Alex AI</h3>
                <p className="text-mono text-xs text-slate-500 uppercase">Revenue Agent</p>
              </div>
              {/* Data-forward metric */}
              <div className="text-right">
                <div className="text-3xl font-bold text-white">94%</div>
                <div className="text-mono text-xs text-slate-500 uppercase">Conversion</div>
              </div>
            </div>

            {/* Waveform - simplified container */}
            <div className="h-16 sm:h-20 bg-slate-800/50 border-2 border-white/10 flex items-center justify-center gap-0.5 sm:gap-1 px-4 sm:px-8 mb-6">
              {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5].map((delay, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-white rounded-sm animate-waveform"
                  style={{
                    height: `${24 + (i % 3) * 12}px`,
                    animationDelay: `${delay}s`
                  }}
                ></div>
              ))}
            </div>

            <p className="text-body-lg text-slate-300 mb-6">
              "Thank you for calling! I can help qualify your interest and schedule a call with our team..."
            </p>

            {/* Controls - larger play button */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-blue border-2 border-white text-white flex items-center justify-center shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </button>
              <div className="flex-1 h-2 bg-slate-800 border border-white/10">
                <div className="h-full w-1/3 bg-white/30"></div>
              </div>
              <span className="text-mono text-slate-400">0:32</span>
            </div>
          </div>

          {/* Secondary Card - Service Agent (smaller on desktop) */}
          <div className="md:col-span-2 lg:col-span-2 p-5 sm:p-6 bg-slate-900 border-2 border-white/20 hover:border-white/40 transition-colors">
            {/* Agent header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    Online
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Sarah AI</h3>
                <p className="text-mono text-xs text-slate-500 uppercase">Service Agent</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-mono text-xs text-slate-500 uppercase">Rating</div>
              </div>
            </div>

            {/* Waveform - compact */}
            <div className="h-14 bg-slate-800/50 border border-white/10 flex items-center justify-center gap-1 px-4 mb-4">
              {[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1].map((delay, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-sm animate-waveform"
                  style={{
                    height: `${16 + (i % 4) * 6}px`,
                    animationDelay: `${delay}s`
                  }}
                ></div>
              ))}
            </div>

            <p className="text-body text-sm mb-4">
              "I've located your account and can help resolve that right away..."
            </p>

            {/* Controls - compact */}
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 bg-brand-blue border-2 border-white text-white flex items-center justify-center shadow-brutal-sm hover:shadow-brutal transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </button>
              <div className="flex-1 h-1.5 bg-slate-800 border border-white/10">
                <div className="h-full w-1/4 bg-white/30"></div>
              </div>
              <span className="text-mono text-xs text-slate-500">0:48</span>
            </div>
          </div>
        </div>

        {/* CTA - aligned left */}
        <div className="mt-12">
          <a href={`tel:${CONTACT.phone}`}
             className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-white hover:text-brand-blue hover:border-brand-blue transition-colors">
            Call now to experience an AI agent live
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

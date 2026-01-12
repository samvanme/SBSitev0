import { CONTACT } from '../constants/config';

export default function VoiceDemo() {
  return (
    <section className="section-brutal relative overflow-hidden" id="demo">
      {/* Subtle static gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,171,226,0.05)_0%,transparent_60%)]"></div>

      <div className="container-brutal relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border-2 border-white/20 mb-6">
            <span className="text-overline">
              Live AI Voice Agents
            </span>
          </div>
          <h2 className="text-heading mb-4">
            Experience the System in Action
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Hear how our AI agents handle real revenue and service conversations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Voice Agent Card 1 - Brutalist style */}
          <div className="p-6 bg-slate-900 border-2 border-white/20 hover:border-white/40 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-slate-800 border-2 border-white/40 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white">Alex AI - Revenue Agent</h4>
                <p className="text-sm text-slate-500">Professional Male Voice</p>
              </div>
              <div>
                <span className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  Online
                </span>
              </div>
            </div>

            {/* Waveform visualization - keep functional animation */}
            <div className="h-16 bg-slate-800 border border-white/10 flex items-center justify-center gap-1 px-6 mb-4">
              {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2].map((delay, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full animate-waveform"
                  style={{
                    height: `${20 + (i % 3) * 10}px`,
                    animationDelay: `${delay}s`
                  }}
                ></div>
              ))}
            </div>

            <p className="text-body mb-4">
              "Thank you for calling! I can help qualify your interest and schedule a call with our team..."
            </p>

            <div className="flex items-center justify-between">
              <button className="w-12 h-12 bg-brand-blue border-2 border-white text-white flex items-center justify-center shadow-brutal-sm hover:shadow-brutal transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </button>
              <span className="text-mono text-slate-500">0:32</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  94% Conversion
                </span>
              </div>
            </div>
          </div>

          {/* Voice Agent Card 2 - Brutalist style */}
          <div className="p-6 bg-slate-900 border-2 border-white/20 hover:border-white/40 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-slate-800 border-2 border-white/40 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white">Sarah AI - Service Agent</h4>
                <p className="text-sm text-slate-500">Professional Female Voice</p>
              </div>
              <div>
                <span className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  Online
                </span>
              </div>
            </div>

            {/* Waveform visualization - keep functional animation */}
            <div className="h-16 bg-slate-800 border border-white/10 flex items-center justify-center gap-1 px-6 mb-4">
              {[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4].map((delay, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full animate-waveform"
                  style={{
                    height: `${20 + (i % 4) * 8}px`,
                    animationDelay: `${delay}s`
                  }}
                ></div>
              ))}
            </div>

            <p className="text-body mb-4">
              "I've located your account and can help resolve that right away. Let me update that for you..."
            </p>

            <div className="flex items-center justify-between">
              <button className="w-12 h-12 bg-brand-blue border-2 border-white text-white flex items-center justify-center shadow-brutal-sm hover:shadow-brutal transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </button>
              <span className="text-mono text-slate-500">0:48</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  4.8 Rating
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

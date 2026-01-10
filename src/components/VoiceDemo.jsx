export default function VoiceDemo() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="demo">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,171,226,0.1)_0%,transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              Live AI Voice Agents
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{textShadow: '0 0 60px rgba(0, 171, 226, 0.3)'}}>
            Experience the System in Action
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Hear how our AI agents handle real revenue and service conversations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Voice Agent Card 1 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl group hover:border-brand-blue/30 transition-all duration-500">
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-brand-blue/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-20"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Alex AI - Revenue Agent</h4>
                  <p className="text-sm text-slate-500">Professional Male Voice</p>
                </div>
                <div>
                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    Online
                  </span>
                </div>
              </div>

              {/* Waveform visualization */}
              <div className="h-16 bg-slate-800/50 rounded-xl flex items-center justify-center gap-1 px-6 mb-4">
                {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2].map((delay, i) => (
                  <div
                    key={i}
                    className="w-1 bg-brand-blue rounded-full animate-waveform"
                    style={{
                      height: `${20 + (i % 3) * 10}px`,
                      animationDelay: `${delay}s`
                    }}
                  ></div>
                ))}
              </div>

              <p className="text-sm text-slate-400 mb-4">
                "Thank you for calling! I can help qualify your interest and schedule a call with our team..."
              </p>

              <div className="flex items-center justify-between">
                <button className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                        style={{boxShadow: '0 0 20px rgba(0, 171, 226, 0.4)'}}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
                <span className="text-sm text-slate-500 font-mono">0:32</span>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    94% Conversion
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Agent Card 2 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl group hover:border-brand-blue/30 transition-all duration-500">
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-brand-blue/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-20"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Sarah AI - Service Agent</h4>
                  <p className="text-sm text-slate-500">Professional Female Voice</p>
                </div>
                <div>
                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    Online
                  </span>
                </div>
              </div>

              {/* Waveform visualization */}
              <div className="h-16 bg-slate-800/50 rounded-xl flex items-center justify-center gap-1 px-6 mb-4">
                {[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4].map((delay, i) => (
                  <div
                    key={i}
                    className="w-1 bg-brand-blue rounded-full animate-waveform"
                    style={{
                      height: `${20 + (i % 4) * 8}px`,
                      animationDelay: `${delay}s`
                    }}
                  ></div>
                ))}
              </div>

              <p className="text-sm text-slate-400 mb-4">
                "I've located your account and can help resolve that right away. Let me update that for you..."
              </p>

              <div className="flex items-center justify-between">
                <button className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                        style={{boxShadow: '0 0 20px rgba(0, 171, 226, 0.4)'}}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
                <span className="text-sm text-slate-500 font-mono">0:48</span>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    4.8★ Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="tel:+13179612546"
             className="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors font-semibold group">
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

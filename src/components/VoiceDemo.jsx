export default function VoiceDemo() {
  const agents = [
    {
      name: 'Alex AI',
      voice: 'Professional Male Voice',
      status: 'online',
      duration: '0:32',
    },
    {
      name: 'Sarah AI',
      voice: 'Friendly Female Voice',
      status: 'online',
      duration: '0:28',
    },
    {
      name: 'Jordan AI',
      voice: 'Conversational Voice',
      status: 'online',
      duration: '0:41',
    },
  ];

  return (
    <section id="demo" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="bg-dots"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00ABE2] mb-4 block">
            Hear The Difference
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            AI Voice Agents That
            <br />
            <span className="bg-gradient-to-r from-[#105665] to-[#00ABE2] bg-clip-text text-transparent">
              Sound Human
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Listen to how our AI agents handle real conversations.
            <span className="block mt-1">Natural, professional, and always on-brand.</span>
          </p>
        </div>

        {/* Voice Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 shadow-brutal-hover group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00ABE2] to-[#105665] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#22c55e] border-3 border-white rounded-full shadow-sm"></span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-lg">{agent.name}</h4>
                  <p className="text-sm text-slate-500">{agent.voice}</p>
                </div>
              </div>

              <div className="mb-2">
                <span className="inline-flex items-center gap-2 text-xs text-[#22c55e] font-semibold px-3 py-1 bg-[#22c55e]/10 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                  Live Now
                </span>
              </div>

              {/* Waveform visualization */}
              <div className="h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center gap-1 px-6 mb-6">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-[#105665] to-[#00ABE2] rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 60 + 20}%`,
                      opacity: 0.4 + Math.random() * 0.6,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <span className="text-lg text-slate-600 font-semibold font-mono">{agent.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Demo */}
        <div className="text-center mt-16">
          <a
            href="tel:+13179612546"
            className="inline-flex items-center gap-2 text-lg text-[#00ABE2] font-semibold hover:gap-4 transition-all group"
          >
            Talk to an AI Agent Right Now
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

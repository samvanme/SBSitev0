export default function Stats() {
  const stats = [
    {
      value: '$680K',
      label: 'Revenue Influence',
    },
    {
      value: '45 Days',
      label: 'Measured in CRM',
    },
    {
      value: '$300K',
      label: 'Recovered Revenue',
    },
    {
      value: '98%',
      label: 'Call Answer Rate',
    },
  ];

  return (
    <section id="results" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(0,171,226,0.1)_0%,transparent_60%)] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              Measured Results
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{textShadow: '0 0 60px rgba(0, 171, 226, 0.3)'}}>
            Results Tied to{' '}
            <span className="bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
              Revenue Outcomes
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Real metrics from production AI systems
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2"
                   style={{textShadow: '0 0 40px rgba(0, 171, 226, 0.5)'}}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Quote */}
              <div className="flex-1">
                <svg className="w-10 h-10 text-brand-blue mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                  "We installed the AI system inside our CRM and saw $680K in attributed revenue within 45 days. Full visibility, full control, measurable impact."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-semibold text-lg">
                    SV
                  </div>
                  <div>
                    <div className="font-semibold text-white">Slava Vidomanets</div>
                    <div className="text-sm text-slate-400">Founder, StrataBlue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

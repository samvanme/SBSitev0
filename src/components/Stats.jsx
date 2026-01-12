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
    <section id="results" className="section-brutal overflow-hidden">
      <div className="container-brutal">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white/20 mb-6">
            <span className="text-overline">
              Measured Results
            </span>
          </div>
          <h2 className="text-heading mb-4">
            Results Tied to{' '}
            <span className="text-brand-blue">Revenue Outcomes</span>
          </h2>
          <p className="text-body-lg">
            Real metrics from production AI systems
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border-2 border-white/10 hover:border-white/30 transition-colors">
              <div className="text-display-lg text-white mb-2">
                {stat.value}
              </div>
              <div className="text-mono text-slate-500 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 bg-slate-900 border-2 border-white/20">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Quote */}
              <div className="flex-1">
                <svg className="w-10 h-10 text-brand-blue mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                  "We installed the AI system inside our CRM and saw $680K in attributed revenue within 45 days. Full visibility, full control, measurable impact."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 border-2 border-white/20 flex items-center justify-center text-white font-bold text-lg">
                    SV
                  </div>
                  <div>
                    <div className="font-bold text-white">Slava Vidomanets</div>
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

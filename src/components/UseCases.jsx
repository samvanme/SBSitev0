export default function UseCases() {
  const useCases = [
    {
      category: 'Revenue Systems',
      count: 'Install Phase 1',
      title: 'Inbound Lead Handling',
      features: [
        'CRM-integrated call routing',
        'Lead qualification + scoring',
        'Meeting scheduling with attribution',
        'Automated follow-up workflows',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
    },
    {
      category: 'Service Systems',
      count: 'Install Phase 2',
      title: 'Customer Support Intake',
      features: [
        'Intelligent routing + escalation',
        'Quality scoring per conversation',
        'Ticket creation in support tools',
        'Proactive status updates',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
    },
    {
      category: 'HR Systems',
      count: 'Install Phase 3',
      title: 'Candidate Screening',
      features: [
        'Interview scheduling automation',
        'Candidate qualification calls',
        'ATS integration + updates',
        'Reference check follow-up',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="systems" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              Phased Deployment
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{textShadow: '0 0 60px rgba(0, 171, 226, 0.3)'}}>
            AI Systems Deployed{' '}
            <span className="bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
              by Phase
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Integrated inside your platforms. Aligned to owners and KPIs.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/5 hover:border-brand-blue/20 transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    {useCase.icon}
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{useCase.count}</span>
                </div>

                {/* Category */}
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3 block">
                  {useCase.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-blue transition-colors">
                  {useCase.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <svg className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a href="#" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all group">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

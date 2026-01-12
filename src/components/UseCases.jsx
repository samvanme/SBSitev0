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
    <section id="systems" className="section-brutal overflow-hidden">
      <div className="container-brutal">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white/20 mb-6">
            <span className="text-overline">
              Phased Deployment
            </span>
          </div>
          <h2 className="text-heading mb-4">
            AI Systems Deployed{' '}
            <span className="text-brand-blue">by Phase</span>
          </h2>
          <p className="text-body-lg">
            Integrated inside your platforms. Aligned to owners and KPIs.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-900 border-2 border-white/10 hover:border-white/40 hover:bg-slate-900/80 transition-all"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-slate-800 flex items-center justify-center text-white mb-8">
                {useCase.icon}
              </div>

              {/* Category + Phase */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {useCase.category}
                </span>
                <span className="text-mono text-slate-600">{useCase.count}</span>
              </div>

              {/* Title */}
              <h3 className="text-heading-sm mb-6">
                {useCase.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {useCase.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-body">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <a href="#book" className="group/link inline-flex items-center gap-2 text-white font-bold border-b-2 border-white hover:text-brand-blue hover:border-brand-blue transition-colors">
                Learn More
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

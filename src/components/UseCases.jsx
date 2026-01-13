export default function UseCases() {
  const useCases = [
    {
      category: 'Revenue Systems',
      count: 'Phase 1',
      title: 'Inbound Lead Handling',
      accent: 'blue',
      industries: ['Real Estate', 'Finance', 'Professional Services'],
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
      count: 'Phase 2',
      title: 'Customer Support Intake',
      accent: 'white',
      industries: ['Healthcare', 'Finance', 'Legal'],
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
      count: 'Phase 3',
      title: 'Candidate Screening',
      accent: 'white',
      industries: ['Professional Services', 'Healthcare', 'Finance'],
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

  const allIndustries = ['Healthcare', 'Finance', 'Professional Services', 'Real Estate', 'Legal'];

  return (
    <section id="systems" className="section-brutal overflow-hidden relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10">
        {/* Vertical accent line - hidden on mobile */}
        <div className="hidden sm:block absolute left-6 lg:left-12 top-0 bottom-0 w-1 bg-brand-blue"></div>

        {/* Section Header - asymmetric, left-aligned */}
        <div className="mb-10 sm:mb-16 max-w-2xl sm:pl-6 lg:pl-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-mono text-slate-600 text-xs sm:text-sm">02</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-3 sm:mb-4">
            AI Systems by Phase
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            Integrated inside your platforms. Aligned to owners and KPIs.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="sm:pl-6 lg:pl-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 border-2 border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Left accent bar - blue for Phase 1, white for Phase 2/3 */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${useCase.accent === 'blue' ? 'bg-brand-blue' : 'bg-white'}`}></div>

              <div className="p-4 pl-6 sm:p-6 sm:pl-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 border-2 border-white flex items-center justify-center text-white ${useCase.accent === 'blue' ? 'bg-brand-blue shadow-brutal-sm' : 'bg-slate-800 shadow-brutal-white-sm'}`}>
                    {useCase.icon}
                  </div>
                  <span className="text-mono text-slate-500 text-xs sm:text-sm">{useCase.count}</span>
                </div>

                {/* Category */}
                <span className="text-overline mb-2 block">
                  {useCase.category}
                </span>

                {/* Title */}
                <h3 className="font-bold text-white text-lg sm:text-xl mb-3">
                  {useCase.title}
                </h3>

                {/* Industry Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {useCase.industries.map((industry, i) => (
                    <span
                      key={i}
                      className="text-mono text-xs px-2 py-0.5 border border-white/20 text-slate-400"
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-300">
                      <span className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 ${useCase.accent === 'blue' ? 'bg-brand-blue' : 'bg-white'}`}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a href="#book" className="inline-flex items-center gap-2 text-white font-bold text-sm group/link">
                  <span className="border-b-2 border-white/50 group-hover/link:border-white transition-colors">Learn More</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="sm:pl-6 lg:pl-8 mt-10 sm:mt-16">
          <p className="text-mono text-slate-500 text-xs sm:text-sm mb-4">Industries We Serve</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {allIndustries.map((industry, i) => (
              <span
                key={i}
                className="text-mono text-sm sm:text-base px-3 sm:px-4 py-2 border-2 border-white/10 text-white hover:border-white/30 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

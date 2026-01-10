export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Map workflows, identify pain points, and evaluate where AI systems deliver the highest ROI inside your operations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design',
      description: 'Build system architecture with platform integrations, role-based access controls, and metrics tied to revenue or service outcomes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Deploy',
      description: 'Phased rollout with audit logs, reporting dashboards, and attribution inside CRM. Measure impact from day one.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="integration" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              How We Deploy
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{textShadow: '0 0 60px rgba(0, 171, 226, 0.3)'}}>
            Discover. Design.{' '}
            <span className="bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
              Deploy.
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Production AI systems built for control, measurement, and scale
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brand-blue/30 to-transparent -translate-x-6"></div>
              )}

              <div className="relative">
                {/* Icon Container */}
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-brand-blue-dark to-brand-blue flex items-center justify-center text-white"
                     style={{boxShadow: '0 0 20px rgba(0, 171, 226, 0.3)'}}>
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-slate-900 border-4 border-brand-blue/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-600">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="tel:+13179612546"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            style={{boxShadow: '0 0 20px rgba(0, 171, 226, 0.3)'}}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 171, 226, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 171, 226, 0.3)'}
          >
            Schedule Fit Check Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

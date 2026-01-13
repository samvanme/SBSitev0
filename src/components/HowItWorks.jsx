import { CONTACT } from '../constants/config';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Together we map your workflows, identify pain points, and evaluate where AI systems deliver the highest ROI.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design',
      description: 'We collaborate on system architecture with integrations, access controls, and metrics tied to your business outcomes.',
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
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing partnership with optimization, updates, and scaling support. Your AI system grows with your business.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="integration" className="section-brutal overflow-hidden relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10">
        {/* Vertical accent line - hidden on mobile */}
        <div className="hidden sm:block absolute left-6 lg:left-12 top-0 bottom-0 w-1 bg-brand-blue"></div>

        {/* Section Header - asymmetric, left-aligned */}
        <div className="mb-10 sm:mb-16 max-w-2xl sm:pl-6 lg:pl-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-mono text-slate-600 text-xs sm:text-sm">03</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-3 sm:mb-4">
            Discover. Design. Deploy. Support.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            From strategy through production—and beyond. Your end-to-end AI integration partner.
          </p>
        </div>

        {/* Steps */}
        <div className="sm:pl-6 lg:pl-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-white/20 z-10"></div>
              )}

              <div className="relative bg-slate-900/50 border-2 border-white/10 hover:border-white/20 transition-colors">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>

                <div className="p-4 pl-6 sm:p-6 sm:pl-8">
                  {/* Step number + Icon row */}
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl font-display font-black text-white/20">{step.number}</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 border-2 border-white flex items-center justify-center text-white shadow-brutal-white-sm">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-white text-lg sm:text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - left aligned */}
        <div className="sm:pl-6 lg:pl-8 mt-10 sm:mt-16">
          <a
            href="#book"
            className="inline-flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-8 py-4 min-h-[48px] bg-brand-blue text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            Book Discovery Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

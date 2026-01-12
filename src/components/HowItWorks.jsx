import { CONTACT } from '../constants/config';

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
    <section id="integration" className="section-brutal overflow-hidden">
      <div className="container-brutal">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white/20 mb-6">
            <span className="text-overline">
              How We Deploy
            </span>
          </div>
          <h2 className="text-heading mb-4">
            Discover. Design.{' '}
            <span className="text-brand-blue">Deploy.</span>
          </h2>
          <p className="text-body-lg">
            Production AI systems built for control, measurement, and scale
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative pt-4 pr-4">
              {/* Connector Line (tablet+ only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[4.5rem] left-full w-full border-t-2 border-dashed border-white/30 -translate-x-4"></div>
              )}

              <div className="relative h-full p-6 border-2 border-white/10 hover:border-white/30 transition-colors">
                {/* Step Number - prominent, aligned to grid */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-slate-900 border-2 border-white flex items-center justify-center">
                  <span className="font-display text-2xl font-black text-white">{step.number}</span>
                </div>

                {/* Icon Container */}
                <div className="w-12 h-12 mb-6 bg-brand-blue flex items-center justify-center text-white">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-heading-sm mb-3">
                  {step.title}
                </h3>
                <p className="text-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href={`tel:${CONTACT.phone}`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm transition-all"
          >
            Schedule Fit Check Call
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

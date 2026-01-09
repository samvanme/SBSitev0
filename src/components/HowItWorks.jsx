export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Agent',
      description: 'Select from sales, recruiting, or support AI agents. Customize voice, personality, and scripts to match your brand.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Connect Your Systems',
      description: 'Integrate with your CRM, calendar, and phone system. We work with all major platforms through our API.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Go Live Instantly',
      description: 'Your AI agent starts handling calls immediately. Monitor conversations, review transcripts, and optimize performance in real-time.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00ABE2] mb-4 block">
            Simple Setup
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get Started In Minutes
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            No complex installation or training required. Your AI voice agent can be live and taking calls today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#00ABE2]/30 to-transparent -translate-x-6"></div>
              )}

              <div className="relative">
                {/* Icon Container */}
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#105665] to-[#00ABE2] flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-slate-50 border-4 border-white flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-300">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl"
          >
            Start Your Free Trial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

export default function UseCases() {
  const useCases = [
    {
      category: 'Sales',
      count: '4 Agents',
      title: 'Instant Lead Follow-Up',
      features: [
        'Form fill instant callbacks',
        'Discovery call scheduling',
        'Product demo booking',
        'Outbound campaign calls',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
    },
    {
      category: 'Recruiting',
      count: '5 Agents',
      title: 'Automated Interview Scheduling',
      features: [
        'Candidate screening calls',
        'Interview scheduling',
        'Call-in management',
        'Reference check follow-up',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
    },
    {
      category: 'Support',
      count: '6 Agents',
      title: 'Always-On Customer Service',
      features: [
        '24/7 support calls',
        'Appointment scheduling',
        'FAQ handling',
        'Ticket creation & routing',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
    },
  ];

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="use-cases" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="bg-grid"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00ABE2] mb-4 block">
            Built For Your Business
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            AI Agents For
            <br />
            <span className="bg-gradient-to-r from-[#105665] to-[#00ABE2] bg-clip-text text-transparent">
              Every Use Case
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            From sales to support, our AI voice agents handle the conversations
            <span className="block mt-1">that matter most to your business.</span>
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl border border-slate-200 hover:border-[#00ABE2]/30 shadow-brutal-hover overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Spotlight effect */}
              <div className="spotlight-effect"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00ABE2]/15 to-[#105665]/10 flex items-center justify-center shadow-sm shadow-[#00ABE2]/10 text-[#00ABE2]">
                    {useCase.icon}
                  </div>
                  <span className="text-sm text-slate-400 font-medium">{useCase.count}</span>
                </div>

                {/* Category */}
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00ABE2] mb-3 block">
                  {useCase.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#105665] transition-colors">
                  {useCase.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a href="#" className="inline-flex items-center gap-2 text-[#00ABE2] font-semibold hover:gap-3 transition-all">
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

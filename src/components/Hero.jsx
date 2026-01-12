import { CONTACT } from '../constants/config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Static radial gradient - subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,171,226,0.08)_0%,transparent_70%)]"></div>

      <div className="container-brutal relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline - brutalist style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border-2 border-white/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-overline">
              Production AI Systems
            </span>
          </div>

          {/* Headline - brutalist typography, no glow */}
          <h1 className="text-display-lg text-white mb-6">
            AI Systems for <span className="text-brand-blue">Revenue & Service</span> Operations
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg mb-4 max-w-3xl mx-auto">
            Integrated. Governed. Measured.
          </p>
          <p className="text-body mb-12 max-w-2xl mx-auto">
            Install AI voice agents inside your CRM and service platforms for consistent, controlled, and measurable operations.
          </p>

          {/* Stats Row - high contrast, no shadows */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-heading-sm text-white font-black mb-1">
                $680K
              </div>
              <div className="text-mono text-slate-500 uppercase">Revenue Influence</div>
            </div>
            <div className="hidden sm:block divider-brutal-vertical h-12"></div>
            <div className="flex flex-col items-center">
              <div className="text-heading-sm text-white font-black mb-1">
                45 Days
              </div>
              <div className="text-mono text-slate-500 uppercase">Measured in CRM</div>
            </div>
            <div className="hidden sm:block divider-brutal-vertical h-12"></div>
            <div className="flex flex-col items-center">
              <div className="text-heading-sm text-white font-black mb-1">
                $300K
              </div>
              <div className="text-mono text-slate-500 uppercase">Recovered Revenue</div>
            </div>
          </div>

          {/* CTA Buttons - brutalist style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm transition-all"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Try AI Agent Now
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold border-2 border-white/40 hover:border-white hover:bg-white/5 transition-colors">
              Book Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>CRM Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Full Attribution</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Governed Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

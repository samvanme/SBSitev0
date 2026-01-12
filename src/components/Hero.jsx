import { CONTACT } from '../constants/config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="container-brutal relative z-10 py-20 lg:py-32">
        {/* Left-aligned asymmetric layout */}
        <div className="max-w-4xl">
          {/* Overline - simplified, border only */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-white/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-mono text-xs uppercase tracking-widest text-white">
              Production AI Systems
            </span>
          </div>

          {/* Headline - maximum impact with text-display-xl */}
          <h1 className="text-display-xl text-white mb-8">
            AI Systems for{' '}
            <span className="text-brand-blue block sm:inline">Revenue & Service</span>
          </h1>

          {/* Subheadline - tighter, more direct */}
          <p className="text-body-lg mb-6 max-w-2xl">
            Integrated. Governed. Measured.
          </p>
          <p className="text-body mb-12 max-w-xl">
            Voice agents installed inside your CRM. Full attribution. Audit logs. Measurable impact from day one.
          </p>

          {/* Stats Row - responsive gaps, larger numbers */}
          <div className="flex flex-wrap items-baseline gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-6 mb-12">
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-none">$680K</div>
              <div className="text-mono text-xs text-slate-500 uppercase mt-2">Revenue Influence</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-none">45</div>
              <div className="text-mono text-xs text-slate-500 uppercase mt-2">Days to Measure</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-none">$300K</div>
              <div className="text-mono text-xs text-slate-500 uppercase mt-2">Recovered Revenue</div>
            </div>
          </div>

          {/* CTA Buttons - full-width mobile, inline desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mb-12">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-8 py-4 bg-brand-blue text-white font-bold text-base sm:text-lg border-2 border-white shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_theme('colors.white')] active:translate-x-0 active:translate-y-0 active:shadow-brutal-sm transition-all"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Try AI Agent Now
            </a>
            <button className="inline-flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-8 py-4 text-white font-bold text-base sm:text-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-colors">
              Book Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>

          {/* Trust Line - compact, utilitarian */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="text-mono text-xs text-slate-500 uppercase">Includes:</span>
            <span className="text-slate-300">CRM Integration</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Full Attribution</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Audit Logs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,171,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,171,226,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Radial spotlight from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,171,226,0.15)_0%,transparent_70%)]"></div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              Production AI Systems
            </span>
          </div>

          {/* Headline with gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              style={{textShadow: '0 0 80px rgba(0, 171, 226, 0.3)'}}>
            AI Systems for <span className="bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">Revenue & Service</span> Operations
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-slate-400 mb-4 leading-relaxed max-w-3xl mx-auto">
            Integrated. Governed. Measured.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Install AI voice agents inside your CRM and service platforms for consistent, controlled, and measurable operations.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1"
                   style={{textShadow: '0 0 40px rgba(0, 171, 226, 0.5)'}}>
                $680K
              </div>
              <div className="text-slate-500 uppercase tracking-wider text-xs">Revenue Influence</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1"
                   style={{textShadow: '0 0 40px rgba(0, 171, 226, 0.5)'}}>
                45 Days
              </div>
              <div className="text-slate-500 uppercase tracking-wider text-xs">Measured in CRM</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1"
                   style={{textShadow: '0 0 40px rgba(0, 171, 226, 0.5)'}}>
                $300K
              </div>
              <div className="text-slate-500 uppercase tracking-wider text-xs">Recovered Revenue</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+13179612546"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{boxShadow: '0 0 20px rgba(0, 171, 226, 0.3)'}}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 171, 226, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 171, 226, 0.3)'}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Try AI Agent Now
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm">
              Book Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>CRM Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Full Attribution</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
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

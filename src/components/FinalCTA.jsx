export default function FinalCTA() {
  return (
    <section id="book" className="relative py-32 overflow-hidden">
      {/* Dramatic center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,171,226,0.2)_0%,transparent_60%)] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{textShadow: '0 0 60px rgba(0, 171, 226, 0.3)'}}>
          Ready to Install an AI System?
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          DM "FIT CHECK" or call now to evaluate where AI systems fit inside your revenue or service operations.
        </p>

        {/* Phone input with glow */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <a
            href="tel:+13179612546"
            className="flex-1 px-8 py-4 bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-center"
            style={{boxShadow: '0 0 30px rgba(0, 171, 226, 0.4)'}}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 171, 226, 0.6)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 171, 226, 0.4)'}
          >
            Call Now: (317) 961-2546
          </a>
          <button className="px-8 py-4 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm whitespace-nowrap">
            Schedule Call
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
            <span>Audit Logs & Reporting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

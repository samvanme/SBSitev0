export default function FinalCTA() {
  return (
    <section id="book" className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Gradient Border Card */}
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-[#105665] via-[#00ABE2] to-[#105665] bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite]">
            <div className="bg-white rounded-[22px] p-12 lg:p-16">
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#105665] to-[#00ABE2] flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>

                {/* Headline */}
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Ready To Never Miss A Call Again?
                </h2>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Book a 15-minute demo and see how AI voice agents can transform your business.
                  Get a custom agent configured for your specific use case.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl">
                    Schedule Demo Call
                  </button>
                  <a
                    href="tel:+13179612546"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#105665] to-[#00ABE2] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Talk To AI Agent Now
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

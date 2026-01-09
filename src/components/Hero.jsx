export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 noise-texture">
      {/* Animated background layers */}
      <div className="absolute inset-0 mesh-gradient"></div>
      <div className="hero-beams"></div>
      <div className="diagonal-grid"></div>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Content - Asymmetric Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Overline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ABE2]/10 border border-[#00ABE2]/20 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span className="text-sm font-semibold text-[#00ABE2] uppercase tracking-wider">
                AI Voice Agents Online 24/7
              </span>
            </div>

            {/* Headline - Much Bolder */}
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Never Miss
              <br />
              Another Call.
              <br />
              <span className="bg-gradient-to-r from-[#105665] via-[#00ABE2] to-[#00ABE2] bg-clip-text text-transparent">
                AI Answers
                <br />
                Instantly.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-light">
              Professional AI voice agents handle sales, recruiting, and support calls 24/7.
              <span className="block mt-2 text-slate-500">
                Real conversations that convert. Zero wait time.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a
                href="tel:+13179612546"
                className="inline-flex items-center gap-3 px-8 py-5 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all shadow-brutal-hover text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Try AI Agent Now
              </a>
              <button className="inline-flex items-center gap-2 px-8 py-5 border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all font-semibold text-slate-900 text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00ABE2]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="font-medium">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">50K+</span>
                <span>calls handled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">98%</span>
                <span>answer rate</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Element - Glass Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {/* Floating Glass Card */}
              <div className="glass-card rounded-3xl p-8 shadow-brutal transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Call Stats */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Live Now</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                      <span className="text-sm font-semibold text-[#22c55e]">3 Agents Active</span>
                    </div>
                  </div>

                  {/* Recent Call */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ABE2] to-[#105665] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-slate-900">Sales Inquiry</span>
                          <span className="text-xs text-slate-500">2m ago</span>
                        </div>
                        <p className="text-sm text-slate-600">Lead qualified • Meeting booked</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ABE2] to-[#105665] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-slate-900">Support Call</span>
                          <span className="text-xs text-slate-500">5m ago</span>
                        </div>
                        <p className="text-sm text-slate-600">Issue resolved • 4.8★ rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Today Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">127</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Calls Today</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">2.1s</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Avg Wait</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">94%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Resolved</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00ABE2] to-[#105665] rounded-3xl -rotate-12 -z-10 opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

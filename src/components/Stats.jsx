export default function Stats() {
  const stats = [
    {
      value: '98%',
      label: 'Call Answer Rate',
    },
    {
      value: '2.3s',
      label: 'Avg Response Time',
    },
    {
      value: '50K+',
      label: 'Calls Handled',
    },
    {
      value: '4.9',
      label: 'Customer Rating',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden grain-dark">
      <div className="bg-grid-dark"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00ABE2] mb-4 block">
            Proven Results
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Performance That
            <br />
            <span className="bg-gradient-to-r from-[#00ABE2] to-white bg-clip-text text-transparent">
              Speaks For Itself
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            Real metrics from businesses using StrataBlue AI voice agents
            <span className="block mt-1">every day.</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 lg:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Quote */}
              <div className="flex-1">
                <svg className="w-10 h-10 text-[#00ABE2] mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6 font-light">
                  "StrataBlue AI has completely transformed how we handle inbound sales calls. We went from missing 40% of leads to capturing nearly every single one. The ROI was immediate."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-semibold text-lg">
                    MJ
                  </div>
                  <div>
                    <div className="font-semibold text-white">Michael Johnson</div>
                    <div className="text-sm text-slate-400">VP of Sales, TechGrowth Inc.</div>
                  </div>
                </div>
              </div>

              {/* Company Logo Placeholder */}
              <div className="flex items-center justify-center lg:w-48">
                <div className="px-8 py-4 rounded-lg bg-white/10 border border-white/20">
                  <div className="text-2xl font-bold text-white">TechGrowth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

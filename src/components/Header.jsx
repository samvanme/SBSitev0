export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue-dark to-brand-blue flex items-center justify-center transition-all duration-300"
                 style={{boxShadow: '0 0 20px rgba(0, 171, 226, 0.3)'}}>
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="text-2xl font-display font-bold tracking-tight bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
              StrataBlue
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#systems" className="text-slate-400 hover:text-white font-medium transition-colors">
              Systems
            </a>
            <a href="#results" className="text-slate-400 hover:text-white font-medium transition-colors">
              Results
            </a>
            <a href="#integration" className="text-slate-400 hover:text-white font-medium transition-colors">
              Integration
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+13179612546"
              className="hidden sm:flex items-center gap-2 text-brand-blue font-semibold hover:text-white transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Try AI Agent
            </a>
            <a
              href="#book"
              className="px-5 py-2.5 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

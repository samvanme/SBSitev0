import { CONTACT } from '../constants/config';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/95 border-b border-white/10">
      <div className="container-brutal">
        <div className="flex items-center justify-between h-20">
          <a href={import.meta.env.BASE_URL} className="flex items-center" aria-label="StrataBlue home">
            <img
              src={`${import.meta.env.BASE_URL}stratablue-logo-white.png`}
              alt="StrataBlue"
              className="h-12"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <a href="#systems" className="text-slate-400 hover:text-white font-bold transition-colors">
              Systems
            </a>
            <a href="#results" className="text-slate-400 hover:text-white font-bold transition-colors">
              Results
            </a>
            <a href="#integration" className="text-slate-400 hover:text-white font-bold transition-colors">
              Integration
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT.phone}`}
              className="hidden sm:flex items-center gap-2 text-white font-bold hover:text-brand-blue transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Try AI Agent
            </a>
            <a
              href="#book"
              className="px-5 py-3 bg-white text-slate-900 font-bold hover:bg-brand-blue hover:text-white transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

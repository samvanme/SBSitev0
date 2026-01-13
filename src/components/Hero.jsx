import { CONTACT } from '../constants/config';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [contentRef, isContentInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Grid overlay - stark brutalist grid, responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10 py-16 sm:py-20 lg:py-28">
        {/* Thick vertical accent line - hidden on mobile, visible on sm+ */}
        <div className="hidden sm:block absolute left-6 lg:left-12 top-16 sm:top-20 bottom-16 sm:bottom-20 w-1 bg-brand-blue"></div>

        <div
          ref={contentRef}
          className={`max-w-4xl sm:pl-6 lg:pl-8 transition-all duration-500 motion-reduce:transition-none ${
            isContentInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          {/* Overline - minimal brutalist */}
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-overline">AI Integration Partner</span>
          </div>

          {/* Headline - responsive typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black uppercase tracking-tight text-white mb-4 sm:mb-6 leading-[0.9]">
            AI Systems That <span className="text-brand-blue">Work</span>
          </h1>

          {/* Horizontal accent */}
          <div className="w-16 sm:w-24 h-1 bg-white/20 mb-6 sm:mb-8"></div>

          {/* Single strong subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 sm:mb-12 max-w-xl">
            In every part of your business.
          </p>

          {/* CTA Buttons - stack on mobile, ensure 44px+ touch targets */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-8 py-4 min-h-[48px] bg-brand-blue text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Try AI Agent Now
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-4 min-h-[48px] text-white font-bold border-2 border-white/30 hover:border-white hover:bg-white/5 transition-all"
            >
              Watch It Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </a>
          </div>

          {/* Trust Line - minimal text, wrap on mobile */}
          <p className="text-mono text-slate-500 text-xs sm:text-sm">
            <span className="hidden sm:inline">Strategy → Design → Production → Support</span>
            <span className="sm:hidden">Strategy → Production → Support</span>
          </p>
        </div>
      </div>
    </section>
  );
}

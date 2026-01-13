import { CONTACT } from '../constants/config';
import ConsultationForm from './ConsultationForm';

export default function FinalCTA() {
  return (
    <section id="book" className="section-brutal overflow-hidden relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10 text-center">
        {/* Display headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white mb-4 sm:mb-6 leading-[0.95]">
          Ready to Install<br className="sm:hidden" /> an AI System?
        </h2>

        {/* Horizontal accent */}
        <div className="w-16 sm:w-24 h-1 bg-white/20 mx-auto mb-6 sm:mb-8"></div>

        <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
          Call now to evaluate where AI systems fit inside your revenue or service operations.
        </p>

        {/* CTA Buttons - matching Hero styling */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-8 sm:mb-10">
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 min-h-[48px] bg-brand-blue text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            Call Now: {CONTACT.phoneDisplay}
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 min-h-[48px] text-white font-bold border-2 border-white/30 hover:border-white hover:bg-white/5 transition-all"
          >
            Schedule Call
          </a>
        </div>

        {/* Trust Line - simplified text dividers like Hero */}
        <p className="text-mono text-slate-500 text-xs sm:text-sm">
          <span className="hidden sm:inline">CRM Integration · Full Attribution · Governed Systems</span>
          <span className="sm:hidden">CRM · Attribution · Governed</span>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10 sm:my-14 max-w-lg mx-auto">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-mono text-slate-500 text-xs sm:text-sm whitespace-nowrap">or start a conversation</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Consultation Form */}
        <div className="max-w-md mx-auto">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}

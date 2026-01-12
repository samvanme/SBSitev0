import { CONTACT } from '../constants/config';

export default function FinalCTA() {
  return (
    <section id="book" className="section-brutal overflow-hidden">
      <div className="container-brutal text-center">
        <h2 className="text-display-lg text-white mb-6">
          Ready to Install an AI System?
        </h2>
        <p className="text-body-lg mb-10 max-w-2xl mx-auto">
          DM "FIT CHECK" or call now to evaluate where AI systems fit inside your revenue or service operations.
        </p>

        {/* Brutalist CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex-1 px-8 py-5 bg-brand-blue text-white font-bold border-2 border-white shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_theme('colors.brand.blue')] active:translate-x-0 active:translate-y-0 active:shadow-brutal-sm transition-all text-center"
          >
            Call Now: {CONTACT.phoneDisplay}
          </a>
          <button className="px-8 py-5 text-white font-bold border-2 border-white hover:bg-white hover:text-slate-900 transition-all whitespace-nowrap">
            Schedule Call
          </button>
        </div>

        {/* Trust Line */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>CRM Integration</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Full Attribution</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Audit Logs & Reporting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

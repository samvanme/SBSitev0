import { CONTACT } from '../constants/config';

export default function Footer() {
  const footerLinks = {
    Product: ['AI Voice Agents', 'Sales Agents', 'Support Agents', 'Integrations'],
    Company: ['About Us', 'Careers', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Top border - brutalist divider */}
      <div className="h-1 bg-white/10"></div>

      <div className="container-brutal py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
              StrataBlue AI
            </div>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 max-w-xs">
              AI voice agents for revenue and service operations. Integrated. Measured. Governed.
            </p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-mono text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-4">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-slate-500 text-sm cursor-default hover:text-slate-400 transition-colors">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-mono text-slate-600 text-xs sm:text-sm">
            © 2026 StrataBlue AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

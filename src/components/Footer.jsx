import { CONTACT } from '../constants/config';

export default function Footer() {
  const footerLinks = {
    Product: ['AI Voice Agents', 'Sales Agents', 'Recruiting Agents', 'Support Agents', 'Integrations', 'Pricing'],
    Company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
    Resources: ['Documentation', 'API Reference', 'Help Center', 'Case Studies', 'Tutorials'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance'],
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div className="bg-grid-dark"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00ABE2] to-white bg-clip-text text-transparent mb-4">
              StrataBlue AI
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              AI voice agents that handle phone calls for sales, recruiting, and customer service.
              Never miss another opportunity.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 text-[#00ABE2] hover:text-white transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-slate-400 cursor-default">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 StrataBlue AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

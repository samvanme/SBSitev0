# StrataBlue AI Landing Page

A modern, high-converting landing page for StrataBlue AI voice agents built with React and Tailwind CSS.

## Features

- **Hero Section** with animated beams and floating orbs backgrounds
- **Voice Demo Component** with waveform visualizations
- **Use Case Cards** with interactive spotlight hover effects
- **Stats Section** with testimonials on dark background
- **How It Works** step-by-step guide
- **Final CTA** with animated gradient border
- **Responsive Design** optimized for all devices
- **Modern Animations** following Linear, Vercel, and Stripe design patterns

## Design System

This landing page implements the StrataBlue AI design system with:

- Brand colors: \`#00ABE2\` (brand blue) and \`#105665\` (brand blue dark)
- Typography: Inter font family
- Animated backgrounds: rotating beams, floating orbs, dot fields, grid patterns
- Spotlight hover effects on interactive cards
- Professional voice agent demo components
- Mobile-first responsive layouts

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

\`\`\`bash
# Install dependencies
npm install
\`\`\`

### Development

\`\`\`bash
# Start the development server
npm run dev
\`\`\`

The site will be available at \`http://localhost:5173\`

### Build for Production

\`\`\`bash
# Create production build
npm run build

# Preview production build
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with animated backgrounds
│   ├── VoiceDemo.jsx       # AI voice agent demo cards
│   ├── UseCases.jsx        # Sales, Recruiting, Support use cases
│   ├── HowItWorks.jsx      # 3-step process explanation
│   ├── Stats.jsx           # Metrics and testimonials
│   ├── FinalCTA.jsx        # Call-to-action with gradient border
│   └── Footer.jsx          # Footer with links and social
├── App.jsx                 # Main app component
├── index.css               # Tailwind + custom animations
└── main.jsx                # App entry point
\`\`\`

## Customization

### Colors

Edit the brand colors in \`tailwind.config.js\` and \`src/index.css\`:

\`\`\`css
--brand-blue: #00ABE2;
--brand-blue-dark: #105665;
\`\`\`

### Content

Update text, phone numbers, and links in each component file:
- Phone number: \`tel:+13179612546\`
- Company info in \`Footer.jsx\`
- Use case details in \`UseCases.jsx\`

### Animations

All animated backgrounds are defined in \`src/index.css\` under the \`@layer components\` section.

## Performance

- Lazy loading for below-fold images
- Optimized animated backgrounds with \`pointer-events: none\`
- CSS-based animations using \`transform\` and \`opacity\`
- Mobile-optimized with reduced animation complexity

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - StrataBlue AI

## Contact

For questions or support, call (317) 961-2546 or visit the website.

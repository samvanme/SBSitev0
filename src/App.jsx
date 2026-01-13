import { lazy, Suspense, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import VoiceDemo from './components/VoiceDemo';
import { useAnalytics } from './hooks/useAnalytics';

// Lazy load below-fold sections for better initial load performance
const UseCases = lazy(() => import('./components/UseCases'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Stats = lazy(() => import('./components/Stats'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback with minimal height to prevent layout shift
function SectionFallback() {
  return <div className="min-h-screen" />;
}

function App() {
  const { track } = useAnalytics();

  // Track page view on mount
  useEffect(() => {
    track('page_view', {
      page: 'home',
      path: window.location.pathname,
      referrer: document.referrer || null,
    });
  }, [track]);

  return (
    <ErrorBoundary>
      {/* Skip to content link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Aurora Background */}
      <div className="aurora-bg"></div>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
           style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"}}></div>

      <main id="main-content" role="main" className="relative min-h-screen">
        <Header />
        <Hero />
        <VoiceDemo />
        <Suspense fallback={<SectionFallback />}>
          <UseCases />
          <HowItWorks />
          <Stats />
          <FinalCTA />
          <Footer />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}

export default App;

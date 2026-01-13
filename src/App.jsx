import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import VoiceDemo from './components/VoiceDemo';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
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

      <div id="main-content" className="relative min-h-screen">
        <Header />
        <Hero />
        <VoiceDemo />
        <UseCases />
        <HowItWorks />
        <Stats />
        <FinalCTA />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

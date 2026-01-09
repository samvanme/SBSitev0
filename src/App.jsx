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
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <VoiceDemo />
      <UseCases />
      <HowItWorks />
      <Stats />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;

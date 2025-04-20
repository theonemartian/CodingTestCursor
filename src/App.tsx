import Hero from './components/Hero';
import Features from './components/Features';
import Stories from './components/Stories';
import CardShowcase from './components/CardShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <Features />
      <Stories />
      <CardShowcase />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;

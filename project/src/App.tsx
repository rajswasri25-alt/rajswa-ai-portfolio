import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentFocus from './components/CurrentFocus';
import FlagshipProject from './components/FlagshipProject';
import ProblemMatrix from './components/ProblemMatrix';
import Skills from './components/Skills';
import LearningInPublic from './components/LearningInPublic';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-base-50">
      <Navbar />
      <Hero />
      <About />
      <CurrentFocus />
      <FlagshipProject />
      <ProblemMatrix />
      <Skills />
      <LearningInPublic />
      <Contact />
      <Footer />
    </div>
  );
}

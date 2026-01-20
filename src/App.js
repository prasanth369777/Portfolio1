import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfiniteHorizontalScroll from './components/InfiniteHorizontalScroll'; // fixed
import SkillsSection from './components/SkillsSection';
import WhatsappButton from './components/whatsapp';
import LogoSection from './components/logosec';
import ExperienceSection from './components/experience';
import CertificationSection from './components/certification';
import VerticalPosterScroll from './components/posterproject';
import StorytellingSection from './components/storytelling';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <WhatsappButton />
      <Hero />
      <InfiniteHorizontalScroll /> {/* fixed */}
      <About />
      <Projects />
      <StorytellingSection />
      <VerticalPosterScroll />
      <LogoSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

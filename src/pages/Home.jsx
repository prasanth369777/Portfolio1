import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfiniteHorizontalScroll from './components/InfiniteHorizontalScroll'; // fixed
import SkillsSection from '../components/SkillsSection';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <InfiniteHorizontalScroll /> {/* fixed */}
      <About />
      <Projects />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import { LazyMotion, domMax } from "framer-motion";

// 1. CRITICAL COMPONENTS (Load immediately)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTop from './components/scrollup';
import WhatsappButton from './components/whatsapp';

// 2. HEAVY COMPONENTS (Lazy load to remove initial lag)
const InfiniteHorizontalScroll = lazy(() => import('./components/InfiniteHorizontalScroll'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Uxpage = lazy(() => import("./components/Uxpage"));
const StorytellingSection = lazy(() => import('./components/storytelling'));
const VerticalPosterScroll = lazy(() => import('./components/posterproject'));
const LogoSection = lazy(() => import('./components/logosec'));
const ExperienceSection = lazy(() => import('./components/experience'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const CertificationSection = lazy(() => import('./components/certification'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // 3. INITIALIZE LENIS SMOOTH SCROLL
    // This removes the "stutter" during scrolling caused by heavy animations
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 4. HARDWARE ACCELERATION
    document.documentElement.style.scrollBehavior = 'auto';
    
    return () => lenis.destroy();
  }, []);

  return (
    // 5. LAZYMOTION reduces bundle size by only loading necessary motion features
    <LazyMotion features={domMax}>
      <div className="font-sans text-gray-800 bg-white antialiased selection:bg-black selection:text-white">
        <Navbar />
        <ScrollToTop />
        <WhatsappButton />
        
        <Hero />

        {/* 6. SUSPENSE BOUNDARY 
            This allows the Hero to be interactive while heavy sections load in the background */}
        <Suspense fallback={
          <div className="h-20 w-full flex items-center justify-center font-mono text-[10px] uppercase tracking-widest opacity-30">
            Syncing Modules...
          </div>
        }>
          <InfiniteHorizontalScroll />
          <About />
          <Projects />
          <Uxpage />
          <StorytellingSection />
          <VerticalPosterScroll />
          <LogoSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificationSection />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}

export default App;
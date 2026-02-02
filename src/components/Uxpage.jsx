import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Ensure the path to your local asset is correct
import heroArc from "../assets/heroarc.png"; 
import { 
  ArrowUpRight, 
  Layers, 
  Scan,
 
  ChevronDown
} from 'lucide-react';

const BloomfieldFullCase = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and scale effects for high-end feel
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-white selection:text-black">
      
      {/* --- 1. HERO: ARCHITECTURAL MONOLITH --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: imageScale, opacity: opacityFade }} className="absolute inset-0 z-0">
          <img 
            src={heroArc} 
            className="w-full h-full object-cover opacity-60 grayscale-[30%]"
            alt="Bloomfield Architectural Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h1 
            style={{ y: textY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[12rem] lg:text-[15rem] font-serif tracking-tighter text-white leading-[0.8]"
          >
            Bloomfield<span className="text-zinc-600">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.8em] text-zinc-500 mt-12 uppercase"
          >
            Luxury Real Estate Ecosystem // 2026
          </motion.p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 opacity-30"
          >
            <ChevronDown size={32} className="mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE BLUEPRINT: SYSTEMATIC DESIGN --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-6">01 / Concept Blueprint</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-white mb-10 leading-tight">
              Designing for <br /> <span className="italic text-zinc-500">Digital Permanence.</span>
            </h3>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12">
              The real estate market demands trust and exclusivity. We stripped the UI to its atomic level, treating whitespace as a luxury material. This allows the architectural renders to exist without interface competition.
            </p>
            
            <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-sm">
              
              <p className="text-[10px] font-mono text-zinc-600 mt-4 uppercase">Figure 1.0: Fibonacci Grid Alignment</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-24 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 border border-zinc-900 bg-zinc-900/10 backdrop-blur-sm group hover:border-zinc-500 transition-colors duration-500">
                <Scan className="text-zinc-600 mb-6 group-hover:text-white transition-colors" size={24} />
                <h4 className="text-xl font-medium mb-4 text-white">Visual Hierarchy</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Utilizing extreme contrast and sizing to create a natural eye-flow between property specifications and high-value CTAs.
                </p>
              </div>
              <div className="p-8 border border-zinc-900 bg-zinc-900/10 backdrop-blur-sm group hover:border-zinc-500 transition-colors duration-500">
                <Layers className="text-zinc-600 mb-6 group-hover:text-white transition-colors" size={24} />
                <h4 className="text-xl font-medium mb-4 text-white">Layered Depth</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Z-axis interactions and parallax scroll behaviors that mimic the experience of a physical architectural walkthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. ARCHITECTURE & USER FLOW --- */}
      <section className="py-24 bg-[#080808] border-y border-zinc-900">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 relative aspect-[16/9] md:aspect-[21/9] overflow-hidden group">
               <img 
    src={heroArc} // Pass the variable directly
    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
    alt="Bloomfield Living Space"
    // Optional: Add a fallback if the local image fails to load
    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" }} 
  />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
            </div>
            
            <div className="space-y-8">
              <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Logic & Navigation</h4>
              
              <p className="text-zinc-500 text-sm leading-relaxed italic">
                 "Conversion through minimalism: Reducing the path-to-inquiry from 5 steps to 2 frictionless touchpoints."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. DATA-DRIVEN OUTCOME --- */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              
              <div className="mt-8 p-6 bg-zinc-50 border border-zinc-100 rounded-sm italic text-zinc-500 text-sm">
                The framework leverages adaptive scaling to maintain brand authority across all viewport sizes.
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8">03 / Business Outcome</h2>
              <h3 className="text-6xl font-serif mb-12">Performance <br /> Metrics.</h3>
              
              <div className="space-y-12">
                <div className="pb-8 border-b border-zinc-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-zinc-400 uppercase">Inquiry Rate</span>
                    <span className="text-5xl font-serif">+140%</span>
                  </div>
                </div>
                <div className="pb-8 border-b border-zinc-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-zinc-400 uppercase">Lighthouse Score</span>
                    <span className="text-5xl font-serif">99/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-40 text-center border-t border-zinc-900">
        <motion.div whileHover={{ scale: 1.02 }} className="inline-block px-6">
          <a href="https://bloomfieldorg.com/" target="_blank" rel="noreferrer" className="group">
             <p className="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] mb-4">Experience the Brand</p>
             <h3 className="text-4xl md:text-7xl font-serif text-white flex items-center justify-center gap-6 group-hover:text-zinc-400 transition-colors">
               bloomfieldorg.com <ArrowUpRight size={48} className="text-zinc-800 group-hover:text-white transition-colors" />
             </h3>
          </a>
        </motion.div>
      </footer>
    </div>
  );
};

export default BloomfieldFullCase;
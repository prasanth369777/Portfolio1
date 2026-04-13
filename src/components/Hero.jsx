import { ArrowDownRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroPortrait from '../assets/hero-person1.webp';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/9600985733?text=Hi%20Prasanth,%20I'm%20interested%20in%20working%20with%20you!";

  // --- SCROLL ANIMATION FOR CIRCULAR TEXT ---
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#ffffff] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white pt-24 lg:pt-32 flex flex-col justify-between overflow-hidden"
    >
      {/* --- PREMIUM DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#fafafa_100%)] opacity-100" />
        
        {/* Soft, muted blobs for a luxury editorial feel */}
        <motion.div 
            animate={{ scale: [1, 1.05, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[80%] md:w-[50%] h-[50%] bg-[radial-gradient(circle,_rgba(161,161,170,0.05)_0%,_transparent_70%)] blur-[80px] md:blur-[100px]" 
        />
        <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[15%] -right-[5%] w-[70%] md:w-[45%] h-[45%] bg-[radial-gradient(circle,_rgba(199,210,254,0.05)_0%,_transparent_70%)] blur-[100px] md:blur-[120px]" 
        />

        {/* Minimalist Blueprint Grid */}
        <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{ 
                backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
                backgroundSize: '60px 60px' 
            }} 
        />
      </div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full flex-grow flex flex-col justify-center">
        {/* --- TOP ROW --- */}
        <div className="flex justify-between items-start mb-12 md:mb-20 border-b border-zinc-100 pb-8">
          <div className="flex items-center gap-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400" />
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] font-medium">Digital Product Design</span>
          </div>
          <div className="hidden sm:flex flex-col text-right text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-medium">
            <span>Operating From</span>
            <span className="text-zinc-800 mt-1 uppercase tracking-widest font-sans">Coimbatore, India</span>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center py-4">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pr-20 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Refined, smaller, lighter typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-serif font-light leading-[1.1] tracking-tight mb-8 text-zinc-900">
                UX & Product
                <span className="italic text-zinc-400 font-extralight">Designer.</span> <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-zinc-700 tracking-normal">UI Developer.</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-xl leading-relaxed font-light mb-12">
                I bridge the gap between user-centric design and pixel-perfect engineering. From early-stage product research to polished front-end architecture, I build experiences that humans love to use.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative overflow-hidden px-8 py-4 border border-zinc-200 text-zinc-900 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-500"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    View Portfolio <ArrowDownRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </button>
                <div className="flex flex-col border-l border-zinc-200 pl-6">
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-1.5 font-medium">Specializations</span>
                    <span className="text-xs md:text-sm text-zinc-800 font-light font-mono tracking-tight uppercase">Research / Systems / Front-End</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE + DRAW CIRCLE TEXT */}
          <div className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2">
            
            {/* CIRCULAR TEXT BADGE */}
            <motion.div 
              style={{ rotate }}
              className="absolute -top-4 -right-4 md:-top-8 md:-right-8 z-20 pointer-events-none opacity-60"
            >
              <svg viewBox="0 0 200 200" className="w-28 h-28 sm:w-40 h-40 md:w-56 md:h-56">
                <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                <text className="text-[10px] font-mono uppercase tracking-[0.35em] font-medium">
                  <textPath href="#circlePath" fill="#52525b">
                    • UX DESIGNER • PRODUCT DESIGNER • UI DEVELOPER
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] aspect-[4/5] p-[1px] group overflow-hidden bg-zinc-100"
            >
              <div className="relative w-full h-full overflow-hidden bg-white">
                <img
                  src={heroPortrait}
                  alt="Prasanth D"
                  className="w-full h-full object-cover grayscale-[80%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
                />
              </div>
              
              <div className="absolute bottom-8 left-[-12px] bg-white text-zinc-900 border border-zinc-100 px-6 py-3 text-[9px] font-medium font-mono uppercase tracking-[0.3em] rotate-[-90deg] origin-left shadow-sm">
                PRASANTH D.
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- BOTTOM ROW: SKILLS BAR --- */}
        <div className="mt-auto py-10 border-t border-zinc-100">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex flex-wrap justify-center md:justify-start gap-x-10 md:gap-x-16 gap-y-4">
               {['UX RESEARCH', 'PRODUCT STRATEGY', 'UI ARCHITECTURE', 'REACT', 'TAILWIND'].map((skill, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-1 h-1 rounded-full bg-zinc-300" />
                   <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-light whitespace-nowrap">
                     {skill}
                   </span>
                 </div>
               ))}
             </div>
             
             <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-4"
             >
               Direct Inquiry 
               <span className="relative w-12 h-[1px] overflow-hidden bg-zinc-200">
                  <span className="absolute inset-0 bg-zinc-900 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500 ease-out" />
               </span>
             </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
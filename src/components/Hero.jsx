import { ArrowDownRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroPortrait from '../assets/hero-person.webp';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/9600985733?text=Hi%20Prasanth,%20I'm%20interested%20in%20working%20with%20you!";

  // --- SCROLL ANIMATION FOR CIRCULAR TEXT ---
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#080808] text-white font-sans selection:bg-white selection:text-black pt-20 lg:pt-28 flex flex-col justify-between overflow-hidden"
    >
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full h-full flex-grow flex flex-col">
        {/* --- TOP ROW --- */}
        <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Available for New Projects</span>
          </div>
          <div className="hidden md:flex flex-col text-right text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span>Location</span>
            <span className="text-white mt-1 uppercase tracking-normal font-sans">Coimbatore, India</span>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 h-full items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-serif font-light leading-[0.85] tracking-tighter mb-10">
                Digital <br />
                <span className="italic text-zinc-700">Creator.</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed font-light mb-12">
                I help brands grow by combining <span className="text-white font-medium">creative design</span> with <span className="text-white font-medium">modern technology</span>.
              </p>

              <div className="flex items-center gap-8">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center gap-3"
                >
                  My Work <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE + DRAW CIRCLE TEXT */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* --- CIRCULAR DRAWING TEXT BADGE --- */}
            <motion.div 
              style={{ rotate }}
              className="absolute -top-10 -right-10 md:-top-20 md:-right-20 z-20 pointer-events-none"
            >
              <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-64 md:h-64">
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
                <text className="text-[14px] font-mono uppercase tracking-[0.4em] fill-emerald-500 font-bold">
                  <textPath href="#circlePath">
                    • UI/UX DESIGN • DIGITAL MARKETING • VIDEO EDITING • REACT & AI
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[450px] aspect-[4/5] bg-zinc-900 border border-white/10 p-3 group overflow-hidden"
            >
              <div className="relative w-full h-full overflow-hidden bg-black">
                <img
                  src={heroPortrait}
                  alt="Prasanth D"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />
              </div>
              
              {/* Overlay ID Card Style */}
              <div className="absolute bottom-10 left-[-10px] bg-white text-black px-6 py-3 text-[10px] font-bold font-mono uppercase tracking-[0.3em] rotate-[-90deg] origin-left border border-white shadow-2xl">
                Prasanth D. // 2026
              </div>
            </motion.div>
          </div>

        </div>

        {/* --- BOTTOM ROW: SKILLS BAR --- */}
        <div className="mt-auto py-10 flex flex-wrap justify-between items-center border-t border-white/10 gap-6">
           <div className="flex gap-12 overflow-hidden whitespace-nowrap group">
              {['UI/UX', 'MARKETING', 'EDITING', 'REACT'].map((skill, i) => (
                <span key={i} className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] group-hover:text-zinc-300 transition-colors">
                  {skill}
                </span>
              ))}
           </div>
           
           <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-colors flex items-center gap-2"
           >
             Contact via WhatsApp <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
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
      className="relative min-h-screen bg-[#ffffff] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white pt-20 lg:pt-28 flex flex-col justify-between overflow-hidden"
    >
      {/* --- COLORFUL DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Base Radial Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fcfcfc_0%,_#ffffff_100%)] opacity-100" />
        
        {/* Layer 2: Colorful Shifting Blobs */}
        <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,_rgba(129,140,248,0.06)_0%,_transparent_70%)] blur-[100px]" 
        />
        <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[15%] -right-[5%] w-[45%] h-[45%] bg-[radial-gradient(circle,_rgba(244,114,182,0.06)_0%,_transparent_70%)] blur-[120px]" 
        />
        <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-[30%] left-[20%] w-[35%] h-[35%] bg-[radial-gradient(circle,_rgba(52,211,153,0.04)_0%,_transparent_60%)] blur-[90px]" 
        />

        {/* Layer 3: Technical Blueprint Grid */}
        <div 
            className="absolute inset-0 opacity-[0.25]" 
            style={{ 
                backgroundImage: `linear-gradient(#f0f0f0 1.5px, transparent 1.5px), linear-gradient(90deg, #f0f0f0 1.5px, transparent 1.5px)`,
                backgroundSize: '80px 80px' 
            }} 
        />
      </div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full h-full flex-grow flex flex-col">
        {/* --- TOP ROW --- */}
        <div className="flex justify-between items-start mb-12 border-b border-zinc-200 pb-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              {/* Colorful Pulse */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-400" />
            </span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold">Collaborative Intelligence</span>
          </div>
          <div className="hidden md:flex flex-col text-right text-xs font-mono text-blue-500 uppercase tracking-[0.2em] font-bold">
            <span>Based In</span>
            <span className="text-zinc-900 mt-1 uppercase tracking-normal font-sans">Coimbatore, India</span>
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
              <h1 className="text-7xl sm:text-8xl lg:text-[11rem] font-serif font-light leading-[0.85] tracking-tighter mb-10 text-zinc-900">
                Visual <br />
                {/* Colorful Shifting Gradient Text */}
                <span className="italic bg-gradient-to-r from-indigo-500 via-blue-400 to-emerald-400 bg-[size:200%] bg-clip-text text-transparent animate-gradient-shift">Storyteller.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 max-w-xl leading-relaxed font-light mb-12">
                I help businesses stand out in the digital world. By mixing <span className="text-zinc-900 font-medium underline decoration-zinc-200 underline-offset-8">smart design</span> with <span className="text-zinc-900 font-medium">clean code</span>, I build experiences that look great and work perfectly.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative overflow-hidden px-12 py-6 bg-zinc-900 text-white text-[11px] font-bold uppercase tracking-[0.4em] rounded-sm transition-all shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    See My Work <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </span>
                  {/* Subtle Colorful Button Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <div className="flex flex-col border-l border-zinc-200 pl-8">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1 font-bold">Expertise In</span>
                    <span className="text-base text-zinc-800 font-medium font-mono tracking-tighter uppercase"> UI Systems / Research / Figma</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE + DRAW CIRCLE TEXT */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* --- CIRCULAR TEXT BADGE (Colorful) --- */}
            <motion.div 
              style={{ rotate }}
              className="absolute -top-10 -right-10 md:-top-20 md:-right-20 z-20 pointer-events-none"
            >
              <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-72 md:h-72">
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  fill="none"
                />
                <text className="text-[12px] font-mono uppercase tracking-[0.5em] font-bold">
                  {/* Use a static colorful shade that won't distract */}
                  <textPath href="#circlePath" fill="#94a3b8">
                    • SOLVING PROBLEMS • CREATING VALUE • BUILDING BRANDS • 2026 EDITION
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[430px] aspect-[3/4] p-[1.5px] group overflow-hidden shadow-2xl shadow-indigo-100/30
                /* Static Colorful Gradient Frame */
                bg-gradient-to-br from-indigo-300 via-pink-200 to-emerald-300
              "
            >
              <div className="relative w-full h-full overflow-hidden bg-white">
                <img
                  src={heroPortrait}
                  alt="Prasanth D"
                  className="w-full h-full object-cover grayscale opacity-95 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
                
                {/* Image Overlay: Dynamic colorful shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] linear" />
              </div>
              
              {/* Overlay ID Card Style (Classic Monochrome for Balance) */}
              <div className="absolute bottom-12 left-[-15px] bg-zinc-900 text-white px-8 py-4 text-[11px] font-bold font-mono uppercase tracking-[0.4em] rotate-[-90deg] origin-left shadow-2xl">
              UX DESIGNER // PRASANTH
              </div>
            </motion.div>
          </div>

        </div>

        {/* --- BOTTOM ROW: SKILLS BAR --- */}
        <div className="mt-auto py-12 flex flex-wrap justify-between items-center border-t border-zinc-200 gap-6">
           <div className="flex gap-16 overflow-hidden whitespace-nowrap group">
             {['SYSTEM DESIGN', 'UI ARCHITECTURE', 'FIGMA', 'REACT' , "TAILWIND"].map((skill, i) => (
               <div key={i} className="flex items-center gap-3">
                 {/* Colorful Bullet Points */}
                 <div className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-indigo-300' : i % 3 === 1 ? 'bg-pink-300' : 'bg-emerald-300'}`} />
                 <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-[0.4em] group-hover:text-zinc-900 transition-colors font-bold">
                   {skill}
                 </span>
               </div>
             ))}
           </div>
           
           <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 transition-colors flex items-center gap-4"
           >
             Direct Inquiry 
             <span className="relative w-10 h-[1.5px] overflow-hidden">
                {/* WhatsApp Link Colorful underline animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500via-pink-900 to-emerald-500  translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500" />
                <span className="absolute inset-0 bg-zinc-900 translate-x-[0%] group-hover:translate-x-[100%] transition-transform duration-500" />
             </span>
           </a>
        </div>
      </div>

      {/* --- ADD GRADIENT ANIMATION KEYFRAMES --- */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
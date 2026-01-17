import React from "react";

// Import your logos (Keep your existing imports)
import figmaLogo from "../assets/DJ1-01.png";
import photoshopLogo from "../assets/GREENSAND LOGO-01.png";
import illustratorLogo from "../assets/KAIPULLA-01.png";
import webDesignLogo from "../assets/VIKRAM LOGO-01.png";
import canvaLogo from "../assets/ak holidays-01-01.png";
import marketingLogo from "../assets/bloom field logo-02-01.png";
import logo7 from "../assets/cyberfox log-01.png";
import logo9 from "../assets/sss logo-01.png";
import logo10 from "../assets/Untitled design (1).png";

const logos = [
  figmaLogo, photoshopLogo, illustratorLogo, webDesignLogo, 
  canvaLogo, marketingLogo, logo7, logo9, logo10,
];

const InfiniteHorizontalScroll = () => {
  // Create a massive array to ensure it covers wide screens easily
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden select-none font-sans">
      
      {/* --- BACKGROUND FX --- */}
      {/* Mesh Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-60"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
           <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
           <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Trusted Partners</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Collaborating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Industry Leaders</span>
        </h2>
      </div>

      {/* --- SCROLL CONTAINER --- */}
      {/* 'mask-image' creates the fade out effect on left/right */}
      <div className="relative w-full overflow-hidden mask-gradient-horizontal group">
        
        {/* The Track */}
        <div className="flex w-max gap-6 md:gap-12 animate-scroll-horizontal group-hover:paused">
          {repeatedLogos.map((logo, idx) => (
            <div
              key={`logo-${idx}`}
              className="group/card relative w-40 h-24 md:w-52 md:h-32 flex items-center justify-center p-6 
                         bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm
                         hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]
                         transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Partner logo ${idx}`}
                className="w-full h-full object-contain filter grayscale opacity-60 
                           group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-110 
                           transition-all duration-500"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
        
        {/* Interaction Hint */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-xs font-mono text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
          // Paused
        </div>
      </div>

      {/* --- STYLES --- */}
      <style>{`
        /* Fade edges */
        .mask-gradient-horizontal {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .paused {
          animation-play-state: paused;
        }

        /* This animation moves from 0 to -50%. 
           Because we duplicated the array, moving 50% shifts it exactly to the start of the second set,
           creating a seamless loop without jumps.
        */
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-horizontal {
          animation: scrollHorizontal 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default InfiniteHorizontalScroll;
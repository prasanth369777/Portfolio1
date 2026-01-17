import React from "react";

// Import your logos
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
  // Triple the array for smoother seamless looping
  const row1 = [...logos, ...logos, ...logos];
  const row2 = [...logos, ...logos, ...logos].reverse();

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden select-none font-sans">
      
      {/* --- BACKGROUND OPTIMIZATIONS --- */}
      
      {/* 1. Optimized Noise (PNG Pattern instead of heavy SVG filter) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-overlay"
           style={{ 
             backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
             backgroundSize: '100px 100px' 
           }}
      ></div>

      {/* 2. Radial Gradients (Replaces heavy 'blur' effects) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(163,230,53,0.1)_0%,transparent_70%)] mix-blend-screen pointer-events-none"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 border border-lime-400/50 rounded-full bg-lime-400/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-ping"></span>
            <span className="text-lime-400 text-xs font-mono tracking-widest uppercase">Collaborations_v2.0</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase transform -rotate-1">
            Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-lime-500">Synergy</span>
          </h2>
        </div>

        {/* --- SCROLL TRACKS --- */}
        <div className="flex flex-col gap-8 transform rotate-1">
          
          {/* ROW 1: Moves Left */}
          <div className="relative w-full overflow-hidden mask-fade-sides">
            {/* Added 'will-change-transform' for GPU acceleration */}
            <div className="flex gap-6 animate-scroll-left w-max hover:pause-scroll will-change-transform">
              {row1.map((logo, idx) => (
                <LogoCard key={`r1-${idx}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* ROW 2: Moves Right */}
          <div className="relative w-full overflow-hidden mask-fade-sides">
            <div className="flex gap-6 animate-scroll-right w-max hover:pause-scroll will-change-transform">
              {row2.map((logo, idx) => (
                <LogoCard key={`r2-${idx}`} logo={logo} color="border-lime-400/30" />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- STYLES --- */}
      <style>{`
        .mask-fade-sides {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }

        /* Hardware Accelerated Keyframes (translate3d) */
        @keyframes scrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }

        @keyframes scrollRight {
          0% { transform: translate3d(-33.33%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 45s linear infinite;
        }
        
        .will-change-transform {
          will-change: transform;
          backface-visibility: hidden;
        }

        @media (max-width: 768px) {
           .animate-scroll-left { animation-duration: 25s; }
           .animate-scroll-right { animation-duration: 30s; }
        }
      `}</style>
    </section>
  );
};

// --- SUB-COMPONENT: Optimized Card ---
const LogoCard = ({ logo, color = "border-white/10" }) => {
  return (
    <div 
      className={`
        group relative flex items-center justify-center 
        w-40 h-24 sm:w-52 sm:h-32 
        bg-white/5 backdrop-blur-sm 
        border ${color} rounded-2xl 
        cursor-pointer overflow-hidden
        transition-all duration-300 ease-out
        hover:scale-105 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
      `}
    >
      {/* Lightweight Noise Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <img
        src={logo}
        alt="Brand"
        className="h-10 sm:h-14 w-auto object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
        loading="lazy"
        draggable={false}
      />
      
      {/* Simple corners (CSS only, no extra divs if possible) */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-white/30 rounded-full"></div>
      <div className="absolute top-2 right-2 w-1 h-1 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/30 rounded-full"></div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
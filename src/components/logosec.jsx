import React from "react";
// Import your assets
import heroPerson from "../assets/hero-person.webp";
import figmaLogo from "../assets/DJ1-01.png";
import photoshopLogo from "../assets/GREENSAND LOGO-01.png";
import illustratorLogo from "../assets/KAIPULLA-01.png";
import webDesignLogo from "../assets/VIKRAM LOGO-01.png";
import canvaLogo from "../assets/ak holidays-01-01.png";
import marketingLogo from "../assets/bloom field logo-02-01.png";
import logo7 from "../assets/cyberfox log-01.png";
import logo9 from "../assets/sss logo-01.png";

const logos = [
  { src: figmaLogo, name: "Figma" },
  { src: photoshopLogo, name: "Photoshop" },
  { src: illustratorLogo, name: "Illustrator" },
  { src: webDesignLogo, name: "Web Design" },
  { src: canvaLogo, name: "Canva" },
  { src: marketingLogo, name: "Marketing" },
  { src: logo7, name: "Branding" },
  { src: logo9, name: "Identity" },
];

const LogoSection = () => {
  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden min-h-[900px] flex items-center justify-center font-sans">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      
      {/* 1. Cyber Grid Background */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(to right, #1f2937 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      ></div>

      {/* 2. Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      {/* 3. Massive Background Text (Outline Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none z-0">
        <h1 className="text-[10vw] font-black text-transparent leading-none opacity-10"
            style={{ WebkitTextStroke: '2px #4b5563' }}>
          CREATIVITY
        </h1>
        <h1 className="text-[10vw] font-black text-transparent leading-none opacity-10"
            style={{ WebkitTextStroke: '2px #4b5563' }}>
          UNLEASHED
        </h1>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Title Section */}
        <div className="text-center mb-16 animate-fadeIn px-4">
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-2 block">
             Mastering the Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Logo & Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Creations</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg font-light">
            Bringing your brand to life with professional tools and unique perspectives that make a lasting impression.
          </p>
        </div>

        {/* --- ORBIT SYSTEM CONTAINER --- */}
        <div className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] flex items-center justify-center wrapper-container">

          {/* 1. Center Hero Person */}
          <div className="absolute z-20 w-[250px] sm:w-[350px] md:w-[400px] bottom-0 transition-transform hover:scale-105 duration-500">
             {/* Glow behind person */}
             <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/50 to-transparent blur-3xl -z-10"></div>
             <img 
               src={heroPerson} 
               alt="Creator" 
               className="w-full h-auto object-contain drop-shadow-2xl" 
             />
          </div>

          {/* 2. The Orbit Ring */}
          {/* CHANGED: md:animate-spin-slow - only spins on desktop */}
          <div className="absolute inset-0 rounded-full border border-gray-800/50 md:animate-spin-slow z-10">
            
            {logos.map((logo, index) => {
              const angle = (360 / logos.length) * index;
              // We use CSS variables for radius to handle responsiveness cleanly without conflicts
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 logo-item-wrapper"
                  style={{
                    '--angle': `${angle}deg`,
                    transform: `rotate(var(--angle)) translate(var(--orbit-radius)) rotate(calc(var(--angle) * -1))`,
                  }}
                >
                  {/* Counter-rotating container */}
                  {/* CHANGED: md:animate-spin-reverse - only counter-spins on desktop */}
                  {/* CHANGED: animate-float-gentle - adds a smooth bobbing motion on mobile */}
                  <div className="w-full h-full md:animate-spin-reverse animate-float-gentle" style={{ animationDelay: `${index * 0.5}s` }}>
                    <div className="group relative w-full h-full bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 hover:bg-gray-800 hover:scale-110 transition-all duration-300 cursor-pointer">
                      
                      {/* Glow on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <img 
                        src={logo.src} 
                        alt={logo.name} 
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Inner Decorative Ring */}
          {/* CHANGED: md:animate-spin-slow-reverse - only spins on desktop */}
          <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-gray-700/30 md:animate-spin-slow-reverse z-0"></div>

        </div>

      </div>

      {/* CSS Styles for Orbit and Responsiveness */}
      <style>{`
        /* Default Radius for Mobile */
        .wrapper-container {
          --orbit-radius: 160px;
        }

        /* Radius for Desktop */
        @media (min-width: 768px) {
          .wrapper-container {
            --orbit-radius: 260px;
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        /* New gentle float animation for mobile stability */
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-reverse 40s linear infinite;
        }
        .animate-float-gentle {
           animation: float-gentle 4s ease-in-out infinite;
        }
        
        /* Stop animation on hover on desktop */
        @media (min-width: 768px) {
            .animate-spin-slow:hover,
            .animate-spin-slow:hover .animate-spin-reverse {
            animation-play-state: paused;
            }
             /* On desktop, disable the gentle float so it doesn't fight the orbit */
            .animate-spin-slow .animate-float-gentle {
                animation: none;
            }
        }
      `}</style>
    </section>
  );
};

export default LogoSection;
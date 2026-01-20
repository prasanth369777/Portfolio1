import React, { useState } from "react";
import { Pause, Play } from "lucide-react";

// Import posters
import poster1 from "../assets/poster1.webp";
import poster2 from "../assets/poster2.webp";
import poster3 from "../assets/poster3.webp";
import poster4 from "../assets/poster4.webp";
import poster5 from "../assets/poster5.webp";
import poster6 from "../assets/poster6.webp";
import poster7 from "../assets/poster7.webp";
import poster8 from "../assets/poster8.webp";
import poster9 from "../assets/poster9.webp";
import poster10 from "../assets/poster10.webp";
import poster11 from "../assets/poster11.webp";
import poster12 from "../assets/poster12.webp";
import poster13 from "../assets/poster13.webp";

const posters = [
  poster1, poster2, poster3, poster4, poster5, 
  poster6, poster7, poster8, poster9, poster10, 
  poster11, poster12, poster13
];

const Carousel3D = () => {
  const [isPaused, setIsPaused] = useState(false);

  // --- 3D SETUP ---
  const posterCount = posters.length;
  // Increased width for a more cinematic look
  const panelWidth = 260; 
  const radius = Math.round((panelWidth / 2) / Math.tan(Math.PI / posterCount)) + 80;

  return (
    <section className="relative h-[850px] bg-[#080808] overflow-hidden flex flex-col items-center justify-center font-sans perspective-container selection:bg-white selection:text-black">
      
      {/* --- ATMOSPHERE --- */}
      {/* Subtle Grain for texture (Performance friendly) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Minimal Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_85%)] pointer-events-none z-20"></div>

      {/* --- HEADER --- */}
      <div className="relative z-30 text-center mb-24 mix-blend-difference">
         <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-white/30"></div>
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.3em]">
               Visual Anthology
            </span>
            <div className="h-px w-12 bg-white/30"></div>
         </div>
         <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">
           Creative <span className="italic text-white/50">Output.</span>
         </h2>
      </div>

      {/* --- 3D ENGINE --- */}
      <div className="scene relative w-full flex justify-center items-center perspective-[1200px] z-10">
        <div 
          className="carousel-3d relative w-[260px] h-[380px] preserve-3d"
          style={{
            animation: `spin 50s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {posters.map((src, index) => {
            const angle = (360 / posterCount) * index;
            
            return (
              <div
                key={index}
                className="absolute inset-0 preserve-3d"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                {/* --- ART CARD (Optimized for Performance) --- */}
                {/* Removed backdrop-blur to fix lag. Added solid gradients. */}
                <div 
                    className="
                        relative w-full h-full bg-[#111] 
                        border border-white/10 
                        transition-all duration-500 ease-out
                        group hover:border-white/40 hover:translate-y-[-20px]
                    "
                >
                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden p-2">
                      <div className="relative w-full h-full overflow-hidden grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500">
                        <img
                            src={src}
                            alt={`Poster ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            draggable={false}
                        />
                      </div>
                  </div>

                  {/* Minimal Label (Appears on Hover) */}
                  <div className="absolute -bottom-12 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-mono text-white/70 tracking-widest">
                          FIG. {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </p>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-full h-full border border-white/0 group-hover:border-white/10 transition-colors duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MINIMAL CONTROLS --- */}
      <div className="absolute bottom-12 z-30 flex items-center gap-4">
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 group"
          >
             <div className="relative w-4 h-4">
                {isPaused ? (
                    <Play className="w-4 h-4 fill-current absolute inset-0" />
                ) : (
                    <div className="flex gap-1 justify-center items-center h-full">
                        <span className="w-1 h-3 bg-current rounded-full animate-sound-1"></span>
                        <span className="w-1 h-4 bg-current rounded-full animate-sound-2"></span>
                        <span className="w-1 h-3 bg-current rounded-full animate-sound-3"></span>
                    </div>
                )}
             </div>
             <span className="text-xs font-mono uppercase tracking-widest font-bold">
                {isPaused ? "Resume Rotation" : "Interactive View"}
             </span>
          </button>
      </div>

      {/* --- CSS STYLES --- */}
      <style>{`
        .perspective-container {
            /* Better depth rendering */
            perspective: 1200px;
        }
        
        .preserve-3d { 
            transform-style: preserve-3d; 
        }

        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }

        /* Sound Wave Animation for the button */
        @keyframes sound {
            0%, 100% { height: 30%; }
            50% { height: 100%; }
        }
        .animate-sound-1 { animation: sound 0.8s infinite ease-in-out; }
        .animate-sound-2 { animation: sound 0.8s infinite ease-in-out 0.2s; }
        .animate-sound-3 { animation: sound 0.8s infinite ease-in-out 0.4s; }

      `}</style>
    </section>
  );
};

export default Carousel3D;
import React from "react";

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
  poster1, poster2, poster3, poster4, poster5, poster6, 
  poster7, poster8, poster9, poster10, poster11, poster12, poster13,
];

const VerticalPosterScroll = () => {
  // Triple the array to ensure seamless looping without gaps
  const col1 = [...posters, ...posters, ...posters];
  const col2 = [...posters, ...posters, ...posters].reverse(); // Reverse for variety
  const col3 = [...posters, ...posters, ...posters].sort(() => Math.random() - 0.5); // Randomize

  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden font-sans selection:bg-lime-400 selection:text-black">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* 2. Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#050505] to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#050505] to-transparent z-20"></div>

      {/* 3. Marquee Text Overlay (CHANGED) 
          - Changed z-index from z-0 to z-40 (brings it to the front)
          - Increased opacity from 5 to 10
          - Added mix-blend-overlay for a cool texture effect over the images
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-40 pointer-events-none opacity-10 mix-blend-overlay">
        <h1 className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-white rotate-90 md:rotate-0 whitespace-nowrap">
          VISUAL ARCHIVE
        </h1>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
             <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest">Graphic Design Collection</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Poster <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-lime-400">Gallery</span>
          </h2>
        </div>

        {/* --- SCROLLING COLUMNS --- */}
        <div className="relative h-[800px] overflow-hidden mask-gradient-vertical">
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 h-full">
            
            {/* Column 1: Scroll UP */}
            <div className="flex flex-col gap-6 animate-scroll-up">
              {col1.map((poster, idx) => (
                <PosterCard key={`c1-${idx}`} img={poster} />
              ))}
            </div>

            {/* Column 2: Scroll DOWN */}
            <div className="flex flex-col gap-6 animate-scroll-down pt-24"> 
              {col2.map((poster, idx) => (
                <PosterCard key={`c2-${idx}`} img={poster} color="border-lime-400/20" />
              ))}
            </div>

            {/* Column 3: Scroll UP (Hidden on mobile) */}
            <div className="hidden md:flex flex-col gap-6 animate-scroll-up">
              {col3.map((poster, idx) => (
                <PosterCard key={`c3-${idx}`} img={poster} />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* --- CSS & ANIMATIONS --- */}
      <style>{`
        .mask-gradient-vertical {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }

        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); } 
        }

        @keyframes scrollDown {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }

        .animate-scroll-up {
          animation: scrollUp 40s linear infinite;
        }

        .animate-scroll-down {
          animation: scrollDown 45s linear infinite;
        }

        .grid:hover .flex {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// Sub-component for individual Poster Cards
const PosterCard = ({ img, color = "border-purple-500/20" }) => (
  <div className={`
    group relative w-full h-auto aspect-[3/4] 
    bg-[#0a0a0a] rounded-xl overflow-hidden 
    border border-white/5 ${color}
    transition-all duration-300
    hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-white/20 hover:z-10
  `}>
    <div className="absolute inset-0 bg-white/5 animate-pulse z-0"></div>
    
    <img
      src={img}
      alt="Poster Art"
      className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4">
      <p className="text-xs font-mono text-lime-400 uppercase tracking-wider">
        Graphic_Art
      </p>
    </div>
  </div>
);

export default VerticalPosterScroll;
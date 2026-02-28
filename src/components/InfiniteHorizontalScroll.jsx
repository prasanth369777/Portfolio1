import { ArrowRight } from "lucide-react";

// Logos
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
  { src: figmaLogo, name: "Figma" },
  { src: photoshopLogo, name: "Photoshop" },
  { src: illustratorLogo, name: "Illustrator" },
  { src: webDesignLogo, name: "WebFlow" },
  { src: canvaLogo, name: "Canva" },
  { src: marketingLogo, name: "Marketing" },
  { src: logo7, name: "Cyberfox" },
  { src: logo9, name: "SSS" },
  { src: logo10, name: "Studio" },
];

const InfiniteHorizontalScroll = () => {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-32 overflow-hidden font-sans selection:bg-black selection:text-white transition-all duration-1000
      /* MONOLITHIC GRAPHITE BACKGROUND (No gradients/blur) */
      bg-[#0a0a0c]">
      
      {/* --- REFINED MICRO-DOTS TEXTURE ONLY (Reduced intensity) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Micro-Dots */}
        <div className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} 
        />
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/5 pb-12">
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.4em] mb-6 block">
            SELECTED PARTNERSHIPS
          </span>

          <h2 className="text-6xl md:text-9xl font-serif text-white leading-[0.8] tracking-tighter">
            Strategic <br />
            <span className="italic bg-gradient-to-r from-zinc-500 via-zinc-200 to-white bg-clip-text text-transparent">Network.</span>
          </h2>
        </div>

        <div className="hidden md:flex flex-col items-end text-right">
          <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed mb-6">
            Building meaningful digital value through high-integrity collaborations and design systems.
          </p>
          <div className="flex items-center gap-4 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.3em] group cursor-default">
            Explore Ecosystem <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* --- TICKER (CLASSIC METALLIC BORDER - SHARPER EDGES) --- */}
      <div className="w-full bg-white/[0.01]">
        <div className="relative flex overflow-hidden group">
          
          {/* Edge Blur and Gradients Removed from Here */}

          <div className="flex animate-marquee group-hover:paused py-4">
            {repeatedLogos.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="relative flex-shrink-0 w-[200px] md:w-[320px] h-[180px] md:h-[240px] flex items-center justify-center group/item transition-all duration-700"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-28 md:w-36 h-auto object-contain grayscale opacity-30 brightness-150 transition-all duration-700 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-105"
                />

                {/* Technical Label */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-y-2 group-hover/item:translate-y-0">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.5em] whitespace-nowrap">
                    VERIFIED // {idx % logos.length + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FOOTER META --- */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-8 flex justify-between text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em]">
        <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
            <span>Architecture v2.06</span>
        </div>
        <span className="hidden md:inline">
          Prasanth D Studio // Est. 2026
        </span>
      </div>

      <style>{`
        .paused {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .animate-marquee {
          animation: marquee 80s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default InfiniteHorizontalScroll;
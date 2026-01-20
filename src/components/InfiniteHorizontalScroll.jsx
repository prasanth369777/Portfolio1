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
    <section className="relative py-32 bg-[#080808] overflow-hidden font-sans selection:bg-white selection:text-black">
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] opacity-50 pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 block">
            {'//'} Partnership Index
          </span>

          <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.9]">
            Trusted <br />
            <span className="italic text-zinc-600">Network.</span>
          </h2>
        </div>

        <div className="hidden md:flex flex-col items-end text-right">
          <p className="text-zinc-500 text-sm font-mono max-w-xs leading-relaxed mb-4">
            Collaborating with industry leaders to build scalable digital
            ecosystems.
          </p>
          <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
            Scroll to Explore <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* --- TICKER --- */}
      <div className="w-full border-t border-b border-white/10 bg-[#080808]">
        <div className="relative flex overflow-hidden group">
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-20" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-20" />

          <div className="flex animate-marquee group-hover:paused">
            {repeatedLogos.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="relative flex-shrink-0 w-[200px] md:w-[280px] h-[160px] md:h-[200px] border-r border-white/10 flex items-center justify-center group/item hover:bg-white/[0.02] transition-colors duration-300"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-24 md:w-32 h-auto object-contain grayscale opacity-40 mix-blend-screen transition-all duration-500 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110"
                />

                <div className="absolute bottom-4 left-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    REF: {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FOOTER META --- */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-4 flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
        <span>Total Active Partners: {logos.length}</span>
        <span className="hidden md:inline">
          Global Reach {'//'} 2024–25
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
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default InfiniteHorizontalScroll;

import { ArrowDownRight } from 'lucide-react';
import heroPortrait from '../assets/hero-person.webp';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#080808] text-white font-sans selection:bg-white selection:text-black pt-20 lg:pt-28 flex flex-col justify-between overflow-hidden"
    >
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full h-full flex-grow flex flex-col">
        {/* --- TOP ROW --- */}
        <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              System Online {'//'} Open for Work
            </span>
          </div>

          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Location
            </span>
            <span className="text-sm font-medium">Coimbatore, IN (IST)</span>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 h-full">
          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pr-16 lg:border-r border-white/10">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                Version 2.5
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-light leading-[0.9] tracking-tight mb-8">
              Design <br />
              <span className="italic text-zinc-600">Engineer.</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light mb-10">
              I bridge the gap between{' '}
              <span className="text-white">aesthetic intuition</span> and{' '}
              <span className="text-white">software architecture</span>. Building
              digital products that feel inevitable.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group relative px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                <span className="flex items-center gap-2">
                  View Projects <ArrowDownRight className="w-4 h-4" />
                </span>
              </button>

              <button className="px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 flex flex-col lg:pl-16 justify-center">
            <div className="relative w-full aspect-[4/5] bg-zinc-900 border border-white/10 p-2 group">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/50" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50" />
              </div>

              <div className="relative w-full h-full overflow-hidden bg-black">
                <img
                  src={heroPortrait}
                  alt="Portrait"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="absolute bottom-6 left-[-20px] bg-white text-black px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest rotate-[-90deg] origin-left border border-white">
                Prasanth.D
              </div>
            </div>

            <div className="mt-8 flex gap-6 text-zinc-500 font-mono text-xs uppercase tracking-widest justify-center lg:justify-start">
              <span>React & AI</span>
              <span aria-hidden>/</span>
              <span>UIUX Designer</span>
              <span aria-hidden>/</span>
              <span>Digital Marketing</span>
              <span aria-hidden>/</span>
              <span>Creator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

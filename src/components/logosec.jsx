import figmaLogo from "../assets/DJ1-01.png";
import photoshopLogo from "../assets/GREENSAND LOGO-01.png";
import illustratorLogo from "../assets/KAIPULLA-01.png";
import webDesignLogo from "../assets/VIKRAM LOGO-01.png";
import canvaLogo from "../assets/ak holidays-01-01.png";
import marketingLogo from "../assets/bloom field logo-02-01.png";
import logo7 from "../assets/cyberfox log-01.png";
import logo8 from "../assets/hero-person.webp";
import logo9 from "../assets/sss logo-01.png";
import logo10 from "../assets/Untitled design (1).png";

const ecosystem = [
  { id: "01", category: "System Architecture", src: figmaLogo },
  { id: "02", category: "Visual Identity", src: photoshopLogo },
  { id: "03", category: "Vector Engineering", src: illustratorLogo },
  { id: "04", category: "Development", src: webDesignLogo },
  { id: "05", category: "Interface Design", src: canvaLogo },
  { id: "06", category: "Growth Strategy", src: marketingLogo },
  { id: "07", category: "Security", src: logo7 },
  { id: "08", category: "Brand Identity", src: logo8 },
  { id: "09", category: "Infrastructure", src: logo9 },
  { id: "10", category: "Creative Direction", src: logo10 },
];

const LogoSection = () => {
  return (
    <section className="relative py-40 bg-white text-[#1a1a1a] font-sans selection:bg-black selection:text-white overflow-hidden">
      
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sharp Clean Grid - Higher visibility for the white theme */}
        <div 
          className="absolute inset-0 opacity-[0.3]" 
          style={{ 
            backgroundImage: `linear-gradient(#e5e7eb 1.5px, transparent 1.5px), linear-gradient(90deg, #e5e7eb 1.5px, transparent 1.5px)`,
            backgroundSize: '80px 80px' 
          }} 
        />
        {/* Subtle Atmospheric Depth */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-zinc-50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b border-zinc-200 pb-12 gap-10">
           <div className="max-w-2xl">
              <span className="text-[11px] font-mono text-blue-600 font-black uppercase tracking-[0.5em] mb-10 block">
                PARTNERSHIP INDEX
              </span>
              <h2 className="text-5xl md:text-5xl font-serif text-black leading-[0.85] tracking-tighter">
                Trusted by <br />
                {/* Blue & Green Gradient Text */}
                <span className="italic bg-gradient-to-r from-blue-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">Great Brands.</span>
              </h2>
           </div>
           <div className="md:block text-left md:text-right">
              {/* INCREASED SUB-TEXT SIZE & WEIGHT */}
              <p className="text-xl text-zinc-500 font-medium max-w-sm md:ml-auto leading-relaxed">
                I’ve collaborated with {ecosystem.length} forward-thinking teams to engineer <span className="text-black underline decoration-blue-500/20 underline-offset-8">scalable digital systems</span> and high-impact visual identities.
              </p>
           </div>
        </div>

        {/* --- THE FOCUS GRID --- */}
        <div className="group/grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-zinc-200">
           
           {ecosystem.map((item, index) => (
             <div 
                key={index}
                className="
                  group/card relative aspect-square border-r border-b border-zinc-200 bg-white
                  transition-all duration-500 ease-out
                  hover:bg-zinc-50
                  group-hover/grid:opacity-40 hover:!opacity-100
                "
             >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                   {/* Logo Image */}
                   <img 
                      src={item.src} 
                      alt="Brand Partner" 
                      className="w-1/2 h-1/2 object-contain filter grayscale brightness-110 opacity-60 transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-110" 
                   />
                </div>

                {/* --- HOVER METADATA --- */}
                <div className="absolute top-6 left-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                   <span className="text-[10px] font-mono text-blue-600 font-black uppercase tracking-widest block">
                    {"REF // " + item.id}
                   </span>
                </div>

                {/* Bottom Left: Role */}
                <div className="absolute bottom-6 left-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                   <span className="block text-[10px] text-zinc-400 font-mono uppercase tracking-[0.2em] font-bold">Verified Partner</span>
                   <span className="block text-sm font-bold text-black tracking-tight mt-1">{item.category}</span>
                </div>

                {/* Top Right: Tag */}
                <div className="absolute top-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                   <span className="text-[9px] uppercase tracking-widest text-zinc-500 border border-zinc-200 bg-white px-2 py-1 font-black">
                      ACTIVE
                   </span>
                </div>

                {/* Corner Accent (Blue/Green Mix) */}
                <div className={`absolute bottom-0 right-0 w-3 h-3 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-emerald-500'} scale-0 group-hover:scale-100 transition-transform origin-bottom-right`}></div>
             </div>
           ))}

        </div>

        {/* --- BOTTOM FOOTER --- */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-400 text-[10px] font-mono uppercase tracking-[0.5em] font-bold">
           <div className="flex items-center gap-4">
             <div className="flex gap-2">
               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
               <div className="w-1.5 h-1.5 bg-zinc-200 rounded-full"></div>
             </div>
             <span>System Architecture v2.06</span>
           </div>
           <span className="hidden md:inline">Precision Design // Coimbatore // © 2026</span>
        </div>

      </div>
    </section>
  );
};

export default LogoSection;
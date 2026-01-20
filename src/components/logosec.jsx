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
  { id: "01", name: "Figma", category: "Design", src: figmaLogo },
  { id: "02", name: "Photoshop", category: "Visual", src: photoshopLogo },
  { id: "03", name: "Illustrator", category: "Vector", src: illustratorLogo },
  { id: "04", name: "Web Flow", category: "Dev", src: webDesignLogo },
  { id: "05", name: "Canva", category: "Social", src: canvaLogo },
  { id: "06", name: "Marketing", category: "Growth", src: marketingLogo },
  { id: "07", name: "Cyberfox", category: "Security", src: logo7 },
  { id: "08", name: "Brand X", category: "Identity", src: logo8 },
  { id: "09", name: "SSS Corp", category: "System", src: logo9 },
  { id: "10", name: "Studio", category: "Creative", src: logo10 },
];

const LogoSection = () => {
  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 border-b border-white/10 pb-8 gap-8">
           <div className="max-w-2xl">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 block">
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1]">
                Technical <span className="italic text-zinc-600">Ecosystem.</span>
              </h2>
           </div>
           <div className="hidden md:block text-right">
              <p className="text-zinc-500 text-sm font-mono leading-relaxed">
                INTEGRATIONS: {ecosystem.length} <br/>
                STATUS: OPTIMIZED
              </p>
           </div>
        </div>

        {/* --- THE FOCUS GRID --- */}
        {/* 'group/grid' allows us to detect when the user enters the entire grid area */}
        <div className="group/grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-white/5">
           
           {ecosystem.map((item, index) => (
             <div 
                key={index}
                className="
                  group/card relative aspect-square border-r border-b border-white/5 bg-transparent
                  transition-all duration-500 ease-out
                  hover:bg-[#0a0a0a]
                  /* The Magic: When grid is hovered, dim everyone. But restore opacity for the hovered card. */
                  group-hover/grid:opacity-30 hover:!opacity-100
                "
             >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                   
                   {/* Logo Image */}
                   <img 
                      src={item.src} 
                      alt={item.name} 
                      className="w-1/2 h-1/2 object-contain filter grayscale opacity-60 transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-110" 
                   />

                </div>

                {/* --- HOVER METADATA --- */}
                {/* Top Left: ID */}
                <div className="absolute top-4 left-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                   <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 block">
  {"// The Stack"}
</span>
                </div>

                {/* Bottom Left: Name */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                   <span className="block text-sm font-medium text-white tracking-wide">{item.name}</span>
                </div>

                {/* Top Right: Category Tag */}
                <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                   <span className="text-[9px] uppercase tracking-widest text-zinc-600 border border-zinc-800 px-1.5 py-0.5 rounded">
                      {item.category}
                   </span>
                </div>

                {/* Corner Accent (Decorative) */}
                <div className="absolute bottom-0 right-0 w-2 h-2 border-l border-t border-white/20 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>

             </div>
           ))}

        </div>

        {/* --- BOTTOM FOOTER --- */}
        <div className="mt-16 flex items-center justify-between text-zinc-600 text-xs font-mono uppercase tracking-widest">
           <span>* Selected Tools & Technologies</span>
           <span className="hidden md:inline">System Architecture v2.4</span>
        </div>

      </div>
    </section>
  );
};

export default LogoSection;
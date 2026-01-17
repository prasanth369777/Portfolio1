import React from "react";
import { ArrowUpRight } from "lucide-react";

const projectList = [
  {
    title: "Career Ladder",
    category: "EDUTECH • PLATFORM",
    image: "https://www.careerladderedu.com/static/media/java.c6b2c6adf12ccb3814f5.webp",
    link: "https://www.careerladderedu.com/",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Agasthiyas Health",
    category: "CLIENT • MEDICAL",
    image: "https://content.jdmagicbox.com//v2/comp/coimbatore/x1/0422px422.x422.180326113611.y2x1/menu/agasthiyas-kathir-health-care-centre-gn-mills-coimbatore-chiropractic-doctors-cj6o4wu.jpg",
    link: "https://www.agasthiyaskathirhealthcare.com/",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Dashboard System",
    category: "UI/UX • SAAS",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Portfolio Brand",
    category: "PERSONAL • BRANDING",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "E-Commerce App",
    category: "REACT • NATIVE",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-1 md:row-span-1",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 bg-[#050505] overflow-hidden selection:bg-lime-400 selection:text-black font-sans"
    >
      {/* --- OPTIMIZED BACKGROUND LAYERS --- */}
      
      {/* 1. Static Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
           style={{ 
             backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
             backgroundSize: '100px 100px'
           }}
      ></div>

      {/* 2. Radial Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(132,204,22,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 md:mb-6">
               <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
               <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest">Selected Works 2024-25</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Digital <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Playground.</span>
            </h2>
          </div>
          
          {/* FIXED COMMENT ERROR HERE */}
          <p className="text-gray-400 max-w-xs md:max-w-sm text-left md:text-right font-mono text-xs md:text-sm leading-relaxed">
            {"// High-impact digital experiences."} <br className="hidden md:block"/>
            {"// Engineered for performance & aesthetics."}
          </p>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[300px] gap-4 md:gap-6">
          {projectList.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 transition-all duration-300 hover:border-lime-400/50 ${project.span}`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async" 
                />
              </div>

              {/* Glass Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-20">
                <div className="relative overflow-hidden rounded-xl bg-black/60 backdrop-blur-md border border-white/10 p-4 md:p-5 transition-all duration-300 hover:bg-black/80 group-hover:-translate-y-2">
                  
                  <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[9px] md:text-[10px] font-mono text-lime-400 uppercase tracking-widest mb-1">
                          {project.category || "PROJECT"}
                        </p>
                        <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-black transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Hover Noise Overlay (Subtle) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-500 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
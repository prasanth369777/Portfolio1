import React from "react";
import { BadgeCheck, ShieldCheck, Award, Terminal, PenTool, LayoutTemplate } from "lucide-react";

// Updated data with Lucide icons
const certifications = [
  { 
    year: "2024", 
    title: "UI/UX Design Master", 
    issuer: "Skill Dragon", 
    desc: "Advanced prototyping, user research, and design systems.", 
    icon: <PenTool className="w-5 h-5" /> 
  },
  { 
    year: "2024", 
    title: "No-Code Developer", 
    issuer: "Skill Dragon", 
    desc: "Building scalable applications without writing traditional code.", 
    icon: <LayoutTemplate className="w-5 h-5" /> 
  },
  { 
    year: "2024", 
    title: "Graphic Designing", 
    issuer: "Skill Dragon", 
    desc: "Mastery of Adobe Suite and visual communication principles.", 
    icon: <PenTool className="w-5 h-5" /> 
  },
  { 
    year: "2023", 
    title: "Google Digital Marketing", 
    issuer: "Google", 
    desc: "Certified in SEO, SEM, Analytics, and digital strategy.", 
    icon: <Award className="w-5 h-5" /> 
  },
  { 
    year: "2020", 
    title: "Ethical Hacking", 
    issuer: "LIVEWIRE", 
    desc: "Penetration testing and network security fundamentals.", 
    icon: <ShieldCheck className="w-5 h-5" /> 
  },
  { 
    year: "2020", 
    title: "CCNA Networking", 
    issuer: "LIVEWIRE", 
    desc: "Cisco Certified Network Associate routing & switching.", 
    icon: <Terminal className="w-5 h-5" /> 
  },
];

const CertificationRoadmap = () => {
  return (
    <section id="certification" className="relative py-24 bg-[#050505] overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Verified Skills</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Credential <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Vault</span>
          </h2>
        </div>

        {/* --- TIMELINE STRUCTURE --- */}
        <div className="relative">
          
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-8 md:gap-12">
            {certifications.map((cert, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* SPACER (Desktop) */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* CENTRAL NODE */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#050505] border-2 border-cyan-500 rounded-full z-20 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

                  {/* CARD CONTENT */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                    <div className={`
                      group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent 
                      hover:from-cyan-500/50 hover:to-purple-500/50 transition-all duration-500
                    `}>
                      <div className="relative h-full bg-[#0a0a0a] rounded-xl p-6 md:p-8 overflow-hidden">
                        
                        {/* Background Grid inside card */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                        
                        <div className="relative z-10 flex items-start gap-4">
                           {/* Icon Box */}
                           <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                             {cert.icon}
                           </div>

                           <div>
                             <div className="flex items-center gap-3 mb-1">
                               <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                 {cert.year}
                               </span>
                               <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                 {cert.issuer}
                               </span>
                             </div>
                             
                             <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                               {cert.title}
                             </h3>
                             <p className="text-sm text-gray-400 leading-relaxed">
                               {cert.desc}
                             </p>
                           </div>
                        </div>

                        {/* Decoration: Corner Accent */}
                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <BadgeCheck className="w-5 h-5 text-cyan-500" />
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationRoadmap;
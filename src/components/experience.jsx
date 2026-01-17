import React from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const timeline = [
  {
    year: "2024–Present",
    title: "UI/UX & Digital Marketing",
    institution: "CareerLadder, Coimbatore",
    desc: "Leading design initiatives, crafting user interfaces, and managing SEO/growth strategies.",
    type: "experience",
  },
  {
    year: "2024",
    title: "B.E. CSE (IoT & Cyber Security)",
    institution: "SNS College of Engineering",
    desc: "Graduated with distinction (8.89 CGPA). Focus on Blockchain & IoT Security.",
    type: "education",
  },
  {
    year: "2020–2024",
    title: "Tech Internships",
    institution: "Multiple Companies",
    desc: "Gained hands-on experience in Web Development, Java, and Python via Appin Technology.",
    type: "experience",
  },
  {
    year: "2020",
    title: "Diploma in Computer Science",
    institution: "CSI Polytechnic College, Salem",
    desc: "Specialized in core computing principles. Secured 72%.",
    type: "education",
  },
  {
    year: "2015",
    title: "Secondary School (SSLC)",
    institution: "Bharathi Vidyalaya Hr. Sec. School",
    desc: "Achieved 68% with a focus on foundational sciences.",
    type: "education",
  },
];

const TimelineSection = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#050505] overflow-hidden">
      
      {/* --- OPTIMIZATION 1: Lightweight Noise Texture --- */}
      {/* Replaced heavy SVG calculation with a static background image */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
           style={{ 
             backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
             backgroundSize: "100px 100px" 
           }}>
      </div>
      
      {/* --- OPTIMIZATION 2: Radial Gradients instead of Blur --- */}
      {/* Radial gradients perform much better than filter: blur() */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
             <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">Roadmap</span>
          </h2>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative">
          
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-purple-500 to-emerald-500 opacity-30 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isEdu = item.type === "education";
              const accentColor = isEdu ? "text-emerald-400 border-emerald-500/30" : "text-purple-400 border-purple-500/30";
              const bgColor = isEdu ? "bg-emerald-500/10" : "bg-purple-500/10";
              const Icon = isEdu ? GraduationCap : Briefcase;

              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* SPACER (Desktop only) */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* ICON NODE */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 group">
                    <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${bgColor}`}>
                        <Icon className={`w-5 h-5 ${isEdu ? "text-emerald-400" : "text-purple-400"}`} />
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                    <div className={`
                        group relative p-6 md:p-8 rounded-2xl 
                        bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10
                        transition-all duration-300 hover:-translate-y-1 hover:border-opacity-50
                        ${isEven ? "md:text-right" : "md:text-left"}
                        hover:${accentColor.split(' ')[1]}
                    `}>
                      
                      {/* OPTIMIZATION 3: Radial Gradient for Hover Glow (Faster than blur) */}
                      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none`}></div>

                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                         <span className={`px-3 py-1 rounded text-xs font-mono font-bold bg-white/5 ${accentColor.split(' ')[0]}`}>
                           {item.year}
                         </span>
                         <span className="h-px w-8 bg-white/10"></span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-sm text-gray-400 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        {!isEven && <MapPin className="w-3 h-3" />}
                        <span>{item.institution}</span>
                        {isEven && <MapPin className="w-3 h-3" />}
                      </div>

                      <p className="text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                        {item.desc}
                      </p>

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

export default TimelineSection;
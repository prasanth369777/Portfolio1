import React from "react";
import { motion } from "framer-motion";
import { Figma, Image, Monitor, PenTool, Globe, Cpu } from "lucide-react";

// Enhanced data with specific colors for the "Glow" effect
const skills = [
  { 
    name: "Figma", 
    level: 95, 
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    icon: <Figma className="w-6 h-6 text-white" /> 
  },
  { 
    name: "Photoshop", 
    level: 85, 
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    icon: <Image className="w-6 h-6 text-white" /> 
  },
  { 
    name: "Illustrator", 
    level: 80, 
    color: "from-orange-500 to-yellow-500",
    shadow: "shadow-orange-500/20",
    icon: <PenTool className="w-6 h-6 text-white" /> 
  },
  { 
    name: "Canva", 
    level: 90, 
    color: "from-teal-400 to-emerald-500",
    shadow: "shadow-teal-500/20",
    icon: <Image className="w-6 h-6 text-white" /> 
  },
  { 
    name: "AI & No-Code", 
    level: 75, 
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/20",
    icon: <Cpu className="w-6 h-6 text-white" /> 
  },
  { 
    name: "Digital Marketing", 
    level: 70, 
    color: "from-red-500 to-orange-500",
    shadow: "shadow-red-500/20",
    icon: <Globe className="w-6 h-6 text-white" /> 
  },
];

const SkillsRoadmap = () => {
  return (
    <section id="skills" className="relative py-24 bg-[#050505] overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Skill <span className=" bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-200">Highway</span>
          </h2>
        </div>

        {/* --- THE ROAD STRUCTURE --- */}
        <div className="relative">
          
          {/* 1. CENTRAL SPINE (The Road) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 rounded-full md:-translate-x-1/2 overflow-hidden">
            {/* Animated Beam flowing down the road */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-sm"
              animate={{ top: ["-30%", "130%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {skills.map((skill, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* SPACER for Desktop Layout */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* 2. THE NODE (Intersection) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#050505] border-2 border-cyan-500 rounded-full z-20 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

                  {/* 3. THE CURVED CONNECTOR (The "Off-Ramp") */}
                  {/* This draws the curved line from the center road to the card */}
                  <div className={`
                    hidden md:block absolute h-1/2 w-1/2 top-1/2 border-t-2 border-gray-800 -z-10
                    ${isEven 
                      ? "left-1/2 rounded-tr-[30px] border-r-2 border-gray-800 translate-x-0" 
                      : "right-1/2 rounded-tl-[30px] border-l-2 border-gray-800 -translate-x-0"
                    }
                  `}></div>

                  {/* 4. THE SKILL CARD */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.1 }}
                      className={`
                        group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 p-5
                        hover:border-white/20 transition-all duration-300 ${skill.shadow} hover:shadow-2xl
                      `}
                    >
                      {/* Hover Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-4">
                           {/* Icon Box */}
                           <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}>
                             {skill.icon}
                           </div>
                           <h3 className="text-xl font-bold text-white tracking-wide">{skill.name}</h3>
                        </div>
                        <span className="text-xl font-mono font-bold text-gray-500 group-hover:text-white transition-colors">{skill.level}%</span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative z-10">
                        {/* Animated Fill */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                      
                    </motion.div>
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

export default SkillsRoadmap;
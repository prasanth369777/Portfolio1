import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Download, Disc, Layers, Zap, PenTool } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- SUB-COMPONENT: ANIMATED COUNTER ---
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 90 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));
  
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  return <span ref={ref} className="flex"><motion.span>{rounded}</motion.span>{suffix}</span>;
};

// --- DATA ---
const expertise = [
  { 
    id: "01", 
    title: "Product Design", 
    desc: "End-to-end design systems and prototyping.", 
    icon: PenTool 
  },
  { 
    id: "02", 
    title: "Frontend Eng", 
    desc: "React ecosystems with performance focus.", 
    icon: Layers 
  },
  { 
    id: "03", 
    title: "Interaction", 
    desc: "Micro-animations and fluid user journeys.", 
    icon: Disc 
  },
  { 
    id: "04", 
    title: "Growth", 
    desc: "Technical SEO and conversion optimization.", 
    icon: Zap 
  },
];

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Shipped' },
  { value: '7', label: 'Certifications' },
];

const skills = ['React & AI', 'UIUX Designing', 'Digital Marketing', 'Figma', 'Meta', 'Python', 'System Design'];

// --- MAIN COMPONENT ---
const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[#080808] text-zinc-300 font-sans selection:bg-white selection:text-black overflow-hidden">
      
      {/* --- BACKGROUND GRID --- */}
      {/* Architectural grid lines instead of gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
           
           {/* LEFT: TITLE (Span 5) */}
           <div className="lg:col-span-5">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 block">
                {/* */}
                 {"// The Profile"}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
                Design <br/>
                <span className="italic text-zinc-600">Technologist.</span>
              </h1>
              
              <div className="flex flex-col gap-8">
                 {/* Bio */}
                 <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-400 max-w-md">
                    I bridge the gap between <span className="text-white border-b border-zinc-700 pb-0.5">aesthetic intuition</span> and <span className="text-white border-b border-zinc-700 pb-0.5">engineering rigor</span>. My work focuses on building scalable design systems and high-performance interfaces.
                 </p>
                 
                 {/* Download Button */}
                 <motion.button 
                    whileHover={{ x: 5 }}
                    className="group w-fit flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-white hover:text-zinc-400 transition-colors"
                 >
                    <span className="border-b border-white group-hover:border-zinc-400 pb-1">Download CV</span>
                    <Download className="w-4 h-4" />
                 </motion.button>
              </div>
           </div>

           {/* RIGHT: STATS & SKILLS (Span 7) */}
           <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 border-b border-white/10 pb-12">
                 {stats.map((stat, i) => (
                    <div key={i}>
                       <div className="text-4xl md:text-5xl font-light text-white mb-2">
                          <Counter value={stat.value} />
                       </div>
                       <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                          {stat.label}
                       </div>
                    </div>
                 ))}
              </div>

              {/* Skills Area */}
              <div className="pt-12">
                 <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Technical Arsenal</h3>
                 <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {skills.map((skill, i) => (
                       <div key={i} className="group flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-white transition-colors"></div>
                          <span className="text-lg font-light text-zinc-400 group-hover:text-white transition-colors cursor-default">
                             {skill}
                          </span>
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>

        {/* --- EXPERTISE GRID (Bottom Section) --- */}
        <div className="mt-24">
           <div className="flex items-end justify-between mb-8">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                {/* */}
                 {"// Core Competencies"}
              </span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
              {expertise.map((item, i) => (
                 <div 
                    key={i} 
                    className="group relative p-8 border-r border-b border-white/10 hover:bg-zinc-900/50 transition-colors duration-500"
                 >
                    {/* Hover Reveal Line */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                    <div className="flex justify-between items-start mb-12">
                       <span className="text-xs font-mono text-zinc-600">
                          {item.id}
                       </span>
                       <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                    </div>

                    <div>
                       <h3 className="text-xl font-medium text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                          {item.title}
                       </h3>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">
                          {item.desc}
                       </p>
                    </div>

                    {/* Corner Arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;
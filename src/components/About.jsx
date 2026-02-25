import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Download, Video, Layers, Zap, PenTool } from 'lucide-react';
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
    title: "UI/UX Design", 
    desc: "Creating clean, user-friendly interfaces in Figma.", 
    icon: PenTool 
  },
  { 
    id: "02", 
    title: "React & AI", 
    desc: "Building smart web apps with AI-assisted coding.", 
    icon: Layers 
  },
  { 
    id: "03", 
    title: "Video Editing", 
    desc: "High-quality visual storytelling and post-production.", 
    icon: Video 
  },
  { 
    id: "04", 
    title: "Digital Marketing", 
    desc: "Driving growth through SEO and social strategies.", 
    icon: Zap 
  },
];

const stats = [
  { value: '2+', label: 'Years Active' },
  { value: '7+', label: 'Total Projects' },
  { value: '20+', label: 'Happy Clients' },
];

const skills = ['UI/UX Designing', 'Digital Marketing', 'Video Editing', 'React using AI', 'Figma', 'Meta Ads', 'Technical SEO'];

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[#050505] text-zinc-300 font-sans selection:bg-white selection:text-black overflow-hidden">
      
      {/* --- UI MODIFICATION: ROTATING HIGHLIGHTS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#ffffff03] rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#ffffff02] rounded-full blur-[100px]"
        />
      </div>

      {/* --- UI MODIFICATION: MESH GRID BG --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,15,15,1)_0%,rgba(5,5,5,1)_100%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-12">
            
           {/* LEFT: TITLE */}
           <div className="lg:col-span-5">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 block">
                  {"// The Profile"}
              </span>
              
              {/* UI MODIFICATION: TEXT DROPS FOR HEADING */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              >
                Digital <br/>
                <span className="italic text-zinc-600">Expert.</span>
              </motion.h1>
              
              <div className="flex flex-col gap-8">
                 <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-400 max-w-md">
                    I help brands grow by mixing <span className="text-white">creative design</span> with <span className="text-white">smart technology</span>. I focus on making websites and content that are fast, beautiful, and get results.
                 </p>
                 
                 <motion.button 
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-fit flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-white hover:text-zinc-400 transition-colors bg-white/5 px-6 py-3 rounded-full backdrop-blur-md border border-white/10"
                 >
                    <span className="pb-0.5">Download CV</span>
                    <Download className="w-3.5 h-3.5" />
                 </motion.button>
              </div>
           </div>

           {/* RIGHT: STATS & SKILLS */}
           <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div className="grid grid-cols-3 gap-8 border-b border-white/5 pb-12">
                 {stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                       <div className="text-4xl md:text-6xl font-light text-white mb-2 tracking-tighter">
                          <Counter value={stat.value} />
                       </div>
                       <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] font-bold">
                          {stat.label}
                       </div>
                    </motion.div>
                 ))}
              </div>

              <div className="pt-12">
                 <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Expertise</h3>
                 <div className="flex flex-wrap gap-x-10 gap-y-6">
                    {skills.map((skill, i) => (
                       <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05, color: "#fff" }}
                        className="group flex items-center gap-3"
                       >
                          <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white group-hover:shadow-[0_0_8px_#fff] transition-all"></div>
                          <span className="text-base font-light text-zinc-500 transition-colors cursor-default">
                             {skill}
                          </span>
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* --- EXPERTISE GRID --- */}
        <div className="mt-32">
           <div className="flex items-end justify-between mb-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  {"// Services"}
              </span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5 backdrop-blur-sm">
              {expertise.map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-10 border-r border-b border-white/5 hover:bg-white/[0.02] transition-all duration-700"
                 >
                    {/* Animated Border Reveal */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>

                    <div className="flex justify-between items-start mb-16">
                       <span className="text-[10px] font-mono text-zinc-600 tracking-widest">
                          {item.id}
                       </span>
                       <div className="p-3 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                          <item.icon className="w-4 h-4" />
                       </div>
                    </div>

                    <div>
                       <h3 className="text-xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                          {item.title}
                       </h3>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                          {item.desc}
                       </p>
                    </div>

                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-8px] transition-all duration-500">
                       <ArrowUpRight className="w-5 h-5 text-zinc-400" />
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;
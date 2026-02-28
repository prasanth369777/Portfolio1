import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Download, Video, Layers, Zap, PenTool } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import heroPortrait from '../assets/hero-person.webp';

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
  { id: "01", title: "UI/UX Design", desc: "Architecting high-fidelity, user-centric interfaces in Figma.", icon: PenTool },
  { id: "02", title: "React & AI", desc: "Engineering scalable web applications with AI-driven workflows.", icon: Layers },
  { id: "03", title: "Video Editing", desc: "Crafting immersive narratives through cinematic storytelling.", icon: Video },
  { id: "04", title: "Digital Marketing", desc: "Developing performance-driven growth and brand positioning.", icon: Zap },
];

const stats = [
  { value: '02+', label: 'Years Active' },
  { value: '10+', label: 'Total Projects' },
  { value: '25+', label: 'Happy Clients' },
];

const skills = ['Graphical Designer', 'UI Systems', 'User Research', 'Figma', 'React', 'Digital Marketer'];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the overlay image
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 5]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-40 bg-white text-[#1a1a1a] font-sans selection:bg-black selection:text-white overflow-hidden"
    >
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.3]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
           {/* --- LEFT: PORTRAIT OVERLAY (REALISTIC INTERACTION) --- */}
           <div className="lg:col-span-5 relative group">
              <motion.div 
                style={{ y, rotate }}
                className="relative z-20 w-full max-w-[450px] aspect-[3/4] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-sm border border-zinc-100 bg-zinc-50"
              >
                <img
                  src={heroPortrait}
                  alt="Prasanth D"
                  className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                {/* Glassmorphism Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/70 border border-white/20 p-6 shadow-xl">
                   <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">Web Designer</p>
                        <h4 className="text-sm font-bold text-black uppercase">Prasanth D.</h4>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                         <Zap className="w-4 h-4 text-white fill-current" />
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Decorative Background Elements behind image */}
              <div className="absolute -top-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-blue-500/20" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-r-2 border-b-2 border-emerald-500/20" />
           </div>

           {/* --- RIGHT: CONTENT --- */}
           <div className="lg:col-span-7 pt-10">
              <span className="text-[11px] font-mono text-blue-600 font-black uppercase tracking-[0.5em] mb-10 block">
                  {"// STRATEGIC PROFILE"}
              </span>
              
              <h2 className="text-6xl md:text-9xl font-serif text-black leading-[0.8] tracking-tighter mb-12">
                Design <br/>
                <span className="italic bg-gradient-to-r from-blue-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">Expertise.</span>
              </h2>

              <p className="text-xl md:text-2xl font-medium leading-[1.6] text-[#333] max-w-2xl mb-12">
                I help brands grow by mixing <span className="text-black font-bold underline decoration-blue-500/20 underline-offset-8">creative design</span> with <span className="text-black font-bold">smart technology</span>. Focusing on scalable design systems and high-performance interfaces.
              </p>

              {/* STATS BAR */}
              <div className="grid grid-cols-3 gap-8 border-y-2 border-zinc-100 py-12 mb-12">
                 {stats.map((stat, i) => (
                    <div key={i}>
                       <div className="text-5xl md:text-7xl font-light text-black flex items-baseline">
                          <Counter value={stat.value} />
                          <span className="text-blue-500 font-mono text-3xl">.</span>
                       </div>
                       <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">{stat.label}</p>
                    </div>
                 ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-16">
                 {skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 border border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:border-blue-500 hover:text-blue-600 transition-all">
                       {skill}
                    </span>
                 ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.4em] text-white bg-black px-12 py-6 rounded-sm shadow-2xl"
              >
                Request Access <Download className="w-4 h-4" />
              </motion.button>
           </div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-2 border-zinc-100">
           {expertise.map((item, i) => (
              <div key={i} className="group p-12 border-r border-b border-zinc-100 hover:bg-zinc-50 transition-all duration-500">
                 <div className="flex justify-between items-start mb-16">
                    <span className="text-[10px] font-mono text-zinc-300 font-bold">{item.id}</span>
                    <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                 <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                 <ArrowUpRight className="mt-8 w-5 h-5 opacity-0 group-hover:opacity-100 text-blue-500 transition-all" />
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default About;
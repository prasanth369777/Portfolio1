import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Check, Github, Linkedin, Twitter, Globe, Clock } from 'lucide-react';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // Live Clock Logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        timeZone: 'Asia/Kolkata', // Set to IST based on context
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("mrprasanthh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-[#050505] text-zinc-400 font-sans border-t border-white/5 pt-20 pb-6">
      
      {/* --- BACKGROUND GRID --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- TOP SECTION: MAIN CTA --- */}
        <div className="mb-24">
           <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">Available for work</span>
           </div>

           {/* Giant Email Interaction */}
           <div className="group relative inline-block cursor-pointer" onClick={handleCopy}>
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter group-hover:text-zinc-500 transition-colors duration-300">
                 LET'S TALK
              </h2>
              
              {/* Hover Floating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                 <div className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 font-mono text-sm font-bold shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "COPIED TO CLIPBOARD" : "CLICK TO COPY EMAIL"}</span>
                 </div>
              </div>
           </div>
        </div>

        {/* --- MIDDLE SECTION: COLUMNS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-white/10 pt-12 pb-24">
           
           {/* Column 1: ID */}
           <div>
              <h4 className="text-white font-bold mb-6">PRASANTH D.</h4>
              <p className="text-sm leading-relaxed max-w-xs">
                 Senior UI/UX Designer & Frontend Developer focused on building brands and digital experiences.
              </p>
           </div>

           {/* Column 2: NAVIGATION */}
           <div>
              <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">Directory</h4>
              <ul className="space-y-3">
                 {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                       <a href={`#${item.toLowerCase()}`} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                          {item}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 3: SOCIALS */}
           <div>
              <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">Connect</h4>
              <ul className="space-y-3">
                 {[
                    { name: 'LinkedIn', icon: Linkedin },
                    { name: 'GitHub', icon: Github },
                    { name: 'Twitter', icon: Twitter }
                 ].map((item) => (
                    <li key={item.name}>
                       <a href="#" className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 4: TECHNICAL */}
           <div>
              <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                 {['React + AI', 'UIUX Designer', 'Digital Marketing', 'Figma', 'Ethical Hacking'].map((tech) => (
                    <span key={tech} className="px-2 py-1 border border-white/10 rounded text-xs font-mono hover:bg-white/5 cursor-default transition-colors">
                       {tech}
                    </span>
                 ))}
              </div>
           </div>

        </div>

        {/* --- BOTTOM SECTION: SYSTEM STATUS BAR --- */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <Globe className="w-3 h-3" />
                 <span>Coimbatore, IN</span>
              </div>
              <div className="flex items-center gap-2">
                 <Clock className="w-3 h-3" />
                 <span>{time} IST</span>
              </div>
           </div>

           <div className="flex items-center gap-6">
              <span>© 2025 Prasanth.D</span>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">
                 [ Back to Top ]
              </button>
           </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
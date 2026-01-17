import React from 'react';
import { Code, Palette, Zap, Users, ArrowUpRight, Terminal, Cpu, Globe } from 'lucide-react';

const About = () => {
  // Highlight cards data
  const highlights = [
    {
      icon: Code,
      title: 'UI/UX Design',
      desc: 'Crafting intuitive interfaces that delight users.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      desc: 'Visual storytelling through pixel-perfect graphics.',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    },
    {
      icon: Zap,
      title: 'Web Dev',
      desc: 'High-performance, scalable web solutions.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      icon: Users,
      title: 'Marketing',
      desc: 'Data-driven strategies for brand growth.',
      color: 'text-pink-400',
      bg: 'bg-pink-400/10'
    },
  ];

  // Stats data
  const stats = [
    { value: '2', label: 'Years Exp.' },
    { value: '6+', label: 'Projects' },
    { value: '3', label: 'Internships' },
    { value: '7', label: 'Certs' },
  ];

  const skills = [
    'React ', 'UIUX', 'Figma', 'Python', 'Ethical Hacking', 'DigitalMarketing', 'No-Code'
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 bg-[#030712] overflow-hidden text-gray-300">
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{
            backgroundImage: `linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(to right, #1f2937 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3">Who I Am</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Prasanth.</span>
            </h1>
        </div>

        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: BIO & STATS (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            {/* Bio Text */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                I am <strong className="text-white">Prasanth D</strong>, a Computer Science Engineer driven by a passion for building digital products that look good and work even better.
              </p>
              <p>
                My journey sits at the intersection of <span className="text-cyan-300">Design</span> and <span className="text-indigo-300">Engineering</span>. Whether I'm designing a sleek UI in Figma, coding a complex React app, or optimizing SEO strategies, I bring a holistic approach to every project.
              </p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl backdrop-blur-sm hover:bg-gray-800/40 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div>
              <button className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-colors">
                Download Resume
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGHLIGHT CARDS (Span 7) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 bg-gray-900/30 border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Hover Gradient Blob */}
                  <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${item.bg}`}></div>

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
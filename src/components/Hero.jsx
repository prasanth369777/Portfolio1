import React from 'react';
import heroPortrait from '../assets/hero-person.webp';

const HeroSection = () => {
  const skills = ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Figma'];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-slate-950 overflow-hidden font-sans selection:bg-cyan-500 selection:text-white py-20 lg:py-0"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* 1. Dotted Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}
      ></div>

      {/* 2. Glowing Aurora Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md animate-fadeIn cursor-default hover:border-cyan-500/50 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 text-sm font-medium tracking-wide">Available for projects</span>
          </div>

          {/* Typography Block */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white animate-slideUp">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Prasanth.</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 animate-slideUp delay-100">
              Creative Designer & <br className="hidden sm:block" />
              <span className="font-semibold text-white">UX Developer</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed animate-slideUp delay-200">
              I craft scalable digital products and immersive web experiences that 
              bridge the gap between <strong className="text-gray-100">art</strong> and <strong className="text-gray-100">engineering</strong>.
            </p>
          </div>

          {/* Call to Action Area */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slideUp delay-300">
            <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-white border border-gray-700 hover:bg-white/5 hover:border-gray-500 transition-all duration-300">
              Contact Me
            </button>
          </div>
          
          {/* Tech Stack Indicators */}
          <div className="pt-6 animate-slideUp delay-400">
             <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">Tech Stack</p>
             <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {skills.map((skill, i) => (
                   <span key={i} className="px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-900 rounded hover:border-cyan-500/50 transition-colors cursor-default">
                     {skill}
                   </span>
                ))}
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUALS */}
        <div className="relative flex justify-center lg:justify-end animate-fadeIn delay-500">
          
          {/* Abstract Geometric Shapes Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-gray-700 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          {/* Main Portrait Card */}
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Image Container */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
               <img
                  src={heroPortrait}
                  alt="Prasanth"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
               />
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
               
               {/* Bottom Info inside Image */}
               <div className="absolute bottom-6 left-6 text-left">
                 <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">Lead Designer</p>
                 <p className="text-white text-xl font-bold">Based in India</p>
               </div>
            </div>

            {/* Floating Glass Cards */}
            <div className="absolute -left-6 bottom-10 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl animate-float hidden sm:block">
               <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">6+ Projects Done</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ANIMATION STYLES --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default HeroSection;
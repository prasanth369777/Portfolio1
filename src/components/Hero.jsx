import React from 'react';
import heroPortrait from '../assets/hero-person.webp';

const HeroSection = () => {
  const skills = ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Figma'];

  return (
    <section
      id="home"
      // CHANGE: 'bg-black' for pure black background (removed gray/slate tones)
      className="relative w-full min-h-[800px] flex items-center bg-black overflow-hidden font-sans selection:bg-cyan-500 selection:text-white py-16 lg:py-24"
    >
      {/* --- OPTIMIZED BACKGROUND --- */}
      
      {/* REMOVED: Dotted Grid (The "gray" pattern is gone) */}

      {/* 2. Radial Gradients (Fixed - No Pulse/Beat) */}
      {/* CHANGE: Removed 'animate-pulse' to stop the beating effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-sm animate-fadeIn cursor-default hover:border-cyan-500/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-100 text-xs font-semibold tracking-wide uppercase">Open to Opportunities</span>
          </div>

          {/* Typography Block */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-white animate-slideUp leading-[1.1]">
              Building the <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Digital Future.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed animate-slideUp delay-100 font-light">
              I'm <span className="text-gray-100 font-medium">Prasanth</span>, a passionate Designer & Developer. 
              I specialize in building scalable, performance-optimized web applications and crafting 
              intuitive user interfaces that drive engagement. Let's turn your complex ideas into elegant realities.
            </p>
          </div>

          {/* Call to Action Area */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-slideUp delay-200">
            <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-white text-gray-900 rounded-lg font-bold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all hover:-translate-y-0.5 overflow-hidden will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                Explore Work 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </button>
            
            <button className="px-8 py-4 rounded-lg font-semibold text-gray-300 border border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all">
              Let's Talk
            </button>
          </div>

          {/* Tech Stack Indicators */}
          <div className="pt-8 w-full animate-slideUp delay-300">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="h-px w-20 bg-gray-800 hidden lg:block"></span>
                <div className="flex flex-wrap justify-center gap-3">
                   {skills.map((skill, i) => (
                      <span key={i} className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition-colors cursor-default">
                        {skill} {i !== skills.length - 1 && <span className="text-gray-800 mx-2">•</span>}
                      </span>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUALS */}
        <div className="relative flex justify-center lg:justify-end animate-fadeIn delay-300 mt-12 lg:mt-0">
          
          {/* Abstract Geometric Shapes Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-800/50 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-gray-800 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>

          {/* Main Portrait Card */}
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl opacity-30 group-hover:opacity-70 transition duration-1000 blur-md"></div>
            
            {/* Image Container */}
            <div className="relative w-72 h-[450px] sm:w-80 sm:h-[500px] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
               <img
                  src={heroPortrait}
                  alt="Prasanth"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  loading="eager" 
               />
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 pointer-events-none"></div>
               
               {/* Bottom Info inside Image */}
               <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">Lead Designer</p>
                 <p className="text-white text-xl font-bold">2 Years Exp.</p>
               </div>
            </div>

            {/* Floating Glass Card 1 */}
            <div className="absolute -left-12 bottom-20 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 p-4 rounded-xl shadow-xl animate-float hidden sm:block will-change-transform">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Projects Completed</div>
                  <div className="text-lg font-bold text-white">5+</div>
                </div>
              </div>
            </div>

             {/* Floating Glass Card 2 */}
            <div className="absolute -right-8 top-12 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 p-4 rounded-xl shadow-xl animate-float animation-delay-2000 hidden sm:block will-change-transform">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                   <div className="text-xs text-gray-400">Satisfaction</div>
                   <div className="text-lg font-bold text-white">100%</div>
                </div>
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
          animation: float 5s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2.5s;
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
      `}</style>
    </section>
  );
};

export default HeroSection;
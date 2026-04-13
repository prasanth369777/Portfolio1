import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

// --- SUB-COMPONENT: REFINED PREMIUM LOGO (SVG) ---
const ArchitecturalLogo = ({ isScrolled }) => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full p-1"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base Frame - Rounded for premium feel */}
    <rect 
      width="100" 
      height="100" 
      rx="24"
      fill={isScrolled ? "#f4f4f5" : "transparent"} 
      className="transition-colors duration-700"
    />
    
    {/* Geometric 'P' Construction - Thinner, elegant stroke */}
    <path 
      d="M35 25V75M35 25H60C68 25 75 32 75 40C75 48 68 55 60 55H35" 
      stroke="#18181b" 
      strokeWidth="4" 
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-colors duration-700"
    />
    
    {/* Geometric 'D' Accent Node */}
    <rect 
      x="52" y="45" width="20" height="26" 
      rx="6"
      stroke="#a1a1aa" 
      strokeWidth="2"
      className="transition-colors duration-700"
    />

    {/* Precision Point (Indigo) */}
    <circle 
      cx="35" cy="25" r="4" 
      fill="#6366f1" 
    />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Stack', href: '#skills' },
    { name: 'Timeline', href: '#experience' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isScrolled ? 'pt-6' : 'pt-8 lg:pt-10'
        }`}
      >
        {/* --- PREMIUM DYNAMIC NAVIGATION CONTAINER --- */}
        <div
          className={`
            relative flex items-center justify-between
            transition-all duration-700 ease-[0.16,1,0.3,1]
            ${isScrolled 
              ? 'w-[92%] md:w-[750px] lg:w-[850px] h-16 bg-white/70 backdrop-blur-2xl border border-zinc-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-4 md:px-6' 
              : 'w-[90%] max-w-[1600px] h-20 bg-transparent border-transparent px-0 rounded-none'
            }
          `}
        >
          
          {/* --- LOGO AREA --- */}
          <a 
            href="#home" 
            className="flex items-center gap-3 transition-all duration-500 group/logo z-10"
          >
            <div className={`
              relative w-10 h-10 transition-all duration-500 flex items-center justify-center
            `}>
               <ArchitecturalLogo isScrolled={isScrolled} />
            </div>
            
            <div className={`flex flex-col transition-all duration-500 overflow-hidden ${isScrolled ? 'w-0 opacity-0' : 'w-32 opacity-100'}`}>
              <span className="font-semibold text-zinc-900 tracking-[0.15em] text-xs uppercase">
                Prasanth
              </span>
              <span className="font-mono text-zinc-400 tracking-[0.1em] text-[9px] uppercase mt-0.5">
                Architect // 2026
              </span>
            </div>
          </a>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
             <div className={`
                flex items-center gap-2 p-1.5 transition-all duration-700 rounded-full
                ${isScrolled ? 'bg-transparent' : 'bg-white/40 backdrop-blur-md border border-zinc-200/50 shadow-sm'}
             `}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                  </a>
                ))}
             </div>
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-4 z-10">
             
             {/* Status Pill */}
             <div 
               className={`
                 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200/80 bg-white/50 backdrop-blur-md text-[9px] font-mono font-semibold text-zinc-600 uppercase tracking-widest transition-all duration-700 ease-[0.16,1,0.3,1] origin-right
                 ${isScrolled ? 'opacity-0 w-0 px-0 border-none overflow-hidden scale-75' : 'opacity-100 w-auto scale-100 shadow-sm'}
               `}
             >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="whitespace-nowrap">Active 2026</span>
             </div>

             {/* Brief Button */}
             <a 
               href="#contact"
               className={`
                 group relative flex items-center justify-center bg-zinc-900 text-white font-semibold uppercase text-[10px] tracking-[0.2em] transition-all duration-500 rounded-full overflow-hidden hover:shadow-[0_8px_20px_rgb(24,24,27,0.2)] hover:scale-105
                 ${isScrolled ? 'h-10 w-10 px-0' : 'h-10 w-32 px-5'}
               `}
             >
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className={`whitespace-nowrap transition-all duration-500 ${isScrolled ? 'w-0 opacity-0 absolute' : 'w-auto opacity-100 ml-2'}`}>
                  Brief
                </span>
             </a>

             {/* Mobile Toggle */}
             <button
                className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE OVERLAY (Glassmorphism) --- */}
      <div 
        className={`
          fixed inset-0 z-40 bg-white/80 backdrop-blur-2xl transition-all duration-500 ease-[0.22,1,0.36,1] md:hidden flex flex-col justify-center items-center
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      >
          {/* Subtle Ambient Glows for Mobile Menu */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

          <div 
            className={`
              w-full max-w-sm px-8 flex flex-col gap-6 transform transition-transform duration-500 ease-[0.22,1,0.36,1]
              ${isMobileMenuOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}
            `}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 mb-8">
               {navItems.map((item, i) => (
                  <a
                    key={item.name}
                    href={item.href}
                    style={{ transitionDelay: `${i * 50}ms` }}
                    className={`text-3xl font-serif text-zinc-900 hover:text-indigo-600 transition-all flex items-center justify-between group py-2
                      ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                     <span>{item.name}</span>
                     <ArrowUpRight className="w-6 h-6 text-zinc-300 group-hover:text-indigo-600 transition-colors" />
                  </a>
               ))}
            </div>
            
            <div className="h-px w-full bg-zinc-200/50 mb-4"></div>
            
            <a
              href="#contact"
              className={`
                w-full py-5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white bg-zinc-900 flex justify-center items-center gap-3 hover:bg-indigo-600 transition-all shadow-lg
                ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: '300ms' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inquiry <Zap className="w-4 h-4 fill-current" />
            </a>
          </div>
      </div>
    </>
  );
};

export default Header;
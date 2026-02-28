import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

// --- SUB-COMPONENT: ORIGINAL ARCHITECTURAL LOGO (SVG) ---
const ArchitecturalLogo = ({ isScrolled }) => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full p-1"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base Frame */}
    <rect 
      width="100" 
      height="100" 
      fill={isScrolled ? "black" : "transparent"} 
      className="transition-colors duration-500"
    />
    
    {/* Geometric 'P' Construction */}
    <path 
      d="M35 25V75M35 25H60C68 25 75 32 75 40C75 48 68 55 60 55H35" 
      stroke={isScrolled ? "white" : "black"} 
      strokeWidth="10" 
      strokeLinecap="square"
      className="transition-colors duration-500"
    />
    
    {/* Geometric 'D' Accent Node */}
    <rect 
      x="50" y="45" width="25" height="30" 
      stroke={isScrolled ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"} 
      strokeWidth="4"
      className="transition-colors duration-500"
    />

    {/* Precision Point (Azure Blue) */}
    <circle 
      cx="35" cy="25" r="5" 
      fill="#2563eb" 
    />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[0.22,1,0.36,1] ${
          isScrolled ? 'pt-4' : 'pt-8'
        }`}
      >
        {/* --- ARCHITECTURAL NAVIGATION CONTAINER --- */}
        <div
          className={`
            relative flex items-center justify-between
            transition-all duration-500 ease-[0.22,1,0.36,1]
            backdrop-blur-xl border-2
            ${isScrolled 
              ? 'w-[92%] md:w-[650px] h-14 rounded-none bg-white border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] px-4' 
              : 'w-[95%] md:w-[1200px] h-20 rounded-none bg-transparent border-transparent px-0'
            }
          `}
        >
          
          {/* --- LOGO AREA --- */}
          <a 
            href="#home" 
            className="flex items-center gap-3 transition-all duration-500 group/logo"
          >
            <div className={`
              relative w-10 h-10 transition-all duration-500 border-2
              ${isScrolled ? 'border-black' : 'border-black/20'}
            `}>
               <ArchitecturalLogo isScrolled={isScrolled} />
            </div>
            
            <div className={`flex flex-col transition-all duration-500 ${isScrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
              <span className="font-black text-black tracking-[0.3em] text-[10px] uppercase">
                Prasanth
              </span>
              <span className="font-mono text-zinc-400 tracking-[0.1em] text-[8px] uppercase">
                Architect // 2026
              </span>
            </div>
          </a>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
             <div className={`
                flex items-center gap-1 p-1 transition-all duration-500
                ${isScrolled ? 'bg-transparent' : 'bg-white/50 border border-zinc-200 shadow-sm'}
             `}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-5 py-1.5 text-[11px] font-black uppercase tracking-widest text-zinc-500 hover:text-black transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-1/2"></span>
                  </a>
                ))}
             </div>
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-4">
             {/* Status Pill */}
             <div 
               className={`
                 hidden md:flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-white text-[9px] font-mono font-black text-black uppercase tracking-widest transition-all duration-500
                 ${isScrolled ? 'opacity-0 w-0 px-0 overflow-hidden' : 'opacity-100 w-auto shadow-[4px_4px_0px_rgba(37,99,235,1)]'}
               `}
             >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>Active 2026</span>
             </div>

             {/* Brief Button */}
             <a 
               href="#contact"
               className={`
                 group relative flex items-center justify-center bg-black text-white font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:bg-blue-600
                 ${isScrolled ? 'h-10 w-10 px-0' : 'h-10 w-36 px-5'}
               `}
             >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className={`whitespace-nowrap transition-all duration-300 ${isScrolled ? 'w-0 opacity-0 absolute' : 'w-auto opacity-100 ml-2'}`}>
                  Brief
                </span>
             </a>

             {/* Mobile Toggle */}
             <button
                className="md:hidden p-2 text-black hover:bg-zinc-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE OVERLAY --- */}
      <div 
        className={`
          fixed inset-0 z-40 bg-white/90 backdrop-blur-xl transition-opacity duration-300 md:hidden
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      >
          <div 
            className={`
              absolute top-24 left-4 right-4 bg-white border-2 border-black p-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform transition-transform duration-300
              ${isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}
            `}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
               {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-4 text-sm font-black uppercase tracking-widest text-zinc-500 hover:text-black hover:bg-zinc-50 transition-all flex justify-between items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                     <span>{item.name}</span>
                     <ArrowUpRight className="w-5 h-5 text-blue-600" />
                  </a>
               ))}
               <div className="h-[2px] bg-black/5 my-2"></div>
               <a
                 href="#contact"
                 className="p-5 text-xs font-black uppercase tracking-[0.3em] text-white bg-black flex justify-center items-center gap-3 hover:bg-blue-600 transition-colors"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                  Inquiry <Zap className="w-4 h-4 fill-current" />
               </a>
            </div>
          </div>
      </div>
    </>
  );
};

export default Header;
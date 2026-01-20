import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import LogoImg from '../assets/pdlogo-02-01.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a slightly higher threshold to prevent jitter at the very top
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
        {/* --- DYNAMIC ISLAND CONTAINER --- */}
        <div
          className={`
            relative flex items-center justify-between
            transition-all duration-500 ease-[0.22,1,0.36,1]
            backdrop-blur-xl backdrop-saturate-150 border
            ${isScrolled 
              ? 'w-[90%] md:w-[600px] h-14 rounded-full bg-[#080808]/80 border-white/10 shadow-2xl px-2' 
              : 'w-[95%] md:w-[1200px] h-20 rounded-2xl bg-transparent border-transparent px-0'
            }
          `}
        >
          
          {/* --- LOGO AREA --- */}
          <a 
            href="#home" 
            className={`
              flex items-center gap-3 transition-all duration-500
              ${isScrolled ? 'pl-2' : 'pl-4'}
            `}
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
               <img src={LogoImg} alt="Logo" className="w-full h-full object-cover scale-110" />
            </div>
            {/* Hide text logo on scroll for cleaner look */}
            <span 
              className={`
                font-bold text-white tracking-tight transition-all duration-500 overflow-hidden whitespace-nowrap
                ${isScrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'}
              `}
            >
              PRASANTH.D
            </span>
          </a>

          {/* --- DESKTOP NAV --- */}
          {/* On scroll, this centers itself. At top, it sits naturally. */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
             <div className={`
                flex items-center gap-1 p-1 rounded-full transition-all duration-500
                ${isScrolled ? 'bg-transparent border-transparent' : 'bg-white/5 border border-white/5 backdrop-blur-sm'}
             `}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/10 relative group"
                  >
                    {item.name}
                    {/* Active Dot indicator on hover */}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </a>
                ))}
             </div>
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className={`flex items-center gap-2 ${isScrolled ? 'pr-2' : 'pr-0'}`}>
             
             {/* Status Pill (Only visible when NOT scrolled to reduce noise) */}
             <div 
               className={`
                 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wide transition-all duration-500
                 ${isScrolled ? 'opacity-0 w-0 px-0 overflow-hidden' : 'opacity-100 w-auto'}
               `}
             >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Work</span>
             </div>

             {/* Main CTA */}
             <a 
               href="#contact"
               className={`
                 group relative flex items-center gap-2 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:w-32 hover:bg-zinc-200
                 ${isScrolled ? 'h-10 w-10 px-0 justify-center' : 'h-10 w-32 px-5 justify-center'}
               `}
             >
                {/* Icon is always visible */}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                
                {/* Text hides on scroll */}
                <span 
                  className={`
                    whitespace-nowrap transition-all duration-300
                    ${isScrolled ? 'w-0 opacity-0 absolute' : 'w-auto opacity-100'}
                  `}
                >
                  Let's Talk
                </span>
             </a>

             {/* Mobile Menu Button */}
             <button
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>

          </div>

        </div>
      </header>

      {/* --- MOBILE OVERLAY --- */}
      {/* A distinct, modal-like overlay for mobile */}
      <div 
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-xl transition-opacity duration-300 md:hidden
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      >
         <div 
           className={`
             absolute top-24 left-4 right-4 bg-[#111] border border-white/10 rounded-3xl p-2 shadow-2xl transform transition-transform duration-300
             ${isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}
           `}
           onClick={e => e.stopPropagation()}
         >
            <div className="flex flex-col">
               {navItems.map((item, i) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-4 text-lg font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all flex justify-between items-center group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                     <span>{item.name}</span>
                     <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
               ))}
               <div className="h-px bg-white/5 my-2 mx-2"></div>
               <a
                 href="#contact"
                 className="p-4 text-lg font-bold text-black bg-white rounded-2xl flex justify-center items-center gap-2 hover:bg-zinc-200 transition-colors"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                  Start Project <Zap className="w-4 h-4 fill-current" />
               </a>
            </div>
         </div>
      </div>
    </>
  );
};

export default Header;
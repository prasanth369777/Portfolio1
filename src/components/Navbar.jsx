import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LogoImg from '../assets/pdlogo-02-01.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother scroll performance
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Stack', href: '#skillssection' },
    { name: 'Certs', href: '#certification' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-[padding] duration-300 ease-out will-change-transform ${
        isScrolled ? 'pt-2' : 'pt-6'
      }`}
    >
      {/* --- FLOATING NAV CAPSULE --- */}
      <div 
        className={`
          relative w-full max-w-7xl mx-auto rounded-full 
          transition-all duration-300 border
          ${isScrolled 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-2xl border-white/10 py-2 px-6' 
            : 'bg-transparent border-transparent py-3 px-4'
          }
        `}
      >
        <div className="flex justify-between items-center">
          
          {/* --- LOGO --- */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 overflow-hidden group-hover:border-cyan-500/50 transition-colors">
               <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img
                src={LogoImg}
                alt="PD Logo"
                className="w-full h-full object-cover scale-125"
                loading="eager"
              />
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block">
              PRASANTH<span className="text-cyan-400">.D</span>
            </span>
          </a>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full group"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Pill Hover Effect */}
                <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
            ))}
          </nav>

          {/* --- CTA BUTTON --- */}
          <div className="hidden lg:block">
             <a 
               href="#contact" 
               className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full overflow-hidden hover:bg-cyan-400 transition-colors"
             >
               <span>Let's Talk</span>
               <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
             </a>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <div
        className={`
          absolute top-full left-4 right-4 mt-2 p-4 rounded-3xl 
          bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 shadow-2xl
          transform transition-all duration-300 origin-top
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors flex justify-between items-center group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
          
          <div className="h-px bg-white/10 my-2"></div>
          
          <a
            href="#contact"
            className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

    </header>
  );
};

export default Header;
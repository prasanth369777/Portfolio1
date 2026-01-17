import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoImg from '../assets/pdlogo-02-01.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Skills', href: '#skillssection' },
    { name: 'Certifications', href: '#certification' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-300/80 backdrop-blur-xl border-b border-gray-400 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <img
              src={LogoImg}
              alt="PD Logo"
              className="w-20 sm:w-24 md:w-28 h-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 sm:space-x-3 md:space-x-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-2 sm:px-3 md:px-4 py-1 text-gray-700 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100 py-3 bg-gray-300/95 backdrop-blur-md rounded-xl mt-2'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 px-2 sm:px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-gray-900 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <a
              href="#contact"
              className="block mt-2 py-2 px-4 text-white text-center bg-gradient-to-r from-blue-500 to-purple-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

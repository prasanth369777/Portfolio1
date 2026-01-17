import React from 'react';
import { Heart, ArrowUp, Mail, Phone, ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';
import LogoImg from '../assets/pdlogo-02-01.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Explore': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Services', href: '#services' },
    ],
    'Services': [
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Brand Identity', href: '#services' },
      { name: 'SEO Strategy', href: '#services' },
    ],
    'Socials': [
      { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-4 h-4"/> },
      { name: 'Instagram', href: '#', icon: <Instagram className="w-4 h-4"/> },
      { name: 'Twitter', href: '#', icon: <Twitter className="w-4 h-4"/> },
    ],
  };

  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10 overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* --- OPTIMIZED BACKGROUND TEXTURES --- */}
      
      {/* 1. Static Noise Grain (Replaces heavy SVG filter) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
           style={{ 
             backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
             backgroundSize: "100px 100px" 
           }}>
      </div>

      {/* 2. Radial Gradients (Replaces heavy blur-[120px]) */}
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      {/* CHANGE: Increased max-w to 1600px */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        
        {/* --- MAIN GRID --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                 {/* Optimized Glow */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(6,182,212,0.4)_0%,transparent_70%)] rounded-full"></div>
                 <img
                    src={LogoImg}
                    alt="PD Logo"
                    className="relative w-16 h-auto object-contain brightness-200"
                    loading="lazy"
                  />
              </div>
              <span className="text-xl font-bold tracking-tighter">PRASANTH.D</span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Designing the future, one pixel at a time. Creating digital experiences that blend aesthetics with performance.
            </p>

            <div className="flex flex-col gap-3">
               <a href="mailto:mrprasanthh@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group">
                 <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                   <Mail className="w-4 h-4" />
                 </div>
                 <span className="text-sm">mrprasanthh@gmail.com</span>
               </a>
               <a href="tel:+918531985733" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group">
                 <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                   <Phone className="w-4 h-4" />
                 </div>
                 <span className="text-sm">+91 8531985733</span>
               </a>
            </div>
          </div>

          {/* LINKS COLUMNS (Span 2 each) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-6">Explore</h3>
            <ul className="space-y-4">
              {footerLinks['Explore'].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks['Services'].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER (Span 4) */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Join the Signal</h3>
              <p className="text-gray-400 text-sm mb-6">Get the latest design trends and updates sent to your inbox.</p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="enter_your_email"
                  className="w-full px-5 py-4 bg-[#0a0a0a] border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono"
                />
                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm font-mono">
            © 2025 Prasanth.D // Engineered in India
          </p>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse mx-1" />
            <span>and React</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {footerLinks['Socials'].map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full border border-transparent hover:border-white/10"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* --- SCROLL TO TOP --- */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 shadow-2xl group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

    </footer>
  );
};

export default Footer;
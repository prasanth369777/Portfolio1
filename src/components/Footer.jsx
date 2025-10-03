import React from 'react';
import { Heart, ArrowUp, Mail, Phone } from 'lucide-react';
import LogoImg from '../assets/pdlogo-02-01.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
    ],
    'Services': [
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Web Design', href: '#services' },
      { name: 'Prototyping', href: '#services' },
    ],
    'Resources': [
      { name: 'Design Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Design Tips', href: '#' },
      { name: 'Free Resources', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 border-t border-gray-400">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img
                  src={LogoImg}
                  alt="PD Logo"
                  className="w-24 h-auto object-contain"
                />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Crafting digital experiences that inspire, engage, and convert. 
                Let's create something extraordinary together.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">mrprasanthh@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+91 8531985733</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-gray-900 font-semibold mb-6">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-gray-300">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-700 mb-6">
              Get the latest design insights, tips, and project updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-950 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-700 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-current animate-pulse" />
              <span>by a passionate designer</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-500 text-sm">
                © 2025 UI Designer Portfolio. All rights reserved.
              </div>
              
             <button
  onClick={scrollToTop}
  className="fixed bottom-10 right-6 p-3 bg-gray-200 border border-gray-300 rounded-full 
             hover:border-gray-400 hover:bg-gray-300 transition-all duration-300 
             text-gray-700 hover:text-gray-900 group shadow-lg "
  aria-label="Scroll to top"
>
  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200 " />
</button>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

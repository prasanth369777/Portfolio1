import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappButton = () => {
  const phoneNumber = '+919600985733';
  const message = 'Hello! I would like to connect with you regarding a project.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      
      {/* 1. Radar Ping (Optimized) 
          - Using CSS transforms instead of default width/height changes for better performance 
      */}
      <div className="absolute inset-0 rounded-full bg-green-500/40 animate-ping pointer-events-none "></div>
      
      {/* 2. Main Button Container */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] group-hover:-translate-y-1 will-change-transform mb-16"
        aria-label="Chat on WhatsApp"
      >
        {/* Inner Icon */}
        <MessageCircle 
          className="w-8 h-8 text-green-400 transition-colors duration-300 group-hover:text-white fill-current" 
          strokeWidth={1.5}
        />
        
        {/* Online Status Dot */}
        <span className="absolute top-3 right-3 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-gray-900"></span>
        </span>
      </a>

      {/* 3. Floating Tooltip */}
      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max px-3 py-1 bg-gray-900 border border-green-500/30 rounded-lg text-xs font-mono text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-lg">
        Start Chat
      </div>

    </div>
  );
};

export default WhatsappButton;
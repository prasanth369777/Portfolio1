import { MessageSquare, PhoneCall } from 'lucide-react';

const ContactControls = () => {
  const phoneNumber = '+919600985733';
  const message = 'Hello! I would like to connect with you regarding a project.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const dialerLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-6 group">
      
      {/* 1. DIALER BUTTON (The Direct Line) */}
      <div className="relative flex items-center justify-end">
        <div className="absolute right-[calc(100%+20px)] px-4 py-2 bg-black text-white text-[10px] font-black font-mono uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          Voice
        </div>
        <a
          href={ dialerLink }
          className="relative flex items-center justify-center w-14 h-14 bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_rgba(37,99,235,0.2)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Call Now"
        >
          <PhoneCall 
            className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-blue-600" 
            strokeWidth={2.5}
          />
        </a>
      </div>

      {/* 2. CHAT BUTTON (The Communication Node) */}
      <div className="relative flex items-center justify-end">
        <div className="absolute right-[calc(100%+20px)] px-4 py-2 bg-black text-white text-[10px] font-black font-mono uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
         Text
        </div>
        <a
          href={ whatsappLink }
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_rgba(16,185,129,0.2)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Message via System"
        >
          {/* Replaced real WhatsApp logo with MessageSquare for technical feel */}
          <MessageSquare 
            className="w-8 h-8 text-black transition-colors duration-300 group-hover:text-emerald-600" 
            strokeWidth={2.5}
          />
          
          {/* Status Indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </a>
      </div>

    </div>
  );
};

export default ContactControls;
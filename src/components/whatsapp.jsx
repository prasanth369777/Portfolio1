import React from 'react';

const WhatsappButton = () => {
  const phoneNumber = '8531985733'; // Replace with your number
  const message = 'Hello! I would like to connect with you.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-xl hover:shadow-green-400 transition-all duration-500 mb-16"
      title="Chat on WhatsApp"
      style={{
        animation: 'float 2s ease-in-out infinite',
      }}
    >
      {/* Floating glow */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-2xl animate-pulse"></div>

      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="white"
        className="w-8 h-8 relative z-10"
      >
        <path d="M380.9 97.1C339-2.6 259.8-27.5 187.3 9.1 102.3 49.6 35.6 114.6 8.9 195.1c-26.9 81 2.5 168 77 222.9L0 512l97.3-25.5c77.3 41.4 171 38.7 243-8.2 72.5-47 115.2-128 108.6-216.1-3.2-40.7-21.5-79.5-53-110.2zM232 328c-58.1 0-104.9-46.8-104.9-104.9S173.9 118 232 118s104.9 46.8 104.9 104.9S290.1 328 232 328zm52.4-123.5l-23.4 23.5c-4.8 4.8-12.5 5.4-18.1 1.4l-16-11.2c-1.4-1-3.4-.6-4.2.9l-9.2 17.7c-1.5 2.9-4.2 4.5-7.3 4.5-7.1-.1-31.6-13.5-44.6-33.3-3.3-4.7-2.7-11.1 1.4-15.1l23.3-23.4c4.9-4.9 12.5-5.4 18.1-1.4l16 11.2c1.4 1 3.4.6 4.2-.9l9.2-17.7c1.5-2.9 4.2-4.5 7.3-4.5 7.1.1 31.6 13.5 44.6 33.3 3.3 4.7 2.7 11.1-1.4 15.1z"/>
      </svg>

      {/* Inline keyframes for floating */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </a>
  );
};

export default WhatsappButton;

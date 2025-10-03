import React from "react";

const logos = [
  "https://img.icons8.com/color/452/figma.png",
  "https://img.icons8.com/color/452/adobe-photoshop.png",
  "https://img.icons8.com/color/452/adobe-illustrator.png",
  "https://img.icons8.com/color/452/canva.png",
  "https://img.icons8.com/color/452/artificial-intelligence.png",
  "https://img.icons8.com/color/452/marketing.png",
  "https://img.icons8.com/color/452/google-logo.png",
  "https://img.icons8.com/color/452/microsoft.png",
  "https://img.icons8.com/color/452/apple-logo.png",
  "https://img.icons8.com/color/452/amazon.png",
  "https://img.icons8.com/color/452/facebook-new.png",
  "https://img.icons8.com/color/452/netflix.png",
  "https://img.icons8.com/color/452/netflix.png",
];

const InfiniteHorizontalScroll = () => {
  // Repeat logos multiple times for smooth infinite scroll
  const repeatedLogos = Array(6).fill(logos).flat();

  return (
    <section className="py-24 relative overflow-hidden bg-gray-900 select-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl -z-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16 text-white font-poppins">
        Our Partners
      </h2>

      {/* Single scrolling row */}
      <div
        className="w-full flex gap-12 animate-scroll whitespace-nowrap"
        style={{ animationDuration: "50s" }}
        aria-label="Scrolling brand logos"
        role="list"
      >
        {repeatedLogos.map((logo, idx) => (
          <div
            key={`logo-${idx}`}
            className="flex-shrink-0 w-40 h-20 bg-white/10 rounded-xl flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            role="listitem"
          >
            <img
              src={logo}
              alt={`Brand logo ${idx + 1}`}
              className="h-full object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
          animation-play-state: running;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InfiniteHorizontalScroll;

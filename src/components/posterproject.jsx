import React from "react";

// Import posters
import poster1 from "../assets/poster1.webp";
import poster2 from "../assets/poster2.webp";
import poster3 from "../assets/poster3.webp";
import poster4 from "../assets/poster4.webp";
import poster5 from "../assets/poster5.webp";
import poster6 from "../assets/poster6.webp";
import poster7 from "../assets/poster7.webp";
import poster8 from "../assets/poster8.webp";
import poster9 from "../assets/poster9.webp";
import poster10 from "../assets/poster10.webp";
import poster11 from "../assets/poster11.webp";
import poster12 from "../assets/poster12.webp";
import poster13 from "../assets/poster13.webp";

const posters = [
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
  poster10,
  poster11,
  poster12,
  poster13,
];

const VerticalPosterScroll = () => {
  // Repeat posters for seamless continuous loop
  const repeatedPosters = Array(3).fill(posters).flat();

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white font-poppins">
        Our Posters
      </h2>

      {/* 3 continuous scrolling columns */}
      <div className="flex justify-center gap-6 max-w-[95%] mx-auto h-[600px] overflow-hidden">
        {[0, 1, 2].map((col) => (
          <div
            key={col}
            className={`flex flex-col gap-6 animate-scroll-${col}`}
          >
            {repeatedPosters.map((poster, idx) => (
              <div
                key={`${col}-${idx}`}
                className="w-44 h-60 sm:w-48 sm:h-64 md:w-56 md:h-72 bg-white/10 rounded-xl flex items-center justify-center shadow-lg"
              >
                <img
                  src={poster}
                  alt={`Poster ${idx + 1}`}
                  className="h-full w-full object-contain p-2"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Smooth infinite animations */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        /* All 3 columns scroll infinitely */
        .animate-scroll-0 {
          animation: scroll-up 25s linear infinite;
        }
        .animate-scroll-1 {
          animation: scroll-down 25s linear infinite;
        }
        .animate-scroll-2 {
          animation: scroll-up 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default VerticalPosterScroll;

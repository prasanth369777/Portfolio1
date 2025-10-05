import React from "react";

// Import your posters/logos here
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
  const repeatedPosters = Array(5).fill(posters).flat();

  return (
    <section className="relative py-12 bg-gray-900 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
        Our Posters
      </h2>

      <div className="flex justify-center gap-6 max-w-[95%] mx-auto max-h-[500px] overflow-hidden">
        {[0, 1, 2, 3].map((col) => (
          <div
            key={`col-${col}`}
            className="flex flex-col gap-4 animate-verticalScroll"
            style={{
              animationDuration: `${8 + col * 3}s`, // Faster scroll
            }}
          >
            {repeatedPosters.map((poster, idx) => (
              <div
                key={`poster-${col}-${idx}`}
                className="w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 bg-white/10 rounded-lg flex items-center justify-center shadow-lg"
              >
                <img
                  src={poster}
                  alt={`Poster ${idx + 1}`}
                  className="h-full w-full object-contain p-1"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Vertical scrolling animation */}
      <style>{`
        @keyframes verticalScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-verticalScroll {
          animation-name: verticalScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-verticalScroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default VerticalPosterScroll;

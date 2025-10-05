    import React from "react";

    // Import your logos from local assets
    import figmaLogo from "../assets/DJ1-01.png";
    import photoshopLogo from "../assets/GREENSAND LOGO-01.png";
    import illustratorLogo from "../assets/KAIPULLA-01.png";
    import webDesignLogo from "../assets/VIKRAM LOGO-01.png";
    import canvaLogo from "../assets/ak holidays-01-01.png";
    import marketingLogo from "../assets/bloom field logo-02-01.png";
    import logo7 from "../assets/cyberfox log-01.png";

    import logo9 from "../assets/sss logo-01.png";
    import logo10 from "../assets/Untitled design (1).png";

    const logos = [
      figmaLogo,
      photoshopLogo,
      illustratorLogo,
      webDesignLogo,
      canvaLogo,
      marketingLogo,
      logo7,

      logo9,
      logo10,
    ];

    const InfiniteHorizontalScroll = () => {
      // Repeat logos multiple times for smooth infinite scroll
      const repeatedLogos = Array(6).fill(logos).flat();

      return (
        <section className="py-24 relative overflow-hidden bg-gray-900 select-none">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl -z-10"></div>

          <h2 className="text-4xl font-bold text-center mb-16 text-white font-poppins">
            Logos
          </h2>

          {/* Single scrolling row */}
          <div
            className="w-full flex gap-12 animate-scroll whitespace-nowrap"
            style={{ animationDuration: "30s" }} // ⏩ faster scroll
            aria-label="Scrolling brand logos"
            role="list"
          >
            {repeatedLogos.map((logo, idx) => (
              <div
                key={`logo-${idx}`}
                className="flex-shrink-0 w-40 h-20 bg-white/100 rounded-xl flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
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
                transform: translateX(-150%);
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

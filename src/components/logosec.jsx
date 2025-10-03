import React, { useState, useEffect } from "react";
import heroPerson from "../assets/hero-person.png";

// Logos
import figmaLogo from "../assets/DJ1-01.png";
import photoshopLogo from "../assets/GREENSAND LOGO-01.png";
import illustratorLogo from "../assets/KAIPULLA-01.png";
import webDesignLogo from "../assets/VIKRAM LOGO-01.png";
import canvaLogo from "../assets/ak holidays-01-01.png";
import marketingLogo from "../assets/bloom field logo-02-01.png";
import logo7 from "../assets/cyberfox log-01.png";
import logo8 from "../assets/hero-person.png";
import logo9 from "../assets/sss logo-01.png";
import logo10 from "../assets/Untitled design (1).png";

const logosOuter = [
  { src: figmaLogo, name: "Figma" },
  { src: photoshopLogo, name: "Photoshop" },
  { src: illustratorLogo, name: "Illustrator" },
  { src: webDesignLogo, name: "Web Design" },
  { src: canvaLogo, name: "Canva" },
  { src: marketingLogo, name: "Digital Marketing" },
  { src: logo7, name: "Logo 7" },
  { src: logo8, name: "Logo 8" },
  { src: logo9, name: "Logo 9" },
  { src: logo10, name: "Logo 10" },
];

const LogoSection = () => {
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setRadius(240);
      else if (window.innerWidth >= 640) setRadius(180);
      else setRadius(120);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-[95%] mx-auto flex flex-col items-center justify-center relative h-[800px] sm:h-[900px] md:h-[950px]">

        {/* Background Title */}
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] sm:text-[70px] md:text-[100px] lg:text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 opacity-20 select-none tracking-wider whitespace-nowrap">
          LOGO CREATIONS
        </h1>

        {/* Foreground Title */}
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 sm:mb-16 z-10 text-center">
          LOGO CREATION
        </h2>

        {/* Center Image */}
        <div className="relative w-[200px] sm:w-[280px] md:w-[400px] lg:w-[460px] z-10">

          <img src={heroPerson} alt="Hero person" className="w-full h-auto object-contain relative z-20 mx-auto" />

          {/* Radial Logos Around Image */}
          {logosOuter.map((logo, idx) => {
            const angle = (360 / logosOuter.length) * idx;
            const rad = (angle * Math.PI) / 180;
            return (
              <div
                key={logo.name}
                className="absolute top-1/2 left-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-500 hover:scale-110"
                style={{
                  transform: `translate(${radius * Math.cos(rad)}px, ${radius * Math.sin(rad)}px)`,
                }}
              >
                <img src={logo.src} alt={logo.name} className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain" />
              </div>
            );
          })}

          {/* Horizontal Outer Logos Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-3 sm:space-x-4 md:space-x-6 z-0 justify-center">
            {logosOuter.map((logo, idx) => (
              <div
                key={`outer-${logo.name}`}
                className="rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white opacity-30 shadow-md animate-bounce"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img src={logo.src} alt={logo.name} className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain" />
              </div>
            ))}
          </div>

        </div>

        {/* Text below image - pinned at bottom on mobile */}
        <p className="mt-8 sm:mt-10 text-sm sm:text-base md:text-lg text-gray-700 max-w-md mx-auto z-10 text-center 
                      absolute bottom-6 sm:relative">
          Bringing your brand to life with creative, professional, and unique logo creations that make a lasting impression.
        </p>

      </div>

      <style>
        {`
          @keyframes bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default LogoSection;

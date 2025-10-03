import React from "react";
import heroPerson from "../assets/hero-person.png";

// Import your logos
import figmaLogo from "../assets/DJ1-01.png";
import photoshopLogo from "../assets/GREENSAND LOGO-01.png";
import illustratorLogo from "../assets/KAIPULLA-01.png";
import webDesignLogo from "../assets/VIKRAM LOGO-01.png";
import canvaLogo from "../assets/ak holidays-01-01.png";
import marketingLogo from "../assets/bloom field logo-02-01.png";

// Extra 4 logos
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

const logosAround = logosOuter; // Radial logos

const LogoSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-[95%] mx-auto flex flex-col items-center justify-center relative h-[900px] sm:h-[950px]">

        {/* Background Title */}
        <h1
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-[70px] sm:text-[120px] font-extrabold text-transparent 
          bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 opacity-20 select-none tracking-wider whitespace-nowrap"
        >
          LOGO CREATIONS
        </h1>

        {/* Foreground Title */}
        <h2 className="relative text-4xl sm:text-5xl font-bold text-gray-900 mb-16 z-10 text-center">
          LOGO CREATION
        </h2>

        {/* Center Image */}
        <div className="relative w-[280px] sm:w-[460px] z-10">
          <img
            src={heroPerson}
            alt="Hero person"
            className="w-full h-auto object-contain relative z-20 mx-auto"
          />

          {/* Radial Logos Around Image */}
          {logosAround.map((logo, idx) => {
            const angle = (360 / logosAround.length) * idx;
            const rad = (angle * Math.PI) / 180;
            const radiusMd = 260; // md+

            return (
              <div
                key={logo.name}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-12 h-12 md:w-20 md:h-20 
                  rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-500 hover:scale-110`}
                style={{
                  transform: `translate(${radiusMd * Math.cos(rad)}px, ${radiusMd * Math.sin(rad)}px)`,
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-8 h-8 md:w-14 md:h-14 object-contain"
                />
              </div>
            );
          })}

          {/* Horizontal Outer Logos Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-4 sm:space-x-6 z-0 justify-center">
            {logosOuter.map((logo, idx) => (
              <div
                key={`outer-${logo.name}`}
                className="rounded-full flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.5)", // blue glow
                  backgroundColor: "white",
                  opacity: 0.3,
                  animation: `bounce 2s ease-in-out ${idx * 0.1}s infinite alternate`,
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-8 h-8 sm:w-16 sm:h-16 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Text below image */}
          <p className="mt-10 text-sm sm:text-base text-gray-700 max-w-md mx-auto z-10 text-center">
            Bringing your brand to life with creative, professional, and unique logo creations that make a lasting impression.
          </p>
        </div>
      </div>

      {/* Bouncy Animation */}
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

import React from 'react';
import heroPortrait from '../assets/hero-person.webp';

const HeroSection = () => {
  const skills = ['UI/UX', 'Web Dev', 'Digital Marketing'];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-white via-gray-200 to-gray-400 text-gray-900 relative overflow-hidden 
                 px-4 sm:px-6 md:px-10 lg:px-20 
                 pt-24 sm:pt-0 font-sans"
    >
      {/* FULL SECTION MATRIX DIGITAL RAIN */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="matrixFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0" />
            <stop offset="30%" stopColor="#00ff88" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00ff88" stopOpacity="1" />
          </linearGradient>
        </defs>

        {[...Array(60)].map((_, i) => (
          <text
            key={i}
            x={(i * 100) / 60}
            y="-10"
            fill="url(#matrixFade)"
            fontSize="2.5"
            fontFamily="monospace"
            className="matrix-rain"
            style={{
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5
              ? '1010101010101010'
              : '0101010101010101'}
          </text>
        ))}
      </svg>

      {/* Bottom Right Accent Shape */}
      <svg
        className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 opacity-15 animate-bounce-slow"
        viewBox="0 0 200 200"
        fill="none"
      >
        <rect x="0" y="0" width="200" height="200" rx="50" fill="url(#grad2)" />
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#00FFBC" />
            <stop offset="100%" stopColor="#0057FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* CONTENT */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
        {/* LEFT */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
          <span className="inline-block px-3 py-1 text-green-700 font-semibold rounded-full bg-green-100 animate-pulse text-xs sm:text-sm md:text-base">
            And I'm a
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading animate-fadeIn delay-200">
            Prasanth.
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed animate-fadeIn delay-400 mx-auto lg:mx-0">
            Creative Designer & Developer crafting beautiful digital experiences
            that combine aesthetic excellence with functional innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-600 justify-center lg:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl font-semibold shadow-lg hover:scale-105 transition text-white"
            >
              View My Work
            </button>

            <button className="px-8 py-3 border border-gray-400 rounded-2xl font-semibold hover:bg-gray-300 transition">
              Contact Me
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fadeIn delay-800 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-700">Available for hire</span>
            </div>

            <div className="flex gap-3 flex-wrap">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className={`px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium animate-fadeIn delay-${(i + 1) * 200}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end animate-fadeIn delay-1000">
          <img
            src={heroPortrait}
            alt="Prasanth – Creative Designer & Developer"
            className="w-72 md:w-96 lg:w-full max-w-xl rounded-2xl shadow-2xl animate-float"
          />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-fadeIn { opacity: 0; animation: fadeIn 1s ease forwards; }
        .delay-200 { animation-delay: .2s }
        .delay-400 { animation-delay: .4s }
        .delay-600 { animation-delay: .6s }
        .delay-800 { animation-delay: .8s }
        .delay-1000 { animation-delay: 1s }

        @keyframes fadeIn {
          to { opacity: 1 }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-15px) }
        }

        .animate-bounce-slow {
          animation: bounce 5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }

        .matrix-rain {
          animation-name: matrixFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes matrixFall {
          from { transform: translateY(-120%); opacity: 0 }
          10% { opacity: 1 }
          to { transform: translateY(120%); opacity: 0 }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

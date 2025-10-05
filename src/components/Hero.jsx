import React from 'react';
import heroPortrait from '../assets/hero-person.webp';

const HeroSection = () => {
  const skills = ['UI/UX', 'Web Dev', 'Graphic Designing'];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-white via-gray-200 to-gray-400 text-gray-900 relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 font-sans"
    >
      {/* Background Vectors */}
      <svg
        className="absolute top-0 left-0 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 opacity-20 animate-spin-slow"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="100" fill="url(#grad1)" />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#7F00FF" />
            <stop offset="100%" stopColor="#E100FF" />
          </linearGradient>
        </defs>
      </svg>

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

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 relative z-10 text-center lg:text-left">
          <span className="inline-block px-3 py-1 text-green-700 font-semibold rounded-full bg-green-100 animate-pulse text-xs sm:text-sm md:text-base">
            And I'm a
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading animate-fadeIn delay-200 leading-tight">
            Prasanth.
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed animate-fadeIn delay-400 mx-auto lg:mx-0">
            Creative Designer & Developer crafting beautiful digital experiences
            that combine aesthetic excellence with functional innovation.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 animate-fadeIn delay-600 justify-center lg:justify-start">
            {/* View My Work scroll button */}
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                         rounded-2xl font-semibold shadow-lg transform hover:-translate-y-1 hover:scale-105 
                         transition-all duration-500 w-full sm:w-auto text-center text-white"
            >
              View My Work
            </button>

            {/* Download CV */}
            <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 border border-gray-400 rounded-2xl font-semibold hover:bg-gray-300 transition-all duration-300 w-full sm:w-auto text-center text-gray-900">
              Contact me
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 md:gap-8 pt-3 sm:pt-4 md:pt-6 animate-fadeIn delay-800 justify-center lg:justify-start">
            <div className="flex items-center gap-2 mb-2 sm:mb-0 justify-center lg:justify-start">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm md:text-base text-gray-700">Available for hire</span>
            </div>
            <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center lg:justify-start">
              {skills.map((skill, idx) => (
                <span
                  key={skill}
                  className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-900 rounded-full text-xs sm:text-sm md:text-base font-medium animate-fadeIn delay-${(idx + 1) * 200}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative animate-fadeIn delay-1000 mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src={heroPortrait}
            alt="Prasanth - Creative Designer & Developer"
            className="w-64 sm:w-72 md:w-96 lg:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float relative z-10"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        .animate-fadeIn { opacity: 0; animation: fadeIn 1s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-bounce-slow { animation: bounce 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;

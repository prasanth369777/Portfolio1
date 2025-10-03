import React, { useEffect, useRef } from "react";
import { HiAcademicCap, HiBadgeCheck, HiDocumentText } from "react-icons/hi";

const certifications = [
  { year: "2020", title: "Ethical Hacking", issuer: "LIVEWIRE", desc: "Hands-on training in cybersecurity fundamentals.", icon: <HiBadgeCheck /> },
  { year: "2020", title: "CCNA", issuer: "LIVEWIRE", desc: "Cisco Certified Network Associate certification.", icon: <HiAcademicCap /> },
  { year: "2023", title: "Google Digital Marketing", issuer: "Google", desc: "Certified in SEO, SEM, and digital campaigns.", icon: <HiDocumentText /> },
  { year: "2024", title: "Graphic Designing", issuer: "Skill Dragon", desc: "Advanced design tools and creative workflows.", icon: <HiAcademicCap /> },
  { year: "2024", title: "UI/UX Design", issuer: "Skill Dragon", desc: "End-to-end UX research, prototyping, and design.", icon: <HiBadgeCheck /> },
  { year: "2024", title: "No-Code Development", issuer: "Skill Dragon", desc: "Built scalable apps and websites without coding.", icon: <HiDocumentText /> },
  { year: "2024", title: "Yoga Teacher Training", issuer: "Certified Program", desc: "Completed training for teaching yoga professionally.", icon: <HiAcademicCap /> },
];

const CertificationRoadmap = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("animate-fadeInUp");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
    id="certification"
    className="py-24 bg-gradient-to-b from-gray-50 to-gray-200 relative">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16 sm:mb-20 font-poppins">
        Certifications Roadmap
      </h2>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden sm:block"></div>

        <div className="flex flex-col space-y-12 sm:space-y-16 relative z-10">
          {certifications.map((cert, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`relative flex flex-col sm:flex-row items-center w-full ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div
                  className={`w-full sm:w-5/12 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-500 ${
                    isLeft ? "text-left sm:text-left" : "text-left sm:text-right"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white text-2xl shadow-md">
                      {cert.icon}
                    </div>
                    <span className="ml-3 text-indigo-600 font-bold text-sm tracking-wide">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                  <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">{cert.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CertificationRoadmap;

import React from "react";

const timeline = [
  // 🎓 Education first
  {
    year: "2015",
    title: "SSLC",
    desc: "Bharathi Vidyalaya Hr. Sec. School, Salem — 68%",
    type: "education",
  },
  {
    year: "2020",
    title: "Diploma in Computer Science",
    desc: "CSI Polytechnic College, Salem — 72%",
    type: "education",
  },
  {
    year: "2024",
    title: "B.E. CSE (IoT & Cyber Security incl. BCT)",
    desc: "SNS College of Engineering — 8.89 CGPA",
    type: "education",
  },

  // 💼 Experience next
  {
    year: "2020–2024",
    title: "Internships",
    desc: "Web Development (15d), Java (15d), Python (21d - Appin Technology).",
    type: "experience",
  },
  {
    year: "2024–2025",
    title: "UI/UX Designer & Digital Marketing Executive",
    desc: "CareerLadder, Coimbatore — Designed interfaces, graphics, and managed SEO/social media campaigns.",
    type: "experience",
  },
];

const TimelineSection = () => {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-gray-300 overflow-hidden"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16">
        Education & Experience
      </h2>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-200 opacity-40 rounded-full"></div>

        <div className="flex flex-col space-y-12 sm:space-y-16 relative z-10">
          {timeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot with glow */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-lg glow animate-pulse ${
                      item.type === "education"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  ></div>
                  <div
                    className={`absolute -top-2 -left-2 w-10 h-10 rounded-full opacity-20 blur-xl ${
                      item.type === "education"
                        ? "bg-green-400"
                        : "bg-blue-400"
                    }`}
                  ></div>
                </div>

                {/* Content card */}
                <div className="mt-4 sm:mt-0 sm:w-5/12 bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 text-center sm:text-left">
                  <span
                    className={`font-bold text-lg ${
                      item.type === "education"
                        ? "text-green-500"
                        : "text-blue-500"
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Glow animation */}
      <style>
        {`
          .glow {
            box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5);
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
          }

          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TimelineSection;

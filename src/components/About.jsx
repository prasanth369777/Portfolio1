import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'UI/UX Design',
      description:
        'Designing intuitive and user-friendly interfaces for web and mobile applications.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description:
        'Creating visually appealing graphics and visual content to enhance user engagement.',
    },
    {
      icon: Zap,
      title: 'Web Development',
      description:
        'Developing scalable and responsive websites using modern technologies.',
    },
    {
      icon: Users,
      title: 'Digital Marketing',
      description:
        'Managing SEO, social media campaigns, and digital strategies to drive growth.',
    },
  ];

  const skills = [
    'UI/UX Design',
    'Graphic Design',
    'Web Development',
    'No-Code Tools',
    'Digital Marketing',
    'Python',
    'Ethical Hacking',
  ];

  // Tailwind gradient / color classes
  const colors = [
    'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
    'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
    'bg-gradient-to-r from-cyan-500 to-blue-500 text-white',
    'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
    'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
    'bg-gradient-to-r from-slate-600 to-gray-800 text-white',
    'bg-gradient-to-r from-red-500 to-pink-600 text-white',
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 bg-gradient-to-b from-white via-gray-200 to-gray-400 text-gray-900 flex items-center px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="relative max-w-[1600px] mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gray-400/40 mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            I am <span className="font-semibold">Prasanth D</span>, a Computer Science Engineer skilled in
            <span className="text-indigo-500 font-semibold"> UI/UX design</span>,
            <span className="text-pink-500 font-semibold"> web development</span>,
            <span className="text-cyan-500 font-semibold"> digital marketing</span>, and
            <span className="text-green-500 font-semibold"> no-code development</span>.
            I create user-friendly designs, optimize web experiences, and deliver scalable solutions.
          </p>
        </div>

        {/* Grid: Description & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">Passionate Developer & Designer</h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Experienced in designing interfaces, managing digital campaigns, and delivering high-quality web solutions.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              My work spans <span className="font-semibold">UI/UX design</span>,
              <span className="font-semibold"> graphic design</span>,
              <span className="font-semibold"> Python development</span>, and
              <span className="font-semibold"> ethical hacking</span>.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md ${colors[index % colors.length]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -inset-2 bg-indigo-400/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-indigo-500 mb-1 sm:mb-2">11</div>
            <div className="text-gray-700 text-sm sm:text-base">Months Experience</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-pink-500 mb-1 sm:mb-2">6+</div>
            <div className="text-gray-700 text-sm sm:text-base">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-indigo-500 mb-1 sm:mb-2">3</div>
            <div className="text-gray-700 text-sm sm:text-base">Internships</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-pink-500 mb-1 sm:mb-2">7</div>
            <div className="text-gray-700 text-sm sm:text-base">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

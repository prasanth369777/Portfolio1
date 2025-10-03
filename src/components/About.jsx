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

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 bg-gradient-to-b from-white via-gray-200 to-gray-400 text-gray-900 flex items-center"
    >
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gray-400/40 mx-auto rounded-full mb-8" />
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            I am <span className="font-semibold">Prasanth D</span>, a Computer Science Engineer skilled in
            <span className="text-indigo-500 font-semibold"> UI/UX design</span>,
            <span className="text-pink-500 font-semibold"> web development</span>,
            <span className="text-cyan-500 font-semibold"> digital marketing</span>, and
            <span className="text-green-500 font-semibold"> no-code development</span>.
            I create user-friendly designs, optimize web experiences, and deliver scalable solutions.
          </p>
        </div>

        {/* Grid: Description & Highlights */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Passionate Developer & Designer</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Experienced in designing interfaces, managing digital campaigns, and delivering high-quality web solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My work spans <span className="font-semibold">UI/UX design</span>,
              <span className="font-semibold"> graphic design</span>,
              <span className="font-semibold"> Python development</span>, and
              <span className="font-semibold"> ethical hacking</span>.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 mt-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/20 text-gray-900 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -inset-2 bg-indigo-400/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-3xl font-bold text-indigo-500 mb-2">11</div>
            <div className="text-gray-700">Months Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-500 mb-2">6+</div>
            <div className="text-gray-700">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-500 mb-2">3</div>
            <div className="text-gray-700">Internships</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-500 mb-2">7</div>
            <div className="text-gray-700">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

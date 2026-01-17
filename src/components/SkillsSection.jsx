import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Figma, Image, Monitor } from "lucide-react";

const skills = [
  { name: "Figma", level: 90, icon: <Figma className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" /> },
  { name: "Photoshop", level: 85, icon: <Image className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" /> },
  { name: "Adobe Illustrator", level: 80, icon: <Image className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" /> },
  { name: "Canva", level: 95, icon: <Image className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" /> },
  { name: "AI Website", level: 75, icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" /> },
  { name: "Digital Marketing", level: 70, icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" /> },
];

const SkillsWaveSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      id="skillssection"
      className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-white to-gray-100 overflow-hidden px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-8 sm:mb-12 text-gray-900">My Skills</h2>
        <p className="text-gray-700 mb-20 max-w-4xl mx-auto text-base sm:text-lg md:text-xl">
          I blend creativity and technology to craft interactive designs and websites. Here's a snapshot of my key skills with animated highlights.
        </p>

        {/* Skills Wave */}
        <div ref={ref} className="relative flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-24">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.6 } },
              }}
              className="flex flex-col items-center relative"
            >
              {/* Skill dot with glow and bounce */}
              <motion.div
                className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg"
                animate={{ y: ["0%", "-15%", "0%"] }}
                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2, ease: "easeInOut" }}
              >
                {skill.icon}
                <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
              </motion.div>

              {/* Skill label */}
              <span className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-900">{skill.name}</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsWaveSection;

import { motion } from "framer-motion";
import {
  Figma,
  Image,
  PenTool,
  Layout,
  Cpu,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  {
    name: "Figma",
    category: "Product Design",
    level: "95",
    desc: "Systems & Prototyping",
    color: "group-hover:text-pink-400",
    bar: "bg-pink-400",
    icon: <Figma strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    name: "Photoshop",
    category: "Visual Design",
    level: "85",
    desc: "Compositing & Retouching",
    color: "group-hover:text-cyan-400",
    bar: "bg-cyan-400",
    icon: <Image strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    name: "Illustrator",
    category: "Vector Art",
    level: "80",
    desc: "Brand Identity & Illustration",
    color: "group-hover:text-amber-400",
    bar: "bg-amber-400",
    icon: <PenTool strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    name: "Canva",
    category: "Rapid Layout",
    level: "90",
    desc: "Social Media Assets",
    color: "group-hover:text-teal-400",
    bar: "bg-teal-400",
    icon: <Layout strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    name: "AI / No-Code",
    category: "Development",
    level: "75",
    desc: "Prompt Eng & Automation",
    color: "group-hover:text-violet-400",
    bar: "bg-violet-400",
    icon: <Cpu strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    name: "Marketing",
    category: "Growth",
    level: "70",
    desc: "SEO & Digital Strategy",
    color: "group-hover:text-rose-400",
    bar: "bg-rose-400",
    icon: <Globe strokeWidth={1.5} className="w-6 h-6" />,
  },
];

const SkillsRoadmap = () => {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[#080808] overflow-hidden font-sans selection:bg-white selection:text-black"
    >
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 block">
              {'//'} Proficiency Index
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Digital <span className="italic text-zinc-600">Toolset</span>
            </h2>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">
              A quantitative breakdown of technical capabilities and creative
              software mastery.
            </p>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-[#080808] h-[320px] p-8 flex flex-col justify-between overflow-hidden hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              {/* TOP */}
              <div className="flex justify-between items-start z-10">
                <div>
                  <div
                    className={`mb-4 text-zinc-400 transition-colors duration-300 ${skill.color}`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {skill.category}
                  </p>
                </div>

                <ArrowUpRight
                  className={`w-5 h-5 text-zinc-600 transition-all duration-300 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ${skill.color}`}
                />
              </div>

              {/* DESCRIPTION */}
              <div className="z-10 relative">
                <p className="text-sm text-zinc-400 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {skill.desc}
                </p>
              </div>

              {/* LEVEL */}
              <div className="relative z-0">
                <span
                  className={`block text-[120px] leading-[0.8] font-serif font-light tracking-tighter text-zinc-800 transition-all duration-500 group-hover:-translate-y-2 ${skill.color}`}
                >
                  {skill.level}
                </span>
                <span className="absolute top-2 right-0 text-xl font-mono text-zinc-700">
                  %
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-900">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.5,
                    ease: "circOut",
                    delay: 0.2,
                  }}
                  className={`h-full ${skill.bar}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsRoadmap;

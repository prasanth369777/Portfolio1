import { motion } from "framer-motion";
import {
  Figma,
  PenTool,
  Cpu,
  Globe,
  Fingerprint,
  Activity,
  Code2
} from "lucide-react";

const skills = [
  {
    name: "UX Research",
    category: "Analysis",
    level: "88",
    desc: "User Psychology & Metrics",
    accent: "text-blue-700",
    glow: "shadow-blue-500/30",
    icon: <Fingerprint strokeWidth={2} className="w-8 h-8" />,
  },
  {
    name: "Figma",
    category: "Architecture",
    level: "95",
    desc: "Design Systems & Variables",
    accent: "text-blue-600",
    glow: "shadow-blue-600/30",
    icon: <Figma strokeWidth={2} className="w-8 h-8" />,
  },
  {
    name: "AI Strategy",
    category: "Automation",
    level: "85",
    desc: "LLM Integration & Prompting",
    accent: "text-emerald-700",
    glow: "shadow-emerald-500/30",
    icon: <Cpu strokeWidth={2} className="w-8 h-8" />,
  },
  {
    name: "React JS",
    category: "Development",
    level: "80",
    desc: "Cross-Platform Engineering",
    accent: "text-blue-800",
    glow: "shadow-blue-800/20",
    icon: <Code2 strokeWidth={2} className="w-8 h-8" />,
  },
  {
    name: "Visual Identity",
    category: "Creative",
    level: "90",
    desc: "Adobe Creative Suite Mastery",
    accent: "text-indigo-700",
    glow: "shadow-indigo-500/30",
    icon: <PenTool strokeWidth={2} className="w-8 h-8" />,
  },
  {
    name: "Marketing",
    category: "Growth",
    level: "75",
    desc: "Conversion Rate Optimization",
    accent: "text-emerald-600",
    glow: "shadow-emerald-400/30",
    icon: <Globe strokeWidth={2} className="w-8 h-8" />,
  },
];

const SkillsRoadmap = () => {
  return (
    <section
      id="skills"
      className="relative py-40 bg-[#ffffff] text-[#000000] font-sans selection:bg-black selection:text-white overflow-hidden"
    >
      {/* --- ARCHITECTURAL CANVAS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Visible blueprint grid */}
        <div 
            className="absolute inset-0 opacity-[0.6]" 
            style={{ 
                backgroundImage: `linear-gradient(#f0f0f0 2px, transparent 2px), linear-gradient(90deg, #f0f0f0 2px, transparent 2px)`,
                backgroundSize: '80px 80px' 
            }} 
        />
        {/* Vibrant atmosphere blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b-4 border-black pb-12 gap-10">
          <div className="max-w-3xl">
            <span className="text-[12px] font-mono text-blue-700 font-black uppercase tracking-[0.5em] mb-10 block">
              {'//'} TECHNICAL PROFICIENCY INDEX
            </span>
            <h2 className="text-7xl md:text-9xl font-serif text-black leading-[0.85] tracking-tighter">
              Tooling <br />
              <span className="italic bg-gradient-to-r from-blue-700 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">Ecosystem.</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-2xl text-zinc-800 font-bold max-w-sm ml-auto leading-relaxed">
              A detailed breakdown of <span className="text-black underline underline-offset-8 decoration-blue-600 decoration-4">architectural mastery</span> and tech stacks.
            </p>
          </div>
        </div>

        {/* --- GLASS MORPHISM GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`group relative h-[500px] p-12 overflow-hidden transition-all duration-500
                bg-white border-2 border-zinc-100
                hover:border-black hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] ${skill.glow}
                rounded-none`}
            >
              {/* STATUS INDICATOR - High Visibility */}
              <div className="absolute top-10 right-10 flex items-center gap-3 z-20">
                 <div className="w-3 h-3 rounded-full bg-emerald-600 shadow-[0_0_10px_#059669]" />
                 <span className="text-[12px] font-mono font-black text-black uppercase tracking-widest">ACTIVE</span>
              </div>

              {/* TOP: IDENTITY */}
              <div className="relative z-20">
                <div className={`mb-10 transition-all duration-500 group-hover:scale-110 ${skill.accent}`}>
                  {skill.icon}
                </div>
                <h3 className="text-5xl font-serif text-black mb-4 font-bold tracking-tighter">
                  {skill.name}
                </h3>
                <p className="text-[12px] font-mono text-blue-700 font-black uppercase tracking-[0.3em]">
                  {skill.category}
                </p>
              </div>

              {/* CENTER: DESCRIPTION - Highly Visible */}
              <div className="mt-10 z-20">
                <p className="text-xl font-bold text-zinc-900 mb-8 max-w-[240px] leading-tight">
                  {skill.desc}
                </p>
                <div className="flex items-center gap-4 text-emerald-700">
                    <Activity className="w-5 h-5 stroke-[3px]" />
                    <span className="text-[11px] font-mono font-black uppercase tracking-widest">VERIFIED INFRASTRUCTURE</span>
                </div>
              </div>

              {/* BOTTOM: LEVEL LOGIC */}
              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="flex justify-between items-end mb-6">
                    <span className="text-8xl font-serif font-black text-zinc-100 group-hover:text-black transition-all duration-500 leading-[0.7]">
                        {skill.level}
                    </span>
                    <span className={`text-3xl font-mono font-black mb-2 ${skill.accent}`}>%</span>
                </div>
                {/* Thick Progress Bar */}
                <div className="w-full h-2 bg-zinc-100 rounded-none overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5 }}
                        className={`h-full bg-black`}
                    />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- DECORATIVE FOOTER --- */}
        <div className="mt-24 flex justify-between items-center text-[12px] font-mono text-black uppercase tracking-[0.5em] font-black border-t-4 border-black pt-10">
           <div className="flex items-center gap-6">
             <span className="w-16 h-1 bg-blue-700" />
             <span>Core Competency Matrix</span>
           </div>
           <span>SR. UX ARCHITECT // 2026</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsRoadmap;
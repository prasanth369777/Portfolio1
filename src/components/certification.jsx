
import { motion } from "framer-motion";
import { 
  BadgeCheck, 
  ShieldCheck, 
  Award, 
  Terminal, 
  PenTool, 
  LayoutTemplate, 
  ArrowUpRight,
  Hash
} from "lucide-react";

const certifications = [
  { 
    id: "01",
    year: "2024", 
    title: "UI/UX DESIGN MASTER", 
    issuer: "Skill Dragon", 
    desc: "Advanced Systems & Research", 
    color: "group-hover:text-pink-500",
    gradient: "from-pink-500/20 to-transparent",
    icon: <PenTool className="w-6 h-6" /> 
  },
  { 
    id: "02",
    year: "2024", 
    title: "NO-CODE ARCHITECT", 
    issuer: "Skill Dragon", 
    desc: "Scalable Web Applications", 
    color: "group-hover:text-cyan-500",
    gradient: "from-cyan-500/20 to-transparent",
    icon: <LayoutTemplate className="w-6 h-6" /> 
  },
  { 
    id: "03",
    year: "2024", 
    title: "GRAPHIC DESIGNING", 
    issuer: "Skill Dragon", 
    desc: "Visual Communication Principles", 
    color: "group-hover:text-purple-500",
    gradient: "from-purple-500/20 to-transparent",
    icon: <PenTool className="w-6 h-6" /> 
  },
  { 
    id: "04",
    year: "2023", 
    title: "DIGITAL STRATEGY", 
    issuer: "Google", 
    desc: "SEO, Analytics & Growth", 
    color: "group-hover:text-orange-500",
    gradient: "from-orange-500/20 to-transparent",
    icon: <Award className="w-6 h-6" /> 
  },
  { 
    id: "05",
    year: "2020", 
    title: "ETHICAL HACKING", 
    issuer: "LiveWire", 
    desc: "Network Security & Pentesting", 
    color: "group-hover:text-emerald-500",
    gradient: "from-emerald-500/20 to-transparent",
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    id: "06",
    year: "2020", 
    title: "CCNA NETWORKING", 
    issuer: "LiveWire", 
    desc: "Cisco Routing & Switching", 
    color: "group-hover:text-blue-500",
    gradient: "from-blue-500/20 to-transparent",
    icon: <Terminal className="w-6 h-6" /> 
  },
];

const CertificationRoadmap = () => {
  return (
    <section id="certification" className="relative py-24 bg-[#050505] overflow-hidden font-sans">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 pb-6 border-b border-white/10">
           <div>
             // Wrap the text in braces and quotes
<span className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2 block">
  {"// Credentials"}
</span>
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                 Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">Talent.</span>
              </h2>
           </div>
           
           {/* Decorative Badge */}
           <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <BadgeCheck className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-300">100% VERIFIED ISSUERS</span>
           </div>
        </div>

        {/* --- BLADE LIST CONTAINER --- */}
        {/* 'group/list' allows us to dim siblings when one is hovered */}
        <div className="group/list flex flex-col">
           
           {certifications.map((cert, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group relative"
             >
                {/* BLADE ITEM */}
                <div className={`
                    relative w-full border-b border-white/5 py-8 md:py-10 px-4 md:px-8
                    transition-all duration-500 ease-out
                    hover:bg-[#0a0a0a] hover:pl-12
                    group-hover/list:opacity-30 group-hover:opacity-100
                `}>
                    
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Left Accent Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-current ${cert.color} scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center`}></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        
                        {/* 1. ID & YEAR */}
                        <div className="flex items-center gap-6 md:w-[200px]">
                            <span className="text-sm font-mono text-gray-600 group-hover:text-white transition-colors">
                                <Hash className="w-3 h-3 inline mr-1" />{cert.id}
                            </span>
                            <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs font-mono text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                {cert.year}
                            </span>
                        </div>

                        {/* 2. MAIN TITLE */}
                        <div className="flex-1">
                            <h3 className={`text-2xl md:text-4xl font-black text-white uppercase tracking-tight transition-colors duration-300 ${cert.color}`}>
                                {cert.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 font-mono hidden md:block group-hover:text-gray-300 transition-colors">
                                {cert.desc}
                            </p>
                        </div>

                        {/* 3. ISSUER & ICON */}
                        <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-8">
                             <div className="text-left md:text-right">
                                 <span className="block text-xs font-mono text-gray-600 uppercase tracking-widest">ISSUED BY</span>
                                 <span className="block text-sm font-bold text-white">{cert.issuer}</span>
                             </div>
                             
                             {/* Floating Icon Circle */}
                             <div className={`
                                w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center
                                group-hover:scale-110 group-hover:border-white/30 transition-all duration-300
                                ${cert.color}
                             `}>
                                 {cert.icon}
                             </div>

                             {/* Interaction Arrow */}
                             <ArrowUpRight className="w-6 h-6 text-gray-700 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                        </div>

                    </div>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationRoadmap;
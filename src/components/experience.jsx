
import { GraduationCap, Briefcase, MapPin} from "lucide-react";

const timeline = [
  {
    year: "2024–Present",
    title: "UI/UX & Digital Marketing",
    institution: "CareerLadder, Coimbatore",
    desc: "Leading design initiatives, crafting user interfaces, and managing SEO/growth strategies.",
    tags: ["Leadership", "SEO", "UI Design"],
    type: "experience",
  },
  {
    year: "2024",
    title: "B.E. CSE (IoT & Cyber Security)",
    institution: "SNS College of Engineering",
    desc: "Graduated with distinction (8.89 CGPA). Focus on Blockchain & IoT Security.",
    tags: ["Blockchain", "IoT", "Distinction"],
    type: "education",
  },
  {
    year: "2020–2024",
    title: "Tech Internships",
    institution: "Multiple Companies",
    desc: "Gained hands-on experience in Web Development, Java, and Python via Appin Technology.",
    tags: ["Java", "Python", "Web Dev"],
    type: "experience",
  },
  {
    year: "2020",
    title: "Diploma in Computer Science",
    institution: "CSI Polytechnic College, Salem",
    desc: "Specialized in core computing principles. Secured 72%.",
    tags: ["Core CS", "Networking"],
    type: "education",
  },
  {
    year: "2015",
    title: "Secondary School (SSLC)",
    institution: "Bharathi Vidyalaya Hr. Sec. School",
    desc: "Achieved 68% with a focus on foundational sciences.",
    tags: ["Science", "Math"],
    type: "education",
  },
];

const TimelineSection = () => {
  return (
    <section id="experience" className="relative py-32 bg-zinc-950 overflow-hidden font-sans">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
               <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
               <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Career Path</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              Professional <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Experience.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm text-sm leading-relaxed text-right hidden md:block">
            A timeline of my educational background and professional milestones shaping my expertise.
          </p>
        </div>

        {/* --- MODERN TIMELINE GRID --- */}
        <div className="relative flex flex-col gap-8 md:gap-0">
          
          {/* Continuous Vertical Line (Desktop) */}
          <div className="absolute left-[140px] top-4 bottom-4 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block"></div>

          {timeline.map((item, idx) => {
            const isEdu = item.type === "education";
            const Icon = isEdu ? GraduationCap : Briefcase;
            const accentColor = isEdu ? "text-emerald-400" : "text-indigo-400";
            const borderColor = isEdu ? "group-hover:border-emerald-500/30" : "group-hover:border-indigo-500/30";
            const glowColor = isEdu ? "group-hover:shadow-emerald-900/20" : "group-hover:shadow-indigo-900/20";

            return (
              <div key={idx} className="relative grid grid-cols-1 md:grid-cols-[140px_1fr] group">
                
                {/* 1. DATE COLUMN (Sticky on Desktop) */}
                <div className="relative hidden md:flex flex-col items-end pr-8 py-8">
                   <span className={`text-sm font-mono font-bold ${accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                     {item.year.split('–')[0]}
                   </span>
                   {item.year.includes('–') && (
                     <span className="text-xs text-zinc-500 font-mono mt-1">
                       {item.year.split('–')[1] || "Now"}
                     </span>
                   )}
                   {/* Connector Dot */}
                   <div className={`absolute right-[-4px] top-10 w-2 h-2 rounded-full bg-zinc-900 border border-zinc-600 z-10 transition-colors duration-300 ${isEdu ? 'group-hover:border-emerald-400 group-hover:bg-emerald-950' : 'group-hover:border-indigo-400 group-hover:bg-indigo-950'}`}></div>
                </div>

                {/* 2. CARD CONTENT */}
                <div className="relative pl-0 md:pl-12 py-4">
                  
                  {/* Mobile Date Header */}
                  <div className="flex items-center gap-3 mb-3 md:hidden">
                    <span className="px-2 py-1 rounded bg-white/5 text-xs text-zinc-300 border border-white/10">
                      {item.year}
                    </span>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>

                  {/* Main Card */}
                  <div className={`
                      relative p-6 md:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-white/5 
                      transition-all duration-500 ease-out
                      ${borderColor} ${glowColor} hover:shadow-xl hover:-translate-y-1
                  `}>
                    
                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                         <div className={`p-2.5 rounded-lg bg-white/5 border border-white/5 ${accentColor}`}>
                            <Icon size={18} />
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-1 text-zinc-500 text-xs font-medium mt-0.5">
                                <MapPin size={10} />
                                <span>{item.institution}</span>
                            </div>
                         </div>
                      </div>
                      
                      {/* Type Badge */}
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 border border-zinc-800 px-2 py-1 rounded hidden sm:block">
                        {item.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-l-2 border-white/5 pl-4 group-hover:border-white/20 transition-colors">
                      {item.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags && item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 text-[11px] font-medium text-zinc-400 bg-white/5 rounded-md border border-white/5 group-hover:border-white/10 transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${isEdu ? 'from-emerald-500/5' : 'from-indigo-500/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}></div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;
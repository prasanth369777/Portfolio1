import { ArrowRight, ArrowUpRight } from "lucide-react";

const certifications = [
  {
    id: "01",
    year: "2024",
    title: "UI/UX Master",
    issuer: "Skill Dragon",
    location: "Online",
    type: "Specialization",
  },
  {
    id: "02",
    year: "2024",
    title: "No-Code Architect",
    issuer: "Skill Dragon",
    location: "Remote",
    type: "Technical",
  },
  {
    id: "03",
    year: "2024",
    title: "Graphic Design",
    issuer: "Skill Dragon",
    location: "Global",
    type: "Creative",
  },
  {
    id: "04",
    year: "2023",
    title: "Digital Strategy",
    issuer: "Google",
    location: "Mountain View",
    type: "Marketing",
  },
  {
    id: "05",
    year: "2020",
    title: "Ethical Hacking",
    issuer: "LiveWire",
    location: "Chennai",
    type: "Security",
  },
  {
    id: "06",
    year: "2020",
    title: "CCNA Networking",
    issuer: "LiveWire",
    location: "Chennai",
    type: "Infrastructure",
  },
];

const CertificationRoadmap = () => {
  return (
    <section
      id="certification"
      className="relative py-32 bg-[#080808] overflow-hidden font-sans selection:bg-white selection:text-black"
    >
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 block">
              {'//'} Credentials
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
              Certified <br />
              <span className="italic text-zinc-600">Expertise.</span>
            </h2>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-zinc-500 text-sm font-mono leading-relaxed">
              VERIFIED BY INDUSTRY LEADERS <br />
              LAST UPDATED: Q1 2025
            </p>
          </div>
        </div>

        {/* --- LIST --- */}
        <div className="group/list flex flex-col border-t border-white/10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col md:flex-row items-start md:items-center py-8 border-b border-white/10 transition-all duration-500 hover:bg-zinc-900/30 group-hover/list:opacity-50 hover:!opacity-100"
            >
              {/* LEFT */}
              <div className="w-full md:w-1/4 flex items-center gap-4 mb-4 md:mb-0">
                <span className="text-xs font-mono text-zinc-600">
                  {cert.id}
                </span>
                <span className="px-2 py-0.5 border border-zinc-800 rounded text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:border-zinc-600 group-hover:text-zinc-300 transition-colors">
                  {cert.year}
                </span>
              </div>

              {/* CENTER */}
              <div className="w-full md:w-2/4">
                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:translate-x-4 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                  {cert.title}
                </h3>
              </div>

              {/* RIGHT */}
              <div className="w-full md:w-1/4 flex items-center justify-between md:justify-end gap-8 mt-4 md:mt-0">
                <div className="text-right hidden md:block">
                  <span className="block text-sm text-white group-hover:text-zinc-300 transition-colors">
                    {cert.issuer}
                  </span>
                  <span className="block text-xs font-mono text-zinc-600 uppercase tracking-widest mt-1">
                    {cert.type}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
            <span>View Full Transcript</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationRoadmap;

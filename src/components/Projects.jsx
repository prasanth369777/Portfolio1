
import { ArrowUpRight } from "lucide-react";

const projectList = [
  {
    id: "01",
    title: "Career Ladder",
    category: "Edutech Platform",
    image: "https://www.careerladderedu.com/static/media/java.c6b2c6adf12ccb3814f5.webp",
    link: "https://www.careerladderedu.com/",
    span: "md:col-span-2", // Wide item
    aspect: "aspect-[16/9]"
  },
  {
    id: "02",
    title: "Agasthiyas Health",
    category: "Medical Client",
    image: "https://content.jdmagicbox.com//v2/comp/coimbatore/x1/0422px422.x422.180326113611.y2x1/menu/agasthiyas-kathir-health-care-centre-gn-mills-coimbatore-chiropractic-doctors-cj6o4wu.jpg",
    link: "https://www.agasthiyaskathirhealthcare.com/",
    span: "md:col-span-1", // Square item
    aspect: "aspect-square"
  },
  {
    id: "03",
    title: "Maxlead Ads",
    category: "Digital Agency",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    link: "https://www.maxleadadvertising.com/",
    span: "md:col-span-2", // Wide item
    aspect: "aspect-[16/9]"
  },
 
  {
    id: "04",
    title: "Portfolio Brand",
    category: "Personal Branding",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-1",
    aspect: "aspect-square"
  },
  {
    id: "05",
    title: "E-Commerce App",
    category: "React Native",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-1",
    aspect: "aspect-square"
  },
  
   {
    id: "06",
    title: "Dashboard System",
    category: "SaaS UI Kit",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-1",
    aspect: "aspect-square"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 bg-[#080808] overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* --- BACKGROUND --- */}
      {/* A very subtle grain, barely visible, for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8 gap-8">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 block">
               // Curated Works
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.9]">
               Selected <br/> <span className="italic text-zinc-600">Projects.</span>
            </h2>
          </div>
          
          <div className="text-right hidden md:block">
             <p className="text-zinc-500 text-sm font-mono max-w-xs ml-auto leading-relaxed">
               A collection of digital products crafted with precision, focusing on scalability and user experience.
             </p>
             <div className="mt-4 text-xs font-mono text-zinc-600">
                2024 — 2025
             </div>
          </div>
        </div>

        {/* --- EDITORIAL GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {projectList.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block ${project.span}`}
            >
              {/* Image Container */}
              <div className={`relative w-full ${project.aspect} overflow-hidden bg-zinc-900 mb-6`}>
                 
                 {/* Mask for Reveal Animation (Curtain effect on hover) */}
                 <div className="absolute inset-0 bg-zinc-900 z-20 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.22,1,0.36,1] opacity-20 mix-blend-multiply"></div>
                 
                 {/* The Image */}
                 <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                 />

                 {/* Hover Overlay Button */}
                 <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl">
                       <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                 </div>
              </div>

              {/* Text Content (Outside Image for Editorial Look) */}
              <div className="flex justify-between items-end border-t border-zinc-800 pt-4 group-hover:border-zinc-600 transition-colors duration-500">
                 <div>
                    <div className="flex items-center gap-3 mb-1">
                       <span className="text-xs font-mono text-zinc-500">0{index + 1}</span>
                       <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{project.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-zinc-300 transition-colors">
                       {project.title}
                    </h3>
                 </div>
                 
                 {/* ID or Year */}
                 <div className="hidden md:block overflow-hidden h-6">
                    <div className="text-xs font-mono text-zinc-600 group-hover:-translate-y-full transition-transform duration-500">
                       <div className="text-right">2024</div>
                       <div className="text-right text-white">VIEW</div>
                    </div>
                 </div>
              </div>
            </a>
          ))}
        </div>

        {/* --- BOTTOM LINK --- */}
        <div className="mt-32 text-center">
           <a href="https://github.com/prasanth369777" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest border-b border-transparent hover:border-white pb-1">
              View Entire Archive <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
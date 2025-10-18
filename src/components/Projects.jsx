import React from "react";

const projectList = [
  {
    title: "Dashboard Design",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "E-Commerce Website",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Mobile App UI",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Agasthiyas Kathir Healthcare",
    image:
      "https://content.jdmagicbox.com//v2/comp/coimbatore/x1/0422px422.x422.180326113611.y2x1/menu/agasthiyas-kathir-health-care-centre-gn-mills-coimbatore-chiropractic-doctors-cj6o4wu.jpg",
    link: "https://www.agasthiyaskathirhealthcare.com/",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Career Ladder Education",
    image:
      "https://www.careerladderedu.com/static/media/java.c6b2c6adf12ccb3814f5.webp",
    link: "https://www.careerladderedu.com/",
    span: "md:col-span-1 md:row-span-1",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-black font-poppins">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
          A collection of projects showcasing design aesthetics, clean code, and modern UI/UX.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-3 auto-rows-[240px] gap-8">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 
              transition-transform duration-300 ease-out hover:scale-[1.05] hover:shadow-2xl ${project.span}`}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
              loading="lazy"
              draggable={false}
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-end p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2 font-poppins">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm font-inter">Click to view details</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

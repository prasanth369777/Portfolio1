import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight} from "lucide-react";
import storyImage from "../assets/hero-person.webp"; 

const chapters = [
  {
    id: "01",
    label: "Genesis",
    title: "The Silent Beginning",
    text: "It didn't start with a loud bang, but a quiet curiosity. I found myself dissecting the web, peeling back layers of HTML like an onion. While others played games, I was obsessed with understanding how the game was rendered. That obsession transformed into a discipline—crafting digital environments that feel inevitable.",
    tags: ["Curiosity", "Code", "Foundation"]
  },
  {
    id: "02",
    label: "Synthesis",
    title: "The Hybrid Approach",
    text: "Design is chaos; Engineering is order. I exist in the friction between the two. I realized early on that a beautiful design is useless if it breaks, and clean code is forgotten if it's ugly. My career became a pursuit of synthesis: mastering Figma to dream and React to deliver.",
    tags: ["Figma", "React", "Bridge"]
  },
  {
    id: "03",
    label: "Horizon",
    title: "The Unwritten Future",
    text: "I am no longer satisfied with 'functional.' I chase the emotional. The web is becoming a spatial experience, and I am building the toolkit to thrive in it. My focus is now on performance design, micro-interactions, and creating products that respect the user's time and intelligence.",
    tags: ["3D Web", "Motion", "Impact"]
  }
];

const StorytellingSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden text-white font-sans selection:bg-white selection:text-black">
      
      {/* --- NOISE TEXTURE (Subtle) --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 h-full">
        
        {/* --- NAVIGATION (Top Line) --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-8 mb-20 gap-6">
           <h2 className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
           </h2>
           
           {/* Minimal Tab System */}
           <div className="flex gap-8 overflow-x-auto no-scrollbar">
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`relative pb-2 text-sm uppercase tracking-wider transition-all duration-500 ${active === index ? "text-white font-medium" : "text-zinc-600 hover:text-zinc-400"}`}
                >
                  <span className="mr-2 font-mono text-xs opacity-50">0{index + 1}</span>
                  {chapter.label}
                  
                  {/* Active Line Indicator */}
                  {active === index && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-white"
                    />
                  )}
                </button>
              ))}
           </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: IMAGE (Editorial Style) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
             <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                
                {/* Mask Animation Wrapper */}
                <motion.div
                   key={active}
                   initial={{ height: "100%" }}
                   animate={{ height: "0%" }}
                   transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                   className="absolute inset-0 bg-[#080808] z-20"
                />

                <motion.img 
                  key={`img-${active}`}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={storyImage} 
                  alt="Portrait" 
                  className="w-full h-full object-cover grayscale opacity-90"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 z-10"></div>
                
                {/* Floating Caption */}
                <div className="absolute bottom-8 left-8 z-30 hidden md:block">
                   <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                      Figure 0{active + 1} — {chapters[active].label}
                   </p>
                </div>
             </div>
          </div>

          {/* RIGHT: TEXT (Typography Focused) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center min-h-[400px]">
             
             <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                   {/* Big Serif Number */}
                   <div className="overflow-hidden mb-6">
                      <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-[120px] md:text-[180px] leading-[0.8] font-serif font-light text-zinc-800 select-none -ml-2"
                      >
                         {chapters[active].id}
                      </motion.h1>
                   </div>

                   {/* Title */}
                   <h3 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
                      {chapters[active].title}
                   </h3>

                   {/* Body Text */}
                   <div className="flex gap-4">
                      <div className="w-px bg-zinc-800 h-auto mt-2 mb-2"></div>
                      <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                        {chapters[active].text}
                      </p>
                   </div>

                   {/* Footer Tags */}
                   <div className="mt-12 flex items-center gap-6">
                      <div className="flex gap-2">
                        {chapters[active].tags.map((tag, i) => (
                           <span key={i} className="px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-500 uppercase tracking-wider">
                              {tag}
                           </span>
                        ))}
                      </div>
                      <div className="h-px w-24 bg-zinc-800"></div>
                      <ArrowRight className="w-5 h-5 text-zinc-600" />
                   </div>

                </motion.div>
             </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
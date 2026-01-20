import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeService, setActiveService] = useState(null);

  // Common tags for "Senior" project inquiries
  const services = ["UI/UX Design", "Web Development", "Brand Identity", "No-Code", "Other"];

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "86c1a356-7d8f-47ec-b523-6d02ef8d5996");
    if (activeService) formData.append("service_interest", activeService);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent");
        event.target.reset();
        setActiveService(null);
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#080808] overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* --- NOISE TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: EDITORIAL CONTENT (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
             <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 block">
                   // Project Inquiry
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
                   Let's start a <br/>
                   <span className="italic text-zinc-600">conversation.</span>
                </h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md mb-12">
                   I am currently available for select freelance projects. I specialize in building digital products that blend aesthetics with architectural precision.
                </p>

                {/* Contact Details */}
                <div className="space-y-8">
                   <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Write</h4>
                      <a href="mailto:mrprasanthh@gmail.com" className="text-xl text-white hover:text-zinc-400 transition-colors border-b border-zinc-800 pb-1">
                         mrprasanthh@gmail.com
                      </a>
                   </div>
                   <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Connect</h4>
                      <div className="flex gap-6">
                         <a href="https://www.linkedin.com/in/prasanth-d-/" target="_blank" rel="noreferrer" className="text-white hover:text-zinc-400 flex items-center gap-1 transition-colors">
                            LinkedIn <ArrowUpRight className="w-3 h-3" />
                         </a>
                         <a href="https://github.com/prasanth369777" target="_blank" rel="noreferrer" className="text-white hover:text-zinc-400 flex items-center gap-1 transition-colors">
                            GitHub <ArrowUpRight className="w-3 h-3" />
                         </a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN: CLEAN FORM (Span 7) */}
          <div className="lg:col-span-7 pt-4">
             <form onSubmit={onSubmit} className="space-y-12">
                
                {/* 1. INPUT FIELDS (Underlined Style) */}
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="group relative">
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-white text-lg focus:border-white focus:outline-none transition-colors"
                      />
                      <label className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white pointer-events-none">
                         Your Name
                      </label>
                   </div>
                   <div className="group relative">
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-white text-lg focus:border-white focus:outline-none transition-colors"
                      />
                      <label className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white pointer-events-none">
                         Email Address
                      </label>
                   </div>
                </div>

                {/* 2. SERVICES SELECTION */}
                <div className="space-y-4">
                   <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">I'm interested in...</label>
                   <div className="flex flex-wrap gap-3">
                      {services.map((service, i) => (
                         <button
                           key={i}
                           type="button"
                           onClick={() => setActiveService(service)}
                           className={`
                             px-4 py-2 rounded-full border text-sm transition-all duration-300
                             ${activeService === service 
                                ? "bg-white text-black border-white" 
                                : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                             }
                           `}
                         >
                            {service}
                         </button>
                      ))}
                   </div>
                </div>

                {/* 3. MESSAGE AREA */}
                <div className="group relative">
                    <textarea 
                      name="message" 
                      rows={4}
                      required 
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-white text-lg focus:border-white focus:outline-none transition-colors resize-none"
                    ></textarea>
                    <label className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white pointer-events-none">
                       Tell me about the project
                    </label>
                </div>

                {/* 4. SUBMIT BUTTON */}
                <div className="flex items-center justify-between pt-8">
                   
                   {/* Status Message */}
                   <div className="h-6">
                      {result && (
                         <motion.div 
                           initial={{ opacity: 0, x: -10 }}
                           animate={{ opacity: 1, x: 0 }}
                           className={`flex items-center gap-2 text-sm ${result.includes("Error") ? "text-red-400" : "text-emerald-400"}`}
                         >
                            {result.includes("Error") ? null : <CheckCircle2 className="w-4 h-4" />}
                            {result}
                         </motion.div>
                      )}
                   </div>

                   {/* Action */}
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="group flex items-center gap-4 text-white text-xl font-light hover:text-zinc-300 transition-colors disabled:opacity-50"
                   >
                      <span>{isSubmitting ? "Sending" : "Send Request"}</span>
                      <div className="relative w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center overflow-hidden group-hover:border-white transition-colors">
                         <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                         <ArrowRight className="w-5 h-5 relative z-10 text-white group-hover:text-black transition-colors" />
                      </div>
                   </button>
                </div>

             </form>
          </div>

        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Mail, Github, Linkedin, Send, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Transmission started...");
    
    const formData = new FormData(event.target);
    // Added your access key here
    formData.append("access_key", "86c1a356-7d8f-47ec-b523-6d02ef8d5996");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Transmission Received. Over & Out.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Fetch Error", error);
      setResult("Connection Failed. Retrying...");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050505] overflow-hidden text-gray-300 font-sans selection:bg-cyan-500 selection:text-black"
    >
      {/* --- OPTIMIZED BACKGROUND TEXTURES --- */}
      
      {/* 1. Static Noise Grain (Replaces heavy SVG filter) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ 
             backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
             backgroundSize: "100px 100px" 
           }}
      ></div>

      {/* 2. Radial Gradients (Replaces heavy blur-[120px]) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(8,145,178,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: CONTEXT & SOCIALS --- */}
          <div className="space-y-10">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">System Operational</span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                Initiate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Protocol.</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                Ready to collaborate on high-impact digital projects? Send a transmission and let's build the future together.
              </p>
            </div>

            {/* Contact Info Block */}
            <div className="flex flex-col gap-6">
              <a href="mailto:mrprasanthh@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-cyan-400 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email Channel</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">mrprasanthh@gmail.com</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-default">
                <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-purple-400 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Base of Operations</p>
                  <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Social Row */}
            <div className="flex gap-4">
               {[
                 { icon: Github, href: "https://github.com/prasanth369777", color: "hover:text-white hover:border-white" },
                 { icon: Linkedin, href: "https://www.linkedin.com/in/prasanth-d-/", color: "hover:text-blue-400 hover:border-blue-400" },
               ].map((social, i) => (
                 <a
                   key={i}
                   href={social.href}
                   target="_blank"
                   rel="noreferrer"
                   className={`p-4 rounded-xl bg-[#0a0a0a] border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                 >
                   <social.icon className="w-6 h-6" />
                 </a>
               ))}
            </div>

          </div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <div className="relative">
             {/* Optimized Glow behind form (Radial Gradient) */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] rounded-3xl -z-10 transform rotate-2 scale-105"></div>

             <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                <form className="space-y-6" onSubmit={onSubmit}>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest ml-1">Identity</label>
                       <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-mono text-purple-400 uppercase tracking-widest ml-1">Frequency</label>
                       <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Data Packet</label>
                     <textarea
                      name="message"
                      rows={5}
                      placeholder="Enter your message parameters here..."
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02]"
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10 flex items-center gap-2">
                       {isSubmitting ? "Transmitting..." : "Send Transmission"}
                       {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                  </button>

                  {result && (
                    <div className={`text-center p-3 rounded-lg text-sm font-mono border ${result.includes("Success") ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                      {result}
                    </div>
                  )}
                </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
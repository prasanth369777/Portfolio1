import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Clock,
} from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("mrprasanthh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-[#050505] text-zinc-400 font-sans border-t border-white/5 pt-20 pb-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* TOP */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">
              Available for work
            </span>
          </div>

          <div
            className="group relative inline-block cursor-pointer"
            onClick={handleCopy}
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter group-hover:text-zinc-500 transition-colors">
              LET&apos;S TALK
            </h2>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 font-mono text-sm font-bold shadow-2xl">
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>
                  {copied ? "COPIED TO CLIPBOARD" : "CLICK TO COPY EMAIL"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-12 pb-24">
          <div>
            <h4 className="text-white font-bold mb-6">PRASANTH D.</h4>
            <p className="text-sm max-w-xs">
              Senior UI/UX Designer & Frontend Developer focused on building
              brands and digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
              Directory
            </h4>
            <ul className="space-y-3">
              {["home", "projects", "about", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-sm hover:text-white flex items-center gap-2 group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-zinc-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React + AI",
                "UIUX Designer",
                "Digital Marketing",
                "Figma",
                "Ethical Hacking",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 border border-white/10 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-600">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Globe className="w-3 h-3" /> Coimbatore, IN
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3" /> {time} IST
            </span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white"
          >
            [ Back to Top ]
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

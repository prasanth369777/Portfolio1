import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Aura Glow Effects */}
      <div className="absolute -top-20 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow -translate-x-1/2"></div>
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-medium"></div>

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4">Let’s Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you want to discuss a project, collaborate, or just say hi,
            I’d love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl p-14 hover:shadow-indigo-500/20 transition-all duration-500">
          {/* Form */}
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>
            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all text-lg"
            >
              <Send className="w-6 h-6" />
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-14 flex justify-center gap-10">
            {[
              {
                icon: Mail,
                href: "mailto:mrprasanthh@gmail.com",
                color: "hover:text-indigo-400",
              },
              {
                icon: Github,
                href: "https://github.com/prasanth369777",
                color: "hover:text-gray-400",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/prasanth-d-/",
                color: "hover:text-blue-400",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-full bg-gray-900 border border-gray-700 transition hover:scale-110 ${social.color}`}
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, Linkedin, Github, Mail, Instagram, X } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message received. Daivik will get back to you soon!');
  };

  return (
    <section id="contact" className="py-40 px-6 bg-white overflow-hidden relative border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-block px-3 py-1 rounded bg-black text-white text-[10px] font-mono uppercase tracking-[0.3em] mb-8">
            Get In Touch
          </div>
          <h3 className="text-5xl md:text-7xl font-display font-medium mb-10 tracking-tighter leading-[0.95]">
            Let's build <br/><span className="text-gray-300">something</span> <br/><span className="italic font-light">extraordinary.</span>
          </h3>
          <p className="text-gray-500 text-lg md:text-xl max-w-sm mb-12 font-sans font-light leading-relaxed">
            Interested in collaboration or simply want to chat about literature? Drop a message.
          </p>

          <div className="space-y-8">
            <a href="mailto:daivikbhagat9797@gmail.com" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold mb-1">Direct Email</p>
                <p className="text-xl font-display font-medium">daivikbhagat9797@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <X size={20} />, href: 'https://x.com/DaivikBhagat' },
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/daivik-bhagat' },
                { icon: <Instagram size={20} />, href: 'https://www.instagram.com/daivik_bhagat97?igsh=MXc4NWRuOWt1ZDJmNw==' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-14 h-14 rounded-2xl border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full lg:w-[45%] bg-neutral-50 rounded-[3rem] p-12 lg:p-16 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-black/5"
        >
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-3">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-gray-400">Your Identity</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-transparent border-b-2 border-black/5 focus:border-black py-4 outline-none transition-all font-display text-lg px-2"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-gray-400">Email Address</label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="w-full bg-transparent border-b-2 border-black/5 focus:border-black py-4 outline-none transition-all font-display text-lg px-2"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-gray-400">The Context</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me your story..."
                className="w-full bg-transparent border-b-2 border-black/5 focus:border-black py-4 outline-none transition-all font-display text-lg px-2 resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-6 bg-black text-white rounded-2xl font-display font-bold text-sm tracking-[0.2em] uppercase shadow-2xl overflow-hidden group relative"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Send Message <Send size={16} />
              </span>
              <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </form>

          {/* Subtle decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-white/10 to-transparent blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

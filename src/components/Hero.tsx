import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const roles = ['Author', 'Editor', 'Designer', 'Developer', 'A 13 y/o boy'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden bg-premium-white">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-100/50 -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="z-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/5 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-gray-500">
              Personal Brand • 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-medium leading-[1.1] mb-8 tracking-tight">
            I'm an{' '}
            <div className="h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3}}
                  className="inline-block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-md mb-12 leading-relaxed font-sans font-light">
            Crafting cinematic stories that explore the depth of human mystery.
            A leading voice in the new generation of Indian thriller writers.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <Link to="books" smooth={true} duration={800} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-black text-white rounded-2xl overflow-hidden shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 font-display font-bold text-sm tracking-[0.1em] uppercase flex items-center gap-2">
                  Explore My Books <ArrowRight size={16} />
                </span>
              </motion.button>
            </Link>

            <Link to="about" smooth={true} duration={800} offset={-70}>
              <button className="text-sm font-display font-bold uppercase tracking-[0.2em] hover:text-gray-400 transition-colors py-2 border-b-2 border-transparent hover:border-black/10">
                The Biography
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-md mx-auto lg:max-w-none w-full"
        >
          <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden premium-shadow group">
            <img
              src="/input_file_0.png"
              alt="Daivik Bhagat"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Floating Element */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 glass p-8 rounded-[2rem] shadow-2xl max-w-[240px]"
          >
            <div className="flex flex-col gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center text-[10px] text-white font-bold">
                  +5k
                </div>
              </div>
              <p className="text-xs font-display font-bold uppercase tracking-widest text-gray-400 mt-2">Active Readers</p>
              <p className="text-sm font-sans text-gray-700 italic">"A fresh perspective on thriller suspense."</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-200 rounded-full blur-[120px] opacity-40 pointer-events-none" />
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <section id="about" className="py-32 px-6 bg-[#fcfcfc] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
        {/* Author Image Slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] aspect-square relative"
        >
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] bg-neutral-100 uppercase flex items-center justify-center group overflow-hidden">
             <img
              src="/input_file_0.png"
              alt="Daivik Bhagat Profile"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Accent Badge */}
          <div className="absolute -top-6 -right-6 glass px-6 py-6 rounded-full shadow-xl flex items-center justify-center text-center">
            <span className="text-[10px] font-mono leading-none tracking-tighter">EST.<br/><span className="text-lg font-bold">2013</span></span>
          </div>
        </motion.div>

        {/* Biography Content */}
        <div className="w-full lg:w-[55%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded bg-black/5 text-[10px] font-mono uppercase tracking-[0.3em] mb-8">
              The Profile
            </div>
            <h3 className="text-4xl md:text-6xl font-display font-medium mb-10 tracking-tighter leading-tight">
              Daivik Bhagat: <span className="text-gray-400">The Storyteller.</span>
            </h3>

            <div className="space-y-8 text-lg md:text-xl text-gray-500 leading-relaxed font-sans font-light">
              <p>
                Daivik Bhagat is a young and talented Indian author known for his gripping mystery and psychological thriller stories.
                With a natural gift for suspense and imagination beyond his years, Daivik weaves dark, emotional, and thought-provoking
                tales that keep readers hooked till the very end.
              </p>
              <p>
                At just 13, he has already written <span className="text-black font-medium">“The Murder Every Month”</span>,
                a chilling murder mystery that blends human emotion with supernatural tension.
              </p>
              <div className="py-8 my-8 relative">
                <div className="absolute left-0 top-0 w-8 h-px bg-black" />
                <p className="font-display italic text-2xl md:text-3xl text-black font-light leading-snug">
                  "Writing combines realism and imagination, making every chapter cinematic and unforgettable."
                </p>
              </div>
              <p>
                His work aims to inspire young writers to dream big, write boldly, and follow their passion no matter their age.
                Daivik's voice is one of resilience and creative courage.
              </p>
            </div>

            <div className="mt-16 pt-16 border-t border-black/5 flex flex-wrap gap-12">
              <div>
                <p className="text-3xl font-display font-bold underline decoration-black/10 underline-offset-8">13</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mt-4 font-bold">Years Young</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold underline decoration-black/10 underline-offset-8">3+</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mt-4 font-bold">Publications</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold underline decoration-black/10 underline-offset-8">Pan-India</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mt-4 font-bold">Readership</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

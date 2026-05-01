import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, ArrowRight } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'The Cold Blooded Man',
    description: 'What if you never bled again... no matter how deep the wound? For Ishaan, pain was a memory and fear, a mystery waiting to be solved.',
    link: 'https://play.google.com/store/books/details/Daivik_Bhagat_The_Cold_Blooded_Man?id=H_DCEQAAQBAJ',
    image: 'https://play.google.com/books/publisher/content/images/frontcover/H_DCEQAAQBAJ?fife=w240-h345',
    color: '#e2e8f0',
  },
  {
    id: 2,
    title: 'The Murder Every Month',
    description: 'A village where every month begins with a murder. A haunted mystery of guilt, memory, and redemption.',
    link: 'https://play.google.com/store/books/details/Daivik_Bhagat_The_Murder_Every_Month?id=t7vCEQAAQBAJ',
    image: 'https://play.google.com/books/publisher/content/images/frontcover/t7vCEQAAQBAJ?fife=w240-h345',
    color: '#cbd5e1',
  },
  {
    id: 3,
    title: 'The Notebook That Writes Future',
    description: 'What if the future could be written with a single pen? A thrilling story about a magical notebook where every wish has a price.',
    link: 'https://play.google.com/store/books/details/Daivik_Bhagat_The_Notebook_That_Writes_Future?id=ZyDJEQAAQBAJ',
    image: 'https://play.google.com/books/publisher/content/images/frontcover/ZyDJEQAAQBAJ?fife=w240-h345',
    color: '#94a3b8',
  },
];

export default function Books() {
  return (
    <section id="books" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative grain/dots pattern if desired, or just clean white */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded bg-black text-white text-[10px] font-mono uppercase tracking-[0.3em] mb-6"
            >
              Selected Bibliography
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-medium tracking-tight"
            >
              Literary <span className="text-gray-400 italic">Creations</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-sm text-sm font-sans uppercase tracking-[0.2em] font-bold leading-relaxed"
          >
            A collection of suspense and psychological depth, exploring the shadows of the human experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] mb-10 overflow-hidden rounded-[2rem] bg-neutral-100 premium-shadow">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                  <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-4">Click to Read</p>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-8 py-4 rounded-2xl font-display font-bold text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-gray-100 shadow-2xl"
                  >
                    Google Play
                  </a>
                </div>
                {/* Book spine detail */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-gray-600 transition-colors">
                    {book.title}
                  </h3>
                  <span className="text-[10px] font-mono border border-black/10 px-2 py-0.5 rounded text-gray-400">
                    #{idx + 1}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {book.description}
                </p>
                <div className="pt-6 border-t border-black/5">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black"
                  >
                    View Publication
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

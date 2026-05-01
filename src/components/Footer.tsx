export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-2xl font-display font-bold tracking-tighter italic">
          Daivik <span className="text-gray-300">Bhagat</span>
        </div>
        
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 font-bold">
          © {year} Daivik Bhagat Portfolio. Handcrafted for the next generation.
        </div>
        
        <div className="flex gap-10 text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-gray-400">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
          <a href="#" className="hover:text-black transition-colors">Socials</a>
        </div>
      </div>
    </footer>
  );
}

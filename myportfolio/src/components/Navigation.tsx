import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = ['About', 'Approach', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-500 origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <div className="text-2xl font-bold text-white tracking-tighter cursor-pointer hover:text-primary-400 transition-colors relative z-50">
          MV<span className="text-primary-500">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
           <a 
              href="https://github.com/Michelle-Vava" 
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2 border border-white/20 rounded-full text-xs font-bold text-white uppercase hover:bg-white hover:text-black transition-all hover:border-transparent flex items-center gap-2"
            >
              <Github size={14} /> GitHub
            </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black/95 z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
             {navLinks.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                  className="text-3xl font-bold text-gray-300 hover:text-primary-500 transition-colors"
                >
                  {item}
                </motion.a>
             ))}
             
             <motion.a
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               href="https://github.com/Michelle-Vava" 
               target="_blank"
               rel="noreferrer noopener"
               onClick={() => setIsOpen(false)}
               className="mt-8 px-8 py-3 border border-white/20 rounded-full text-sm font-bold text-white uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2"
             >
                <Github size={18} /> GitHub
             </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation

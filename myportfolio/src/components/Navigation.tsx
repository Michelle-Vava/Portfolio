import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
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

      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tighter cursor-pointer hover:text-primary-400 transition-colors">
          MV<span className="text-primary-500">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Approach', 'Projects', 'Contact'].map((item) => (
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
              className="px-5 py-2 border border-white/20 rounded-full text-xs font-bold text-white uppercase hover:bg-white hover:text-black transition-all hover:border-transparent"
            >
              GitHub
            </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

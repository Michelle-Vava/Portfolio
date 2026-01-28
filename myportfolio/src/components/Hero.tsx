import { PERSONAL_INFO } from '../config/constants';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect } from 'react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Create parallax effects for different layers
  const x1 = useTransform(springX, [0, 1], [-50, 50]);
  const y1 = useTransform(springY, [0, 1], [-50, 50]);
  
  const x2 = useTransform(springX, [0, 1], [30, -30]);
  const y2 = useTransform(springY, [0, 1], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values between 0 and 1
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Background Gradient Orbs with Parallax */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ x: x2, y: y2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='text-xl md:text-2xl text-primary-400 font-medium mb-6 tracking-wide'
          >
            {PERSONAL_INFO.title}
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight'
          >
            {PERSONAL_INFO.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl leading-snug font-light'
          >
            {PERSONAL_INFO.tagline}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='text-lg text-gray-400 max-w-2xl leading-relaxed mb-12 border-l-2 border-primary-500/30 pl-6'
          >
            {PERSONAL_INFO.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6"
          >
             <a href="#projects" className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest hover:bg-gray-200 transition-colors uppercase">
               View Work
             </a>
             <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest hover:border-white transition-colors uppercase">
               Contact Me
             </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-500 w-6 h-6" />
      </motion.div>
    </div>
  )
}

export default Hero

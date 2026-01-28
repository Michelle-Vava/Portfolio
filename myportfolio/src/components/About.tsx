import { ABOUT_CONTENT } from '../config/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section className='py-32 relative overflow-hidden' ref={containerRef}>
      {/* Background Micro-animation */}
      <motion.div 
        style={{ y, rotate }}
        className="absolute top-20 right-0 w-96 h-96 bg-primary-800/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className='container mx-auto px-6'>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
           <h2 className='text-xl text-primary-500 font-medium mb-12 tracking-widest uppercase'>Profile</h2>
           
           <div className="grid lg:grid-cols-12 gap-16 items-start">
             {/* Profile Image - Left Side */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="lg:col-span-4 relative group"
             >
                <div className="absolute inset-0 bg-primary-500 rounded-2xl md:translate-x-4 md:translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 opacity-20" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gray-900 group-hover:border-primary-500/30 transition-colors duration-500">
                  <img 
                    src={ABOUT_CONTENT.image} 
                    alt="Michelle Vava"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay" />
                </div>
             </motion.div>

             {/* Content - Right Side */}
             <motion.div 
               className="lg:col-span-8 space-y-8"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={{
                 hidden: { opacity: 0 },
                 visible: {
                   opacity: 1,
                   transition: {
                     staggerChildren: 0.2
                   }
                 }
               }}
             >
               <motion.h3 
                 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                 className="text-3xl md:text-5xl font-bold text-white leading-tight"
               >
                 Full-stack engineer building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">production-grade systems</span> for real-world problems.
               </motion.h3>
               
                <motion.div 
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                  className='bg-white/5 border-l-2 border-primary-500 p-8 backdrop-blur-sm'
                >
                  <p className="text-xl text-gray-300 italic">
                    "I care deeply about correctness, system boundaries, and long-term maintainability — not just shipping features."
                  </p>
                </motion.div>

               <div className="grid md:grid-cols-2 gap-8 text-gray-400 leading-relaxed text-lg">
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <p>{ABOUT_CONTENT.paragraphs[0]}</p>
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                     <p>{ABOUT_CONTENT.paragraphs[1]}</p>
                  </motion.div>
               </div>
               
               <p className="text-gray-400 text-lg leading-relaxed border-t border-white/10 pt-8 mt-4">
                 {ABOUT_CONTENT.paragraphs[2]}
               </p>
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

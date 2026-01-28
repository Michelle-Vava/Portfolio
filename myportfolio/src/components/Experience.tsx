import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE, EDUCATION, ACTIVITIES } from '../config/constants';
import { Briefcase, GraduationCap, Trophy, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Stagger animation for list items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className='py-32 relative bg-dark-950 overflow-hidden' ref={containerRef}>
      {/* Background decoration - Enhanced */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className='text-primary-500 font-medium tracking-widest uppercase mb-4'>Career Path</h2>
          <h3 className='text-4xl md:text-6xl font-bold text-white tracking-tight'>
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Impact</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-0.5 bg-white/5 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary-500 via-blue-500 to-primary-900 shadow-[0_0_15px_rgba(20,184,166,0.6)]"
            />
          </div>

          <div className="space-y-32">
            {EXPERIENCE.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot with Pulse */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-950 border border-primary-500 z-10 group shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20" />
                </div>

                {/* Content Card - Holographic Glass Effect */}
                <div className="md:w-[calc(50%-50px)] w-full ml-12 md:ml-0 group perspective-1000">
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-primary-500/30 hover:bg-white/10 overflow-hidden shadow-2xl">
                    {/* Glow Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 text-xs font-mono tracking-wide">
                           <Calendar className="w-3 h-3" /> {job.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                           <MapPin className="w-3.5 h-3.5" /> {job.location}
                        </span>
                      </div>

                      <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-200 transition-all">{job.role}</h4>
                      <h5 className="text-xl text-primary-400 mb-6 flex items-center gap-2 font-medium">
                        <Briefcase className="w-5 h-5" /> {job.company}
                      </h5>

                      <p className="text-gray-300 mb-8 leading-relaxed text-lg border-l-2 border-white/10 pl-4">
                        {job.description}
                      </p>

                      <motion.ul 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-4 mb-8"
                      >
                         {job.responsibilities.map((resp, i) => (
                           <motion.li 
                              key={i} 
                              variants={itemVariants}
                              className="flex items-start gap-4 text-gray-400 text-sm group/item"
                           >
                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover/item:bg-primary-400 group-hover/item:shadow-[0_0_8px_rgba(45,212,191,0.8)] transition-all flex-shrink-0" />
                             <span className="group-hover/item:text-gray-200 transition-colors">{resp}</span>
                           </motion.li>
                         ))}
                      </motion.ul>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                        {job.tech.map((tech) => (
                          <span key={tech} className="text-xs font-bold px-3 py-1 bg-dark-800 text-gray-300 rounded-lg border border-white/5 hover:border-primary-500/30 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-[calc(50%-50px)]" />
              </motion.div>
            ))}

            {/* Education & Activities split row */}
             <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Timeline center line continuation */}
                {/* Education */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Education</h4>
                   </div>
                   
                   <h5 className="text-lg font-bold text-white">{EDUCATION[0].institution}</h5>
                   <p className="text-primary-400 mb-2">{EDUCATION[0].degree}</p>
                   <p className="text-gray-500 text-sm">{EDUCATION[0].period} • {EDUCATION[0].location}</p>
                </motion.div>

                {/* Activities */}
                 <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-500">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Achievements</h4>
                   </div>
                   
                   <ul className="space-y-4">
                      {ACTIVITIES.map((activity, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                          <span className="text-yellow-500 mt-1">★</span> {activity}
                        </li>
                      ))}
                   </ul>
                </motion.div>
             </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;

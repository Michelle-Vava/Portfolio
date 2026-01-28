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

  return (
    <section className='py-32 relative bg-dark-950 overflow-hidden' ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className='text-primary-500 font-medium tracking-widest uppercase mb-4'>Career Path</h2>
          <h3 className='text-4xl md:text-5xl font-bold text-white'>Professional Experience</h3>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary-500 via-primary-400 to-primary-900 shadow-[0_0_15px_rgba(20,184,166,0.6)]"
            />
          </div>

          <div className="space-y-24">
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
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-4 border-dark-800 flex items-center justify-center z-10 group hover:border-primary-500 transition-colors duration-300">
                  <div className="w-3 h-3 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                </div>

                {/* Content Card */}
                <div className="md:w-[calc(50%-40px)] w-full ml-12 md:ml-0">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 group">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                       <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-primary-400 border border-primary-500/20">
                         <Calendar className="w-3.5 h-3.5" /> {job.period}
                       </span>
                       <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-400">
                         <MapPin className="w-3.5 h-3.5" /> {job.location}
                       </span>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{job.role}</h4>
                    <h5 className="text-xl text-gray-400 mb-6 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary-600" /> {job.company}
                    </h5>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                       {job.responsibilities.map((resp, i) => (
                         <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                           <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                           {resp}
                         </li>
                       ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                      {job.tech.map((tech) => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 bg-primary-500/10 text-primary-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            ))}

            {/* Education Block */}
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 items-center md:flex-row-reverse"
              >
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-4 border-dark-800 flex items-center justify-center z-10">
                   <GraduationCap className="w-5 h-5 text-gray-400" />
                </div>
                
                 <div className="md:w-[calc(50%-40px)] w-full ml-12 md:ml-0">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                       <h4 className="text-xl font-bold text-white">{EDUCATION[0].institution}</h4>
                       <p className="text-primary-400">{EDUCATION[0].degree}</p>
                       <p className="text-gray-500 text-sm mt-2">{EDUCATION[0].period} • {EDUCATION[0].location}</p>
                    </div>
                 </div>
                 <div className="hidden md:block md:w-[calc(50%-40px)]" />
             </motion.div>

             {/* Activities Block */}
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-4 border-dark-800 flex items-center justify-center z-10">
                   <Trophy className="w-5 h-5 text-yellow-500" />
                </div>
                
                 <div className="md:w-[calc(50%-40px)] w-full ml-12 md:ml-0">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                       <h4 className="text-lg font-bold text-white mb-4">Activities & Achievements</h4>
                       <ul className="space-y-3">
                          {ACTIVITIES.map((activity, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                              <span className="text-yellow-500">★</span> {activity}
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
                 <div className="hidden md:block md:w-[calc(50%-40px)]" />
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;

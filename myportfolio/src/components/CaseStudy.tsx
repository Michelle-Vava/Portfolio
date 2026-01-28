import { CASE_STUDIES } from '../config/constants';
import { motion } from 'framer-motion';
import { Server, Layout, Cpu, GitBranch } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section className='py-32 bg-dark-900 relative overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className='container mx-auto px-6 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className='text-primary-500 font-medium tracking-widest uppercase mb-4'>Deep Dives</h2>
          <h3 className='text-4xl md:text-5xl font-bold text-white mb-6'>Featured Case Studies</h3>
        </motion.div>

        <div className="space-y-40">
          {CASE_STUDIES.map((study, studyIndex) => (
            <div key={study.title} className="relative">
               {studyIndex > 0 && <div className="absolute -top-20 left-0 right-0 h-px bg-white/5" />}
               
               <div className="mb-12">
                  <h3 className='text-3xl font-bold text-white mb-2 ml-1 text-left'>{study.title}</h3>
                  <p className='text-xl text-gray-400 text-left ml-1'>{study.subtitle}</p>
               </div>

              <div className="grid lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-16">
                  {study.sections.map((section, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary-500 rounded-full inline-block"></span>
                        {section.title}
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed pl-11">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Sidebar Tech Stack */}
                <div className="lg:col-span-4">
                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="bg-white/5 border border-white/10 rounded-xl p-8 sticky top-32 backdrop-blur-sm"
                   >
                      <h4 className="text-white font-bold mb-8 flex items-center gap-2">
                        <Cpu className="text-primary-500" /> System Architecture
                      </h4>

                      <div className="space-y-8">
                        <div>
                          <h5 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Layout className="w-4 h-4" /> Frontend
                          </h5>
                          <ul className="space-y-3">
                            {study.architecture.frontend.map((item, i) => (
                              <motion.li 
                                key={i} 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (i * 0.05) }}
                                viewport={{ once: true }}
                                className="text-gray-300 text-sm flex items-start gap-2"
                              >
                                 <span className="text-primary-500 mt-1">▹</span> {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                           <h5 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Server className="w-4 h-4" /> Backend
                          </h5>
                          <ul className="space-y-3">
                            {study.architecture.backend.map((item, i) => (
                              <motion.li 
                                key={i} 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.05) }}
                                viewport={{ once: true }}
                                className="text-gray-300 text-sm flex items-start gap-2"
                              >
                                 <span className="text-primary-500 mt-1">▹</span> {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                           <h5 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <GitBranch className="w-4 h-4" /> Infrastructure
                          </h5>
                          <ul className="space-y-3">
                            {study.architecture.infrastructure.map((item, i) => (
                              <motion.li 
                                key={i} 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.05) }}
                                viewport={{ once: true }}
                                className="text-gray-300 text-sm flex items-start gap-2"
                              >
                                 <span className="text-primary-500 mt-1">▹</span> {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                   </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudy

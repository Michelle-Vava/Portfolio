import { PROJECTS } from '../config/constants';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className='py-32 relative bg-black/20'>
      <div className='container mx-auto px-6'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Selected Work</h2>
          <div className="h-1 w-20 bg-primary-500"></div>
        </motion.div>

        <div className='space-y-32'>
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className='group'
            >
              <div className='grid lg:grid-cols-12 gap-12 items-start'>
                {/* Project Info - Left Side */}
                <div className='lg:col-span-5 relative z-10'>
                  <div className="numbered-heading text-primary-500/50 text-8xl font-bold absolute -top-16 -left-10 opacity-20 pointer-events-none select-none">
                    0{index + 1}
                  </div>
                  
                  <h3 className='text-3xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-primary-400 font-medium mb-6 text-sm tracking-widest uppercase'>
                    {project.subtitle}
                  </p>
                  
                  <p className='text-gray-300 mb-8 text-lg leading-relaxed'>
                    {project.overview}
                  </p>
                  
                  <div className='space-y-6 mb-8 border-l border-white/10 pl-6'>
                    <div>
                      <h4 className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-2'>The Challenge</h4>
                      <p className='text-gray-400 text-sm leading-relaxed'>{project.problem}</p>
                    </div>
                    <div>
                      <h4 className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-2'>The Outcome</h4>
                      <p className='text-gray-400 text-sm leading-relaxed'>{project.outcome}</p>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2 mb-8'>
                    {project.tech.map((tech, i) => (
                      <span key={i} className='px-3 py-1 bg-white/5  text-xs text-gray-400 border border-white/10 font-mono'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-6 items-center'>
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        className='flex items-center gap-2 text-white font-bold text-sm tracking-wide hover:text-primary-400 transition-colors group/link'
                      >
                        Visit Site <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        className='flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors'
                      >
                         <Github className="w-4 h-4" /> Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Visual/Preview - Right Side */}
                <div className='lg:col-span-7 mt-8 lg:mt-0'>
                  <div className='aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-white/10 relative group-hover:border-primary-500/30 transition-colors'>
                    {/* Project images or placeholder */}
                    {/* @ts-ignore - images property exists on some projects */}
                    {project.images?.length > 0 ? (
                      <div className="absolute inset-0 flex items-center justify-center p-6 gap-4 bg-gray-900/50 backdrop-blur-sm">
                        {/* @ts-ignore - images property is array of strings */}
                        {project.images.slice(0, 3).map((img, i) => (
                          <div key={i} className="h-full relative shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 100}ms` }}>
                             <img 
                               src={img} 
                               alt={`${project.title} screen ${i+1}`} 
                               className="h-full w-auto object-contain rounded-xl border border-white/10" 
                             />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-sm">
                         [Project Screenshot: {project.title}]
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

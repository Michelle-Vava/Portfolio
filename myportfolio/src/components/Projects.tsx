import { PROJECTS, CASE_STUDIES } from '../config/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import CaseStudyModal from './CaseStudyModal';

// Define the Project interface based on content in constants.ts
interface Project {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  links: {
    live?: string;
    github?: string;
    pdf?: string;
  };
  overview: string;
  problem: string;
  outcome: string;
  tech: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof CASE_STUDIES[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject || selectedCaseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject, selectedCaseStudy]);

  const openGallery = (project: Project) => {
    if (project.images?.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
    }
  };

  const openCaseStudy = (title: string) => {
    const study = CASE_STUDIES.find(s => s.title === title);
    if (study) {
      setSelectedCaseStudy(study);
    }
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextImage, prevImage]);

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
                    {project.links.pdf && (
                      <button 
                        onClick={() => openCaseStudy(project.title)}
                        className='flex items-center gap-2 text-white font-bold text-sm tracking-wide hover:text-primary-400 transition-colors group/link cursor-pointer'
                      >
                         View Case Study <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
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
                  <motion.div 
                    className={`aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 relative ${
                      project.images?.length > 0 ? 'cursor-none group/cursor' : ''
                    }`}
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    onClick={() => openGallery(project)}
                  >
                    {/* Background styling */}
                    <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-black opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
                    
                    {/* Custom Cursor Follower Hint */}
                    {project.images?.length > 0 && (
                      <div className="pointer-events-none absolute inset-0 z-50 opacity-0 group-hover/cursor:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-primary-500/90 text-black font-bold px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 transform translate-y-4 group-hover/cursor:translate-y-0 transition-transform">
                             <Maximize2 size={16} /> View Gallery
                          </div>
                      </div>
                    )}

                    {project.images?.length > 0 ? (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {project.images.slice(0, 3).map((img, i) => {
                          const total = Math.min(project.images.length, 3);
                          const offset = i - (total - 1) / 2;
                          
                          return (
                            <motion.img
                              key={i}
                              src={img}
                              alt={`${project.title} preview ${i+1}`}
                              className="absolute h-[55%] lg:h-[65%] w-auto object-contain rounded-lg shadow-2xl border border-white/5 bg-gray-900"
                              variants={{
                                initial: { 
                                  x: `${offset * 15}%`, 
                                  y: 0,
                                  rotate: offset * -5,
                                  scale: 0.9,
                                  zIndex: total - Math.abs(offset),
                                  filter: 'brightness(0.8) blur(0.5px)'
                                },
                                hover: { 
                                  x: `${offset * 40}%`, 
                                  y: -10,
                                  rotate: 0,
                                  scale: 1,
                                  zIndex: 10 + i,
                                  filter: 'brightness(1) blur(0px)',
                                  transition: { 
                                    type: 'spring', 
                                    stiffness: 150, 
                                    damping: 20 
                                  }
                                }
                              }}
                              animate={{ 
                                y: [0, -5, 0],
                                transition: { 
                                  duration: 3 + i, 
                                  repeat: Infinity, 
                                  ease: "easeInOut",
                                  delay: i * 0.5
                                }
                              }}
                            />
                          )
                        })}
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-sm">
                         [Project Screenshot: {project.title}]
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 z-50 rounded-full hover:bg-white/10 transition-colors"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            {selectedProject.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50 hidden md:block"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50 hidden md:block"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            {/* Main Image Container */}
            <div 
              className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode='wait'>
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]}
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

              {/* Progress/Counter */}
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                 <div className="flex justify-center gap-2">
                   {selectedProject.images.map((_: string, idx: number) => (
                     <button
                       key={idx}
                       onClick={() => setCurrentImageIndex(idx)}
                       className={`w-2 h-2 rounded-full transition-colors ${
                         idx === currentImageIndex ? 'bg-primary-500' : 'bg-gray-700 hover:bg-gray-500'
                       }`}
                       aria-label={`Go to slide ${idx + 1}`}
                     />
                   ))}
                 </div>
                 <p className="text-gray-500 text-sm mt-2">
                   {currentImageIndex + 1} / {selectedProject.images.length}
                 </p>
              </div>
            </div>
          </motion.div>
        )}

        {selectedCaseStudy && (
          <CaseStudyModal 
            study={selectedCaseStudy} 
            onClose={() => setSelectedCaseStudy(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects;

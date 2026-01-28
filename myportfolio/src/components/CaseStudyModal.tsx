import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface CaseStudyModalProps {
  study: {
    title: string;
    subtitle: string;
    architecture: {
      frontend: string[];
      backend: string[];
      infrastructure: string[];
    };
    sections: {
      title: string;
      content: string;
    }[];
  };
  onClose: () => void;
}

const CaseStudyModal = ({ study, onClose }: CaseStudyModalProps) => {

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-dark-900 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="p-8 border-b border-white/10 bg-dark-900/95 backdrop-blur z-10 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{study.title}</h2>
            <p className="text-primary-400 font-medium">{study.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 custom-scrollbar">
          
           {/* Tech Stack Grid */}
           <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                <h4 className="text-primary-400 font-bold mb-3 text-sm uppercase tracking-wide">Frontend</h4>
                <ul className="space-y-2">
                  {study.architecture.frontend.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                <h4 className="text-blue-400 font-bold mb-3 text-sm uppercase tracking-wide">Backend</h4>
                <ul className="space-y-2">
                  {study.architecture.backend.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                <h4 className="text-purple-400 font-bold mb-3 text-sm uppercase tracking-wide">Infrastructure</h4>
                <ul className="space-y-2">
                  {study.architecture.infrastructure.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
           </div>

           {/* Content Sections */}
           <div className="space-y-12">
             {study.sections.map((section, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="relative pl-6 border-l-2 border-white/10 hover:border-primary-500/50 transition-colors duration-300"
               >
                 <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                 <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
               </motion.div>
             ))}
           </div>
           
           <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
             <button 
               onClick={onClose}
               className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-colors border border-white/10"
             >
               Close Case Study
             </button>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyModal;

import { ABOUT_CONTENT } from '../config/constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className='py-32 relative'>
      <div className='container mx-auto px-6'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
           <h2 className='text-xl text-primary-500 font-medium mb-12 tracking-widest uppercase'>Profile</h2>
           
           <div className="grid lg:grid-cols-12 gap-16 items-start">
             {/* Profile Image - Left Side */}
             <div className="lg:col-span-4 relative group">
                <div className="absolute inset-0 bg-primary-500 rounded-2xl md:translate-x-4 md:translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 opacity-20" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                  <img 
                    src={ABOUT_CONTENT.image} 
                    alt="Michelle Vava"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay" />
                </div>
             </div>

             {/* Content - Right Side */}
             <div className="lg:col-span-8 space-y-8">
               <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                 Full-stack engineer building <span className="text-gray-500">production-grade systems</span> for real-world problems.
               </h3>
               
                <div className='bg-white/5 border-l-2 border-primary-500 p-8'>
                  <p className="text-xl text-gray-300 italic">
                    "I care deeply about correctness, system boundaries, and long-term maintainability — not just shipping features."
                  </p>
                </div>

               <div className="grid md:grid-cols-2 gap-8 text-gray-400 leading-relaxed text-lg">
                  <div>
                    <p>{ABOUT_CONTENT.paragraphs[0]}</p>
                  </div>
                  <div>
                     <p>{ABOUT_CONTENT.paragraphs[1]}</p>
                  </div>
               </div>
               
               <p className="text-gray-400 text-lg leading-relaxed border-t border-white/10 pt-8 mt-4">
                 {ABOUT_CONTENT.paragraphs[2]}
               </p>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

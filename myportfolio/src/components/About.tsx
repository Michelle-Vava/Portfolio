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
          className="max-w-4xl mx-auto"
        >
           <h2 className='text-xl text-primary-500 font-medium mb-8 tracking-widest uppercase'>Profile</h2>
           
           <div className="space-y-8">
             <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
               Full-stack engineer building <span className="text-gray-500">production-grade systems</span> for real-world problems.
             </h3>
             
              <div className='bg-white/5 border-l-2 border-primary-500 p-8 my-10'>
                <p className="text-xl text-gray-300 italic">
                  "I care deeply about correctness, system boundaries, and long-term maintainability — not just shipping features."
                </p>
              </div>

             <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed text-lg">
                <div>
                  <p className="mb-6">{ABOUT_CONTENT.paragraphs[0]}</p>
                </div>
                <div>
                   <p>{ABOUT_CONTENT.paragraphs[1]}</p>
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

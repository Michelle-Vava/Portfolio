import { APPROACH_CONTENT } from '../config/constants';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Approach = () => {
  return (
    <section className='py-32 bg-black/40 border-y border-white/5'>
      <div className='container mx-auto px-6'>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-xl text-primary-500 font-medium mb-6 tracking-widest uppercase'>Methodology</h2>
            <h3 className='text-4xl font-bold text-white mb-8'>How I Approach Problems</h3>
            
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed mb-12">
               {APPROACH_CONTENT.paragraphs.map((p, i) => (
                <p key={i}>{p.replace(/\*\*/g, '')}</p>
              ))}
            </div>

             <div className="p-8 bg-gradient-to-br from-primary-900/20 to-transparent border border-primary-900/50 rounded-lg">
               <p className='text-gray-300 italic text-lg'>"{APPROACH_CONTENT.conclusion}"</p>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='grid sm:grid-cols-1 gap-4'
          >
            <h4 className="text-gray-500 font-bold mb-4 uppercase tracking-wider">Core Priorities</h4>
            {APPROACH_CONTENT.priorities.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10 }}
                className='bg-white/5 border border-white/10 p-6 rounded-lg flex items-center gap-4 hover:border-primary-500/50 hover:bg-white/10 transition-all cursor-default'
              >
                <CheckCircle2 className="text-primary-500 w-6 h-6 flex-shrink-0" />
                <span className="text-white font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Approach

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, Check, ArrowRight } from 'lucide-react';

interface ContactProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

const Contact = ({ githubUrl, linkedinUrl, email }: ContactProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className='py-32 relative overflow-hidden'>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-dark-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className='text-primary-500 font-medium tracking-widest uppercase mb-6'>Next Steps</h2>
          <h3 className='text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight'>
            Let's build something <br/> 
            <span className="text-gray-500">exceptional.</span>
          </h3>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and open to full-time opportunities. 
            If you need a system built with care and precision, let's talk.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
             {/* Email Card */}
             <button 
                onClick={handleCopyEmail}
                className="group relative flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 hover:border-primary-500/50 transition-all cursor-pointer w-full md:w-auto justify-center"
             >
                <div className="p-2 bg-white/5 rounded-full text-primary-500">
                  <Mail size={20} />
                </div>
                <span className="text-lg text-white font-medium">{email}</span>
                <div className="ml-2 text-gray-500 group-hover:text-white transition-colors">
                  {copied ? <Check size={18} className="text-primary-500" /> : <Copy size={18} />}
                </div>
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary-500 text-sm font-medium bg-black/90 px-3 py-1 rounded border border-primary-500/20">
                    Copied!
                  </span>
                )}
             </button>

             <a 
               href={`mailto:${email}`}
               className="flex items-center gap-2 text-white font-bold bg-primary-600 hover:bg-primary-500 px-8 py-5 rounded-full transition-all w-full md:w-auto justify-center shadow-lg shadow-primary-900/20"
             >
               Send Message <ArrowRight size={18} />
             </a>
          </div>

          <div className='flex justify-center gap-12 border-t border-white/10 pt-12'>
            <a 
              href={githubUrl} 
              target='_blank' 
              rel='noreferrer noopener' 
              className='flex flex-col items-center gap-2 group'
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all text-gray-400">
                <Github size={24} />
              </div>
              <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">GitHub</span>
            </a>
            
            <a 
              href={linkedinUrl} 
              target='_blank' 
              rel='noreferrer noopener' 
              className='flex flex-col items-center gap-2 group'
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-all text-gray-400">
                <Linkedin size={24} />
              </div>
              <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
          </div>
          
          <div className="mt-20 text-gray-600 text-sm">
             <p>&copy; {new Date().getFullYear()} Michelle Vava. Built with React, Tailwind, & Framer Motion.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

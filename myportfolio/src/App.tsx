import { lazy, Suspense, useState, useEffect } from 'react';
import Hero from './components/Hero'
import About from './components/About'
import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import { PERSONAL_INFO } from './config/constants'
import { AnimatePresence } from 'framer-motion';

// Lazy load heavy components below the fold
const Approach = lazy(() => import('./components/Approach'));
const Projects = lazy(() => import('./components/Projects'));
const CaseStudy = lazy(() => import('./components/CaseStudy'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div className="py-32 flex justify-center items-center">
    <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f0d] via-[#0d1511] to-[#050a08]">
      <AnimatePresence mode='wait'>
        {showIntro && <Introduction onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      
      {!showIntro && (
        <Navigation />
      )}
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <Suspense fallback={<LoadingFallback />}>
          <section id="approach">
            <Approach />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="case-study">
            <CaseStudy />
          </section>
          
          <section id="contact">
            <Contact 
              githubUrl={PERSONAL_INFO.githubUrl}
              linkedinUrl={PERSONAL_INFO.linkedinUrl}
              email={PERSONAL_INFO.email}
            />
          </section>
        </Suspense>
      </main>
    </div>
  )
}

export default App

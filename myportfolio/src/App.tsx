import Hero from './components/Hero'
import About from './components/About'
import Approach from './components/Approach'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import { PERSONAL_INFO } from './config/constants'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f0d] via-[#0d1511] to-[#050a08]">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero {...PERSONAL_INFO} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
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
      </main>
    </div>
  )
}

export default App

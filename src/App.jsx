import { useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-primary via-secondary to-primary overflow-x-hidden">
      {/* Professional background gradient overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10">
        <div id="home" className="min-h-screen">
          <Hero setActiveSection={setActiveSection} />
        </div>
        <div id="about" className="min-h-screen">
          <About />
        </div>
        <div id="skills" className="min-h-screen">
          <Skills />
        </div>
        <div id="projects" className="min-h-screen">
          <Projects />
        </div>
        <div id="certificates" className="min-h-screen">
          <Certificates />
        </div>
        <div id="contact" className="min-h-screen">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

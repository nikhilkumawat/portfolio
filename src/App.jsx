import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-apple-gray-900 text-apple-gray-400 py-8 text-center">
        <p className="text-sm">© 2024 Nikhil Kumawat. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

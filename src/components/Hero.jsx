import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold text-apple-gray-900 mb-6 tracking-tight">
            Nikhil Kumawat
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl text-apple-gray-500 mb-8 font-medium"
          >
            Senior Software Engineer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-apple-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            8+ years of experience building scalable software solutions, leading teams, and delivering impactful products that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-apple-blue-500 text-white rounded-full font-medium hover:bg-apple-blue-600 transition-colors text-lg"
            >
              Get in Touch
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-apple-gray-200 text-apple-gray-900 rounded-full font-medium hover:bg-apple-gray-300 transition-colors text-lg"
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24"
        >
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex flex-col items-center text-apple-gray-400 hover:text-apple-gray-600 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

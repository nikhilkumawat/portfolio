import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-apple-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-apple-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-apple-gray-500">
            I'm always open to discussing new opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-apple-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-apple-gray-600 mb-8 leading-relaxed">
                I'm currently based in Ajmer, Rajasthan, India and open to opportunities worldwide. 
                Feel free to reach out if you'd like to discuss a project or just say hello.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:nikhilkumawat.ksg@gmail.com"
                  className="flex items-center gap-4 text-apple-gray-600 hover:text-apple-blue-500 transition-colors group"
                >
                  <div className="w-12 h-12 bg-apple-gray-100 rounded-full flex items-center justify-center group-hover:bg-apple-blue-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-apple-gray-900">Email</p>
                    <p className="text-sm">nikhilkumawat.ksg@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/nikhil-kumawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-apple-gray-600 hover:text-apple-blue-500 transition-colors group"
                >
                  <div className="w-12 h-12 bg-apple-gray-100 rounded-full flex items-center justify-center group-hover:bg-apple-blue-500 group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-apple-gray-900">LinkedIn</p>
                    <p className="text-sm">linkedin.com/in/nikhil-kumawat</p>
                  </div>
                </a>

                <a
                  href="https://github.com/nikhilkumawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-apple-gray-600 hover:text-apple-blue-500 transition-colors group"
                >
                  <div className="w-12 h-12 bg-apple-gray-100 rounded-full flex items-center justify-center group-hover:bg-apple-blue-500 group-hover:text-white transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-apple-gray-900">GitHub</p>
                    <p className="text-sm">github.com/nikhilkumawat</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-apple-gray-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="text-apple-gray-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-apple-gray-900 mb-1">Location</p>
                    <p className="text-apple-gray-600">Ajmer, Rajasthan, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-apple-gray-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-apple-gray-900 mb-1">Availability</p>
                    <p className="text-apple-gray-600">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center pt-8 border-t border-apple-gray-200"
          >
            <a
              href="mailto:nikhilkumawat.ksg@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-apple-blue-500 text-white rounded-full font-medium hover:bg-apple-blue-600 transition-colors text-lg"
            >
              <Mail size={20} />
              Send me a message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

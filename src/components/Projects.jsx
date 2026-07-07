import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: 'Microservices Platform',
      description: 'Built a scalable microservices architecture handling 10M+ daily requests with auto-scaling capabilities',
      technologies: ['Go', 'Kubernetes', 'AWS', 'gRPC', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Developed a real-time data visualization platform processing 1M+ events per second',
      technologies: ['React', 'Node.js', 'Kafka', 'Redis', 'WebSocket'],
      link: '#',
      github: '#'
    },
    {
      title: 'E-commerce API Gateway',
      description: 'Designed and implemented an API gateway with rate limiting, caching, and authentication',
      technologies: ['TypeScript', 'Express', 'Redis', 'JWT', 'Docker'],
      link: '#',
      github: '#'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Created automated deployment pipelines reducing deployment time by 70%',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
      link: '#',
      github: '#'
    },
    {
      title: 'Machine Learning Model Serving',
      description: 'Built a model serving infrastructure for ML predictions with sub-100ms latency',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS Lambda'],
      link: '#',
      github: '#'
    },
    {
      title: 'Distributed Task Queue',
      description: 'Implemented a distributed task processing system with fault tolerance and retry mechanisms',
      technologies: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-apple-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-apple-gray-500">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="bg-apple-gray-50 rounded-2xl p-6 hover:bg-apple-gray-100 transition-colors group"
            >
              <h3 className="text-xl font-semibold text-apple-gray-900 mb-3 group-hover:text-apple-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-apple-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white text-apple-gray-600 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-apple-blue-500 hover:text-apple-blue-600 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-apple-gray-600 hover:text-apple-gray-900 text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

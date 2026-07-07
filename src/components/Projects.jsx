import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: 'BNY Loan Restructuring & Fees Processing',
      description: 'Automated back-office Loan Restructuring, Commitment Increase, and Unscheduled Fees Processing operations, replacing manual Ops-user-driven transactions with web applications and automated schedulers.',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'Microsoft SQL', 'Solvas', 'Snowflake', 'Angular', 'GitLab CI/CD'],
      link: '#',
      github: '#'
    },
    {
      title: 'JPMorgan Chase ETL Migration',
      description: 'Large-scale migration of 15+ Informatica PowerCenter workflows to Java + Apache Spark data pipelines for Capital Markets data infrastructure, processing millions of records.',
      technologies: ['Java', 'Apache Spark', 'Oracle SQL', 'Informatica PowerCenter', 'AWS S3'],
      link: '#',
      github: '#'
    },
    {
      title: 'Goldman Sachs Real-time Analytics',
      description: 'Built high-throughput data integration pipelines ingesting third-party vendor data into MemSQL distributed database, exposing live analytics through Qlik Sense dashboards.',
      technologies: ['Java', 'Scala', 'Spring Boot', 'Apache Kafka', 'Apache Spark', 'MemSQL', 'Qlik Sense'],
      link: '#',
      github: '#'
    },
    {
      title: 'Walgreens Space/Floor Planning',
      description: 'Developed comprehensive Space/Floor Planogram Management System enabling store personnel to design, manage, and optimize store layouts for maximum product visibility.',
      technologies: ['Core Java', 'Spring Boot', 'MySQL', 'Oracle SQL', 'JDA Space Planning', 'C#'],
      link: '#',
      github: '#'
    },
    {
      title: 'Shree Cement Process Automation',
      description: 'Built custom internal web applications to digitize and automate internal operational processes, replacing manual reporting with interactive data visualizations.',
      technologies: ['Core Java', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'MySQL', 'Oracle SQL', 'Chart.js', 'D3.js'],
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

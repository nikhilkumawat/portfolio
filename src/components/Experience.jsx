import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      description: [
        'Led a team of 5 engineers in developing microservices architecture',
        'Reduced system latency by 40% through optimization initiatives',
        'Implemented CI/CD pipelines improving deployment frequency by 3x',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Innovation Labs',
      location: 'Bangalore, India',
      period: '2018 - 2021',
      description: [
        'Developed RESTful APIs serving 1M+ daily requests',
        'Built real-time data processing pipelines using Kafka',
        'Collaborated with product team to deliver features on agile sprints',
        'Improved test coverage from 60% to 95%'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'StartupXYZ',
      location: 'Mumbai, India',
      period: '2016 - 2018',
      description: [
        'Developed full-stack web applications using React and Node.js',
        'Participated in database design and optimization',
        'Contributed to open-source projects used by the team',
        'Implemented responsive UI components following design guidelines'
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-apple-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-apple-gray-500">
            8+ years of professional growth
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className="relative pl-8 border-l-2 border-apple-gray-200"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-apple-blue-500 rounded-full -translate-x-[9px]" />
              
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-apple-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-apple-gray-600 mb-3">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-apple-gray-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-apple-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-apple-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

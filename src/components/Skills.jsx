import { motion } from 'framer-motion'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Scala', 'Python', 'JavaScript', 'C#', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks',
      skills: ['Spring Boot', 'Spring Cloud', 'Spring Batch', 'Microservices', 'REST API', 'Apache Spark', 'Apache Kafka', 'Angular', 'Node.js']
    },
    {
      title: 'Databases',
      skills: ['Oracle SQL', 'Microsoft SQL', 'MySQL', 'Snowflake', 'MemSQL']
    },
    {
      title: 'Cloud & AI',
      skills: ['Snowflake Dynamic Tables', 'Generative AI', 'Agentic AI', 'MCP', 'App Engine', 'Splunk']
    },
    {
      title: 'DevOps & Tools',
      skills: ['GitLab', 'GitLab CI/CD', 'Bitbucket', 'IntelliJ', 'Postman', 'JIRA', 'Swagger', 'Informatica PowerCenter']
    },
    {
      title: 'Testing & Methodology',
      skills: ['JUnit', 'Mockito', 'Agile/Scrum', 'Waterfall', 'Qlik Sense', 'Chart.js', 'D3.js']
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-apple-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-apple-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-apple-gray-500">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-apple-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-apple-gray-100 text-apple-gray-700 rounded-full text-sm"
                  >
                    {skill}
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

export default Skills

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

function Experience() {
  const experiences = [
    {
      title: 'Module Lead / Senior Software Engineer',
      company: 'Mphasis',
      location: 'India',
      period: 'Feb 2022 – Present',
      description: [
        'Promoted to Module Lead in March 2025 after 3+ years as Senior Software Engineer',
        'Leading a 6-member team delivering Loan Restructuring, Commitment Increase, and Unscheduled Fees Processing automation for BNY',
        'Built web applications and automated schedulers using Solvas, Snowflake, Spring Boot & Microservices',
        'Leveraged Agentic AI and MCPs for deep data processing, automated bug detection, and CI/CD deployment automation',
        'Conducted end-to-end production releases including stakeholder sign-offs, QA validation, and post-release monitoring'
      ]
    },
    {
      title: 'Senior Java / Spark Developer',
      company: 'JPMorgan Chase – DIT & DCM',
      location: 'India',
      period: 'Apr 2023 – May 2024',
      description: [
        'Migrated 15+ Informatica PowerCenter workflows to Java/Spark for Capital Markets data infrastructure',
        'Implemented data ingestion from Oracle tables, flat files, and CSV sources using Spark transformations',
        'Designed reusable Spark transformation libraries, reducing per-workflow development time',
        'Collaborated with data architecture teams to validate pipeline output accuracy against Informatica benchmarks'
      ]
    },
    {
      title: 'Senior Software Engineer – Data Engineering',
      company: 'Goldman Sachs – Asset & Wealth Management',
      location: 'India',
      period: 'Feb 2022 – Mar 2023',
      description: [
        'Built high-throughput data integration pipelines using Java, Scala, Kafka, and Spark into MemSQL distributed database',
        'Monitored pipeline health and implemented data quality checks for analytics dashboards',
        'Built interactive dashboards and charts in Qlik Sense/Qlik View for wealth management metrics',
        'Enhanced Spring Boot REST APIs and modified Python scripts for updated data ingestion logic'
      ]
    },
    {
      title: 'System Engineer / Assistant System Engineer',
      company: 'Tata Consultancy Services (TCS)',
      location: 'Noida, India',
      period: 'Mar 2019 – Jan 2022',
      description: [
        'Developed comprehensive Space/Floor Planogram Management System for Walgreens retail stores',
        'Troubleshot and resolved performance bottlenecks in Java applications for retail planning tools',
        'Provided L2 support with SLA-compliant turnaround for production issues',
        'Promoted Agile best practices across the team, improving sprint predictability'
      ]
    },
    {
      title: 'Graduate Engineering Trainee – Full Stack Developer',
      company: 'Shree Cement Limited',
      location: 'Ajmer, India',
      period: 'Sep 2017 – Mar 2019',
      description: [
        'Built custom internal web applications to digitize and automate internal operational processes',
        'Developed full-stack web applications from scratch (Core Java backend + HTML/CSS/JS frontend)',
        'Created interactive data visualization dashboards using Chart.js and D3.js',
        'Collaborated with QA and business users through testing cycles for production-ready quality'
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
            8+ years of professional experience
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

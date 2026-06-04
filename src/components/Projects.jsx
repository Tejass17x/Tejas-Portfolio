import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'A.I & U.I Builder',
      description: 'AI-powered drag-and-drop UI builder using React, Vite, Express.js, and Gemini AI',
      technologies: ['React', 'Vite', 'Express.js', 'Gemini AI', 'React DnD', 'Tailwind CSS'],
      features: [
        'Drag-and-drop UI canvas',
        'AI-driven code generation',
        'Live preview & code export',
        'Secure backend API layer',
      ],
      link: '#',
    },
    {
      title: 'MERN Chat Application',
      description: 'Full-stack real-time chat application with JWT authentication and persistent storage',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT'],
      features: [
        'Real-time messaging',
        'User authentication & authorization',
        'Persistent chat storage',
        'Responsive UI design',
      ],
      link: '#',
    },
    {
      title: 'Phishing Email Detector',
      description: 'AI-powered platform to analyze and detect phishing threats using NLP',
      technologies: ['Python', 'FastAPI', 'React', 'NLP', 'PostgreSQL', 'Gemini AI'],
      features: [
        'Email content analysis',
        'Risk scoring system',
        'Threat reporting',
        'AI-powered explanations',
      ],
      link: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-primary/50 to-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-xl border border-accent/20 hover:border-accent/40 p-8 transition-all overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full blur-3xl group-hover:from-accent/30 group-hover:to-blue-500/30 transition-all opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="inline-block mb-4 px-4 py-2 bg-accent text-primary rounded-lg text-sm font-semibold">
                  {project.title}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <span className="text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  className="inline-block px-6 py-2 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">Want to see more? Check out my GitHub for additional projects.</p>
          <motion.a
            href="https://github.com/Tejass17x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

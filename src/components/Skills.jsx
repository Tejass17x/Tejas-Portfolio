import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'DSA', 'C++'],
      icon: '💻',
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'HTML/CSS', 'Vite'],
      icon: '🎨',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI'],
      icon: '⚙️',
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Firebase'],
      icon: '🗄️',
    },
    {
      title: 'AI & ML',
      skills: ['TensorFlow', 'NLP', 'Supervised Learning', 'Reinforcement Learning'],
      icon: '🤖',
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
      icon: '🛠️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-secondary/50 to-primary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-accent/10 to-blue-500/10 p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-all group hover:shadow-lg hover:shadow-accent/10"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-accent">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm border border-accent/30 group-hover:bg-accent/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '3+', label: 'Major Projects' },
            { number: '5+', label: 'Certifications' },
            { number: '∞', label: 'Learning' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

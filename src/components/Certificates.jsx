import { motion } from 'framer-motion'

export default function Certificates() {
  // Add each certificate's public verification URL (Credly, NxtWave, etc.)
  const certificates = [
    {
      title: 'AWS Educate Introduction to Generative AI',
      issuer: 'Amazon',
      category: 'AI & Cloud',
      date: '2025',
      skills: ['Generative AI', 'AWS', 'Machine Learning'],
      icon: '☁️',
      verifyUrl: 'https://www.credly.com/badges/75c4b968-d092-4f05-aa40-4df9514a9863',
      verifyLabel: 'View on Credly',
    },
    {
      title: 'Model Context Protocol',
      issuer: 'NxtWave',
      category: 'Backend Development',
      date: '2025',
      skills: ['Protocols', 'Backend', 'Architecture'],
      icon: '🔧',
      verifyUrl: 'https://drive.google.com/file/d/1cH9sAmpX31Q36b5mdXdcDfZX4yjMF5Dc/view?usp=sharing',
      verifyLabel: 'Verify credential',
    },
    {
      title: 'Microsoft Power BI',
      issuer: 'Uniathena',
      category: 'Data Visualization',
      date: '2025',
      skills: ['Data Analytics', 'BI Tools', 'Visualization'],
      icon: '📊',
      verifyUrl: 'https://drive.google.com/file/d/17NdvZMsCMOOKAjkvMo7vtTUzyNBh7fGX/view?usp=sharing',
      verifyLabel: 'Verify credential',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'NxtWave',
      category: 'Frontend Development',
      date: '2025',
      skills: ['CSS', 'Responsive Design', 'UI/UX'],
      icon: '📱',
      verifyUrl: 'https://drive.google.com/file/d/1MZkwDJgDHsimMEL-3Kj-1uGfCK3K_wxp/view?usp=sharing',
      verifyLabel: 'Verify credential',
    },
    {
      title: 'Introduction to Database',
      issuer: 'NxtWave',
      category: 'Databases',
      date: '2025',
      skills: ['SQL', 'Database Design', 'Data Management'],
      icon: '🗄️',
      verifyUrl: 'https://drive.google.com/file/d/1q9rbwRxfs1t9YImRtX-nWVnklMSh61Bu/view?usp=sharing',
      verifyLabel: 'Verify credential',
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-primary/50 to-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Professional certifications demonstrating expertise and commitment to continuous learning
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-accent/10 to-blue-500/10 p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-all overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Gradient background on hover */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full blur-3xl group-hover:from-accent/30 group-hover:to-blue-500/30 transition-all opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{cert.icon}</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                    {cert.category}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer and Date */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-accent font-semibold">{cert.issuer}</span>
                  <span className="text-gray-400">{cert.date}</span>
                </div>

                {/* Skills/Topics */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/30 group-hover:bg-accent/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.verifyUrl ? (
                  <div className="mt-6 pt-4 border-t border-accent/20">
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-lg border border-accent/30 hover:bg-accent/20 hover:text-white transition-all"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {cert.verifyLabel || 'Verify credential'}
                      <span aria-hidden="true">↗</span>
                    </motion.a>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-accent/10 to-blue-500/10 p-8 rounded-xl border border-accent/20 hover:border-accent/40 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-gray-300">Professional Certifications</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-accent/10 to-blue-500/10 p-8 rounded-xl border border-accent/20 hover:border-accent/40 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl font-bold text-accent mb-2">12+</div>
            <div className="text-gray-300">Verified Skills</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function About() {
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-accent font-semibold">AI Engineer</span> from G.H Raisoni College of Engineering, pursuing a degree in Artificial Intelligence (Expected 2027). Currently advancing my backend development skills through NxtWave Academy's S.D.E program.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I genuinely enjoy <span className="text-accent font-semibold">coding, learning</span> new technologies, and solving complex problems. AI and Machine Learning are not just career interests but areas I continuously explore and improve in.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong ability to learn technical skills quickly and adapt to new tools and frameworks, I'm always eager to take on new challenges, expand my knowledge, and contribute to <span className="text-accent font-semibold">innovative AI-driven projects</span>.
            </p>

            <div className="flex gap-4 pt-6">
              <motion.a
                href="mailto:tejaspatil9028@gmail.com"
                className="px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-blue-500/10 p-8 rounded-xl border border-accent/20 backdrop-blur-sm hover:border-accent/40 transition-all"
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Quick Facts</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">▸</span>
                <span><strong>Phone:</strong> +919359782181</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">▸</span>
                <span><strong>Email:</strong> tejaspatil9028@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">▸</span>
                <span><strong>LinkedIn:</strong> /in/tejaspatil7789/</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">▸</span>
                <span><strong>GitHub:</strong> github.com/Tejass17x</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">▸</span>
                <span><strong>Location:</strong> India</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">▸</span>
                <span><strong>Education:</strong> B.E. in AI (2027)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

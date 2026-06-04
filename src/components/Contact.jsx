import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      title: 'Email',
      value: 'tejaspatil9028@gmail.com',
      link: 'mailto:tejaspatil9028@gmail.com',
      icon: '📧',
    },
    {
      title: 'Phone',
      value: '+919359782181',
      link: 'tel:+919359782181',
      icon: '📱',
    },
    {
      title: 'LinkedIn',
      value: '/in/tejaspatil7789/',
      link: 'https://www.linkedin.com/in/tejaspatil7789/',
      icon: '🔗',
    },
    {
      title: 'GitHub',
      value: 'github.com/Tejass17x',
      link: 'https://github.com/Tejass17x',
      icon: '🐙',
    },
  ]

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-secondary/50 to-primary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'm always excited to discuss technology, AI, and innovative solutions. Let's build something amazing together!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-blue-500/10 p-8 rounded-xl border border-accent/20 hover:border-accent/40 transition-all"
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Send Me a Message</h3>

            {submitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-5xl mb-4">✅</div>
                <p className="text-xl text-accent font-semibold">Message Sent!</p>
                <p className="text-gray-400 mt-2">Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-accent mb-8">Contact Information</h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group flex items-start gap-4 p-6 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all"
                whileHover={{ x: 10 }}
              >
                <span className="text-3xl">{method.icon}</span>
                <div>
                  <h4 className="text-lg font-semibold text-accent group-hover:text-white transition-colors">{method.title}</h4>
                  <p className="text-gray-300 break-all text-sm">{method.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-accent mb-4">Let's Collaborate</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you're looking for a developer, need technical consultation, or want to discuss AI and web technologies, I'm here to help and excited to connect!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

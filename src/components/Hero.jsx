import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero({ setActiveSection }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create particle system for background effect
    const particleCount = 100
    const particlesGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00d9ff,
      size: 0.1,
      sizeAttenuation: true,
      emissive: 0x00d9ff,
      opacity: 0.6,
      transparent: true,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Store particle data for animation
    const particlePositions = positions
    const particleVelocities = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      particleVelocities[i] = (Math.random() - 0.5) * 0.02
      particleVelocities[i + 1] = (Math.random() - 0.5) * 0.02
      particleVelocities[i + 2] = (Math.random() - 0.5) * 0.02
    }

    // Create lines connecting nearby particles
    const lineGeometry = new THREE.BufferGeometry()
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.3,
    })

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineSegments)

    // Lighting
    const light = new THREE.PointLight(0x06b6d4, 1)
    light.position.set(10, 10, 10)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040, 2)
    scene.add(ambientLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Update particle positions
      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] += particleVelocities[i]
        particlePositions[i + 1] += particleVelocities[i + 1]
        particlePositions[i + 2] += particleVelocities[i + 2]

        // Boundary wrapping
        if (particlePositions[i] > 10) particlePositions[i] = -10
        if (particlePositions[i] < -10) particlePositions[i] = 10
        if (particlePositions[i + 1] > 10) particlePositions[i + 1] = -10
        if (particlePositions[i + 1] < -10) particlePositions[i + 1] = 10
        if (particlePositions[i + 2] > 5) particlePositions[i + 2] = -5
        if (particlePositions[i + 2] < -5) particlePositions[i + 2] = 5
      }

      particlesGeometry.attributes.position.needsUpdate = true

      // Update lines connecting nearby particles
      const linePositions = []
      const maxDistance = 3
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particlePositions[i * 3] - particlePositions[j * 3]
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1]
          const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < maxDistance) {
            linePositions.push(
              particlePositions[i * 3], particlePositions[i * 3 + 1], particlePositions[i * 3 + 2],
              particlePositions[j * 3], particlePositions[j * 3 + 1], particlePositions[j * 3 + 2]
            )
          }
        }
      }

      if (linePositions.length > 0) {
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3))
      }

      // Slow rotation of particle system
      particles.rotation.y += 0.0001

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      // Clean up geometries
      particlesGeometry.dispose()
      lineGeometry.dispose()
      particlesMaterial.dispose()
      lineMaterial.dispose()
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        ref={containerRef}
        className="absolute inset-0 top-20 z-0"
      />

      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <motion.h1
        className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-accent to-blue-400 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Tejas Patil
      </motion.h1>

      <motion.p
        className="text-2xl md:text-3xl text-accent font-light mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Full-Stack Developer & AI Engineer
      </motion.p>

      <motion.p
        className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Transforming ideas into intelligent solutions. Specialized in React, Node.js, Python, and AI/ML integration. 
        Building scalable applications that drive business value.
      </motion.p>

        <motion.div
          className="flex gap-6 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
             <a href="https://drive.google.com/file/d/17IVlK36W7gphnJf1KOQDkBugPNnHFsPe/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
          <motion.button
            onClick={() => setActiveSection()}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
              Resume
            
          </motion.button>
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="mailto:tejaspatil9028@gmail.com"
            className="text-gray-400 hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </motion.a>
          <motion.a
            href="tel:+919359782181"
            className="text-gray-400 hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.55 1.694 2.333 3.476 4.028 4.028l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  )
}

"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="text-[#5328f3]">{icon}</div>
    <span className="text-gray-300">{text}</span>
  </div>
)

export const TryCirclePlusSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="bg-black rounded-lg shadow-lg overflow-hidden border border-white/20 relative"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="relative p-8 text-center" variants={fadeInUp}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
              background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(83, 40, 243, 0.25), transparent 100%)`,
              }}
            />
            <div className="absolute inset-0">
              <div className="h-full w-full bg-[url('/dot-matrix.svg')] opacity-5 bg-cover bg-center bg-no-repeat" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-300">
              Ready to Sign Up?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our 7-day waitlist for Co.Founder today
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <a href="/" className='z-20'>
                <motion.button
                  className="px-8 py-3 bg-[#5328f3] hover:bg-[#6942f6] text-white font-semibold rounded-md transition-colors duration-300 text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Preview Co.Founder
                </motion.button>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <FeatureItem icon={<CreditCard size={20} />} text="Credit Card Required" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
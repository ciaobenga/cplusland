"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Gift } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
     <div className="flex items-center space-x-3">
          <div className="text-[#04F9FF]">{icon}</div>
          <span className="text-gray-300 text-sm">{text}</span>
     </div>
)

export const EsoProgramsSection = () => {
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
          <section id="eso-programs" className="py-20 px-4 bg-black">
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
                                        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(4, 249, 255, 0.10), rgba(63, 173, 255, 0.15), rgba(190, 8, 255, 0.10), transparent 80%)`,
                                   }}
                              />
                              <div className="absolute inset-0">
                                   <div className="h-full w-full bg-[url('/dot-matrix.svg')] opacity-5 bg-cover bg-center bg-no-repeat" />
                              </div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#04F9FF] via-[#3FADFF] to-[#BE08FF] flex items-center justify-center gap-2">
                                   Exclusive For{" "}
                                   <img
                                        src="/logos/techstars.png"
                                        alt="Techstars"
                                        className="h-8 inline-block"
                                   />{" "}
                                   Alumni
                              </h2>
                              <p className="text-base text-gray-300 mb-8">
                                   If you're part of the Techstars Alumni Network, you're eligible for a range of tailored benefits and opportunities.
                              </p>
                              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                                   <a href="/#Preview" target="_blank" className='z-20'>
                                        <motion.button
                                             className="px-8 py-3  bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black hover:text-white font-semibold rounded-md transition-colors duration-300 text-base"
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.95 }}
                                        >
                                             Access Here
                                        </motion.button>
                                   </a>
                              </div>
                              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                   <FeatureItem icon={<Gift size={20} />} text="More Accelerator Programs Coming Soon" />
                              </div>
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     )
}
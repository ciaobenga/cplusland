'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


import { CoFounder } from '@/components/CoFounder';

export const Hero = () => {
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
     <section className="flex items-center relative -mt-[7rem] pt-40 pb-10 sm:pb-0">
          <div className="container h-full">
               <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(83, 40, 243, 0.20), transparent 80%)`,
                    }}
               />
               <div className="absolute inset-0">
                    <div className="h-full w-full bg-[url('/grid.svg')] opacity-20" />
               </div>
               <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10 space-y-6">
                    <CoFounder />
                    <div className="flex justify-center items-center py-4">
                         <p className="text-center font-medium md:text-sm text-xs px-6 py-1 text-gray-400 rounded-full bg-white/10 border border-white/25">
                              We've Officially Launched
                              <a href="https://circleplus.mn.co/" target="_blank" className="text-white font-semibold px-2">
                                   Join Waitlist &gt;
                              </a>
                         </p>
                    </div>
                    <motion.h3
                         className="text-3xl md:text-5xl font-semibold mb-8  bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-300 leading-10"
                         initial={{ opacity: 0, y: -20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                    >
                         <span className='text-[#5328f3]'>Co.Founders</span> Streamline Metrics for Startups
                    </motion.h3>
                    <motion.p
                         className="text-sm md:text-base mb-8 max-w-2xl text-white/80"
                         initial={{ opacity: 0, y: -20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                    >
                         Circle+ builds AI agents that take the drudgery out of tracking metrics so that startup founders can focus on nailing them.
                    </motion.p>
                    <a href="https://app.circleplus.io" target="_blank">
                         <motion.button
                              className="bg-[#5328f3] text-white py-2 px-6 rounded-lg text-base font-medium hover:bg-[#6942f6] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                         >
                              Preview Co.Founder
                         </motion.button>
                    </a>
               </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent"></div>
     </section>
  )
}
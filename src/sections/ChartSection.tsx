"use client"

import { Sparkles, BarChart2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export const ChartSection = () => {
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
          hidden: { y: 20, opacity: 0 },
          visible: {
               y: 0,
               opacity: 1,
               transition: {
                    type: "spring",
                    stiffness: 100,
               },
          },
     }

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
          <section className="flex items-center relative py-20">
               <div className="container">
                    <motion.div
                         className="max-w-7xl mx-auto"
                         variants={containerVariants}
                         initial="hidden"
                         animate="visible"
                    >
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                              <motion.div
                                   className="w-full bg-black p-4 sm:p-6 md:col-span-2 backdrop-blur-sm bg-opacity-80 border border-[#5328f3]/50 rounded-lg"
                                   variants={itemVariants}
                              >
                                   <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(83, 40, 243, 0.20), transparent 80%)`,
                                        }}
                                   />
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ">
                                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden ">
                                             <img
                                                  src="/desk.jpg"
                                                  width={400}
                                                  height={300}
                                                  alt="Circle+ Desk"
                                                  className="rounded-lg bg-black border border-white/50"
                                             />
                                        </div>
                                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                             <img
                                                  src="/chart_dart.jpg"
                                                  width={400}
                                                  height={300}
                                                  alt="Traction Metrics"
                                                  className="rounded-lg bg-black border border-white/50"
                                             />
                                        </div>
                                   </div>

                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                   <motion.div
                                        className="flex items-center space-x-2 bg-black rounded-md p-3 sm:p-4 hover:bg-[#5328f3] transition-colors z-20 border border-white/50 hover:border-none"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                   >
                                        <Sparkles className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                        <span className="text-white font-medium text-sm sm:text-base">Circle+ Desk</span>
                                   </motion.div>
                                   <motion.div
                                        className="flex items-center space-x-2 bg-black rounded-md p-3 sm:p-4 hover:bg-[#5328f3] transition-colors z-20 border border-white/50 hover:border-none"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                   >
                                        <BarChart2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                        <span className="text-white font-medium text-sm sm:text-base">Due Diligence</span>
                                   </motion.div>
                                   </div>

                                   <motion.div
                                        className="space-y-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                   >
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Boost Your Startup with Co.Founder</h2>
                                        <p className="text-gray-400 text-sm sm:text-base">Circle+ has a variety of core features that help you think through business wisdom about venture performance management.</p>
                                   </motion.div>
                              </motion.div>

                              <motion.div className="w-full relative md:col-span-1 backdrop-blur-sm bg-opacity-80" variants={itemVariants}>
                                   <div className="relative bg-black overflow-hidden h-full border border-[#5328f3]/50 rounded-lg">
                                        <div className="p-4 sm:p-6">
                                             <div
                                                  className="absolute inset-0 pointer-events-none"
                                                  style={{
                                                  background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(83, 40, 243, 0.20), transparent 80%)`,
                                                  }}
                                             />
                                             <div className="z-40 aspect-w-1 aspect-h-1 w-full rounded-lg overflow-hidden bg-black border border-white/50">
                                                  <img
                                                       src="/co_founder.jpg"
                                                       width={400}
                                                       height={300}
                                                       alt="Goalseek"
                                                       className=""
                                                  />
                                             </div>
                                        </div>

                                        <div className="p-4 sm:p-6">
                                             <motion.div
                                                  className="flex justify-between items-center mb-4"
                                                  initial={{ opacity: 0, y: -20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: 0.2 }}
                                             >
                                             </motion.div>

                                             <motion.div
                                                  className="mt-auto"
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: 0.4 }}
                                             >
                                                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Co.Founder Intelligence</h2>
                                                  <p className="text-gray-400 text-sm sm:text-base">Our founder-friendly pricing packages allow founders to hire a co.founder that suits their venture's stage.</p>
                                             </motion.div>
                                        </div>
                                   </div>
                              </motion.div>

                         </div>
                    </motion.div>
               </div>
          </section>
     )
}
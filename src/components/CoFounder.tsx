'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react'
import Image from 'next/image'

const InfiniteGlow = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <motion.div
      className="absolute inset-0 rounded-full"
      animate={{
        boxShadow: [
          '0 0 0 0px rgba(59, 130, 246, 0.6)',
          '0 0 0 10px rgba(59, 130, 246, 0.4)',
          '0 0 0 20px rgba(59, 130, 246, 0.2)',
          '0 0 0 30px rgba(59, 130, 246, 0)',
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    {children}
  </div>
)

export const CoFounder = () => {
     const [isOpen, setIsOpen] = useState(false)
     const [isMuted, setIsMuted] = useState(false)
     const [isHovered, setIsHovered] = useState(false)
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

     const toggleMute = () => setIsMuted(!isMuted)
     const endCall = () => setIsOpen(false)

     return (
          <div className="flex items-center justify-center py-8">
               <motion.div
                    className="relative cursor-pointer"
                    onClick={() => setIsOpen(true)}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    setMousePosition({
                         x: e.clientX - rect.left,
                         y: e.clientY - rect.top
                    })
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
               >
                    <InfiniteGlow>
                         <motion.div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-blue-500 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                              <Image
                                   src="/co_founder_icon.png"
                                   alt="Co.Founder"
                                   width={100}
                                   height={100}
                                   className="object-cover rounded-full w-full h-full"
                              />
                         </motion.div>
                    </InfiniteGlow>
                    <AnimatePresence>
                         {isHovered && (
                              <motion.div
                                   className="absolute bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap pointer-events-none flex items-center gap-2"
                                   initial={{ opacity: 0 }}
                                   animate={{
                                        opacity: 1,
                                        x: mousePosition.x + 0,
                                        y: mousePosition.y - 10
                                   }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.4 }}
                              >
                                   <Mic className="w-4 h-4" />
                                   <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent font-semibold">
                                        Click to Talk
                                   </span>
                              </motion.div>
                         )}
                    </AnimatePresence>
               </motion.div>

               <AnimatePresence>
                    {isOpen && (
                         <Dialog open={isOpen} onOpenChange={setIsOpen}>
                              <DialogContent className="sm:max-w-[80vw] md:max-w-[50vw] lg:max-w-[70vw] h-[70vh] mx-auto bg-black text-white border border-white/50">
                                   <motion.div
                                        className="h-full flex flex-col"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                   >
                                   <div className="flex-grow relative overflow-hidden rounded-lg">
                                        <div className="relative w-full h-full bg-black flex items-center justify-center">
                                             <InfiniteGlow>
                                                  <motion.div
                                                       initial={{ opacity: 0 }}
                                                       animate={{ opacity: 1 }}
                                                       transition={{ duration: 0.5 }}
                                                  >
                                                       <Image
                                                            src="/co_founder_icon.png"
                                                            alt="Co.Founder"
                                                            width={200}
                                                            height={200}
                                                            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                                                       />
                                                  </motion.div>
                                             </InfiniteGlow>
                                        </div>
                                   </div>
                                   <div className="bg-black p-2 sm:p-3 md:p-4 rounded-b-lg">
                                        <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
                                             <Button
                                                  variant="outline"
                                                  size="icon"
                                                  className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 ${isMuted ? 'bg-red-500 text-white' : 'bg-black text-white'}`}
                                                  onClick={toggleMute}
                                             >
                                                  {isMuted ? <MicOff className="h-5 w-5 sm:h-6 sm:w-6" /> : <Mic className="h-5 w-5 sm:h-6 sm:w-6" />}
                                             </Button>
                                             <Button
                                                  variant="destructive"
                                                  size="icon"
                                                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-red-500 hover:bg-red-600 text-white"
                                                  onClick={endCall}
                                             >
                                                  <PhoneOff className="h-5 w-5 sm:h-6 sm:w-6" />
                                             </Button>
                                        </div>
                                   </div>
                                   </motion.div>
                              </DialogContent>
                         </Dialog>
                    )}
               </AnimatePresence>
          </div>
     )
}
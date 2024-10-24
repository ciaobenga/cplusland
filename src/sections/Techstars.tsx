'use client'

import { motion } from 'framer-motion'

export const Techstars = () => {
     return(
          <div className="flex items-center justify-center md:my-16 my-12">
               <div className="container">
               <motion.div className="flex items-center justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}>
                    <img
                         src='/techstars.png'
                         width={400}
                         alt="Techstars '24"
                         className=''
                    />
               </motion.div>
               </div>
          </div>
     )
}
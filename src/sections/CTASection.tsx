'use client'

import React, { useRef, useEffect, useActionState } from 'react';
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useFormStatus } from 'react-dom';
import { addToNewsletter } from '@/scripts/newsletter'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-2  bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black hover:text-white font-semibold rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
    >
      <span>{pending ? 'Subscribing...' : 'Subscribe'}</span>
      <Send size={18} className="ml-2" />
    </button>
  )
}

export const CTASection = () => {
  const [state, formAction] = useActionState(addToNewsletter, null)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state && state.success && inputRef.current) {
      inputRef.current.value = ''
    }
  }, [state])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="bg-black rounded-lg p-8 shadow-lg overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-black pointer-events-none" />
          <motion.div className="relative z-10" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-300 text-center">
              From the desk of Circle+
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Stay up-to-date with Circle+ with our periodic updates & events.
            </p>
            <form action={formAction} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                ref={inputRef}
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5328f3] transition-all duration-300"
              />
              <SubmitButton />
            </form>
            {state && (
              <p className={`mt-4 text-center font-medium ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                {state.message}
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { BarChart3, Share2, Puzzle } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowControls = useAnimationControls()

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect()
      const perimeter = 2 * (width + height)

      glowControls.start({
        strokeDashoffset: [perimeter, 0],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }
      })
    }
  }, [glowControls])

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-black rounded-lg p-6 sm:p-8 shadow-lg overflow-hidden border border-[#3FADFF]/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#04F9FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3FADFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BE08FF" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke="url(#glow-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          animate={glowControls}
          style={{ strokeDasharray: "100% 100%" }}
        />
      </svg>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-[#04F9FF]">
            {icon}
          </div>
          <h3 className="text-base sm:text-base md:text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 font-light">{description}</p>
      </div>
    </motion.div>
  )
}

export const FeaturesSection = () => {
  const features = [
    {
      title: "Slice & Dice",
      description: "A collection of augmented analytical tools & measuring protocols that help you slice & dice your data using AI & customizable charts, widgets or filters.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Generate & Distribute",
      description: "In one click, report to your investors using our agile pulse snapshots that reflect your venture or portfolio performance over time.",
      icon: <Share2 size={24} />
    },
    {
      title: "Plug & Play",
      description: "Seamlessly plug & play hundreds of integrations of metrics from some of your favorite platforms such as Stripe, Quickbooks, Basecamp & more.",
      icon: <Puzzle size={24} />
    }
  ]

  return (
    <section id="Features" className="py-12 sm:py-16 md:py-18 px-4 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto">
        <motion.header className="mb-8 sm:mb-12 md:mb-16 text-center" variants={fadeInUp}>
          <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 font-medium text-[#3FADFF]">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-300 leading-tight">
            Startup Metrics Made Human
          </h2>
        </motion.header>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
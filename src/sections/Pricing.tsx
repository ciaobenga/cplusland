"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface PricingCardProps {
  title: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  isElite?: boolean
  isYearly: boolean
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  monthlyPrice,
  yearlyPrice,
  features,
  isElite = false,
  isYearly,
}) => {
  const price = isYearly ? yearlyPrice : monthlyPrice

  if (isElite) {
    return (
      <div className="relative">
        {/* Gradient border background */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#BE08FF] via-[#3FADFF] to-[#04F9FF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content with inner black background */}
        <motion.div
          className="relative bg-black rounded-xl p-8 shadow-lg m-[2px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#BE08FF] via-[#3FADFF] to-[#04F9FF]">
            {title}
          </h3>
          <p className="text-4xl font-bold">${price}</p>
          <span className="text-xs">billed {isYearly ? "yearly" : "monthly"}</span>
          <ul className="space-y-3 mt-6 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <a href="https://app.circleplus.io/handler/sign-up" target="_blank" rel="noreferrer">
            <motion.button
              className="w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black hover:text-white border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </a>
        </motion.div>
      </div>
    )
  }

  // Regular non-elite card
  return (
    <motion.div
      className="bg-black rounded-xl p-8 shadow-lg border border-[#3FADFF]/25"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-4xl font-bold">${price}</p>
      <span className="text-xs">billed {isYearly ? "yearly" : "monthly"}</span>
      <ul className="space-y-3 mt-6 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-6 h-6 text-white mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="https://app.circleplus.io/handler/sign-up" target="_blank" rel="noreferrer">
        <motion.button
          className="w-full py-3 px-4 rounded-lg text-white hover:text-white font-semibold transition-colors duration-300 bg-black hover:bg-zinc-900 border border-[#3FADFF]/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </a>
    </motion.div>
  )
}

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true) // Changed to true to make yearly the default

  return (
    <section id="Pricing" className="py-20 px-4 bg-gradient-to-b from-transparent to-black">
      <div className="container mx-auto">
        <motion.header className="mb-16 text-center" variants={fadeInUp}>
          <p className="text-sm uppercase tracking-wider mb-2 font-medium text-[#3FADFF]">Pricing</p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-300 leading-10">
            Pinch Yourself
          </h1>
          <h5 className="text-base text-white">
            Our founder-friendly pricing packages allow founders to hire a Co.Founder that suits their venture's stage.
          </h5>
        </motion.header>
        <div className="flex justify-center mb-8">
          <div className="flex items-center bg-black rounded-md p-1 border border-white/15">
            <button
              className={`px-4 py-2 rounded-sm ${!isYearly ? "bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black font-semibold hover:text-white" : "text-gray-400"}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-sm ${isYearly ? "bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black font-semibold hover:text-white" : "text-gray-400"}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-white">
          <PricingCard
            title="Circle+ Lite"
            monthlyPrice={15}
            yearlyPrice={180}
            features={[
              "For startups in the Pre-Seed to Seed stage",
              "Discover what KPIs matter for your business",
              "Automatically update your investors & due diligence material",
              "Connect your favorite integrations",
              "Make your metrics cleaner & easier to understand",
            ]}
            isYearly={isYearly}
          />
          <PricingCard
            title="Circle+ Elite"
            monthlyPrice={25}
            yearlyPrice={300}
            features={[
              "For Startups in the Series A stage onward",
              "Marry your investors' requests & your KPIs",
              "Automatically update your investors & due diligence material",
              "Connect your favorite integrations",
              "Make your metrics cleaner & easier to understand",
            ]}
            isElite={true}
            isYearly={isYearly}
          />
        </div>
      </div>
    </section>
  )
}
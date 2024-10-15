"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingCardProps {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isElite?: boolean;
  isYearly: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const PricingCard: React.FC<PricingCardProps> = ({ title, monthlyPrice, yearlyPrice, features, isElite = false, isYearly }) => {
  const price = isYearly ? monthlyPrice * 10 : monthlyPrice
  const discount = ((1 - (yearlyPrice * 12) / (monthlyPrice * 12)) * 100).toFixed(0)

  return (
    <motion.div
      className={`bg-black rounded-xl p-8 shadow-lg ${isElite ? 'border-2 border-[#5328f3]/50' : 'border border-white/25'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={`text-2xl font-bold mb-4 ${isElite ? 'text-[#5328f3]' : 'text-white'}`}>{title}</h3>
      <p className="text-4xl font-bold">${price}<span className="text-sm font-normal text-gray-400">/user</span></p>
      <span className='text-xs'>billed {isYearly ? 'yearly' : 'monthly'}</span>
      {isYearly && (
        <p className="text-sm text-green-500 mt-2">Save {discount}% compared to monthly billing</p>
      )}
      <ul className="space-y-3 mt-6 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={
          isElite ? 'https://buy.stripe.com/dR6g302E81qQefS8wx' : 'https://buy.stripe.com/28o6sqa6A0mM8Vy4gg'
        }
        target='_blank'
      >
        <motion.button
          className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors duration-300 ${
            isElite ? 'bg-[#5328f3] hover:bg-[#6942f6]' : 'bg-black hover:bg-white hover:text-black border border-white/30'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </a>
    </motion.div>
  )
}

export const PricingSection = () =>  {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black">
      <div className="container mx-auto">
        <motion.header className="mb-16" variants={fadeInUp}>
          <p className="text-sm uppercase tracking-wider mb-2 font-medium text-[#6e48fb]">
            Pricing
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-300 leading-10">
            Circle+ Co.Founder
          </h1>
        </motion.header>
        <div className="flex justify-center mb-8">
          <div className="flex items-center bg-black rounded-lg p-1 border border-white/15">
            <button
              className={`px-4 py-2 rounded-md ${!isYearly ? 'bg-[#5328f3] text-white' : 'text-gray-400'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md ${isYearly ? 'bg-[#5328f3] text-white' : 'text-gray-400'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-white">
          <PricingCard
            title="Circle+ Lite"
            monthlyPrice={35}
            yearlyPrice={29}
            features={[
              "For startups in the Pre-Seed to Seed stage",
              "Discover what KPIs matter for your business",
              "Automatically update your investors & due diligence material",
              "Connect your favorite integrations",
              "Make your metrics cleaner & easier to understand"
            ]}
            isYearly={isYearly}
          />
          <PricingCard
            title="Circle+ Elite"
            monthlyPrice={85}
            yearlyPrice={71}
            features={[
              "For Startups in the Series A stage onward",
              "Marry your investors' requests & your KPIs",
              "Automatically update your investors & due diligence material",
              "Connect your favorite integrations",
              "Make your metrics cleaner & easier to understand"
            ]}
            isElite={true}
            isYearly={isYearly}
          />
        </div>
      </div>
    </section>
  )
}
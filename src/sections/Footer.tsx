'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight, Mail } from 'lucide-react'

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </Link>
)

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    {icon}
  </a>
)

export const Footer = () => {

  return (
    <footer className="text-white container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Circle+</h3>
            <p className="text-gray-400 mb-6">Simplifying startup metrics with AI-powered solutions.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="/features">Features</FooterLink></li>
              <li><FooterLink href="/pricing">Pricing</FooterLink></li>
              <li><FooterLink href="/integrations">Integrations</FooterLink></li>
              <li><FooterLink href="/case-studies">Case Studies</FooterLink></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/blog">Blog</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Circle+. All rights reserved.</p>
          <div className="flex space-x-4">
            <SocialIcon href="https://x.com/circleplusxyz" icon={<Twitter size={20} />} />
            <SocialIcon href="https://www.linkedin.com/company/circle-plus/posts/?feedView=all" icon={<Linkedin size={20} />} />
          </div>
        </motion.div>
      </div>
      <div className="bg-black py-4">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 items-center justify-between">
          <div className="w-full space-x-4 mb-4 sm:mb-0 grid grid-cols-1 md:grid-cols-4">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/security">Security</FooterLink>
          </div>
          <div className="flex items-center text-gray-400">
            <Mail size={16} className="mr-2" />
            <a href="mailto:main@circleplus.xyz" className="hover:text-white transition-colors duration-300">main@circleplus.xyz</a>
          </div>
        </div>
      </div>
    </footer>  
  )
}
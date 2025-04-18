'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Linkedin, Github, ArrowRight, Mail } from 'lucide-react'
import { SiCrunchbase, SiDiscord, SiLinkedin, SiX } from 'react-icons/si'

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-white transition-colors duration-200"
    aria-label={label}
  >
    {icon}
  </a>
)

const CrunchbaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <circle fill="currentColor" fillOpacity="0.1" cx="12" cy="12" r="10"></circle>
    <path
      fill="currentColor"
      d="M16.3,10.72h-.22A2.14,2.14,0,0,0,14.38,12h0a2.24,2.24,0,0,0-.2.9,2.19,2.19,0,0,0,.18.85h0a2.15,2.15,0,0,0,.14.26v0a2.27,2.27,0,0,0,.37.45h0a1.75,1.75,0,0,0,.48.32l0,0A2,2,0,0,0,16,15H16l.28,0h.26a1.2,1.2,0,0,0,.2,0h0a2.07,2.07,0,0,0,.42-.14,2.13,2.13,0,0,0,1-1l0,0c0-.09.07-.18.1-.27h0a1.1,1.1,0,0,0,.06-.26.15.15,0,0,0,0-.07,1.27,1.27,0,0,0,0-.28h0A2.13,2.13,0,0,0,16.3,10.72Z"
    ></path>
    <path
      fill="currentColor"
      d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM7.7,15a2.11,2.11,0,0,0,1.92-1.23h1.66a3.7,3.7,0,1,1,0-1.75H9.65A2.13,2.13,0,1,0,7.7,15Zm11,.68a4,4,0,0,1-1.07.63,3.68,3.68,0,0,1-1.34.26,3.73,3.73,0,0,1-2.08-.64v.38H12.71V5.66h1.5V9.81A3.64,3.64,0,0,1,16,9.16h.27a3.7,3.7,0,0,1,2.41,6.51Z"
    ></path>
  </svg>
)

const AngelListIcon = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    shapeRendering="geometricPrecision"
    viewBox="0 0 20 21"
    className="w-5 h-5"
  >
    <path fill="currentColor" fillOpacity="0.01" d="M0 0h20v20H0z" vectorEffect="non-scaling-stroke"></path>
    <path
      d="M16.407 9.64c-.328-.543-.9-.893-1.72-1.052.62-1.74 1.082-3.15 1.388-4.229.307-1.08.457-1.82.457-2.227a1.872 1.872 0 0 0-.415-1.277 1.405 1.405 0 0 0-1.113-.492c-1.515 0-2.075 1.918-3.384 5.754-.182.524-.324.931-.425 1.228a49.238 49.238 0 0 0-.518-1.537C8.917.88 8.547 0 7.543 0c-.49 0-1.024.098-1.37.516-.285.344-.383.778-.383 1.35 0 .418.16 1.17.491 2.262A123.4 123.4 0 0 0 7.81 8.794a3.261 3.261 0 0 0-.629-.297 1.677 1.677 0 0 0-.518-.088c-.383 0-.791.213-1.228.648-.437.435-.648.86-.648 1.272.004.172.03.342.078.506a7.3 7.3 0 0 0 .302.815c-.62.097-1.187.41-1.599.885-.336.434-.505 1.046-.505 1.839a4.75 4.75 0 0 0 .49 2.08c.367.73.867 1.385 1.474 1.93a6.103 6.103 0 0 0 2.066 1.292 6.77 6.77 0 0 0 2.455.464c2.147 0 3.91-.736 5.29-2.21 1.38-1.473 2.07-3.376 2.07-5.707.007-1.177-.16-2.039-.5-2.584Zm-3.07-5.583c.217-.716.51-1.408.872-2.063.265-.43.523-.646.778-.646a.57.57 0 0 1 .472.221.982.982 0 0 1 .171.622c0 .245-.169.92-.51 2.013a119.855 119.855 0 0 1-1.415 4.148l-1.719-.3 1.35-3.995Zm-6.214-.115c-.316-1.051-.476-1.79-.476-2.21a.926.926 0 0 1 .182-.597.57.57 0 0 1 .464-.221c.246 0 .471.167.683.505.36.689.656 1.408.886 2.15l1.474 4.317a24.585 24.585 0 0 0-.81-.072c-.168-.01-.273-.017-.327-.017a1.095 1.095 0 0 0-.41.064.464.464 0 0 0-.231.214C7.922 6.37 7.444 4.993 7.123 3.942ZM6.11 9.745a.958.958 0 0 1 .636-.366c.285.022.552.147.752.351.32.305.591.657.805 1.044.366.601.679 1.233.936 1.888.179.391.305.804.376 1.228a.688.688 0 0 1-.192.464.56.56 0 0 1-.422.216c-.211 0-.491-.154-.848-.456a7.819 7.819 0 0 1-1.132-1.275 9.42 9.42 0 0 1-.913-1.41 2.48 2.48 0 0 1-.342-.994c.022-.266.145-.513.344-.69Zm8.055 7.453a5.735 5.735 0 0 1-4.457 2.012 5.893 5.893 0 0 1-2.633-.587 5.422 5.422 0 0 1-1.999-1.68 6.107 6.107 0 0 1-.813-1.405 3.438 3.438 0 0 1-.287-1.265 1.93 1.93 0 0 1 .398-1.228 1.133 1.133 0 0 1 .88-.518c.229.04.438.155.593.33.331.317.635.661.91 1.028.274.347.526.712.75 1.093.14.208.234.445.273.693a.462.462 0 0 1-.213.346.712.712 0 0 1-.465.165c-.508 0-1.063-.418-1.665-1.258a24.746 24.746 0 0 0-.533-.692.492.492 0 0 0-.117.201 1.002 1.002 0 0 0-.035.27c0 .545.296 1.101.89 1.668.591.567 1.175.85 1.748.85.35.006.687-.126.94-.367a1.144 1.144 0 0 0 .396-.876 1.883 1.883 0 0 0-.018-.229c-.013-.1-.034-.2-.06-.297.09.027.169.047.245.062.08.013.163.02.245.02a.594.594 0 0 0 .224-.043.72.72 0 0 0 .213-.14v.126a3.913 3.913 0 0 0 .347 1.79 1.154 1.154 0 0 0 .95.712l.027-.125v-.096a3.897 3.897 0 0 0-.213-.796 3.567 3.567 0 0 1-.212-1.1 3.097 3.097 0 0 1 .491-1.581 4.974 4.974 0 0 1 1.317-1.447c.345-.23.717-.417 1.107-.56.344-.108.667-.274.956-.49a.882.882 0 0 0-.157-.438.378.378 0 0 0-.307-.145h-.57c-1.547 0-2.667-.14-3.36-.422-.692-.282-1.038-.736-1.036-1.363a.693.693 0 0 1 .206-.568c.208-.129.453-.187.698-.164 1.136-.004 2.27.121 3.379.373 1.077.25 1.802.532 2.176.845.234.208.392.488.45.796.103.484.149.978.137 1.473 0 2.009-.599 3.685-1.796 5.027Zm-4.403-5.525c.323.123.657.216.997.277.368.068.74.11 1.113.125-.27.18-.523.381-.76.602a6.575 6.575 0 0 0-.687.754 7.183 7.183 0 0 0-.275-.877 13.01 13.01 0 0 0-.388-.881Z"
      fill="currentColor"
      vectorEffect="non-scaling-stroke"
    ></path>
  </svg>
)

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </Link>
)

export const Footer = () => {

  return (
    <footer className="text-white container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Circle+</h3>
            <p className="text-gray-400 mb-6">AI agents for startup metrics.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="https://www.foundermode.press">White Paper</FooterLink></li>
              <li><FooterLink href="https://wellfound.com/company/circleplus/jobs">Careers</FooterLink></li>
              <li><FooterLink href="/connections">Connections</FooterLink></li>
              <li><FooterLink href="/support">Circle+ Support Hub</FooterLink></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="http://www.foundermode.press">Investor Relations</FooterLink></li>
              <li><FooterLink href="http://www.foundermode.press">Articles</FooterLink></li>
              <li><FooterLink href="http://www.foundermode.press">Events</FooterLink></li>
              <li><FooterLink href="https://www.techstars.com/newsroom/techstars-oakland-powered-by-j-p-morgan-announces-spring-2024-class">Press</FooterLink></li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Circle+. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <SocialIcon
              href="https://wellfound.com/company/circleplus"
              icon={<AngelListIcon />}
              label="AngelList"
            />
            <SocialIcon
              href="https://www.crunchbase.com/organization/circle-c03b"
              icon={<SiCrunchbase />}
              label="Crunchbase"
            />
            <SocialIcon
              href="https://x.com/circleplusxyz"
              icon={<SiX size={20} />}
              label="Twitter"
            />
            <SocialIcon
              href="https://www.linkedin.com/company/circle-plus/posts/?feedView=all"
              icon={<SiLinkedin size={20} />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://discord.gg/BTp4d8qmx2"
              icon={<SiDiscord size={20} />}
              label="Discord"
            />
          </div>
        </motion.div>
      </div>
      <div className=" py-4">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row flex-col gap-2 md:items-center justify-between">
          <div className="w-full md:space-x-4 space-y-2 mb-4 text-sm grid grid-cols-1 md:grid-cols-4">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/security">Security</FooterLink>
          </div>
          <div className="flex items-center text-gray-400">
            <Mail size={16} className="mr-2" />
            <a href="mailto:main@circleplus.xyz" className="hover:text-white text-sm transition-colors duration-300">main@circleplus.xyz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
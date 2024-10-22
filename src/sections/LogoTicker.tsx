'use client'

import { motion } from 'framer-motion'

type LogoData = {
  src: string
  alt: string
  link: string
}

const logoData: LogoData[] = [
  { src: '/logos/logo_eleven_labs.png', alt: 'Eleven Labs', link: 'https://elevenlabs.io/text-to-speech' },
  { src: '/logos/logo_aws.png', alt: 'AWS', link: 'https://aws.amazon.com' },
  { src: '/logos/logo-celestial.png', alt: 'Celestial', link: 'https://celestial.com' },
  { src: '/logos/logo-apex.png', alt: 'Apex', link: 'https://apex.com' },
  { src: '/logos/logo-echo.png', alt: 'Echo', link: 'https://echo.com' },
]

export const LogoTicker = () => {
  const extendedLogoData = [...logoData, ...logoData]

  return (
    <section className="relative flex items-center pt-32 pb-16">
      <div className="container">
        <div className="flex items-center gap-6">
          <div className="flex-1 md:flex-none">
            <h2 className="text-white">Partnered with Top Innovators</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#0b150c_20%,#0b150c_80%,transparent)]">
            <motion.div
              initial={{ translateX: '-50%' }}
              animate={{ translateX: '0%' }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {extendedLogoData.map((logo, index) => (
                <a
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${logo.alt}-${index}`}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 w-auto"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
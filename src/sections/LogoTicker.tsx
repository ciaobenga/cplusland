'use client'

import { motion } from 'framer-motion'

type LogoData = {
  src: string
  alt: string
  link: string
  width: number
}

const logoData: LogoData[] = [
  { src: '/logos/logo_eleven_labs.png', alt: 'Eleven Labs', link: 'https://elevenlabs.io/text-to-speech', width:120 },
  { src: '/logos/logo_digital_ocean.png', alt: 'Digital Ocean', link: 'https://www.digitalocean.com', width: 55 },
  { src: '/logos/logo_aws_startups.png', alt: 'AWS', link: 'https://aws.amazon.com/startups', width: 120 },
  { src: '/logos/logo_intercom.png', alt: 'Intercom', link: 'https://intercom.com', width: 120 },
  { src: '/logos/logo_microsoft.png', alt: 'Microsoft Startups', link: 'https://www.microsoft.com/en-us/startups', width: 120 },
  { src: '/logos/logo_notion.png', alt: 'Notion', link: 'https://www.notion.so', width: 100 },
  { src: '/logos/logo_asana.png', alt: 'Asana', link: 'https://asana.com', width: 55 },
  { src: '/logos/logo_openai.png', alt: 'Open AI', link: 'https://openai.com', width: 120 },
]

export const LogoTicker = () => {
  const extendedLogoData = [...logoData, ...logoData]

  return (
    <section className="relative flex items-center py-14">
      <div className="container">
        <div className="flex items-center gap-6">
          <div className="flex-1 md:flex-none">
            <h2 className="text-white">Partners</h2>
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
                    width={logo.width}
                    className="object-contain"
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
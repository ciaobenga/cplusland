"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useMotionTemplate, useMotionValue, type ValueAnimationTransition } from "framer-motion"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import FeaturesVideo from "./FeaturesVideo"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const tabs = [
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Slice & Dice",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
    image: "/plug-and-play.png",
  },
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Plug & Play",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
    image: "/traction_image.png",
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Generate & Distribute",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
    image: "/product_image.png",
  },
]

const FeatureTab = (tab: (typeof tabs)[number]) => {
  // Use a key to force re-render the animation
  const [animationKey, setAnimationKey] = useState(0)
  const tabRef = useRef<HTMLDivElement>(null)

  const xPercent = useMotionValue(0)
  const yPercent = useMotionValue(0)
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercent}% ${yPercent}%, black, transparent)`

  useEffect(() => {
    if (!tabRef.current) return

    const { height, width } = tabRef.current?.getBoundingClientRect()
    const perimeter = height * 2 + width * 2
    const times = [0, width / perimeter, (width + height) / perimeter, (width * 2 + height) / perimeter, 1]
    const options: ValueAnimationTransition = {
      times: times,
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
      repeatType: "loop",
    }
    animate(xPercent, [0, 100, 100, 0, 0], options)
    animate(yPercent, [0, 0, 100, 100, 0], options)
  }, [tabRef, xPercent, yPercent])

  // Instead of trying to control the animation directly,
  // we'll force a re-render of the component on hover
  const handleTabHover = () => {
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div onMouseEnter={handleTabHover} className="w-full rounded-lg gap-2.5 flex flex-col">
      <div className="border border-[#3FADFF]/25 rounded-md flex items-center gap-2.5 p-2.5 flex-1 relative">
        <motion.div
          ref={tabRef}
          style={{
            maskImage: maskImage,
            borderRadius: "0.375rem", // equivalent to rounded-md
            borderWidth: "1.5px",
            borderStyle: "solid",
            borderImage: "linear-gradient(to right, #04F9FF, #3FADFF, #BE08FF) 1",
          }}
          className="absolute inset-0 -m-px"
        ></motion.div>
        <div className="h-12 w-12 border border-[#3FADFF]/25 rounded-md inline-flex items-center justify-center">
          {/* Use the key to force re-render on hover */}
          <DotLottieReact key={animationKey} src={tab.icon} className="h-5 w-5" autoplay />
        </div>
        <div className="font-medium">{tab.title}</div>
        {tab.isNew && (
          <div className="text-xs rounded-md px-2 py-0.5 bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black font-semibold">
            new
          </div>
        )}
      </div>
    </div>
  )
}

export const Features = () => {
  return (
    <section className="flex items-center relative py-8">
      <div className="container">
        <div className="text-white min-h-full">
          <motion.div className="max-w-7xl mx-auto" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.header className="mb-16 text-center" variants={fadeInUp}>
              <p className="text-sm uppercase tracking-wider mb-2 font-medium text-[#3FADFF]">
                It All Starts With A Metric
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-300 leading-10">
                Anticipate which metrics you should track, visualize & report.
              </h1>
            </motion.header>
            <div className="mt-10 flex flex-col gap-3 lg:flex-row">
              {tabs.map((tab) => (
                <FeatureTab {...tab} key={tab.title} />
              ))}
            </div>
            <FeaturesVideo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const GlassGlow = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <motion.div
      className="absolute inset-0 rounded-[3px]"
      animate={{
        boxShadow: [
          "0 0 0 0px rgba(190, 8, 255, 0.7)",
          "0 0 0 5px rgba(63, 173, 255, 0.6)",
          "0 0 0 10px rgba(4, 249, 255,0.5)",
        ],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    {children}
  </div>
);

export default function RippleButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <GlassGlow>
      <Button
        ref={buttonRef}
        variant="outline"
        className="border-none w-full text-white relative overflow-visible hover:text-white bg-black hover:bg-black rounded-md hover:shadow-[0_0_20px_rgba(4,249,255,0.9),0_0_30px_rgba(63,173,255,0.6),0_0_40px_rgba(190,8,255,0.4)] transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-sm bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)]"></span>
        <span className="absolute inset-[1px] rounded-sm bg-black"></span>
        <span className="relative text-[13px] z-20">Preview Co.Founder</span>
      </Button>
    </GlassGlow>
  )
}


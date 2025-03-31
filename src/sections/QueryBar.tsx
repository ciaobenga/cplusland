"use client"

import type React from "react"

import { useRef, useState, useEffect, useMemo } from "react"
import { Cable, SaveAll, Unplug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiStripe, SiAsana, SiHubspot, SiSalesforce } from "react-icons/si"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import RippleButton from "@/components/ripple-button"
import { useRouter } from "next/navigation"

// Add this after imports
const gradientBorderStyles = `
  @keyframes animateGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .gradient-border {
    position: relative;
  }

  .gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #BE08FF, #3FADFF, #04F9FF, #BE08FF);
    background-size: 300% 300%;
    animation: animateGradient 3s ease infinite;
    border-radius: 0.5rem;
    z-index: -1;
  }
  
  .dark .gradient-border::before {
    opacity: 0.8;
  }
`

type Mode = "default" | "upload" | "search"

type Connection = {
  id: string
  name: string
  icon: React.ReactNode
}

const GlassGlow = ({ children }: { children: React.ReactNode }) => (
     <div className="relative">
       <motion.div
         className="absolute inset-0 rounded-full"
         animate={{
           boxShadow: [
             "0 0 0 0px rgba(59, 130, 246, 0.3)",
             "0 0 0 10px rgba(59, 130, 246, 0.2)",
             "0 0 0 20px rgba(59, 130, 246, 0.1)",
             "0 0 0 30px rgba(59, 130, 246, 0)",
           ],
         }}
         transition={{
           duration: 1.5,
           repeat: Infinity,
           repeatType: "reverse",
         }}
       />
       {children}
     </div>
   );

export default function QueryBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()
  const [mode, setMode] = useState<Mode>("default")
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedConnection, setSelectedConnection] = useState<string | null>(null)
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  // Array of prompts to cycle through
  const prompts = useMemo(
    () => [
      "How can I help you today?",
      "Ask me anything about your Startup...",
      "Need help with your Startup metrics?",
      "What would you like to know about your customers?",
      "I can answer questions about your Startup...",
    ],
    [],
  )

  // Typewriter effect
  useEffect(() => {
    const currentPrompt = prompts[currentPromptIndex]

    if (isTyping) {
      if (charIndex < currentPrompt.length) {
        const typingTimer = setTimeout(() => {
          setDisplayText(currentPrompt.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 100) // Typing speed

        return () => clearTimeout(typingTimer)
      } else {
        setIsTyping(false)
        const pauseTimer = setTimeout(() => {
          setIsTyping(false)
        }, 15000) // Pause at the end of typing

        return () => clearTimeout(pauseTimer)
      }
    } else {
      if (charIndex > 0) {
        const deletingTimer = setTimeout(() => {
          setDisplayText(currentPrompt.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 100) // Deleting speed (faster than typing)

        return () => clearTimeout(deletingTimer)
      } else {
        setIsTyping(true)
        setCurrentPromptIndex((currentPromptIndex + 1) % prompts.length)
      }
    }
  }, [charIndex, isTyping, currentPromptIndex, prompts])

  // Add this inside the component, with the other useEffect hooks
  useEffect(() => {
    // Inject the gradient border styles
    const styleElement = document.createElement("style")
    styleElement.textContent = gradientBorderStyles
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  // Add a useEffect to toggle dark mode class on the document
  useEffect(() => {
    // Add dark mode class to document
    document.documentElement.classList.add("dark")

    return () => {
      // This is for cleanup if needed
      // document.documentElement.classList.remove('dark');
    }
  }, [])

  const connections: Connection[] = [
    {
      id: "all",
      name: "Your Connections",
      icon: <Cable className="w-4 h-4" />,
    },
    {
      id: "stripe",
      name: "Stripe",
      icon: <SiStripe className="h-3 w-3 text-[#0074D4]" />,
    },
    {
      id: "asana",
      name: "Asana",
      icon: <SiAsana className="h-3 w-3 text-[#FC636B]" />,
    },
    {
      id: "hubspot",
      name: "HubSpot",
      icon: <SiHubspot className="h-3 w-3 text-[#FF7A59]" />,
    },
    {
      id: "salesforce",
      name: "Salesforce",
      icon: <SiSalesforce className="h-3 w-3 text-[#00A1E0]" />,
    },
  ]

  // Find the selected connection object
  const selectedConnectionObj = connections.find((conn) => conn.id === selectedConnection) || connections[0]

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files))
    }
  }

  const handleSubmit = () => {
    if (files.length > 0) {
      console.log("Files:", files)
      // Here you would typically send the files to your backend
      // Reset the form after submission
      setFiles([])
      setMode("default")
    }
  }

  const renderLeftContent = ( ) => {
    return (
      <>
        <Select value={selectedConnection || "all"} onValueChange={setSelectedConnection}>
          <SelectTrigger
            id={selectedConnectionObj.id === "all" ? "connection-select-button" : ""}
            className="w-full border-1 py-2 px-3 h-auto hover:bg-transparent focus:ring-0 bg-black border rounded-md dark:border-none text-white"
          >
            <div className="flex items-center gap-3 text-sm font-medium">
              {selectedConnectionObj.icon}
              <span className="text-xs pr-2">{selectedConnectionObj.name}</span>
            </div>
          </SelectTrigger>
          <SelectContent className="w-full">
            {connections.map(
              (connection) =>
                connection.id !== "all" && (
                  <SelectItem
                    key={connection.id}
                    className="flex items-center gap-3 text-xs cursor-pointer"
                    value={connection.id}
                  >
                    <Button
                        className="w-full h-auto text-xs font-normal hover:bg-transparent"
                        variant="ghost"
                        size="icon"
                    >
                        {connection.icon}
                        <span className="text-xs text-white px-2">{connection.name}</span>
                    </Button>
                  </SelectItem>
                ),
            )}
            <div className="border-t border-gray-700 mt-2 pt-2 px-2">
              <Button
                className="w-full h-auto text-xs font-normal hover:bg-transparent"
                variant="ghost"
                size="icon"
                onClick={() => router.push("/connections")}
              >
                <Unplug className="w-4 h-4" />
                <span className="text-xs text-white px-2">View All Connections</span>
              </Button>
            </div>
          </SelectContent>
        </Select>
      </>
    )
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="w-full max-w-3xl mx-auto px-4 py-10 z-20">
        <div
          className={`relative bg-black rounded-lg shadow-md border-none px-2 md:px-0 ${
            isDragging ? "bg-zinc-800" : ""
          } gradient-border`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className=" flex flex-row items-start p-2 pt-1 sm:p-3 sm:pt-2">
            <div className="min-h-[50px] sm:min-h-[110px] w-full pt-1">
              <div className="w-full text-sm outline-none shadow-none text-white pl-1 pt-2 flex items-start">
                {displayText}
                <span className="animate-pulse px-2">|</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:p-2 py-2 w-full">
            <div className="flex-row flex items-start gap-1 bg-zinc-800 p-1 rounded-md">
              {renderLeftContent()}
            </div>
            <div className="flex justify-center md:items-end">
              <RippleButton />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import ReactPlayer from "react-player/vimeo"

// Sample video data - replace with your actual videos
const videos = [
  {
    url: "https://player.vimeo.com/video/1073251303?badge=0&autopause=0&player_id=0&app_id=58479",
    thumbnail: "/leancanvas.png",
    title: "Lean Canvas",
  },
  {
     url: "https://player.vimeo.com/video/1073492291?badge=0&autopause=0&player_id=0&app_id=58479",
     thumbnail: "/brainstorm.png",
     title: "Brainstorm",
   },
]

export default function FeaturesVideo() {
  const [hasWindow, setHasWindow] = useState(false)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // This ensures ReactPlayer only renders on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, [])

  const goToNextVideo = useCallback(() => {
    const nextIndex = (currentVideoIndex + 1) % videos.length
    setCurrentVideoIndex(nextIndex)
  }, [currentVideoIndex])

  // Set up the one-minute timer for auto-scrolling
  useEffect(() => {
    // Don't auto-scroll if a video is playing
    if (playingIndex !== null) {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      return
    }

    // Reset any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Set a new timer for one minute (60000ms)
    timerRef.current = setTimeout(() => {
      goToNextVideo()
    }, 60000)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentVideoIndex, goToNextVideo, playingIndex])

  const goToPrevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length
    setCurrentVideoIndex(prevIndex)
  }

  const handleVideoEnd = () => {
    setPlayingIndex(null)
  }

  const handleVideoClick = (index: number) => {
    setPlayingIndex(index)
    // Reset timer when user interacts
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }

  // Reset timer when user manually changes video
  const handleManualChange = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      goToNextVideo()
    }, 60000)
  }

  return (
    <div id="Preview" className="relative md:border border-[#3FADFF]/50 md:p-2.5 py-2.5 rounded-lg mt-3">

      <div className="relative">
        {/* Video carousel */}
        <div className="w-full">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`w-full transition-opacity duration-300 ${index === currentVideoIndex ? "block" : "hidden"}`}
            >
              <div className="aspect-video relative border border-[#3FADFF]/50 rounded-lg overflow-hidden">
                {hasWindow && (
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    playing={playingIndex === index}
                    controls={playingIndex === index}
                    light={playingIndex !== index ? video.thumbnail : false}
                    loop={false}
                    onClickPreview={() => handleVideoClick(index)}
                    onEnded={handleVideoEnd}
                  />
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
      {/* Video indicators */}
      <div className="flex justify-center mt-1 gap-2">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              <button
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex ? "bg-[#3FADFF] w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                onClick={() => {
                  setCurrentVideoIndex(index)
                  handleManualChange()
                }}
                aria-label={`Go to video ${index + 1}: ${video.title}`}
              />

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-white text-black text-xs py-1 px-2 rounded whitespace-nowrap">
                  {video.title}
                  {/* Triangle pointer */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
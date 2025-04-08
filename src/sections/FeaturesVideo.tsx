"use client"

import { useState, useEffect } from "react"
import ReactPlayer from "react-player/vimeo"

export default function FeaturesVideo() {
     const [hasWindow, setHasWindow] = useState(false)
     const [playing, setPlaying] = useState(false)

     // This ensures ReactPlayer only renders on the client side
     useEffect(() => {
          if (typeof window !== "undefined") {
               setHasWindow(true)
          }
     }, [])

     return (
          <div id="Preview" className="relative md:border border-[#3FADFF]/50 md:p-2.5 py-2.5 rounded-lg mt-3">
               <div className="aspect-video relative border border-[#3FADFF]/50 rounded-lg overflow-hidden">
                    {hasWindow && (
                         <>
                              <ReactPlayer
                                   url="https://player.vimeo.com/video/1073251303?badge=0&autopause=0&player_id=0&app_id=58479"
                                   width="100%"
                                   height="100%"
                                   playing={playing}
                                   controls={playing}
                                   light="/thumbnail.png"
                                   loop={false}
                                   onClickPreview={() => setPlaying(true)}
                                   onEnded={() => setPlaying(false)}
                              />
                         </>
                    )}
               </div>
          </div>
     )
}
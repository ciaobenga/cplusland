"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { WaveLoaderComponent } from "./wave-loader";

import { useSpeechInteraction } from "@/lib/useSpeechInteraction";
import { Mic, MicOff, PhoneOff, X } from "lucide-react";
import Image from "next/image";

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

export const CoFounder = () => {
  const {
    userInput,
    setUserInput,
    chatResponse,
    loading,
    isRecording,
    isTalking,
    interimTranscript,
    hasStarted,
    currentQuestion,
    // startConversation,
    startRecording,
    stopRecording,
    playAudio,
    stopAudio,
    handleUserInput,
  } = useSpeechInteraction();
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [voiceChat, setVoiceChat] = useState(false);
  const toggleCall = () => {
    startRecording();
    setVoiceChat(true);
  };
  const toggleEndCall = () => {
    stopAudio();
    stopRecording();
    setVoiceChat(false);
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const endCall = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        className="relative cursor-pointer"
        onClick={() => setIsOpen(true)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <GlassGlow>
          <motion.div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white border-none bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src="/co_founder_icon.png"
              alt="Co.Founder"
              width={100}
              height={100}
              className="object-cover rounded-full w-full h-full"
            />
          </motion.div>
        </GlassGlow>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="border-none absolute bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap pointer-events-none flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: mousePosition.x + 10,
                y: mousePosition.y - 10,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Mic className="w-4 h-4" />
              <span className="font-semibold">Click to Talk</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[80vw] md:max-w-[50vw] lg:max-w-[70vw] h-[70vh] mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur border-none">
              <motion.div
                className="h-full flex flex-col  rounded-lg overflow-hidden relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {!loading && (
                  <div className="flex-grow relative overflow-hidden rounded-t-lg">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <GlassGlow>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src="/co_founder_icon.png"
                            alt="Co.Founder"
                            width={200}
                            height={200}
                            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                          />
                        </motion.div>
                      </GlassGlow>
                    </div>
                  </div>
                )}

                {!loading ? (
                  <div className="p-2 sm:p-3 md:p-4 rounded-b-lg">
                    <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 ${
                          isMuted ? "text-red-500" : "text-white"
                        }`}
                        onClick={toggleCall}
                      >
                        {voiceChat ? (
                          <MicOff className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                          <Mic className="h-5 w-5 sm:h-6 sm:w-6" />
                        )}
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-red-500 bg-opacity-70 hover:bg-opacity-100 text-white backdrop-filter backdrop-blur-md"
                        onClick={toggleEndCall}
                      >
                        <PhoneOff className="h-5 w-5 sm:h-6 sm:w-6" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <WaveLoaderComponent />
                )}
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";

// Import Zustand store
import NextAuth from "next-auth";
import { useSession } from "next-auth/react";

import { setupAudioContext } from "@/lib/audioUtils";
// import { drawWaveform } from "@/lib/drawWaveform";
import { synthesizeSpeech } from "@/lib/tts";

import { useStore } from "../lib/cofounder/store";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const useSpeechInteraction = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [chatResponse, setChatResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isTalking, setIsTalking] = useState<boolean>(false);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [key, setKey] = useState(0);
  const audioRefs = useRef([]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [prevAudioBlob, setPrevAudioBlob] = useState<Blob | null>(null);

  const [audioUrl, setAudioUrl] = useState<string>("");
  const emptyBlob = new Blob([], { type: "application/octet-stream" });

  //   const { data: session } = useSession();
  const { conversation, addToConversation, setConversation, selectedVoice } =
    useStore(); // Use Zustand store

  const recognitionRef = useRef<any | null>(null);
  const silenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  const stopRecording = () => {
    // Stop the speech recognition
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }

    // Stop the audio playback if it is currently playing
    if (audioRef.current && isPlayingRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
      audioRef.current = null;
      isPlayingRef.current = false;
      setIsTalking(false);
    }

    // Clear any active silence timeout
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
    }

    // Prevent recording from restarting after audio ends
    isManuallyStopped.current = true; // Set the flag to true to indicate manual stop
  };

  const playAudio = async (text: string) => {
    const blob = await synthesizeSpeech(text, selectedVoice);
    setAudioBlob(blob);
    // if (audioBlob) {
    //   setAudioUrl(URL.createObjectURL(audioBlob));
    //   const audio = new Audio(audioUrl);
    //   audioRef.current = audio;

    //   isPlayingRef.current = true;
    //   setIsTalking(true);

    //   audio.oncanplaythrough = () => {
    //     const { analyser, dataArray } = setupAudioContext(audioBlob);
    //     drawWaveform(analyser, dataArray);
    //     audio.play();
    //   };

    //   audio.onended = () => {
    //     URL.revokeObjectURL(audioUrl);
    //     audioRef.current = null;
    //     isPlayingRef.current = false;
    //     setIsTalking(false);

    //     // Only restart recording if it was not manually stopped
    //     if (!isManuallyStopped.current) {
    //       setTimeout(() => startRecording(), 500);
    //     }
    //   };
    // }
  };

  useEffect(() => {
    console.log("triggered use effect");

    if (audioBlob) {
      const emptyBlobStr = URL.createObjectURL(emptyBlob);
      const audioStr = URL.createObjectURL(audioBlob);
      console.log(emptyBlobStr);
      console.log(audioStr);
    }

    if (audioBlob && !isManuallyStopped.current && audioBlob !== emptyBlob) {
      console.log("triggered use effect after check");
      const url = URL.createObjectURL(audioBlob); // Create the URL from the blob
      const audio = new Audio(url);
      audioRef.current = audio;

      isPlayingRef.current = true;
      setIsTalking(true);

      audio.oncanplaythrough = () => {
        // Set up the audio context and draw waveform if needed
        // const { analyser, dataArray } = setupAudioContext(audioBlob);
        // drawWaveform(analyser, dataArray);
        audio.play();
      };

      audio.onended = () => {
        URL.revokeObjectURL(url); // Revoke the object URL
        audioRef.current = null;
        isPlayingRef.current = false;
        setIsTalking(true);

        // Restart recording if it wasn't manually stopped
        if (!isManuallyStopped.current) {
          setTimeout(() => startRecording(), 500);
        }
      };

      return () => {
        audio.pause(); // Stop audio playback if the component unmounts
        URL.revokeObjectURL(url); // Clean up the URL
      };
    }
  }, [audioBlob]); // Only run this effect when audioBlob changes
  // useEffect(() => {
  //   // Clean up the URL when the component unmounts or audioUrl changes
  //   return () => {
  //     if (audioUrl) {
  //       URL.revokeObjectURL(audioUrl);
  //     }
  //   };
  // }, [audioUrl]);

  // A ref to track if recording was manually stopped
  const isManuallyStopped = useRef(false);

  const stopAudio = () => {
    if (audioBlob) {
      setAudioBlob(emptyBlob); // Reset the audioBlob state
      console.log("Found audio blob and stopping");

      if (audioRef.current) {
        audioRef.current.pause(); // Pause the audio playback
        console.log("pause");
        audioRef.current = null;
        console.log("current to null");
        setIsTalking(false);
        let user_id: string | null = null;

        user_id = "default";

        // Usage
        createConversation(user_id, JSON.stringify(conversation))
          .then((data) => console.log(data))
          .catch((error) => console.error(error));

        // const url = audioRef.current.src; // Get the audio URL

        // audioRef.current = null; // Clear the audio reference
        // if (url) {
        //   URL.revokeObjectURL(url); // Clean up the object URL
        //   console.log("Audio object URL revoked");
        // }

        // isPlayingRef.current = false; // Mark as no longer playing
        // setIsTalking(false); // Set talking state to false
      }
    } else {
      console.log("No audio blob to stop");
    }
  };

  const startRecording = () => {
    // Reset the manually stopped flag when starting recording
    isManuallyStopped.current = false;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
          setUserInput((prev) => prev + transcript);
        } else {
          interimTranscript += transcript;
        }
      }

      setInterimTranscript(interimTranscript);

      if (interimTranscript) {
        if (silenceTimeoutRef.current) {
          clearTimeout(silenceTimeoutRef.current);
        }

        silenceTimeoutRef.current = setTimeout(() => {
          setUserInput((prev) => prev + finalTranscript);
          recognition.stop();
          setIsRecording(false);
        }, 2000);
      }
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsRecording(true);
  };

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    const updatedConversation = [
      ...conversation,
      { role: "user", content: userInput },
    ];
    setLoading(true);

    try {
      const message = userInput;

      let user_id: string | null = null;

      user_id = "default";

      const response = await fetch("https://llm.circleplus.io/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          user_id,
          current_conversation: updatedConversation,
        }),
      });

      const data = await response.json();
      setChatResponse(data.response);

      setUserInput("");
      const nextQuestion = data.response;
      const updatedWithLLM = [
        ...updatedConversation,
        { role: "assistant", content: nextQuestion },
      ];

      setConversation(updatedWithLLM); // Use Zustand setConversation
      setCurrentQuestion(nextQuestion);
      await playAudio(nextQuestion);
    } catch (error) {
      console.error("Error submitting user input:", error);
    } finally {
      setLoading(false);
    }
  };

  async function createConversation(userId: any, messages: any) {
    const response = await fetch("/api/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        messages,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create conversation");
    }

    const newConversation = await response.json();
    return newConversation;
  }

  useEffect(() => {
    if (!isRecording && userInput.trim()) {
      handleUserInput();
    }
  }, [userInput, isRecording]);

  return {
    userInput,
    setUserInput,
    chatResponse,
    loading,
    isRecording,
    isTalking,
    interimTranscript,
    hasStarted,
    currentQuestion,
    conversation,
    startRecording,
    stopRecording,
    playAudio,
    stopAudio,
    key,
    handleUserInput,
  };
};

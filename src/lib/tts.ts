// utils/tts.ts
import axios from 'axios';
import { ElevenLabsClient } from "elevenlabs";

const ELEVENLABS_API_KEY = "sk_6b5e1045a0e2aad2967ddde8a9593a5f3f130c9df58d078a";

const elevenlabs = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY // Defaults to process.env.ELEVENLABS_API_KEY
})

// Replace with your actual Eleven Labs API key


// Helper function to check if the selected voice is valid
const isValidVoiceId = async (voice: string): Promise<boolean> => {
  try {
    // Get all available voices from Eleven Labs
    const voicesResponse = await elevenlabs.voices.getAll();
    const voices = voicesResponse.voices;

    // Check if the selected voice is in the list of available voices
    return voices.some(v => v.voice_id === voice);
  } catch (error) {
    console.error("Error fetching voices:", error);
    return false;
  }
};

// Function to synthesize speech
export const synthesizeSpeech = async (text: string, selectedVoice: string): Promise<Blob | null> => {
    // Validate the selected voice ID
  const isValid = await isValidVoiceId(selectedVoice);
  if (!isValid) {
    console.error("Invalid VoiceId:", selectedVoice);
    return null;
  }

  const headers = {
    'Accept': 'audio/mpeg',
    'xi-api-key': ELEVENLABS_API_KEY,
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify({
    text: text,
    model_id: 'eleven_multilingual_v2',
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.5
    }
  });

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}/stream`,
      body,
      {
        headers: headers,
        responseType: 'arraybuffer'  // Important for handling binary data
      }
    );

    // Convert the response data to a Blob
    const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
    return audioBlob;
  } catch (error) {
    console.error("Error synthesizing speech:", error);
    return null;
  }
};


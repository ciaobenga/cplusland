// store.ts
import { create } from 'zustand';

interface State {
  userInput: string;
  transcript: string;
  audioRef: any;
  selectedVoice: string;
  conversation: any[]; // Adjust type if needed
  setUserInput: (input: string) => void;
  setSelectedVoice: (voice: string) => void;
  setTranscript: (transcript: string) => void;
  setConversation: (messages: any[]) => void; 
  addToConversation: (message: any) => void;
  setAudioRef: (audio: any) => void;
}

export const useStore = create<State>((set) => ({
  userInput: '', 
  transcript: '',
  selectedVoice: '9BWtsMINqrJLrRacOk9x',
  audioRef: null,
  conversation: [],
  setAudioRef: (audio) => set({ audioRef: audio }),
  setUserInput: (input) => set({ userInput: input }),
  setSelectedVoice: (voice) => set({ selectedVoice: voice }),
  setTranscript: (transcript) => set({ transcript }),
  setConversation: (messages) => set({ conversation: messages }),
  addToConversation: (message) =>
    set((state) => ({ conversation: [...state.conversation, message] })),
}));

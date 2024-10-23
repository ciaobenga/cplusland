// lib/audioUtils.ts
export const setupAudioContext = (audioBlob: Blob) => {
    const audioContext = new (window.AudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
  
    const audio = new Audio(URL.createObjectURL(audioBlob));
    const audioSource = audioContext.createMediaElementSource(audio);
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
  
    audio.play();
  
    return { audioContext, analyser, dataArray };
  };
  
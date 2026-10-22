import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './MusicControls.css';

const MusicControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    setHasInteracted(true);
    
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.5;
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        preload="auto"
      />
      
      <button
        className={`music-control ${hasInteracted ? 'visible' : ''}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </>
  );
};

export default MusicControls;

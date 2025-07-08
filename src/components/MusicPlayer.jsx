import { useState, useRef, useEffect } from "react";

const MusicPlayer = ({
  audioSrc = "/videos/Vivir Mi Vida-mark Antony.mp3",
  autoplay = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      if (autoplay) {
        // Intentar reproducir automáticamente
        audio.play().catch((err) => {
          console.log("Autoplay bloqueado por el navegador:", err);
          setIsPlaying(false);
        });
      }
    };

    const handleError = () => {
      setError(true);
      setIsLoading(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("error", handleError);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [autoplay]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Error al reproducir audio:", err);
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
        <span className="text-xs">♪ Error al cargar música</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2">
      <audio ref={audioRef} src={audioSrc} preload="auto" loop>
        Tu navegador no soporta el elemento audio.
      </audio>

      <button
        onClick={togglePlayPause}
        disabled={isLoading}
        className="w-[60px] h-[30px] bg-[#806a41] border-0 rounded-[10px] text-center text-gray-200 text-[10px] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#9d7f50] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed appearance-none"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isLoading ? "..." : isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </div>
  );
};

export default MusicPlayer;

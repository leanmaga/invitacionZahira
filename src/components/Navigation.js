"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music } from "lucide-react";

const MusicPlayer = ({
  audioSrc = "/musica.mp3",
  autoplay = false,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      if (autoplay) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay bloqueado por el navegador:", err);
            setIsPlaying(false);
          });
      }
    };

    const handleError = () => {
      setError(true);
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    // Usar eventos pasivos para mejor performance
    const options = { passive: true };
    audio.addEventListener("loadeddata", handleLoadedData, options);
    audio.addEventListener("error", handleError, options);
    audio.addEventListener("play", handlePlay, options);
    audio.addEventListener("pause", handlePause, options);
    audio.addEventListener("ended", handleEnded, options);

    return () => {
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [autoplay]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio || isLoading) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
    } catch (err) {
      console.error("Error al reproducir audio:", err);
      setError(true);
      setIsPlaying(false);
    }
  };

  if (error) {
    return (
      <div
        className={`inline-flex items-center px-2 py-1 bg-red-100 text-red-800 rounded text-xs ${className}`}
      >
        <Music size={14} className="mr-1" />
        <span className="text-xs">Error</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <audio ref={audioRef} src={audioSrc} preload="auto" loop>
        Tu navegador no soporta el elemento audio.
      </audio>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlayPause}
        disabled={isLoading}
        className="flex items-center gap-1 px-3 py-1.5 bg-quince-500 hover:bg-quince-600 text-white text-xs font-medium rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <Music size={12} />
        {isLoading ? "..." : isPlaying ? "PAUSE" : "PLAY"}
      </motion.button>
    </div>
  );
};

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Detalles", href: "#details" },
  { name: "Dress Code", href: "#dresscode" },
  { name: "Ubicación", href: "#location" },
  { name: "Música", href: "#music" },
  { name: "RSVP", href: "#rsvp" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil cuando se hace click en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar fijo siempre arriba */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg backdrop-blur-md bg-white/80"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-elegant text-xl sm:text-2xl md:text-3xl font-bold text-quince-600 flex-shrink-0"
            >
              Zahira
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, color: "var(--color-quince-500)" }}
                  className="text-gray-700 hover:text-quince-500 font-medium transition-colors text-sm lg:text-base whitespace-nowrap"
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Reproductor de música en desktop */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="ml-2 lg:ml-4"
              >
                <MusicPlayer />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Reproductor de música en móvil (junto al botón) */}
              <MusicPlayer className="mr-1" />

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-quince-500 p-2 rounded-lg hover:bg-quince-50 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
                style={{ top: "64px" }} // Altura del navbar
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
              >
                <div className="px-4 py-4 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={handleLinkClick}
                      className="block py-3 px-3 text-gray-700 hover:text-quince-500 hover:bg-quince-50 font-medium rounded-lg transition-all"
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  {/* Control de música adicional en menú móvil */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-2 mt-2 border-t border-gray-200"
                  >
                    <div className="py-2 px-3 text-gray-500 text-sm font-medium flex items-center gap-2">
                      <Music size={16} />
                      Control de Música
                    </div>
                    <div className="px-3 py-2">
                      <MusicPlayer className="w-full justify-center" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer para compensar el navbar fijo */}
      <div className="h-16 md:h-20" />
    </>
  );
}

export { MusicPlayer };

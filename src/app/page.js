"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import MusicRequests from "@/components/MusicRequests";
import LocationSection from "@/components/LocationSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Sparkles } from "lucide-react"; // Asegúrate de tener esto importado

// Dentro del componente SplashScreen, justo antes del return
const sparklePositions = [
  { left: "10%", top: "20%" },
  { left: "80%", top: "15%" },
  { left: "15%", top: "70%" },
  { left: "75%", top: "60%" },
  { left: "45%", top: "25%" },
  { left: "90%", top: "40%" },
  { left: "25%", top: "80%" },
  { left: "60%", top: "10%" },
  { left: "5%", top: "50%" },
  { left: "85%", top: "75%" },
  { left: "30%", top: "35%" },
  { left: "70%", top: "85%" },
  { left: "95%", top: "65%" },
  { left: "20%", top: "45%" },
  { left: "55%", top: "90%" },
  { left: "40%", top: "5%" },
  { left: "65%", top: "55%" },
  { left: "35%", top: "75%" },
  { left: "8%", top: "30%" },
  { left: "88%", top: "25%" },
];

function SplashScreen({ onEnter }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onEnter();
    }, 2500);
  };

  const smokeElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.8,
    size: Math.random() * 200 + 100,
    duration: Math.random() * 1.5 + 1.5,
  }));

  return (
    <div className="fixed inset-0 w-full h-full z-50 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-1">
        {/* Sparkles animados como en HeroSection */}
        <div className="absolute inset-0 overflow-hidden z-5 pointer-events-none">
          {sparklePositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                left: position.left,
                top: position.top,
              }}
            >
              <Sparkles className="text-quince-400 w-4 h-4" />
            </motion.div>
          ))}
        </div>

        <Image
          src="/assets/herobg.jpg"
          alt="Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Overlay sutil */}
      <div className="absolute inset-0  bg-fuchsia-100 bg-opacity-20 z-0"></div>

      {/* Botón centrado */}
      <div className="absolute inset-0 z-20 flex items-center justify-center top-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 50px rgba(255,255,255,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            disabled={isTransitioning}
            className="font-serif bg-gradient-to-r from-quince-500 to-quince-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 sparkle"
          >
            Descubre la Magia
          </motion.button>
        </motion.div>
      </div>

      {/* Efecto de humo blanco */}
      {isTransitioning && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          {smokeElements.map((smoke) => (
            <motion.div
              key={smoke.id}
              className="absolute bg-quince-600 rounded-full opacity-90 blur-xl"
              style={{
                backgroundColor: "rgba(148, 0, 211, 0.7)",
                left: `${smoke.left}%`,
                width: `${smoke.size}px`,
                height: `${smoke.size}px`,
                bottom: `-${smoke.size}px`,
              }}
              initial={{
                y: 0,
                opacity: 0,
                scale: 0.3,
              }}
              animate={{
                y: -1000,
                opacity: [0, 0.8, 0.9, 0.7, 0],
                scale: [0.3, 1.2, 1.5, 2, 2.5],
              }}
              transition={{
                duration: smoke.duration,
                delay: smoke.delay,
                ease: "easeOut",
              }}
            />
          ))}

          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent"
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: "-10%" }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: "easeOut",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleEnterSite = () => {
    setShowSplash(false);
  };
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <AnimatePresence>
        {showSplash && <SplashScreen onEnter={handleEnterSite} />}
      </AnimatePresence>

      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-screen bg-gradient-to-br from-quince-50 via-white to-gold-50"
          >
            <Navigation />

            {/* Contenedor principal con control de ancho */}
            <main className="w-full overflow-x-hidden">
              <HeroSection />
              <CountdownSection />
              <EventDetails />
              <DressCode />
              <LocationSection />
              <MusicRequests />
              <RSVPSection />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

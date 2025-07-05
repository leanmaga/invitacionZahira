"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import PhotoGallery from "@/components/PhotoGallery";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import MusicRequests from "@/components/MusicRequests";
import LocationSection from "@/components/LocationSection";
import HashtagSection from "@/components/HashtagSection";
import RSVPSection from "@/components/RSVPSection";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

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
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 50px rgba(255,255,255,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          disabled={isTransitioning}
          className="bg-gradient-to-r from-white to-gray-100 text-gray-800 px-6 py-3 rounded-full font-bold text-2xl shadow-2xl border-4 border-white/50 backdrop-blur-sm transition-all duration-300 hover:from-gray-100 hover:to-white"
        >
          ✨ Descubre la Magia ✨
        </motion.button>
      </div>

      {/* Efecto de humo blanco */}
      {isTransitioning && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          {smokeElements.map((smoke) => (
            <motion.div
              key={smoke.id}
              className="absolute bg-white rounded-full opacity-90 blur-xl"
              style={{
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
              <Timeline />
              <PhotoGallery />
              <DressCode />
              <LocationSection />
              <MusicRequests />
              <HashtagSection />
              <RSVPSection />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

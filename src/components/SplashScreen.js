"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const sparklePositions = [
  { left: "10%", top: "20%" },
  { left: "80%", top: "15%" },
  { left: "15%", top: "70%" },
  { left: "75%", top: "60%" },
  { left: "45%", top: "25%" },
  { left: "90%", top: "40%" },
  { left: "25%", top: "80%" },
  { left: "60%", top: "10%" },
];

export default function SplashScreen({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const smokeElements = useMemo(
    () =>
      Array.from({ length: 16 }, (_, id) => ({
        id,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        size: Math.random() * 80 + 60,
        duration: Math.random() * 0.4 + 1,
      })),
    []
  );

  const handleClick = () => {
    setClicked(true);
    setTimeout(onEnter, 900); // El sitio empieza a aparecer cuando el portal está en expansión
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden bg-#FFE8E9"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/assets/herobg.jpg"
          alt="Fondo mágico"
          fill
          className="object-cover sm:object-contain"
          priority
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          {sparklePositions.map((p, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: p.left, top: p.top }}
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
            >
              <Sparkles className="text-quince-400 w-4 h-4" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Botón */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255,255,255,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          disabled={clicked}
          className="font-serif bg-gradient-to-r from-quince-500 to-quince-600 mt-70
           text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md shimmer-button"
        >
          Descubre la Magia
        </motion.button>
      </div>

      {/* Humo y nuevo portal desde el centro */}
      {clicked && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          {/* Humo (sin cambios) */}
          {smokeElements.map((s) => (
            <motion.div
              key={s.id}
              style={{
                left: `${s.left}%`,
                bottom: `-${s.size}px`,
                width: s.size,
                height: s.size,
                borderRadius: "50%",
                boxShadow: "0 0 60px 40px rgba(148,0,211,0.3)",
                backgroundColor: "transparent",
                willChange: "transform, opacity",
              }}
              initial={{ y: 0, opacity: 0.7, scale: 0.6 }}
              animate={{ y: -800, opacity: 0, scale: 1.5 }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                ease: "easeOut",
              }}
              className="absolute"
            />
          ))}

          {/* Portal blanco desde el centro hacia arriba y abajo */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-0 bg-white origin-center z-50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>
      )}
    </motion.div>
  );
}

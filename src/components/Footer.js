"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Crown, Sparkles } from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  // ⚠️ Validación de variables de entorno
  if (!WHATSAPP_NUMBER) {
    console.error(
      "❌ NEXT_PUBLIC_WHATSAPP_NUMBER no está configurado en .env.local"
    );
  }

  // Solo ejecutar en el cliente para evitar errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Posiciones fijas para los sparkles flotantes (evita Math.random())
  const floatingSparklePositions = [
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "95%",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Crown className="w-12 h-12 mx-auto text-gold-400 mb-4" />
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-white mb-4">
            Zahira
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Gracias por ser parte de este momento tan especial en mi vida. Tu
            presencia hará que esta día sea verdaderamente increible.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-serif text-xl font-bold mb-4 text-quince-300">
              Información de Contacto
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>{WHATSAPP_NUMBER || "+54 9 11 2776-4823"}</p>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-serif text-xl font-bold mb-4 text-quince-300">
              Detalles del Evento
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>06 de Diciembre, 2025</p>
              <p>10:00 AM - 19:00 PM</p>
              <p>Diaz Vélez 89</p>
            </div>
          </motion.div>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-quince-400 to-transparent w-32"></div>
          <Sparkles className="mx-4 text-gold-400 w-6 h-6" />
          <div className="h-px bg-gradient-to-r from-transparent via-quince-400 to-transparent w-32"></div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Una princesa no necesita ser salvada. Ella puede salvarse a sí
            misma.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-quince-400" />
            <span>para Zahira</span>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          floatingSparklePositions.map((leftPosition, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [0, -100, -200],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut",
              }}
              style={{
                left: leftPosition,
                top: "100%",
              }}
            >
              <Sparkles className="text-quince-400 w-3 h-3" />
            </motion.div>
          ))}
      </div>
    </footer>
  );
}

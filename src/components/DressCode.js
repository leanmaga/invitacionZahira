"use client";

import { motion } from "framer-motion";
import { Shirt, Sparkles, Crown, Heart } from "lucide-react";
import Image from "next/image";

export default function DressCode() {
  return (
    <section
      id="dresscode"
      className="py-20 bg-gradient-to-br from-quince-50 to-gold-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Sparkles className="w-12 h-12 mx-auto text-gold-500 mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Código de Vestimenta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vístete para brillar en esta día mágico. Tu elegancia complementará
            la belleza de la celebración.
          </p>
        </motion.div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="flex rounded-3xl overflow-hidden shadow-xl bg-white glass"
          >
            {/* Imagen del hombre al costado izquierdo */}
            <div className="w-1/4 relative h-auto min-h-[350px]">
              <Image
                src="/assets/manTraje.jpg"
                alt="Caballeros"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-gray-800 opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/20 backdrop-blur-md rounded-full p-4"
                >
                  <Shirt className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Contenido central */}
            <div className="w-2/4 p-8 flex flex-col justify-center">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-gray-800 mb-2">
                  Elegante Sport
                </h3>
                <p className="text-gray-600 mb-6 font-medium text-lg">
                  Dress Code para toda la celebración
                </p>

                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-quince-50 to-gold-50 p-4 rounded-xl"
                >
                  <Heart className="w-5 h-5 text-quince-400 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Evitar colores lila y negro
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Imagen de la mujer al costado derecho */}
            <div className="w-1/4 relative h-auto min-h-[350px]">
              <Image
                src="/assets/vestidoMujer.jpg"
                alt="Damas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-quince-400 to-quince-600 opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/20 backdrop-blur-md rounded-full p-4"
                >
                  <Crown className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Extra Card Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-3xl text-center max-w-3xl mx-auto"
        >
          <h3 className="font-elegant text-3xl font-bold text-quince-600 mb-4">
            ¡Traer ropa extra para disfrutar de la pileta!
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Recuerda que lo más importante es que te sientas cómodo(a) y
            seguro(a) para disfrutar al máximo de esta celebración única.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-quince-300 to-transparent w-20"></div>
            <Sparkles className="text-gold-400 w-6 h-6" />
            <div className="h-px bg-gradient-to-r from-transparent via-quince-300 to-transparent w-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

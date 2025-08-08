"use client";

import { motion } from "framer-motion";
import { Users, Phone, Utensils, MessageSquare, Music } from "lucide-react";

export default function AdminStats({ stats }) {
  const cardClass =
    "bg-gradient-to-br from-quince-50 to-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {/* Total Confirmaciones */}
      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Confirmaciones</p>
            <p className="text-xs text-gray-500 mb-1">Personas confirmadas</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.totalConfirmations || 0}
            </p>
          </div>
          <Users className="w-9 h-9 text-quince-500" />
        </div>
      </motion.div>

      {/* Con Teléfono */}
      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Con Teléfono</p>
            <p className="text-xs text-gray-500 mb-1">
              Teléfonos proporcionados
            </p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.withPhone || 0}
            </p>
          </div>
          <Phone className="w-9 h-9 text-emerald-500" />
        </div>
      </motion.div>

      {/* Restricciones Alimentarias */}
      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Restricciones Alimentarias</p>
            <p className="text-xs text-gray-500 mb-1">Con restricciones</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.withDietary || 0}
            </p>
          </div>
          <Utensils className="w-9 h-9 text-amber-500" />
        </div>
      </motion.div>

      {/* Con Mensajes */}
      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Con Mensajes</p>
            <p className="text-xs text-gray-500 mb-1">Mensajes especiales</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.withMessages || 0}
            </p>
          </div>
          <MessageSquare className="w-9 h-9 text-purple-500" />
        </div>
      </motion.div>

      {/* Canciones Solicitadas */}
      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Canciones Solicitadas</p>
            <p className="text-xs text-gray-500 mb-1">Peticiones musicales</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.totalSongs || 0}
            </p>
          </div>
          <Music className="w-9 h-9 text-pink-500" />
        </div>
      </motion.div>
    </motion.div>
  );
}

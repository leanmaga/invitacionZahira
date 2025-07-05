"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Utensils, Music } from "lucide-react";

export default function AdminStats({ stats }) {
  const cardClass =
    "bg-gradient-to-br from-quince-50 to-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Confirmaciones</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.totalConfirmations}
            </p>
          </div>
          <Users className="w-9 h-9 text-quince-500" />
        </div>
      </motion.div>

      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Invitados</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.totalGuests}
            </p>
          </div>
          <Calendar className="w-9 h-9 text-quince-600" />
        </div>
      </motion.div>

      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Con Restricciones</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.withDietary}
            </p>
          </div>
          <Utensils className="w-9 h-9 text-quince-600" />
        </div>
      </motion.div>

      <motion.div variants={cardVariants} className={cardClass}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Canciones Solicitadas</p>
            <p className="text-2xl font-bold text-quince-600">
              {stats.totalSongs || 0}
            </p>
          </div>
          <Music className="w-9 h-9 text-quince-400" />
        </div>
      </motion.div>
    </motion.div>
  );
}

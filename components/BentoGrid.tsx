"use client"

import { motion } from "framer-motion"

const properties = [
  {
    id: 1,
    title: "Villa Moderna",
    location: "Lugano",
    size: "large" // col-span-2 row-span-2
  },
  {
    id: 2,
    title: "Appartamento Centro",
    location: "Zurigo",
    size: "medium" // col-span-1 row-span-2
  },
  {
    id: 3,
    title: "Attico Panoramico",
    location: "Ginevra",
    size: "medium" // col-span-1 row-span-1
  },
  {
    id: 4,
    title: "Loft Moderno",
    location: "Basilea",
    size: "medium" // col-span-1 row-span-1
  },
  {
    id: 5,
    title: "Chalet Alpino",
    location: "Verbier",
    size: "wide" // col-span-2 row-span-1
  }
]

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:h-[600px]">
      {/* Large - Villa Moderna */}
      <motion.div
        className="md:col-span-2 md:row-span-2 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-white/20 to-white/5"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

        {/* Placeholder immagine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 group-hover:scale-110 transition-transform duration-500"></div>

        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 text-white">
          <h3 className="text-[18px] md:text-[24px] font-semibold mb-1">Villa Moderna</h3>
          <p className="text-[12px] md:text-[14px] opacity-90">Lugano, Svizzera</p>
        </div>
      </motion.div>

      {/* Medium - Appartamento Centro */}
      <motion.div
        className="md:col-span-1 md:row-span-2 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-white/20 to-white/5"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-white/10 group-hover:scale-110 transition-transform duration-500"></div>

        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 text-white">
          <h3 className="text-[16px] md:text-[20px] font-semibold mb-1">Appartamento Centro</h3>
          <p className="text-[12px] md:text-[13px] opacity-90">Zurigo</p>
        </div>
      </motion.div>

      {/* Medium - Attico Panoramico */}
      <motion.div
        className="md:col-span-1 md:row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-white/20 to-white/5"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 group-hover:scale-110 transition-transform duration-500"></div>

        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 z-20 text-white">
          <h3 className="text-[16px] md:text-[18px] font-semibold mb-1">Attico Panoramico</h3>
          <p className="text-[11px] md:text-[12px] opacity-90">Ginevra</p>
        </div>
      </motion.div>

      {/* Wide - Chalet Alpino */}
      <motion.div
        className="md:col-span-2 md:row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-white/20 to-white/5"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 group-hover:scale-110 transition-transform duration-500"></div>

        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 z-20 text-white">
          <h3 className="text-[16px] md:text-[20px] font-semibold mb-1">Chalet Alpino</h3>
          <p className="text-[11px] md:text-[13px] opacity-90">Verbier, Svizzera</p>
        </div>
      </motion.div>

      {/* Medium - Loft Moderno */}
      <motion.div
        className="md:col-span-1 md:row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-white/20 to-white/5"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/15 group-hover:scale-110 transition-transform duration-500"></div>

        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 z-20 text-white">
          <h3 className="text-[16px] md:text-[18px] font-semibold mb-1">Loft Moderno</h3>
          <p className="text-[11px] md:text-[12px] opacity-90">Basilea</p>
        </div>
      </motion.div>
    </div>
  )
}

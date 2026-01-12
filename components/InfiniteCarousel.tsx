"use client"

import { motion } from "framer-motion"

const cards = [
  {
    title: "Scouting",
    description: "Identificazione e valutazione talenti"
  },
  {
    title: "Gestione Carriera",
    description: "Pianificazione e sviluppo professionale"
  },
  {
    title: "Contratti",
    description: "Negoziazione e gestione contrattuale"
  },
  {
    title: "Brand & PR",
    description: "Gestione immagine e comunicazione"
  }
]

export function InfiniteCarousel() {
  // Duplico le card più volte per loop seamless
  const duplicatedCards = [...cards, ...cards, ...cards]

  return (
    <div className="relative overflow-hidden py-8 w-full">
      {/* Gradient fade ai bordi */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-33.333%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedCards.map((card, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 flex flex-col"
            style={{ height: '420px' }}
          >
            {/* Placeholder immagine calciatore */}
            <div className="w-full h-[65%] bg-gradient-to-b from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-xl mb-4 flex items-center justify-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white rounded"></div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-[20px] font-semibold text-[var(--primary)]">
                {card.title}
              </h3>
              <p className="text-[14px] text-foreground/60 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

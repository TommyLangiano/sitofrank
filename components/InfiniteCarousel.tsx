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
    <div className="relative overflow-hidden py-6 md:py-8 w-full">
      {/* Gradient fade ai bordi */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex gap-4 md:gap-6"
        animate={{
          x: [0, -((cards.length * (200 + 16)))]
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
            className="min-w-[200px] md:min-w-[280px] bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 flex flex-col h-[300px] md:h-[420px]"
          >
            {/* Placeholder immagine calciatore */}
            <div className="w-full h-[65%] bg-gradient-to-b from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--primary)] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded"></div>
              </div>
            </div>

            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[16px] md:text-[20px] font-semibold text-[var(--primary)]">
                {card.title}
              </h3>
              <p className="text-[12px] md:text-[14px] text-foreground/60 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

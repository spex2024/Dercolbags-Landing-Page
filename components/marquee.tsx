"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "EcoLogic", logo: "/images/partners/logo1.png" },
  { name: "GreenTech", logo: "/images/partners/logo2.png" },
  { name: "SustainGrow", logo: "/images/partners/logo3.png" },
  { name: "BioPack", logo: "/images/partners/logo4.png" },
  { name: "CircularNode", logo: "/images/partners/logo5.png" },
  { name: "EarthFoundry", logo: "/images/partners/logo6.png" },
]

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-transparent py-14">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-10 flex items-center gap-3">
         <div className="h-1.5 w-8 bg-emerald-500" />
         <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900 dark:text-zinc-200">
            Trusted by // Global Circular Systems
         </span>
      </div>

      <div className="flex select-none overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex min-w-full shrink-0 items-center justify-around gap-20"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center justify-around gap-24">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
                >
                  <div className="h-10 w-10 rounded-xl bg-zinc-900 dark:bg-white/10 flex items-center justify-center border border-white/10 shadow-lg shadow-black/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-500">
                    <span className="text-sm font-black text-emerald-500 group-hover:text-white">{partner.name[0]}</span>
                  </div>
                  <span className="font-heading text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase group-hover:text-emerald-500 transition-colors">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Industrial Gradients for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-10" />
    </div>
  )
}

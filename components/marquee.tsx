"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Fidelity Bank Ghana", logo: "" },
  { name: "Acumen West Africa", logo: "" },
  { name: "Orange Corners", logo: "" },
  { name: "Ghana Climate Innovation Centre", logo: "" },
  { name: "Miller Center for Social Entrepreneurship", logo: "" },
  { name: "Westerwelle Foundation", logo: "" },
  { name: "Because International", logo: "" },
  { name: "EY Ghana", logo: "" },
  { name: "Deutsche Welle", logo: "" },
  { name: "AgrInnovators", logo: "" },
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

      <div className="flex select-none overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-32 pr-32"
        >
          {/* First set of partners */}
          {partners.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center transition-all duration-500 cursor-pointer whitespace-nowrap"
            >
              <span className="font-heading text-sm md:text-base lg:text-lg font-black tracking-[0.2em] text-zinc-950 dark:text-white uppercase hover:text-emerald-500 transition-all duration-300">
                {partner.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {partners.map((partner, idx) => (
            <div
              key={`${partner.name}-dup-${idx}`}
              className="flex items-center transition-all duration-500 cursor-pointer whitespace-nowrap"
            >
              <span className="font-heading text-sm md:text-base lg:text-lg font-black tracking-[0.2em] text-zinc-950 dark:text-white uppercase hover:text-emerald-500 transition-all duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Industrial Gradients for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />
    </div>
  )
}

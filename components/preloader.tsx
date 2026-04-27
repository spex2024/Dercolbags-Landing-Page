"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

const texts = [
  "Turning waste into value…",
  "Improving your packaging…",
  "Helping your products sell faster…",
  "Reducing waste…",
  "Building a cleaner future…",
]

const TEXT_DURATION = 1800 // ms per text
const TOTAL_DURATION = texts.length * TEXT_DURATION

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden"

    // Text rotation
    const textTimer = setInterval(() => {
      setIndex((prev) => {
        if (prev === texts.length - 1) return prev
        return prev + 1
      })
    }, TEXT_DURATION)

    // Total duration: wait for all texts to finish
    const exitTimer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ""
    }, TOTAL_DURATION + 600)

    return () => {
      clearInterval(textTimer)
      clearTimeout(exitTimer)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#08120e] pointer-events-none overflow-hidden"
        >
          {/* Subtle Industrial Texture */}
          <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.02] via-transparent to-transparent" />

          {/* Minimal Narrative Block */}
          <div className="container relative flex flex-col items-center justify-center gap-20 px-6">
            
            {/* Main Message */}
            <div className="flex flex-col items-center text-center min-h-[120px] max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={texts[index]}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white/95 italic leading-[1.1]"
                >
                  {texts[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Stepped Progress Bar (Premium Minimalism) */}
            <div className="relative w-full max-w-sm md:max-w-xl h-[2px]">
              {/* Background Track */}
              <div className="absolute inset-0 bg-zinc-100 dark:bg-white/5" />
              
              {/* Active Progress */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${((index + 1) / texts.length) * 100}%` }}
                transition={{ duration: TEXT_DURATION / 1000, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-0 h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              />

              {/* Segment Markers */}
              <div className="absolute inset-0 flex justify-between pointer-events-none">
                {[...Array(texts.length + 1)].map((_, i) => (
                  <div key={i} className="h-full w-[1px] bg-white/10 dark:bg-black/20" />
                ))}
              </div>
            </div>
          </div>

          {/* Corner Brackets (Ultra-subtle) */}
          <div className="absolute inset-8 md:inset-16 pointer-events-none opacity-[0.05] dark:opacity-[0.1]">
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-zinc-950 dark:border-white" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-zinc-950 dark:border-white" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-zinc-950 dark:border-white" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-zinc-950 dark:border-white" />
          </div>

          {/* Animated Ambient Scanline (Slow & Elegant) */}
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-[300px] bg-gradient-to-b from-transparent via-emerald-500/[0.015] to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

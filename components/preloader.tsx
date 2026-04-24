"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ""
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#030712] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Minimal Brand Identifier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-24 w-80 mb-4"
            >
              <Image
                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777042366/dercolbags/DERCOLBAGS_LOGO_tolkgw.png"
                alt="DercolBags Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Industrial Progress Bar Container */}
            <div className="relative w-48 md:w-64 h-[1px] bg-zinc-200 dark:bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-0 h-full bg-emerald-500"
              />
            </div>

            {/* Tactical Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500"
            >
              System Initialization
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              >
                _
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

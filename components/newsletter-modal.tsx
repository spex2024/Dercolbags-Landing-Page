"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import Image from "next/image"

const STORAGE_KEY = "dercolbags_newsletter_last_seen_at"
const COOLDOWN_MS = 60 * 60 * 1000 // 1 hour
const smoothEase = [0.22, 1, 0.36, 1] as const
const revealEase = [0.16, 1, 0.3, 1] as const
const exitEase = [0.4, 0, 1, 1] as const

function shouldShowModal(): boolean {
  if (typeof window === "undefined") return false
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return true // first visit
  const dismissedAt = parseInt(raw, 10)
  if (isNaN(dismissedAt)) return true
  return Date.now() - dismissedAt >= COOLDOWN_MS
}

function markSeen() {
  localStorage.setItem(STORAGE_KEY, String(Date.now()))
}

export function NewsletterModal() {
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Delay opening so the page has time to render first
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (shouldShowModal()) {
        markSeen()
        setIsOpen(true)
      }
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !name.trim()) return
    setLoading(true)
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1100))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 2200)
  }

  // Backdrop variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.35 } },
  }

  // Modal panel variants
  const panelVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.54,
        ease: smoothEase,
        delay: 0.04,
      },
    },
    exit: {
      opacity: 0,
      y: 24,
      scale: 0.985,
      transition: { duration: 0.26, ease: exitEase },
    },
  }

  // Stagger children
  const contentVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.18 },
    },
  }
  const childVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: revealEase } },
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 sm:p-6"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop blur overlay */}
          <motion.div
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Panel */}
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-none border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#08120e] shadow-none"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 dark:via-emerald-300/80 to-transparent"
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.18, ease: smoothEase }}
            />
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-none bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 text-zinc-500 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white transition-all duration-200"
              aria-label="Close newsletter popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.45, ease: smoothEase } }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-5 py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.08, ease: smoothEase } }}
                      className="relative h-12 w-48 mb-4"
                    >
                      <Image
                        src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777042366/dercolbags/DERCOLBAGS_LOGO_tolkgw.png"
                        alt="DercolBags Logo"
                        fill
                        className="object-contain grayscale dark:invert"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-heading font-black tracking-tighter uppercase text-zinc-950 dark:text-white mb-2">You&apos;re in!</h3>
                      <p className="text-emerald-600 dark:text-emerald-300/80 text-sm font-bold uppercase tracking-tighter">
                        Welcome to the community.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                  >
                    {/* Logo badge */}
                    <motion.div variants={childVariants} className="flex items-center gap-2 mb-8">
                      <div className="relative h-12 w-48">
                        <Image
                          src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777042366/dercolbags/DERCOLBAGS_LOGO_tolkgw.png"
                          alt="DercolBags Logo"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    </motion.div>
                    
                    {/* Headline */}
                    <motion.h2 variants={childVariants} className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-zinc-950 dark:text-white leading-snug mb-4 uppercase">
                      Connecting Businesses to <br />
                      <span className="text-zinc-950 dark:text-white">Sustainable Packaging.</span>
                    </motion.h2>

                    <motion.p variants={childVariants} className="text-zinc-600 dark:text-zinc-400 text-[13px] leading-relaxed mb-8 border-l-2 border-emerald-500 pl-4 max-w-sm">
                      Get precision-engineered insights on sustainable manufacturing and DercolBags architectural updates.
                    </motion.p>

                    {/* Form */}
                    <motion.form variants={childVariants} onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="relative flex-grow">
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="NAME / BUSINESS"
                            required
                            className="w-full px-5 py-4 rounded-none bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-950 dark:text-white text-xs font-mono tracking-widest placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-all uppercase"
                          />
                        </div>
                        <div className="relative flex-grow">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="EMAIL ADDRESS"
                            required
                            className="w-full px-5 py-4 rounded-none bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-950 dark:text-white text-xs font-mono tracking-widest placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-all uppercase"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="relative flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-zinc-950 hover:bg-emerald-600 text-white font-black text-sm uppercase tracking-tighter transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap overflow-hidden group border-none"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {loading ? (
                            <>
                              <motion.div
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-none"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                              />
                              Accessing...
                            </>
                          ) : (
                            <>
                              Join Now
                              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </>
                          )}
                        </span>
                      </button>
                    </motion.form>

                    {/* Fine print */}
                    <motion.p variants={childVariants} className="mt-6 text-[10px] text-zinc-400 dark:text-zinc-600 text-center uppercase font-black tracking-widest">
                      Encrypted connection. No spam protocols.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

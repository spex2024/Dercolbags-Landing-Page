"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[1000] md:left-auto md:max-w-md"
        >
          <div className="relative overflow-hidden bg-white dark:bg-background border border-zinc-100 dark:border-white/10 shadow-2xl p-6 sm:p-8">
            {/* Background Detail */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-emerald-500/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Cookie className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-950 dark:text-white">
                  Cookie Policy
                </h3>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies as outlined in our <Link href="/cookie-policy" className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold transition-colors">Privacy Policy</Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="flex-1 rounded-none bg-zinc-950 dark:bg-emerald-500 text-white hover:bg-emerald-600 dark:hover:bg-emerald-400 font-black text-[10px] uppercase tracking-widest h-12"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDecline}
                  className="flex-1 rounded-none border-zinc-950 dark:border-white/10 text-zinc-950 dark:text-white hover:bg-zinc-50 dark:hover:bg-white/5 font-black text-[10px] uppercase tracking-widest h-12"
                >
                  Decline
                </Button>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-0 right-0 p-2 text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

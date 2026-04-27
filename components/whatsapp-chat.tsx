"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageCircle, X, Send, Headset, BadgeDollarSign, HeartHandshake } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "233547499174"

const chatOptions = [
  {
    title: "Customer Service",
    description: "Questions about our products?",
    icon: Headset,
    message: "Hi DercolBags, I have a question about your packaging products.",
    color: "bg-blue-500"
  },
  {
    title: "Sales",
    description: "Get a quote for bulk orders.",
    icon: BadgeDollarSign,
    message: "Hi DercolBags, I'd like to get a quote for a bulk order.",
    color: "bg-emerald-500"
  },
  {
    title: "Support",
    description: "Technical help or order status.",
    icon: HeartHandshake,
    message: "Hi DercolBags, I need support with my recent order.",
    color: "bg-amber-500"
  }
]

export function WhatsAppChat() {
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-48 right-6 z-[130] md:bottom-28">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-80 overflow-hidden rounded-none border border-zinc-200 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-950"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-white/20 rounded-none">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.604 6.006L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.632 0 12.032-5.396 12.035-12.03a11.774 11.774 0 00-3.517-8.487" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tighter">Direct Help</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-none bg-black/10 p-2 hover:bg-black/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-emerald-50 text-[10px] font-black uppercase tracking-widest mt-4">
                Packaging Architects Online
              </p>
            </div>

            {/* Options */}
            <div className="p-4 space-y-1 bg-zinc-50 dark:bg-zinc-900/50">
              {chatOptions.map((option) => (
                <button
                  key={option.title}
                  onClick={() => openWhatsApp(option.message)}
                  className="flex w-full items-center gap-4 p-4 text-left transition-all hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-white/10 group"
                >
                  <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center text-white", option.color)}>
                    <option.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {option.title}
                    </h4>
                    <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold tracking-tighter mt-0.5">
                      {option.description.split('.')[0]}
                    </p>
                  </div>
                  <ArrowRight className="h-3 w-3 text-zinc-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zinc-100 dark:border-white/5 bg-white dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-zinc-400 uppercase font-black tracking-widest flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Live Sync Active
                </span>
                <span className="text-[9px] text-zinc-400 uppercase font-black tracking-widest">
                  EST: 2-5 MIN
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="relative group">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex h-16 w-16 items-center justify-center shadow-2xl transition-all duration-300 border-none",
            isOpen 
              ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950" 
              : "bg-[#25D366] text-white hover:bg-[#128C7E]"
          )}
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.604 6.006L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.632 0 12.032-5.396 12.035-12.03a11.774 11.774 0 00-3.517-8.487" />
            </svg>
          )}
        </motion.button>
        
        {/* Help Bubble */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-zinc-950 dark:bg-white px-4 py-2 text-white dark:text-zinc-950 text-[10px] font-black uppercase tracking-widest hidden md:block"
          >
            Need Help?
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-zinc-950 dark:border-l-white" />
          </motion.div>
        )}
      </div>
    </div>
  )
}

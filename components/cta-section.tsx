"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, Recycle, Users, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  {
    label: "Upgrade Your Packaging",
    sub: "Premium eco-friendly packaging for your business.",
    href: "/store",
    icon: ShoppingBag,
    style: "bg-white text-zinc-950 hover:bg-emerald-400",
  },
  {
    label: "Get Paid for Waste",
    sub: "Turn your waste into income via Watapak.",
    href: "/watapak",
    icon: Recycle,
    style: "bg-emerald-500 text-white hover:bg-emerald-400",
  },
  {
    label: "Join the Community",
    sub: "Be part of Ghana's circular economy movement.",
    href: "/community-impact",
    icon: Users,
    style: "bg-transparent text-white border border-white/30 hover:bg-white/10",
  },
]

export function CtaSection() {
  return (
    <section className="relative bg-zinc-950 py-28 md:py-36 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      {/* Emerald glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-6"
        >
          Take Action
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase mb-6"
        >
          Ready to Make<br />
          <span className="text-emerald-500">The Switch?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-400 font-light max-w-xl mx-auto mb-16"
        >
          Better packaging. Extra income. Stronger community. Choose your path below.
        </motion.p>

        {/* Action Cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {actions.map((action, i) => {
            const Icon = action.icon
            return (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={action.href}
                  className={`group flex flex-col items-start gap-4 p-8 h-full transition-all duration-300 ${action.style} border border-white/5`}
                >
                  <div className="flex items-center justify-between w-full">
                    <Icon className="w-6 h-6" />
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-black uppercase tracking-widest leading-snug">
                      {action.label}
                    </p>
                    <p className="mt-2 text-xs opacity-70 font-light leading-relaxed">
                      {action.sub}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Divider + contact nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-zinc-500 text-sm"
        >
          <span className="h-px w-12 bg-white/10 hidden sm:block" />
          <span>Not sure where to start?</span>
          <Link
            href="/contact"
            className="font-black text-white uppercase tracking-widest text-xs hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            Talk to us <ArrowUpRight className="w-3 h-3" />
          </Link>
          <span className="h-px w-12 bg-white/10 hidden sm:block" />
        </motion.div>

      </div>
    </section>
  )
}

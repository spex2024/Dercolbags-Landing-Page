"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MapPin, Phone, Info, Activity, Terminal } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FloatingPathsBackground } from "@/components/ui/floating-paths"

type ContentPageProps = {
  eyebrow: string
  title: string
  intro: string
  body: string[]
  highlights: string[]
  ctaLabel: string
  ctaHref: string
  contactMode?: "default" | "contact"
}

export function ContentPage({
  eyebrow,
  title,
  intro,
  body,
  highlights,
  ctaLabel,
  ctaHref,
  contactMode = "default",
}: ContentPageProps) {
  return (
    <div className="bg-white dark:bg-[#08120e]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden border-b border-zinc-100 dark:border-white/5">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20 pointer-events-none" />
        <FloatingPathsBackground position={1} className="absolute inset-0 z-0" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-emerald-500/50" />
                <span className="font-mono text-[10px] tracking-[0.3em] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                  Nexus // {eyebrow.split(' ')[0].toUpperCase()}
                </span>
              </div>

              <h1 className="font-heading text-6xl font-black leading-[0.85] tracking-tighter text-zinc-900 dark:text-white md:text-8xl lg:text-[7.5rem]">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 5 === 4 ? "text-emerald-600 uppercase" : ""}>{word} </span>
                ))}
              </h1>
              
              <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 font-light tracking-tight md:text-2xl">
                {intro}
              </p>

              <div className="mt-14 flex flex-wrap gap-6">
                <Button asChild size="lg" className="h-16 rounded-xl bg-emerald-500 px-10 text-lg font-bold text-white hover:bg-emerald-600 transition-all border-none">
                  <Link href={ctaHref} className="flex items-center gap-3">
                    {ctaLabel}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 rounded-xl px-10 text-lg font-bold border-zinc-200 dark:border-white/10 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-white/10 transition-all">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-12 bg-white dark:bg-card/50 backdrop-blur-xl border border-zinc-100 dark:border-white/10 rounded-[2.5rem] shadow-2xl dark:shadow-none"
            >
              {/* Technical Overlay */}
              <div className="absolute top-8 right-10 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-500/80 tracking-widest uppercase">Sync: Active</span>
              </div>

              <h2 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-8 border-b border-zinc-100 dark:border-white/5 pb-6">
                <Terminal className="h-4 w-4" />
                {contactMode === "contact" ? "Terminal Access" : "Data Highlights"}
              </h2>
              
              <div className="space-y-4">
                {contactMode === "contact" ? (
                  <>
                    {[
                      { icon: Mail, label: "Network Protocol", value: "hello@dercolbags.com" },
                      { icon: Phone, label: "Direct Line", value: "+233 20 000 0000" },
                      { icon: MapPin, label: "Base Node", value: "Accra, Ghana" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 flex items-center gap-5 group hover:border-emerald-500/30 transition-all"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-zinc-800 shadow-sm text-emerald-500">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono mb-1">{item.label}</p>
                          <p className="font-bold text-zinc-900 dark:text-white uppercase tracking-tight">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </>
                ) : (
                  highlights.map((highlight, i) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="p-6 rounded-2xl border-l-4 border-emerald-500 bg-zinc-50 dark:bg-white/5 text-lg font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-tighter leading-tight italic"
                    >
                      {highlight}
                    </motion.div>
                  ))
                )}
              </div>

              {/* Decorative Corner Marker */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-white/5">
                 <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest text-right">
                    Encryption: AES-256 <br />
                    System ID: NEXUS-01
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blueprint Analytics / Body Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[3.5rem] bg-zinc-50/50 p-12 dark:bg-white/2 md:p-24 border border-zinc-100 dark:border-white/5">
            <div className="flex items-center gap-3 mb-16">
               <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Activity className="h-4 w-4" />
               </div>
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Detailed Analytics</span>
            </div>
            
            <div className="grid gap-20 lg:grid-cols-2">
              {body.map((paragraph, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <p className="text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-light italic border-l border-zinc-200 dark:border-white/10 pl-10">
                    {paragraph}
                  </p>
                  <div className="absolute top-0 -left-1 text-[10px] font-mono text-emerald-500/50 font-bold">0{i + 1}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

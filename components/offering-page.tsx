"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, CheckCircle2, ShieldCheck, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FloatingPathsBackground } from "@/components/ui/floating-paths"
import type { Offering } from "@/lib/offerings"

type OfferingPageProps = {
  offering: Omit<Offering, "icon">
}

export function OfferingPage({ offering }: OfferingPageProps) {
  const isCommunity = offering.slug === "community"

  return (
    <div className="bg-white dark:bg-[#08120e]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden border-b border-zinc-100 dark:border-white/5">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20 pointer-events-none" />
        <FloatingPathsBackground position={1} className="absolute inset-0 z-0" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-emerald-500" />
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-black leading-[0.95] tracking-tighter text-zinc-900 dark:text-white md:text-7xl lg:text-[7.5rem] break-words uppercase">
                {offering.heroTitle.split(' ').map((word, i) => (
                  <span key={i} className={i % 4 === 3 ? "text-emerald-600 italic" : ""}>{word} </span>
                ))}
              </h1>
              
              <p className="mt-8 md:mt-10 max-w-xl text-lg md:text-2xl leading-relaxed text-zinc-500 dark:text-zinc-400 font-light tracking-tight italic">
                {offering.heroBody}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {offering.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-none border border-zinc-100 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {!isCommunity && (
                <div className="mt-10 md:mt-14 flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                  <Button asChild size="lg" className="h-14 md:h-16 w-full sm:w-auto rounded-none bg-zinc-950 px-8 md:px-10 text-base md:text-lg font-black uppercase tracking-tighter text-white hover:bg-emerald-600 transition-all border-none">
                    <Link href="/contact" className="flex items-center justify-center gap-3">
                      Partner with Us
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 md:h-16 w-full sm:w-auto rounded-none px-8 md:px-10 text-base md:text-lg font-black uppercase tracking-tighter border-zinc-200 dark:border-white/10 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-white/10 transition-all">
                    <Link href="/">Overview</Link>
                  </Button>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-none shadow-none border border-zinc-100 dark:border-white/5"
            >
              <div className="absolute inset-0 bg-zinc-900 z-10 opacity-40" />
              <Image 
                src={offering.image} 
                alt={offering.title} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/40 to-transparent z-20" />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 z-30 p-6 md:p-10 flex flex-col justify-end pointer-events-none">
                <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-none p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">{offering.title}</h3>
                  <p className="mt-3 md:mt-4 text-zinc-300 text-xs md:text-sm font-light leading-relaxed line-clamp-2 italic">{offering.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blueprint Content Hub */}
      <section className="py-32 bg-zinc-50/50 dark:bg-transparent relative">
        <div className="container mx-auto px-6">
          <div className="grid gap-px bg-zinc-200 dark:bg-white/10 rounded-none overflow-hidden border border-zinc-200 dark:border-white/10">
            {/* Overview Module */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-[#08120e] p-12 lg:p-20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="h-1 w-12 bg-emerald-500 mb-8" />
                  <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[0.95] tracking-tighter uppercase whitespace-pre-wrap">The Architectural Basis.</h2>
                  
                  <div className="mt-16 space-y-px bg-zinc-200 dark:bg-white/10 border border-zinc-200 dark:border-white/10">
                    <div className="p-8 bg-white dark:bg-[#08120e]">
                       <p className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">{offering.location}</p>
                    </div>
                    <div className="p-8 bg-white dark:bg-[#08120e]">
                       <p className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">{offering.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <p className="text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-light max-w-2xl border-l-2 border-emerald-500/30 pl-10 italic">
                    {offering.details}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Capabilities Module */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white dark:bg-[#08120e] p-12 lg:p-20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="h-1 w-12 bg-emerald-500 mb-12" />
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {offering.featureList.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col gap-6 rounded-none border border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/2 p-10 hover:border-emerald-500/30 transition-all group/feature"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-none bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-white/10 text-emerald-500 group-hover/feature:bg-emerald-500 group-hover/feature:text-white transition-all">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-black text-zinc-900 dark:text-white leading-tight uppercase tracking-tighter italic lg:text-xl">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

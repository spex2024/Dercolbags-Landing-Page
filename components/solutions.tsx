"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, MapPin, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { offerings, type Offering } from "@/lib/offerings"

export function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null)

  useEffect(() => {
    if (!selectedOffering) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedOffering])

  return (
    <>
      <section id="solutions" className="overflow-hidden bg-zinc-50 py-24 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-5xl"
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Our Solution</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-black leading-[0.95] tracking-tighter text-zinc-900 dark:text-white md:text-7xl">
              Engineering a <span className="text-emerald-600 uppercase">Circular</span> <br />
              Packaging Ecosystem.
            </h3>
            
            <p className="mt-10 text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              DercolBags replaces single-use plastics with locally manufactured, sustainable packaging made from recycled fiber. Our integrated model combines technical precision with community impact.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 lg:h-[750px] lg:flex-row">
            {offerings.map((item, index) => {
              const isHovered = hoveredIndex === index
              const Icon = item.icon

              return (
                <motion.button
                  key={item.slug}
                  type="button"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  onClick={() => setSelectedOffering(item)}
                  layout
                  initial={{ flex: 1, opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    flex: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.4, delay: index * 0.1 },
                    y: { duration: 0.4, delay: index * 0.1 },
                  }}
                  animate={{ flex: isHovered ? 2.5 : 1 }}
                  className="group relative min-h-[450px] cursor-pointer overflow-hidden rounded-[2.5rem] bg-zinc-900 text-left shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40 dark:shadow-[0_32px_80px_-24px_rgba(6,182,212,0.18)] lg:min-h-0"
                >
                  <motion.div layout className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                    className="absolute top-8 right-8 z-20"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-zinc-900 shadow-xl transition-all hover:bg-emerald-50 active:scale-95 group/btn dark:bg-zinc-950/90 dark:text-white dark:hover:bg-emerald-500">
                      <ArrowUpRight className="h-6 w-6 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </div>
                  </motion.div>

                  <div className="absolute left-8 top-8 z-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md dark:bg-black/25">
                      <Icon className="h-4 w-4 text-emerald-300" />
                      <span>{item.eyebrow}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                    <div className="flex flex-col gap-4">
                      <div className="space-y-2">
                        <motion.h4 layout="position" className="font-heading text-4xl font-black tracking-tighter text-white lg:text-5xl">
                          {item.title}
                        </motion.h4>

                        <motion.p
                          layout="position"
                          initial={{ opacity: 0.6 }}
                          animate={{ opacity: isHovered ? 0.95 : 0.68 }}
                          className="max-w-[360px] text-lg font-medium leading-tight text-white/95"
                        >
                          {item.description}
                        </motion.p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <motion.div
                          layout="position"
                          className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-bold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20 dark:bg-black/25"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                            <MapPin className="h-3.5 w-3.5 fill-zinc-900 text-zinc-900" />
                          </div>
                          <span className="text-sm">{item.location}</span>
                        </motion.div>

                        <AnimatePresence>
                          {isHovered ? (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              className="hidden text-right lg:block"
                            >
                              <p className="mb-0.5 text-[10px] font-bold uppercase leading-none tracking-widest text-white/40">Access Window</p>
                              <p className="text-sm font-semibold leading-tight text-white">{item.hours}</p>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedOffering ? (
          <motion.div
            className="fixed inset-0 z-[10010]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-md"
              onClick={() => setSelectedOffering(null)}
              aria-label="Close offering preview"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.99 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[calc(50%+2rem)] flex h-[min(calc(100vh-8.5rem),860px)] w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_120px_-28px_rgba(0,0,0,0.5)] dark:bg-[linear-gradient(180deg,rgba(8,14,18,0.99),rgba(4,8,11,0.99))] sm:top-[calc(50%+2.5rem)]"
            >
              <div className="relative flex h-full w-full flex-col overflow-hidden text-zinc-900 dark:text-white">
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 sm:p-8">
                  <button
                    type="button"
                    onClick={() => setSelectedOffering(null)}
                    className="sticky top-0 z-20 ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition hover:bg-zinc-200 dark:bg-white/8 dark:text-white/80 dark:hover:bg-white/14"
                    aria-label="Close modal"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="mx-auto max-w-4xl">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {selectedOffering.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">{selectedOffering.eyebrow}</p>
                    <h4 className="mt-3 font-heading text-4xl font-black tracking-tight sm:text-5xl">{selectedOffering.title}</h4>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">{selectedOffering.heroBody}</p>

                    <div className="relative mt-8 overflow-hidden rounded-[1.8rem] bg-zinc-900 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={selectedOffering.image}
                          alt={selectedOffering.title}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      </div>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-500">Overview</p>
                        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">{selectedOffering.details}</p>
                      </div>

                      <div className="grid gap-3">
                        <div className="rounded-[1.5rem] bg-zinc-50 p-4 dark:bg-white/6">
                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">Location</p>
                          <p className="mt-2 text-sm font-semibold">{selectedOffering.location}</p>
                        </div>
                        <div className="rounded-[1.5rem] bg-zinc-50 p-4 dark:bg-white/6">
                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">Availability</p>
                          <p className="mt-2 text-sm font-semibold">{selectedOffering.hours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-500">What this product includes</p>
                      <div className="mt-4 space-y-3">
                        {selectedOffering.featureList.map((feature) => (
                          <div key={feature} className="rounded-[1.4rem] border border-emerald-100 bg-white p-4 text-sm leading-6 shadow-sm dark:border-white/8 dark:bg-white/4 dark:shadow-none">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                      >
                        <Link href={selectedOffering.learnMoreHref}>
                          {selectedOffering.ctaLabel}
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="rounded-full px-6 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/8"
                        onClick={() => setSelectedOffering(null)}
                      >
                        Close Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

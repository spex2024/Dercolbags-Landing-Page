"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const problems = [
  { num: "01", label: "Looks Cheap", desc: "Low-quality materials instantly devalue your product.", image: "/images/generic-packaging.png" },
  { num: "02", label: "No Trust", desc: "Customers doubt the quality inside when the outside fails.", image: "/images/corrugated-boxes.png" },
  { num: "03", label: "Slow Sales", desc: "You lose the shelf-appeal battle against premium competitors.", image: "/images/store.png" },
  { num: "04", label: "More Waste", desc: "Single-use plastics pile up, damaging your brand's reputation.", image: "/images/plastic-waste.png" },
]

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#030712] border-t border-b border-zinc-200 dark:border-white/10">
      <div className="container mx-auto px-6">

        {/* Top: Label + Headline side by side */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 pb-16 border-b border-zinc-200 dark:border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 block mb-6">
              The Reality
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.9] uppercase">
              Poor Packaging<br />
              <span className="text-zinc-500 dark:text-zinc-400">Hurts Your Business & The Environment.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:pl-12 border-l-2 border-emerald-500/20"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 dark:text-zinc-100 leading-[1.1] tracking-tighter italic">
              Your product <span className="font-black text-emerald-600 dark:text-emerald-500 not-italic uppercase tracking-normal">loses value</span><br className="hidden md:block" />
              <span className="text-lg md:text-xl lg:text-2xl opacity-60 not-italic font-medium tracking-normal ml-1">and our streets</span> <span className="font-black text-zinc-900 dark:text-white not-italic underline decoration-emerald-500/40 underline-offset-[12px] uppercase tracking-normal">pay the price.</span>
            </p>
          </motion.div>
        </div>

        {/* 4 Problems — heavy grid blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-zinc-950 dark:bg-[#030712] border border-zinc-200 dark:border-white/10 p-8 group relative overflow-hidden min-h-[300px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <Image 
                src={p.image} 
                alt={p.label} 
                fill 
                className="object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-zinc-950/10" />
              
              <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/5 dark:group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 font-bold block mb-4">{p.num}</span>
                <h3 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase mb-2 group-hover:text-emerald-500 transition-colors duration-300">
                  {p.label}
                </h3>
                <p className="text-sm font-medium text-zinc-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

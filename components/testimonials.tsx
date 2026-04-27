"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const reviews = [
  {
    quote: "DercolBags completely transformed our product presentation. Switching to their custom Kraft packaging reduced our costs by 20%, and our customers love the eco-friendly switch.",
    author: "Kwame A.",
    role: "Operations Manager",
    company: "Local Retail Hub"
  },
  {
    quote: "Finally, a local packaging manufacturer that delivers on time. No more waiting weeks for imported boxes. The quality is world-class right here in Accra.",
    author: "Emmanuel D.",
    role: "Founder",
    company: "Ghana Fresh Goods"
  },
  {
    quote: "The Watapak platform makes handling our industrial waste effortless. We now get paid for what we used to throw away, and the traceability is incredible.",
    author: "Sarah T.",
    role: "Supply Chain Director",
    company: "Accra Manufacturing Co."
  }
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50 dark:bg-[#08120e] border-t border-b border-zinc-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-500 block mb-6"
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-950 dark:text-white uppercase"
          >
            Trusted By Local<br />
            <span className="text-zinc-500">Industry Leaders.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-zinc-200 dark:text-white/10 mb-6" />
                <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-8">
                  &quot;{review.quote}&quot;
                </p>
              </div>
              <div className="border-t border-zinc-100 dark:border-white/10 pt-6">
                <p className="font-black text-sm uppercase tracking-wider text-zinc-950 dark:text-white">{review.author}</p>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mt-1">
                  {review.role}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                  {review.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

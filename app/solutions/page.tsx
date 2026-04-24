"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Package, 
  Box, 
  Layers, 
  Palette, 
  Recycle, 
  GraduationCap, 
  Handshake,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShoppingCart,
  ArrowUpRight
} from "lucide-react"

import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Corrugated Boxes",
    description: "High-strength, recycled fiber boxes engineered for industrial protection and retail excellence.",
    image: "/images/corrugated-boxes.png",
    specs: ["Custom Dimensions", "Recycled Material", "High Burst Strength", "Stackable Design"],
    storeHref: "/store"
  },
  {
    title: "Eco Pouches",
    description: "Flexible, food-grade paper pouches designed for safety and shelf-life optimization.",
    image: "/images/pouches.png",
    specs: ["Grease Resistant", "Sustainable Liner", "Bespoke Printing", "Re-sealable Options"],
    storeHref: "/store"
  },
  {
    title: "Custom Packaging",
    description: "Bespoke structural design and premium branding tailored to your product's unique story.",
    image: "/images/custom-packaging.png",
    specs: ["Architectural Design", "Brand Integration", "Prototype Testing", "Premium Finishes"],
    storeHref: "/store"
  },
  {
    title: "Generic Packaging",
    description: "Ready-to-ship, high-quality sustainable packaging for immediate industrial needs.",
    image: "/images/generic-packaging.png",
    specs: ["Standard Sizes", "Bulk Pricing", "Immediate Dispatch", "100% Recyclable"],
    storeHref: "/store"
  }
]

const services = [
  {
    title: "01 Community Waste Recovery Program",
    description: "We orchestrate local circular nodes that convert community plastic waste into premium packaging streams.",
    icon: Recycle,
    metric: "Circular Loop"
  },
  {
    title: "Training & Consultancy",
    description: "Expert guidance on sustainability transitions, waste management, and industrial circularity.",
    icon: GraduationCap,
    metric: "Knowledge Base"
  },
  {
    title: "Procurement Support",
    description: "Strategic sourcing of sustainable alternatives to lower costs and environmental impact.",
    icon: Handshake,
    metric: "Supply Chain"
  }
]

export default function SolutionsPage() {
  return (
    <div className="bg-white dark:bg-[#030712] selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden pt-20">
      
      {/* 1. ARCHITECTURAL HERO */}
      <section className="py-32 md:py-48 px-6 border-b border-zinc-100 dark:border-white/5">
        <div className="container mx-auto">
          <div className="max-w-5xl">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             >
               <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.8] uppercase mb-12">
                  Precision <br />
                  <span className="text-emerald-600">Packaging.</span>
               </h1>
               <p className="text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 font-light leading-snug max-w-2xl italic">
                  Architecting the infrastructure for a waste-free African economy through high-performance sustainable products.
               </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE (NO GENERICS) */}
      <section className="py-20">
         <div className="container mx-auto px-6">
            <div className="space-y-40">
               {products.map((product, i) => (
                 <div key={product.title} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Column */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="lg:w-1/2 aspect-square relative rounded-none overflow-hidden bg-zinc-50 dark:bg-white/5 group border border-zinc-100 dark:border-white/5"
                    >
                       <Image 
                         src={product.image} 
                         alt={product.title} 
                         fill 
                         className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                       />
                       <div className="absolute inset-0 bg-black/5 dark:bg-emerald-950/10 mix-blend-multiply" />
                    </motion.div>

                    {/* Content Column */}
                    <div className="lg:w-1/2">
                       <div className="mb-10">
                          <h2 className="text-4xl md:text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase mb-6 leading-none">
                             {product.title}
                          </h2>
                          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10">
                             {product.description}
                          </p>
                       </div>

                       <div className="grid grid-cols-2 gap-4 mb-12">
                          {product.specs.map(spec => (
                            <div key={spec} className="flex items-center gap-3 py-3 border-b border-zinc-100 dark:border-white/10">
                               <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                               <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{spec}</span>
                            </div>
                          ))}
                       </div>

                       <Button asChild size="lg" className="rounded-none bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white h-16 px-10 text-lg font-black uppercase tracking-tighter border-none transition-all shadow-none group">
                          <Link href={product.storeHref} className="flex items-center gap-3">
                             <ShoppingCart className="h-5 w-5" />
                             Visit Store
                             <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                       </Button>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. STRATEGIC SERVICES (INDUSTRIAL DARK SECTION) */}
      <section className="py-40 bg-zinc-950 dark:bg-black text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-end mb-32">
               <div className="lg:w-2/3">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                     Strategic <br /> <span className="text-emerald-500 italic font-medium">Circularity.</span>
                  </h2>
               </div>
               <p className="lg:w-1/3 text-xl text-zinc-400 font-light italic border-l border-emerald-500/30 pl-8">
                  Beyond production, we provide the architectural guidance to transition your entire business into the circular economy.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
               {services.map((service, i) => (
                 <div key={service.title} className="p-12 md:p-16 bg-zinc-950 dark:bg-black hover:bg-zinc-900 transition-colors group">
                    <div className="h-16 w-16 rounded-none bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-12 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all border border-emerald-500/20">
                       <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 leading-tight">{service.title}</h3>
                    <p className="text-zinc-500 font-light leading-relaxed mb-10">{service.description}</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-colors">
                       Inquire <ArrowUpRight className="h-4 w-4" />
                    </Link>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  )
}

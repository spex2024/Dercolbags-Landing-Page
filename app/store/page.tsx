"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

const SALES_NUMBER = "233575529823"

const categories = ["All", "Bags", "Boxes", "Pouches", "Custom"]

const products = [
  {
    title: "Paper Bags",
    category: "Bags",
    description: "Heavy-duty Kraft paper bags with twisted handles, custom branding, and reinforced bottom.",
    image: "/images/product-paper-bag-ritual.jpg",
  },
  {
    title: "Corrugated Boxes",
    category: "Boxes",
    description: "High-strength recycled fiber boxes with custom dimensions and stackable design for industrial use.",
    image: "/images/corrugated-boxes.png",
  },
  {
    title: "Paper Boxes",
    category: "Boxes",
    description: "Architectural-grade sustainable paper boxes for premium retail and industrial presentation.",
    image: "/images/product-paper-box-gable.jpg",
  },
  {
    title: "Eco Pouches",
    category: "Pouches",
    description: "Food-grade paper pouches with grease-resistant liner and re-sealable options.",
    image: "/images/product-pouch-standup.jpg",
  },
  {
    title: "Custom Packaging",
    category: "Custom",
    description: "Bespoke structural design with premium finishes, brand integration, and prototype testing.",
    image: "/images/custom-packaging.png",
  },
  {
    title: "Generic Packaging",
    category: "Boxes",
    description: "Ready-to-ship sustainable boxes and pouches in standard sizes for immediate dispatch.",
    image: "/images/product-generic-container.jpg",
  },
  {
    title: "Branded Takeaway Bags",
    category: "Bags",
    description: "Full-color printed paper bags with custom illustrations and rope handles for restaurants and cafés.",
    image: "/images/product-takeaway-bag.jpg",
  },
  {
    title: "Delivery Bags",
    category: "Bags",
    description: "Sealed kraft delivery bags with fold-over closures and built-in labeling for food delivery brands.",
    image: "/images/product-delivery-bag.jpg",
  },
  {
    title: "Custom Food Boxes",
    category: "Boxes",
    description: "Custom-printed hexagonal food boxes with vivid branding, perfect for burgers, snacks, and fast-casual dining.",
    image: "/images/product-burger-box.jpg",
  },
  {
    title: "Event & Wedding Bags",
    category: "Bags",
    description: "Personalized gift bags with bespoke artwork for weddings, parties, and special occasions.",
    image: "/images/product-event-bag.jpg",
  },
  {
    title: "Premium Gift Boxes",
    category: "Boxes",
    description: "Rigid magnetic-closure gift boxes with ribbon detailing and foil-stamped branding for premium gifting.",
    image: "/images/product-gift-box.jpg",
  },
  {
    title: "Retail Stand-Up Pouches",
    category: "Pouches",
    description: "Durable stand-up pouches with resealable zips for retail products like charcoal, snacks, and dry goods.",
    image: "/images/product-briquette-pouch.jpg",
  },
]

export default function StorePage() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [activeTitle, setActiveTitle] = React.useState<string | null>(null)

  const filtered = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-[#08120e] pt-24">
      {/* Page Header */}
      <div className="border-b border-zinc-200 dark:border-white/10">
        <div className="container mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-none">
              Our Store
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-light text-lg mt-4">
              {products.length} products — inquire on WhatsApp to order
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 z-30 border-b border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-[#08120e]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex gap-1 -mb-px overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-all shrink-0 ${
                  activeCategory === cat
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                    : "border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-zinc-400 text-lg font-light">No products in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => {
                const isOpen = activeTitle === product.title
                return (
                <motion.div
                  key={product.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setActiveTitle(isOpen ? null : product.title)}
                  className="group relative aspect-[4/5] overflow-hidden bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 transition-colors duration-300 cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Full darkening on hover/tap so the revealed text stays readable */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-500 ${
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* Thin permanent scrim so the title is always legible */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Category badge — top-right, clear of any logo baked into the photo */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 px-2.5 py-1">
                      {product.category}
                    </span>
                  </div>

                  {/* Content — title always static at the bottom; description + CTA collapse fully at rest */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-black text-white uppercase tracking-tighter leading-tight">
                      {product.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100"
                      }`}
                    >
                      <p className="text-[11px] text-zinc-300 font-light leading-relaxed mt-1.5 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <a
                        href={`https://wa.me/${SALES_NUMBER}?text=${encodeURIComponent(`Hi DercolBags, I'm interested in your ${product.title}. Please provide more details.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 w-full h-9 bg-white hover:bg-emerald-500 text-zinc-950 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Inquire
                      </a>
                    </div>
                  </div>
                </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

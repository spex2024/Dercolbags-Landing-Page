"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

const SALES_NUMBER = "233575529823"

const categories = ["All", "Bags", "Boxes", "Pouches", "Custom"]

const products = [
  {
    title: "Kraft Paper Bags",
    category: "Bags",
    description: "Heavy-duty kraft paper bags with rope handles, custom branding, and a reinforced base — a café and retail staple.",
    image: "/images/product-paper-bag-ritual.jpg",
  },
  {
    title: "Corrugated Shipping Boxes",
    category: "Boxes",
    description: "High-strength recycled fiber boxes with custom dimensions and stackable design for industrial use.",
    image: "/images/corrugated-boxes.png",
  },
  {
    title: "Gable Boxes",
    category: "Boxes",
    description: "Fold-flat gable boxes with built-in carry handles, perfect for cakes, party favors, and takeaway meals.",
    image: "/images/product-paper-box-gable.jpg",
  },
  {
    title: "Window Zip Pouches",
    category: "Pouches",
    description: "Food-grade kraft stand-up pouches with clear display windows and resealable zips for snacks and dry goods.",
    image: "/images/product-pouch-standup.jpg",
  },
  {
    title: "Custom Packaging",
    category: "Custom",
    description: "Bespoke structural design with premium finishes, brand integration, and prototype testing.",
    image: "/images/custom-packaging.png",
  },
  {
    title: "Kraft Bowls",
    category: "Boxes",
    description: "Stackable kraft paper bowls with matching lids in standard sizes, ready for soups, salads, and hot food.",
    image: "/images/product-generic-container.jpg",
  },
  {
    title: "Branded Paper Cups",
    category: "Custom",
    description: "Custom-printed paper food cups with matching carrier trays, perfect for ice cream, desserts, and snacks.",
    image: "/images/product-paper-cups.jpg",
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
    title: "Luxury Boutique Bags",
    category: "Bags",
    description: "Matte black boutique bags with gold foil-stamped branding, rope handles, and premium contrast interiors.",
    image: "/images/product-boutique-bag.jpg",
  },
  {
    title: "Premium Shopping Bags",
    category: "Bags",
    description: "Rich metallic-finish shopping bags with rope handles and refined single-color branding for restaurants and retail.",
    image: "/images/product-premium-shopping-bag.jpg",
  },
  {
    title: "Corporate Gift Bags",
    category: "Bags",
    description: "Crisp white executive bags with full-color crest printing and cotton rope handles for institutions and corporate gifting.",
    image: "/images/product-corporate-bag.jpg",
  },
  {
    title: "Printed Boutique Bags",
    category: "Bags",
    description: "Vivid full-colour boutique bags with patterned gussets and rope handles for fashion and beauty brands.",
    image: "/images/product-printed-boutique-bag.jpg",
  },
  {
    title: "Fashion Retail Bags",
    category: "Bags",
    description: "Bold two-tone fashion bags with printed front panels and rope handles for clothing lines and streetwear brands.",
    image: "/images/product-fashion-retail-bag.jpg",
  },
  {
    title: "Memorial & Funeral Bags",
    category: "Bags",
    description: "Personalized tribute bags with photo printing and patterned gussets for funerals and memorial services.",
    image: "/images/product-memorial-bag.jpg",
  },
  {
    title: "Canvas Tote Bags",
    category: "Bags",
    description: "Reusable printed canvas totes, durable and washable — a sustainable choice for shopping and campaigns.",
    image: "/images/product-canvas-tote.jpg",
  },
  {
    title: "Marble Thank You Bags",
    category: "Bags",
    description: "Ready-made grey marble-print bags with an elegant Thank You motif, perfect off-the-shelf for boutiques and gifting.",
    image: "/images/product-marble-thankyou-bag.jpg",
  },
  {
    title: "Damask Thank You Bags",
    category: "Bags",
    description: "Cream damask-patterned bags with black rope handles and classic Thank You script, ready for instant retail use.",
    image: "/images/product-damask-thankyou-bag.jpg",
  },
  {
    title: "Gold Trim Marble Bags",
    category: "Bags",
    description: "Marble-print gift bags framed in gold with rope handles, ready-made for weddings, events, and boutique retail.",
    image: "/images/product-gold-marble-bag.jpg",
  },
  {
    title: "Kraft Takeout Boxes",
    category: "Boxes",
    description: "Grease-resistant kraft takeout boxes in multiple sizes with secure fold-top closures and custom sleeve branding.",
    image: "/images/product-takeout-box.jpg",
  },
  {
    title: "Slide Drawer Boxes",
    category: "Boxes",
    description: "Rigid slide-out drawer boxes with ribbon handles and pull tabs, ideal for wigs, hair bundles, and premium retail.",
    image: "/images/product-drawer-box.jpg",
  },
  {
    title: "Kraft Lid & Base Boxes",
    category: "Boxes",
    description: "Sturdy two-piece kraft boxes with fitted lids for gifting, apparel, and everyday retail packaging.",
    image: "/images/product-kraft-lid-box.jpg",
  },
  {
    title: "Fruit Window Boxes",
    category: "Boxes",
    description: "Corrugated produce boxes with clear display windows and vibrant print, perfect for fruits and fresh goods.",
    image: "/images/product-fruit-window-box.jpg",
  },
  {
    title: "Corrugated Burger Boxes",
    category: "Boxes",
    description: "Vibrant corrugated clamshell boxes with insulating fluted walls, ideal for burgers and hot sandwiches.",
    image: "/images/product-corrugated-burger-box.jpg",
  },
  {
    title: "Window Pastry Boxes",
    category: "Boxes",
    description: "Kraft snack boxes with clear display windows and food-safe lining, perfect for pastries, cookies, and treats on the go.",
    image: "/images/product-window-pastry-box.jpg",
  },
  {
    title: "Printed Burger Boxes",
    category: "Boxes",
    description: "Custom-printed clamshell burger boxes with vivid all-over branding for burgers, snacks, and fast-casual dining.",
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
    title: "Custom Printed Pouches",
    category: "Pouches",
    description: "Fully printed block-bottom pouches for retail products like charcoal briquettes, coffee, and dry goods.",
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

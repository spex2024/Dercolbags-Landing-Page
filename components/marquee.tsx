"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Fidelity Bank Ghana", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1782441825/partners/Member-logos-and-steering-committee-templates-for-website-80_ns2zbs.png" },
  { name: "Acumen West Africa", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1782441825/partners/1280px-Deutsche_Welle_Logo.svg__ezziiq.png" },
  { name: "Orange Corners", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1782441825/partners/ey_r49idr.jpg" },
  { name: "Ghana Climate Innovation Centre", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1782441825/partners/GCIC_Stacked_Logo_Full-Colour_chkpov.png" },
  { name: "Miller Center for Social Entrepreneurship", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730642005/partners/Picture3_rdukuo.png" },
  { name: "Westerwelle Foundation", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641749/partners/Picture12_h8pnv4.jpg" },
  { name: "Because International", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641721/partners/Picture5_zv1fxp.jpg" },
  { name: "EY Ghana", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641721/partners/Picture2_ynw3op.png" },
  { name: "Deutsche Welle", logo: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1730641622/partners/Picture4_fjgkgb.png" },
  { name: "AgrInnovators", logo: "" },
]

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-transparent py-14">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 mb-10 flex items-center gap-3">
        <div className="h-1.5 w-8 bg-emerald-500" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900 dark:text-zinc-100">
          Trusted by // Global Circular Systems
        </span>
      </div>

      <div className="flex select-none overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-32 pr-32"
        >
          {/* First set of partners */}
          {partners.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center transition-all duration-500 cursor-pointer shrink-0"
            >
              {partner.logo ? (
                <div className="relative w-40 h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ) : (
                <span className="font-heading text-sm md:text-base lg:text-lg font-black tracking-[0.2em] text-zinc-950 dark:text-white uppercase whitespace-nowrap">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {partners.map((partner, idx) => (
            <div
              key={`${partner.name}-dup-${idx}`}
              className="flex items-center justify-center transition-all duration-500 cursor-pointer shrink-0"
            >
              {partner.logo ? (
                <div className="relative w-40 h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ) : (
                <span className="font-heading text-sm md:text-base lg:text-lg font-black tracking-[0.2em] text-zinc-950 dark:text-white uppercase whitespace-nowrap">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Industrial Gradients for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-[#08120e] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-[#08120e] to-transparent z-10 pointer-events-none" />
    </div>
  )
}

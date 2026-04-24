"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react"

import { Button } from "@/components/ui/button"

const contactSocials = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/dercolbags/", 
    path: "M12 0c-3.263 0-3.67.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c3.403 0 6.162 2.759 6.162 6.162s-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163 2.759-6.162 6.162-6.162zm0 10.162c2.209 0 4-1.79 4-4 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 2.21 1.791 4 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/dercolbagspackaging/", 
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
  },
  { 
    name: "X", 
    href: "https://x.com/DercolBags", 
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" 
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@dercolbags2736",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/DercolBags/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  }
]

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#030712] selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden min-h-screen pt-20">
      
      {/* 1. ARCHITECTURAL HERO */}
      <section className="py-24 md:py-48 px-6 border-b border-zinc-100 dark:border-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.8] uppercase mb-12">
               Connect <br />
               <span className="text-emerald-600">With Us.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-zinc-500 dark:text-zinc-400 font-light leading-snug max-w-3xl italic">
               Architecting sustainable packaging routes across West Africa. No generics. Just impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SPLIT INTERFACE: INFO + FORM */}
      <section className="py-24 lg:py-40 px-6">
         <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-start">
               
               {/* LEFT: DIRECT CONTACT DETAILS */}
               <div className="space-y-24">
                  <div className="space-y-12">
                     <div className="group block">
                        <div className="flex items-center gap-4 text-emerald-500 mb-4">
                           <Mail className="h-5 w-5" />
                        </div>
                        <a href="mailto:info@dercolbags.com" className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase hover:text-emerald-500 transition-colors">
                           info@dercolbags.com
                        </a>
                     </div>

                     <div className="group block">
                        <div className="flex items-center gap-4 text-emerald-500 mb-4">
                           <Phone className="h-5 w-5" />
                        </div>
                        <a href="tel:+233547499174" className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase hover:text-emerald-500 transition-colors">
                           +233 54 749 9174
                        </a>
                     </div>

                     <div className="group block">
                        <div className="flex items-center gap-4 text-emerald-500 mb-4">
                           <MapPin className="h-5 w-5" />
                        </div>
                        <p className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase">
                           Accra, Ghana
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-10 border-t border-zinc-100 dark:border-white/5 pt-12">
                     {contactSocials.map((social, i) => (
                        <Link 
                          key={i} 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-zinc-400 hover:text-emerald-500 transition-all hover:-translate-y-1"
                          aria-label={social.name}
                        >
                           <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                             <path d={social.path} />
                           </svg>
                        </Link>
                     ))}
                  </div>
               </div>

               {/* RIGHT: MINIMALIST FORM (SHARP) */}
               <div className="bg-zinc-50 dark:bg-white/5 p-12 md:p-20 border border-zinc-100 dark:border-white/5">
                  <h3 className="text-4xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter mb-16">Send Inquiry</h3>
                  <form className="space-y-12">
                     <div className="space-y-2">
                        <input 
                           type="text" 
                           placeholder="Full Name" 
                           className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 pb-6 text-xl font-bold text-zinc-950 dark:text-white focus:border-emerald-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-800 rounded-none"
                        />
                     </div>
                     <div className="space-y-2">
                        <input 
                           type="email" 
                           placeholder="E-mail Address" 
                           className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 pb-6 text-xl font-bold text-zinc-950 dark:text-white focus:border-emerald-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-800 rounded-none"
                        />
                     </div>
                     <div className="space-y-2">
                        <textarea 
                           rows={4} 
                           placeholder="Your Message" 
                           className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 pb-6 text-xl font-bold text-zinc-950 dark:text-white focus:border-emerald-500 outline-none transition-all resize-none placeholder:text-zinc-300 dark:placeholder:text-zinc-800 rounded-none"
                        />
                     </div>
                     
                     <Button className="w-full h-24 rounded-none bg-zinc-950 dark:bg-emerald-500 text-white hover:bg-emerald-600 dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-500 flex items-center justify-between px-12 group border-none">
                        <span className="text-2xl font-black uppercase tracking-tighter">Initialize Connection</span>
                        <ArrowUpRight className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                     </Button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* 3. INDUSTRIAL MAP (SHARP & INTEGRATED) */}
      <section className="relative h-[600px] md:h-[800px] w-full border-y border-zinc-100 dark:border-white/5 overflow-hidden group">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4721473210414!2d-0.16917692415174094!3d5.689585694291885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8344e4a6a6a7%3A0x6b24d9c4f6b1e6a7!2sPaterson%20Ave%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1713190000000!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 transition-all duration-1000 group-hover:grayscale-0"
         />
         
         <div className="absolute inset-0 pointer-events-none bg-black/5 dark:bg-emerald-950/10 mix-blend-multiply" />

         {/* Floating Node Info Box (Sharp) */}
         <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20">
            <div className="bg-zinc-950 dark:bg-black p-10 md:p-16 border border-white/10 shadow-2xl max-w-md">
               <div className="h-1 w-12 bg-emerald-500 mb-6" />
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-8">
                  Ritz <br /> <span className="text-emerald-500">Adenta.</span>
               </h2>
               <div className="space-y-6 border-t border-white/10 pt-8">
                  <div>
                     <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Coordinates</p>
                     <p className="text-lg font-mono text-white">05°41′22″N 00°09′58″W</p>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Address</p>
                     <p className="text-lg text-zinc-300 font-light leading-snug">Paterson Avenue, <br /> Ritz Junction, Adenta, Accra</p>
                  </div>
                  <div className="pt-8">
                     <Link href="https://maps.app.goo.gl/uXv7f7xR6v7X9Y8W9" target="_blank" className="flex items-center gap-3 text-emerald-500 font-black uppercase tracking-tighter hover:text-white transition-colors group/link">
                        Open in Navigation
                        <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

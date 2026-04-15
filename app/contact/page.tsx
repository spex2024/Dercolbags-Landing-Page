"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
// v1.0.3 - Nexus Operational Hub Redesign
import { 
  ArrowUpRight, 
  BriefcaseBusiness,
  Send, 
  Camera, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  Activity,
  Zap,
  ArrowRight
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { FloatingPathsBackground } from "@/components/ui/floating-paths"

export default function ContactPage() {
  const [isQuickReply, setIsQuickReply] = React.useState(false)
  const [activeNode, setActiveNode] = React.useState("COMMUNICATION")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  } as any

  return (
    <div className="bg-white dark:bg-[#030712] selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden min-h-screen">
      
      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-zinc-100 dark:border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10 pointer-events-none" />
        <FloatingPathsBackground position={1} className="absolute inset-0 z-0" />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start"
          >
            {/* Left: Headline */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-emerald-500/50" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-600 dark:text-emerald-400 uppercase font-black">
                  Contact Us
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl 2xl:text-9xl font-black leading-[0.82] tracking-tighter text-zinc-950 dark:text-white uppercase">
                Get In <br />
                <span className="text-emerald-500 italic">Touch.</span>
              </h1>
            </motion.div>

            {/* Right: Body */}
            <motion.div variants={itemVariants} className="lg:pt-24 max-w-md">
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-light tracking-tight">
                Architecting sustainable packaging routes across West Africa. Every node in our ecosystem is an opportunity for collective growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* 2. INTERACTIVE OPERATIONAL HUB (MAP + FORM) */}
      <section id="connect" className="relative py-24 lg:py-40 bg-zinc-50/50 dark:bg-black/50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-px bg-zinc-200 dark:bg-white/10 rounded-3xl lg:rounded-[3rem] overflow-hidden">
            
            {/* LEFT: TACTICAL MAP PANEL */}
            <div className="relative bg-white dark:bg-zinc-900 h-[400px] md:h-[600px] lg:h-auto overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127063.155462!2d-0.260833!3d5.591208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed18ed863994058!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1713190000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) brightness(1.1) contrast(0.9) opacity(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none mix-blend-overlay" />
              
              {/* Tactical Markers Overlay */}
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-zinc-950/90 dark:bg-zinc-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    <span className="font-mono text-xs font-black text-white uppercase tracking-[0.2em]">Operational Node</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold uppercase tracking-tighter">Accra Core Hub</p>
                    <p className="text-zinc-400 text-[10px] font-mono leading-none">05°35′N 00°12′W // Ayappakkam District</p>
                  </div>
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
                 <div className="flex items-center gap-2">
                    <Zap className="h-3 w-3 text-emerald-400" />
                    <span className="font-mono text-[10px] text-white uppercase font-bold tracking-widest">High Response Hub</span>
                 </div>
              </div>
            </div>

            {/* RIGHT: NEXUS CONNECTION INTERFACE */}
            <div className="bg-white dark:bg-[#030712] p-8 md:p-12 lg:p-24 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Send className="h-32 w-32 md:h-40 md:w-40 text-emerald-500 rotate-12" />
               </div>

               <div className="relative z-10 space-y-12 md:space-y-16">
                  <div className="space-y-4">

                    <h3 className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-none">Start the <br />Collaboration.</h3>
                  </div>

                  <form className="space-y-12">
                    <div className="space-y-4 group">
                      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2 group-focus-within:text-emerald-500 transition-colors">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" /> 01 // IDENTITY
                      </p>
                      <input 
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 pb-4 md:pb-6 text-xl md:text-2xl font-bold text-zinc-950 dark:text-white focus:border-emerald-500 outline-none transition-all placeholder:text-zinc-200 dark:placeholder:text-zinc-800"
                      />
                    </div>

                    <div className="space-y-4 group">
                      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2 group-focus-within:text-emerald-500 transition-colors">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" /> 02 // ACCESS NODE
                      </p>
                      <input 
                        type="email"
                        placeholder="E-mail Address"
                        className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 pb-4 md:pb-6 text-xl md:text-2xl font-bold text-zinc-950 dark:text-white focus:border-emerald-500 outline-none transition-all placeholder:text-zinc-200 dark:placeholder:text-zinc-800"
                      />
                    </div>

                    <div className="space-y-4 group">
                      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2 group-focus-within:text-emerald-500 transition-colors">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" /> 03 // CORE MESSAGE
                      </p>
                      <textarea 
                        rows={3}
                        placeholder="Project Proposal or Inquiry"
                        className="w-full bg-transparent border-b border-zinc-200 dark:border-white/10 pb-4 md:pb-6 text-xl md:text-2xl font-bold text-zinc-950 dark:text-white focus:border-emerald-500 outline-none transition-all resize-none placeholder:text-zinc-200 dark:placeholder:text-zinc-800"
                      />
                    </div>

                    <div className="flex items-center gap-6 cursor-pointer group/check" onClick={() => setIsQuickReply(!isQuickReply)}>
                      <div className={`h-6 w-6 border-2 transition-all flex items-center justify-center ${isQuickReply ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-200 dark:border-white/10 group-hover/check:border-emerald-500/50'}`}>
                        {isQuickReply && <span className="text-white text-xs font-black">✓</span>}
                      </div>
                      <span className="text-sm font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-widest italic group-hover/check:text-emerald-500 transition-colors">Priority response enabled</span>
                    </div>

                    <div className="pt-8 md:pt-10">
                      <Button className="w-full h-20 md:h-24 rounded-2xl bg-zinc-950 dark:bg-emerald-500 text-white hover:bg-emerald-600 dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-500 flex items-center justify-between px-6 md:px-12 group overflow-hidden hover:-translate-y-2">
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">Initialize Connection</span>
                        <div className="flex items-center overflow-hidden w-10 h-10 md:w-12 md:h-12 relative border border-white/20 rounded-full justify-center">
                           <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full absolute" />
                           <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 -translate-x-full translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                        </div>
                      </Button>
                    </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL NODE FOCUS (OFFICE TRIPTYCH) */}
      <section id="grounds" className="relative py-24 lg:py-48 overflow-hidden bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto space-y-6">
             <div className="flex items-center justify-center gap-3">
                <Activity className="h-4 w-4 text-emerald-500" />
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400">Physical Base Node</span>
             </div>
             <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-950 dark:text-white uppercase leading-[0.8]">
               Operational <br />
               <span className="text-zinc-300 dark:text-zinc-800">Grounds.</span>
             </h2>
             <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
               Our HQ in Accra is the engineering core where circular packaging strategy meets industrial scale.
             </p>
          </div>

          {/* Staggered Triptych Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end px-4 lg:px-0">
            {/* Image 1: Exterior (Bottom-Left Stagger) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group border border-zinc-100 dark:border-white/5 order-2 md:order-1"
            >
              <Image 
                src="/images/office-exterior.png"
                alt="DercolBags HQ Exterior"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] uppercase font-bold tracking-widest">Exterior Shell</p>
              </div>
            </motion.div>

            {/* Image 2: Interior (Center - Large/Main) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group border border-zinc-100 dark:border-white/5 md:-translate-y-16 order-1 md:order-2"
            >
              <Image 
                src="/images/office-interior.png"
                alt="DercolBags HQ Interior"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-mono text-[10px] uppercase font-bold tracking-widest mb-1">Strategic Environment</p>
                <h4 className="text-2xl font-black uppercase tracking-tighter">Office Interior</h4>
              </div>
            </motion.div>

            {/* Image 3: Entrance (Top-Right Stagger) */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group border border-zinc-100 dark:border-white/5 order-3"
            >
              <Image 
                src="/images/office-entrance.png"
                alt="DercolBags HQ Entrance"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-6 right-6 text-white text-right opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-[10px] uppercase font-bold tracking-widest">Main Node Entrance</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-20 md:mt-32 grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto border-t border-zinc-100 dark:border-white/5 pt-12 text-center md:text-left items-start md:items-end">
             <div className="space-y-4 flex flex-col items-center md:items-start">
                <p className="text-xs font-mono uppercase text-zinc-400 tracking-widest font-black flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" /> Access Protocol
                </p>
                <div className="space-y-1">
                  <p className="text-lg md:text-xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter italic">Mon — Fri: 08:00 - 18:00</p>
                  <p className="text-lg md:text-xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter italic">+233 24 000 0000</p>
                </div>
             </div>
             <div className="flex gap-4 md:gap-6 justify-center md:justify-end items-end">
               {[BriefcaseBusiness, Send, Camera, Globe].map((Icon, i) => (
                 <Link key={i} href="#" className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-white/5 text-zinc-400 hover:text-emerald-500 transition-all hover:scale-110">
                   <Icon className="h-5 w-5 md:h-6 md:w-6" />
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </section>

    </div>
  )
}

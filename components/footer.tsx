"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Leaf, ArrowRight, Send, BriefcaseBusiness, Camera, CheckCircle } from "lucide-react"
import Image from "next/image"

export function FooterNewsletter() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="relative rounded-none overflow-hidden border border-zinc-100 dark:border-white/5">
      {/* Background - White in light mode, Dark in dark mode */}
      <div className="absolute inset-0 bg-white dark:bg-[#030712]" />
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-10 pointer-events-none" />
      
      <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Copy */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-1 w-12 bg-emerald-500" />
            </div>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9] mb-6 uppercase">
              Stay ahead of <br />
              <span className="text-emerald-600">sustainable packaging</span>
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium leading-relaxed max-w-md italic">
              Get eco-packaging innovations and exclusive DercolBags insights straight to your terminal.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 px-8 py-6 rounded-none bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="text-zinc-900 dark:text-white font-black text-sm uppercase tracking-tighter">Access Granted</p>
                </div>
              </motion.div>
            ) : (
              <div className="relative">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER EMAIL ADDRESS"
                      required
                      className="w-full px-6 py-4 rounded-none border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-900 dark:text-white text-xs font-mono tracking-widest placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-zinc-950 dark:bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white font-black text-sm uppercase tracking-tighter transition-all disabled:opacity-70 group"
                  >
                    {loading ? (
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-none"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-emerald-50 pt-16 pb-8 dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(7,11,14,0.98),rgba(4,7,10,1))]">
      <div className="container mx-auto px-6">
        {/* Newsletter Block */}
        <div className="mb-14">
          <FooterNewsletter />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 pb-10 border-b border-zinc-100 dark:border-white/8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="relative block h-32 w-96 mb-10">
              <Image
                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777042366/dercolbags/DERCOLBAGS_LOGO_tolkgw.png"
                alt="DercolBags Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs dark:text-zinc-400 italic mb-4">
              Sustainable packaging and climate-tech firm empowering African businesses to replace single-use plastics with eco-friendly alternatives.
            </p>
            <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest mb-6">
              <span className="text-emerald-500">T:</span>
              <a href="tel:+233547499174" className="hover:text-emerald-500 transition-colors">+233 54 749 9174</a>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[
                { name: "X", href: "https://x.com/DercolBags", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/dercolbagspackaging/", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "Instagram", href: "https://www.instagram.com/dercolbags/", path: "M12 0c-3.263 0-3.67.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c3.403 0 6.162 2.759 6.162 6.162s-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163 2.759-6.162 6.162-6.162zm0 10.162c2.209 0 4-1.79 4-4 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 2.21 1.791 4 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "Facebook", href: "https://www.facebook.com/DercolBags/", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { name: "YouTube", href: "https://www.youtube.com/@dercolbags2736", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
              ].map(({ name, href, path }) => (
                <Link
                  key={name}
                  href={href}
                  className="flex items-center justify-center w-9 h-9 rounded-none border border-zinc-100 dark:border-white/5 bg-zinc-50 hover:bg-emerald-50 hover:text-emerald-600 text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 dark:bg-white/6 dark:text-zinc-300 dark:hover:bg-emerald-500 dark:hover:text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={path} /></svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Packaging Column */}
          <div>
            <p className="text-xs font-black tracking-widest text-zinc-400 uppercase mb-4 dark:text-zinc-500">Packaging</p>
            <ul className="flex flex-col gap-2.5">
              {["Corrugated Boxes", "Pouches", "Custom Packaging", "Generic Packaging"].map((item) => (
                <li key={item}>
                  <Link href="/solutions" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors duration-150 flex items-center gap-1.5 group dark:text-zinc-300 dark:hover:text-emerald-400 uppercase font-black tracking-tighter">
                    <span className="w-1.5 h-1.5 rounded-none bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <p className="text-xs font-black tracking-widest text-zinc-400 uppercase mb-4 dark:text-zinc-500">Services</p>
            <ul className="flex flex-col gap-2.5">
              {["Community Waste Recovery Program", "Training & Consultancy", "Procurement Support"].map((item) => (
                <li key={item}>
                  <Link href="/solutions" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors duration-150 flex items-center gap-1.5 group dark:text-zinc-300 dark:hover:text-emerald-400 uppercase font-black tracking-tighter">
                    <span className="w-1.5 h-1.5 rounded-none bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="text-xs font-black tracking-widest text-zinc-400 uppercase mb-4 dark:text-zinc-500">Company</p>
            <ul className="flex flex-col gap-2.5">
              {[{ name: "About Us", href: "/about" }, { name: "Sustainability", href: "/community-impact" }, { name: "Watapak", href: "/watapak" }, { name: "Contact", href: "/contact" }].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors duration-150 flex items-center gap-1.5 group dark:text-zinc-300 dark:hover:text-emerald-400 uppercase font-black tracking-tighter">
                    <span className="w-1 h-1 rounded-none bg-zinc-300 group-hover:bg-emerald-500 transition-colors dark:bg-zinc-600 dark:group-hover:bg-emerald-400" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <p>© 2026 DercolBags Packaging Company Ltd. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px] font-black">
            <Link href="#" className="hover:text-emerald-600 transition-colors dark:hover:text-emerald-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors dark:hover:text-emerald-400">Terms of Service</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors dark:hover:text-emerald-400">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

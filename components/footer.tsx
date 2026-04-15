"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Leaf, ArrowRight, Send, BriefcaseBusiness, Camera, CheckCircle } from "lucide-react"

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
    <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-100 dark:border-white/5">
      {/* Background - White in light mode, Dark in dark mode */}
      <div className="absolute inset-0 bg-white dark:bg-[#030712]" />
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-10 pointer-events-none" />
      
      <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Copy */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400">System // Update 01</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9] mb-6">
              Stay ahead of <br />
              <span className="text-emerald-600 uppercase">sustainable packaging</span>
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light leading-relaxed max-w-md">
              Get eco-packaging innovations and exclusive DercolBags insights straight to your terminal.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 px-8 py-6 rounded-3xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="text-zinc-900 dark:text-white font-bold text-sm uppercase tracking-tight">Access Granted</p>
                  <p className="text-emerald-700 dark:text-emerald-300/70 text-xs mt-0.5 font-mono uppercase tracking-widest">Subscriber Identity Verified</p>
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
                      className="w-full px-6 py-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-900 dark:text-white text-xs font-mono tracking-widest placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 dark:bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-[0.2em] transition-all disabled:opacity-70 group"
                  >
                    {loading ? (
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
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
                <div className="mt-4 flex items-center justify-between px-2">
                   <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Protocol: No Spam // Secure</p>
                   <span className="font-mono text-[9px] text-zinc-300 dark:text-zinc-700 uppercase">Dercol // V2.0</span>
                </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-zinc-100 dark:border-white/8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-black text-zinc-900 tracking-tight dark:text-white">DercolBags</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs dark:text-zinc-400">
              Eco-conscious packaging solutions engineered for businesses that care about impact — and performance.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Camera, label: "Instagram", href: "#" },
                { icon: Send, label: "Twitter", href: "#" },
                { icon: BriefcaseBusiness, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-100 hover:bg-emerald-50 hover:text-emerald-600 text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 dark:bg-white/6 dark:text-zinc-300 dark:hover:bg-emerald-500 dark:hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4 dark:text-zinc-500">Solutions</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "Custom Packaging",
                "Eco-Friendly Bags",
                "Kraft Paper Solutions",
                "Bulk & B2B Orders",
                "Biodegradable Range",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors duration-150 flex items-center gap-1.5 group dark:text-zinc-300 dark:hover:text-emerald-400"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-emerald-500 transition-colors dark:bg-zinc-600 dark:group-hover:bg-emerald-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4 dark:text-zinc-500">Company</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "About Us",
                "Sustainability",
                "Certifications",
                "Contact",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors duration-150 flex items-center gap-1.5 group dark:text-zinc-300 dark:hover:text-emerald-400"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-emerald-500 transition-colors dark:bg-zinc-600 dark:group-hover:bg-emerald-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <p>© 2026 DercolBags Packaging Company Ltd. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px] font-semibold">
            <Link href="#" className="hover:text-emerald-600 transition-colors dark:hover:text-emerald-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors dark:hover:text-emerald-400">Terms of Service</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors dark:hover:text-emerald-400">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

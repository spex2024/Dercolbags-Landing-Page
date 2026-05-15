"use client"

import * as React from "react"
import { motion, useInView, animate } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Recycle, ShoppingBag, Heart, Target, Shield, CheckCircle, Factory, Users, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = React.useState("0")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      const match = value.match(/(\d+)/)
      if (match) {
        const target = parseInt(match[0], 10)
        const suffix = value.replace(match[0], "")

        const controls = animate(0, target, {
          duration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate(value) {
            setDisplayValue(Math.floor(value).toLocaleString() + suffix)
          },
        })
        return () => controls.stop()
      }
    }
  }, [value, duration, isInView])

  return <span ref={ref}>{displayValue}</span>
}

const steps = [
  {
    icon: Recycle,
    title: "Waste Recovery",
    description: "We recover valuable waste from communities, preventing pollution and creating income.",
  },
  {
    icon: Factory,
    title: "Circular Manufacturing",
    description: "We turn that waste into high-quality raw materials and eco-friendly packaging locally.",
  },
  {
    icon: ShoppingBag,
    title: "Business Growth",
    description: "We supply businesses with affordable packaging that helps their products sell faster.",
  },
]

const impacts = [
  { label: "Businesses Served", value: "610+", subtext: "Accelerating Growth" },
  { label: "Waste Reduced", value: "16000", suffix: " MT", subtext: "Material Recovered" },
  { label: "Lives Impacted", value: "5M+", subtext: "Social Transformation" },
]

const history = [
  {
    year: "2021",
    title: "Foundation",
    description: "DercolBags Packaging Company Limited established in Ghana to address Africa’s growing dependence on single-use plastic packaging.",
  },
  {
    year: "2024",
    title: "System Integration",
    description: "Scaling the circular model across West Africa, connecting waste recovery to packaging manufacturing.",
  },
  {
    year: "2030",
    title: "Continental Scale",
    description: "Aiming to power Africa's manufacturing through recovery systems in every major regional hub.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#08120e] overflow-x-hidden">
      {/* Hero Section — Cinematic */}
      <section className="relative min-h-[100svh] flex items-end pt-40 pb-20 md:pb-28 overflow-hidden border-b border-white/5 bg-zinc-950">
        {/* Cinematic Background Image — Ken Burns slow zoom */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ scale: { duration: 14, ease: "linear", repeat: Infinity, repeatType: "reverse" }, opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://res.cloudinary.com/dm9ce4hff/image/upload/f_auto,q_auto,w_2800,c_fill,g_auto/v1778819910/team_zipma0.png"
            alt="The DercolBags team"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Layered cinematic gradients — deep blacks at bottom for text legibility, atmospheric tint */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/55 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-zinc-950/85 via-zinc-950/30 to-zinc-950/60 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_120%_70%_at_50%_100%,rgba(16,185,129,0.18),transparent_60%)] pointer-events-none" />

        {/* Vignette */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse_at_center, transparent 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 3px)",
          }}
        />

        {/* Letterbox / technical grid overlay */}
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-emerald-500" />
                <span className="font-mono text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">
                  About / Dercolbags Packaging Co.
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                CONNECTING <br />
                <span className="text-emerald-400">BUSINESSES TO</span> <br />
                <span className="italic font-light">SUSTAINABLE</span> <br />
                PACKAGING.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 grid md:grid-cols-2 gap-10 items-start"
            >
              <p className="text-xl md:text-2xl text-white/80 font-light leading-tight tracking-tight border-l-2 border-emerald-500 pl-8">
                At DercolBags Packaging Company Limited, we don't just "do packaging." We are architecting a <span className="text-white font-black italic">circular economy company</span> that treats waste and packaging as the same problem.
              </p>
              <div className="space-y-6">
                <p className="text-lg text-white/70 leading-relaxed">
                  We transform waste into packaging and packaging into opportunity. Our system connects waste recovery directly to the manufacturing of affordable, eco-friendly materials for businesses.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-none bg-white text-zinc-950 hover:bg-emerald-400 h-14 px-8 font-black uppercase tracking-widest text-[10px]">
                    <Link href="/store" className="flex items-center gap-3">
                      <ShoppingBag className="w-4 h-4" />
                      Upgrade Packaging
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="rounded-none bg-emerald-500 text-white hover:bg-emerald-400 h-14 px-8 font-black uppercase tracking-widest text-[10px]">
                    <Link href="/watpak" className="flex items-center gap-3">
                      <Recycle className="w-4 h-4" />
                      Paid for Waste
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-none bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 font-black uppercase tracking-widest text-[10px] backdrop-blur-sm">
                    <Link href="/contact" className="flex items-center gap-3">
                      <Users className="w-4 h-4" />
                      Community
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom corner brackets — cinema framing */}
        <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-emerald-500/60 z-10 pointer-events-none" />
        <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-emerald-500/60 z-10 pointer-events-none" />
        <div className="absolute top-20 left-6 h-8 w-8 border-t-2 border-l-2 border-emerald-500/60 z-10 pointer-events-none" />
        <div className="absolute top-20 right-6 h-8 w-8 border-t-2 border-r-2 border-emerald-500/60 z-10 pointer-events-none" />

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-emerald-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* P - PROBLEM Section */}
      <section className="py-32 bg-zinc-50/50 dark:bg-black/50 border-b border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >

              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.9] uppercase mb-10">
                AFRICA HAS <br />
                <span className="text-emerald-500">TWO CONNECTED</span> <br />
                PROBLEMS.
              </h2>
              <div className="h-px w-24 bg-emerald-500/30 mb-10" />
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light italic leading-relaxed max-w-xl">
                Packaging and waste are usually treated separately, but we know they are the same problem.
              </p>
            </motion.div>

            <div className="grid gap-px bg-zinc-200 dark:bg-white/10 border border-zinc-200 dark:border-white/10">
              <motion.div
                whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                className="bg-white dark:bg-[#08120e] p-10 transition-colors"
              >
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-950 dark:text-white mb-6 flex items-center gap-3">
                  <span className="h-2 w-2 bg-emerald-500" />
                  Business Challenges
                </h4>
                <ul className="space-y-4">
                  {[
                    "High packaging costs that eat margins",
                    "Poor product presentation that kills sales",
                    "Difficulty sourcing eco-friendly alternatives"
                  ].map((item) => (
                    <li key={item} className="text-lg text-zinc-500 dark:text-zinc-400 flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                className="bg-white dark:bg-[#08120e] p-10 transition-colors"
              >
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-950 dark:text-white mb-6 flex items-center gap-3">
                  <span className="h-2 w-2 bg-red-500" />
                  Community Challenges
                </h4>
                <ul className="space-y-4">
                  {[
                    "Waste is poorly managed and pollutes streets",
                    "Valuable recyclable materials are lost to landfills",
                    "Communities earn very little from waste recovery"
                  ].map((item) => (
                    <li key={item} className="text-lg text-zinc-500 dark:text-zinc-400 flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-red-500/50 flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* E - GAP & A - APPROACH (Combined Circular Vision) */}
      <section className="py-32 overflow-hidden bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.9] uppercase"
            >
              WASTE BECOMES <br />
              <span className="text-emerald-500 italic font-light">VALUE.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-10 text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light italic leading-relaxed"
            >
              Before DercolBags Packaging Company Limited, there was no system that connected: <br />
              <span className="text-zinc-950 dark:text-white font-black uppercase tracking-widest text-sm">Waste . Raw material . Packaging . Businesses</span>
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-zinc-200 dark:bg-white/10 border border-zinc-200 dark:border-white/10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white dark:bg-[#08120e] p-12 lg:p-16 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <step.icon className="w-12 h-12 text-emerald-500 mb-10" />
                <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light italic leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-10 flex items-center gap-2">
                  <div className="h-px flex-1 bg-zinc-100 dark:bg-white/5" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 md:p-20 bg-emerald-600 text-white text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <motion.h3
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[1] italic"
            >
              "We transform waste into packaging and packaging into opportunity."
            </motion.h3>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-32 bg-white dark:bg-black border-y border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 bg-emerald-600 text-white"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-70">Vision</span>
              <h3 className="mt-8 text-3xl md:text-5xl font-black leading-tight tracking-tighter uppercase">
                To become the leading brand in sustainable and smart packaging across Africa.
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 bg-zinc-900 text-white dark:bg-card"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-70">Mission</span>
              <h3 className="mt-8 text-3xl md:text-5xl font-black leading-tight tracking-tighter uppercase">
                Empowering entrepreneurs to replace single-use plastic for a cleaner Environment.
              </h3>
            </motion.div>
          </div>

          <div className="mb-16">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400 mb-4 block">Foundational Ethics</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.9] uppercase">CORE VALUES.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Sustainability First",
                description: "Prioritizing the planet in every decision, from material choice to logistics.",
              },
              {
                icon: Target,
                title: "Practical Innovation",
                description: "Designing tools like Watapak to solve real-world industrial friction.",
              },
              {
                icon: Heart,
                title: "Community Impact",
                description: "Empowering local livelihoods and supporting the growth of African businesses.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-10 bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5"
              >
                <value.icon className="w-10 h-10 text-emerald-500 mb-8" />
                <h4 className="text-xl font-black uppercase tracking-tighter text-zinc-950 dark:text-white mb-4">{value.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 font-light italic leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C - CREDIBILITY Section */}
      <section className="py-32 bg-zinc-50 dark:bg-black/40 border-y border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <div>

              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.8] uppercase">
                PROOF THAT THE <br />
                <span className="text-emerald-500">SYSTEM WORKS.</span>
              </h2>
            </div>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light italic leading-relaxed border-l border-emerald-500/30 pl-8">
              Our circular infrastructure isn't just a concept. It's a proven operation currently scaling across West Africa, creating green jobs and reducing pollution every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {impacts.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center justify-center p-12 bg-white dark:bg-[#08120e] border border-zinc-200 dark:border-white/10"
              >
                <div className="font-mono text-6xl md:text-8xl font-black text-zinc-950 dark:text-white tracking-tighter leading-none flex items-baseline">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix && <span className="text-2xl md:text-4xl ml-2 opacity-50">{stat.suffix}</span>}
                </div>
                <div className="mt-8 flex flex-col items-center gap-2">
                  <div className="h-1 w-8 bg-emerald-500" />
                  <div className="text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px] text-center">
                    {stat.label}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-emerald-500 font-black">{stat.subtext}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E - EXPANSION & Future */}
      <section className="py-32 bg-white dark:bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-24 items-start">
            <div className="flex-1">

              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.9] uppercase mb-10">
                SCALING A CIRCULAR <br />
                <span className="text-emerald-500">SYSTEM ACROSS AFRICA.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 text-emerald-500">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-widest text-zinc-950 dark:text-white mb-2">Waste Powers Manufacturing</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">Closing the loop by using recovered materials as the engine for local packaging production.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 text-emerald-500">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-widest text-zinc-950 dark:text-white mb-2">Sustainable Growth</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">Ensuring businesses can scale without increasing their environmental footprint.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 text-emerald-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-widest text-zinc-950 dark:text-white mb-2">Community Recovery</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">Directly increasing income for recovery communities through the WatPak ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative aspect-square md:aspect-[4/5] bg-zinc-100 dark:bg-white/5 overflow-hidden border border-zinc-200 dark:border-white/10">
              <Image
                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777037145/dercolbags/DERCOL_WEBSITEEEEE.jpg_rixtgf.jpg"
                alt="Scaling Sustainable Future"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Simplified Timeline - Our Journey */}
      <section className="py-32 bg-zinc-50 dark:bg-black/50 border-t border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-24">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-none uppercase">Our Journey</h2>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-white/10 mb-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-zinc-200 dark:bg-white/10 border border-zinc-200 dark:border-white/10 overflow-hidden">
            {history.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#08120e] p-16 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-2 w-2 rounded-none bg-emerald-500" />
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base font-black tracking-[0.2em] leading-none">{item.year}</span>
                </div>
                <h4 className="text-3xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-none">{item.title}</h4>
                <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light italic">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Strip Grid (Team Section) */}
      <section id="team" className="py-32 overflow-hidden bg-white dark:bg-black border-y border-zinc-100 dark:border-white/5 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.8] uppercase">
                BEHIND THE <br />
                <span className="text-emerald-500">BRAND.</span>
              </h2>
            </div>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light max-w-sm border-l border-zinc-100 dark:border-white/10 pl-8">
              A collective of specialists dedicated to engineering Africa's circular future through precise, data-driven systems.
            </p>
          </div>

          {(() => {
            // Cloudinary transformations: auto format/quality, face-aware fill crop @ 900x1200
            const cld = (v: string, id: string) =>
              `https://res.cloudinary.com/dm9ce4hff/image/upload/f_auto,q_auto,w_900,h_1200,c_fill,g_face/${v}/${id}.png`
            const team = [
              {
                id: "DIR-001",
                name: "Derrick Kofi Sarfo",
                role: "Co-Founder & CEO",
                image: cld("v1778817950", "derrick_tdbqox"),
              },
              {
                id: "OPS-002",
                name: "Beverlyn Dartey",
                role: "Chief Operating Officer",
                image: cld("v1778817948", "beverlyn_hiutw7"),
              },
              {
                id: "FIN-003",
                name: "Abednego Tetteh",
                role: "Head of Finance",
                image: cld("v1778817954", "Abed_xp9ch6"),
              },
              {
                id: "TEC-004",
                name: "Enoch Ekow Enu",
                role: "Product Lead",
                image: cld("v1778819527", "ChatGPT_Image_May_15_2026_04_30_52_AM_ollbvp"),
              },
              {
                id: "DES-005",
                name: "Richard A. Nyarko",
                role: "Creative Designer",
                image: cld("v1778819089", "richard_cjte2p"),
              },
            ]
            return (
              <div className="flex flex-col md:flex-row h-auto md:h-[720px] gap-px bg-zinc-100 dark:bg-white/10 border border-zinc-100 dark:border-white/10 overflow-hidden">
                {team.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 40, flex: 1 }}
                    whileInView={{ opacity: 1, y: 0, flex: 1 }}
                    whileHover={{ flex: 2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      opacity: { duration: 0.6, delay: i * 0.08 },
                      y: { duration: 0.6, delay: i * 0.08 },
                      flex: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                    }}
                    className="group relative h-[480px] md:h-full bg-zinc-950 overflow-hidden cursor-pointer"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        unoptimized
                        className="object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-[900ms] ease-out group-hover:scale-[1.06] opacity-60 group-hover:opacity-100"
                      />
                      {/* Layered gradient: lighter at top so faces read, deep emerald-tinted base */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/10 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Subtle grain/scanline overlay for editorial feel */}
                    <div
                      className="absolute inset-0 z-[1] opacity-[0.08] mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
                      }}
                    />

                    {/* Vertical emerald accent line — grows on hover */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-emerald-500 group-hover:h-24 transition-all duration-700 ease-out z-20" />

                    {/* Bottom content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 pb-10 md:pb-12">
                      <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-2">
                        <div className="h-px w-8 bg-emerald-500 mb-5 transition-all duration-500 group-hover:w-16" />
                        <h3 className="font-heading text-3xl md:text-[2.75rem] font-black text-white leading-[0.85] tracking-tighter uppercase mb-4">
                          {member.name.split(' ').map((word, idx) => (
                            <span key={idx} className="block">{word}</span>
                          ))}
                        </h3>
                        <p className="font-mono text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Industrial Corner Accents — always present, brighter on hover */}
                    <div className="absolute top-6 left-6 h-5 w-5 border-t border-l border-emerald-500/40 group-hover:border-emerald-400 group-hover:h-8 group-hover:w-8 transition-all duration-500" />
                    <div className="absolute bottom-6 right-6 h-5 w-5 border-b border-r border-emerald-500/40 group-hover:border-emerald-400 group-hover:h-8 group-hover:w-8 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden bg-zinc-950">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777106306/dercolbags/screenshot-2025-08-06-051132-600x336_euyqme.png"
            alt="DercolBags Ecosystem"
            fill
            className="object-cover opacity-30 grayscale transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-zinc-950/85" />
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
            {/* Left: Monumental Headline & Subtext */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[1.1] mb-8"
              >
                CONNECTING <br />
                BUSINESSES TO <br />
                SUSTAINABLE <br />
                <span className="text-emerald-500 italic font-light">PACKAGING.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed italic max-w-xl"
              >
                We bridge the gap between waste recovery and manufacturing for a better relationship with our planet. Better for business. Better for earth.
              </motion.p>
            </div>

            {/* Right: Technical Service List */}
            <div className="lg:text-right lg:pt-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                {[
                  "SUSTAINABLE PACKAGING",
                  "WASTE COLLECTION",
                  "CIRCULAR SYSTEMS",
                  "LOCAL MANUFACTURING"
                ].map((item, idx) => (
                  <span key={idx} className="font-heading text-lg md:text-2xl font-black text-white/40 tracking-widest uppercase hover:text-emerald-500 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Action Bar: High-Impact Emerald */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full p-4 md:p-6 bg-emerald-500 rounded-none flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:pl-10">
              <div className="h-2 w-12 bg-zinc-950 hidden md:block" />
              <p className="font-heading text-xl md:text-2xl font-black text-zinc-950 uppercase tracking-tighter text-center md:text-left">
                Ready to transform <br className="md:hidden" /> your packaging system?
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:pr-6">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-zinc-950 text-white h-14 md:h-16 px-8 transition-all font-black text-xs uppercase tracking-widest border-none"
              >
                <Link href="/store" className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4" />
                  Upgrade Packaging
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-none bg-white text-zinc-950 h-14 md:h-16 px-8 transition-all font-black text-xs uppercase tracking-widest border-none"
              >
                <Link href="/watpak" className="flex items-center gap-3">
                  <Recycle className="w-4 h-4" />
                  Paid for Waste
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none bg-transparent border-zinc-950/20 text-zinc-950 h-14 md:h-16 px-8 transition-all font-black text-xs uppercase tracking-widest"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <Users className="w-4 h-4" />
                  Community
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

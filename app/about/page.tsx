"use client"

import * as React from "react"

import { motion, useInView, animate } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Recycle, ShoppingBag, Heart, Target, Eye, Shield, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FloatingPathsBackground } from "@/components/ui/floating-paths"

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

const values = [
  {
    icon: Shield,
    title: "Sustainability First",
    description: "Prioritizing the planet in every decision, from material choice to logistics.",
  },
  {
    icon: Target,
    title: "Practical Innovation",
    description: "Designing tools like WatPak to solve real-world industrial friction.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Empowering local livelihoods and supporting the growth of African SMEs.",
  },
]

const ecosystem = [
  {
    title: "WatPak Digital",
    description: "The operating system for circular packaging and waste recovery.",
    image: "/images/wastepack.png",
    icon: Recycle,
    href: "/watpak",
  },
  {
    title: "Eco-Store",
    description: "Premium, sustainable packaging options for growing businesses.",
    image: "/images/store.png",
    icon: ShoppingBag,
    href: "/store",
  },
  {
    title: "Community Hub",
    description: "Driving economic mobility through circular waste systems.",
    image: "/images/community-impact.png",
    icon: Heart,
    href: "/community",
  },
]

const history = [
  {
    year: "2021",
    title: "Foundation",
    description: "DercolBags established in Ghana with a clear mission to dismantle Africa’s reliance on single-use plastics.",
  },
  {
    year: "2022",
    title: "Scaling Impact",
    description: "Expanded beyond physical packaging into a wider ecosystem that includes digital tools and community support.",
  },
  {
    year: "Today",
    title: "Connected Future",
    description: "Leading the shift towards a data-driven circular economy across the continent.",
  },
]

const team = [
  {
    id: "DIR-001",
    name: "Derrick Kofi Sarfo",
    role: "Co-Founder & CEO",
    description: "Architecting the technical infrastructure and strategic expansion of Africa's leading sustainable packaging ecosystem.",
    image: "/images/team_derrick.png",
    featured: true,
  },
  {
    id: "OPS-002",
    name: "Bevelyn Dartey",
    role: "Chief Operating Officer",
    image: "/images/team_bevelyn.png",
  },
  {
    id: "FIN-003",
    name: "Abednego Tetteh",
    role: "Head of Finance",
    image: "/images/team_abednego.png",
  },
  {
    id: "TEC-004",
    name: "Enoch Ekow Enu",
    role: "Product Lead",
    image: "/images/team_enoch.png",
  },
  {
    id: "DES-005",
    name: "Richard A. Nyarko",
    role: "Creative Designer",
    description: "Focused on combining design and storytelling in a way that not only captures attention but also creates real connection. Whether it's through visuals, reflective writing, or digital content, the goal is to help our customers see differently, think deeper, and grow stronger.",
    image: "/images/team_richard.png",
  },
]

const impacts = [
  { label: "Businesses Served", value: "610+", subtext: "SMEs Empowered" },
  { label: "Plastic Eliminated", value: "16,000+", subtext: "Metric Tons" },
  { label: "CO2 Prevented", value: "38,400+", subtext: "Metric Tons" },
  { label: "Women-Driven", value: "70%", subtext: "Workforce Representation" },
]

export default function AboutPage() {
  const [activeValue, setActiveValue] = React.useState(0)

  return (
    <div className="bg-white dark:bg-[#030712]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-zinc-100 dark:border-white/5">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20 pointer-events-none" />
        <FloatingPathsBackground position={1} className="absolute inset-0 z-0" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-emerald-500/50" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-600 dark:text-emerald-400 uppercase">DercolBags </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-black leading-[0.85] tracking-tighter text-zinc-950 dark:text-white md:text-8xl lg:text-9xl">
                ABOUT <br />
                <span className="text-emerald-600">US</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:pt-20"
            >
              <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-2xl max-w-xl font-light tracking-tight">
                At DercolBags, we understand that sustainability is more than just a word—it's the <span className="text-zinc-900 dark:text-white font-medium">cornerstone of our continent's future</span>. With our commitment to local innovation and African craftsmanship, we are dedicated to guiding your eco-conscious journey.
              </p>
              
              <div className="mt-12 flex items-center gap-8">
                <Button asChild variant="outline" size="lg" className="group h-14 rounded-xl border-zinc-200 dark:border-white/10 px-8 text-lg font-bold hover:bg-zinc-50 dark:hover:bg-white/5 transition-all">
                  <Link href="/contact" className="flex items-center gap-3">
                    Talk to Us
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <div className="hidden md:block">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">System Status</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">OPERATIONAL</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Staggered Images */}
          <div className="mt-24 grid grid-cols-12 gap-6 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-12 md:col-span-5 aspect-[4/3] relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/community_impact.png"
                alt="Our Community"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="col-span-12 md:col-span-7 aspect-[16/10] relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/packaging-ecosystem.png"
                alt="Sustainable Future"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Large Statement Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-zinc-950 dark:text-white">
              <span className="text-emerald-600 font-bold">Transparency, integrity, and professionalism</span>{' '}
              <span className="font-light">are the pillars of our business philosophy. We prioritize clear communication and honest advice, ensuring that you're empowered to make informed decisions throughout your sustainability journey.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (Sleek Interactivity) */}
      <section className="py-24 bg-zinc-50/50 dark:bg-black/50 relative border-y border-zinc-100 dark:border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                Core Methodology
              </span>
              <h3 className="mt-4 text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none uppercase">
                WHY CHOOSE <br />
                <span className="text-emerald-600">US.</span>
              </h3>
            </div>
            <div className="hidden lg:block h-px flex-1 mx-12 bg-zinc-200 dark:bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              {ecosystem.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveValue(i)}
                  className={`group relative flex gap-8 p-10 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                    activeValue === i 
                      ? "bg-white dark:bg-zinc-900" 
                      : "hover:bg-zinc-100/50 dark:hover:bg-white/5"
                  }`}
                >
                  {activeValue === i && (
                    <motion.div 
                      layoutId="indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"
                    />
                  )}
                  
                  <span className={`font-mono text-3xl font-black transition-colors duration-500 ${
                    activeValue === i ? "text-emerald-500" : "text-zinc-200 dark:text-zinc-800"
                  }`}>
                    0{i + 1}
                  </span>
                  
                  <div className="flex-1">
                    <h4 className={`text-2xl font-bold transition-colors ${
                      activeValue === i ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-600"
                    }`}>
                      {item.title}
                    </h4>
                    {activeValue === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden group">
              <motion.div
                key={activeValue}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="h-full w-full"
              >
                <Image
                  src={ecosystem[activeValue].image}
                  alt={ecosystem[activeValue].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-2">Technical Module</div>
                 <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">{ecosystem[activeValue].title}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Impact Stats */}
      <section className="py-24 bg-white dark:bg-black border-b border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:divide-x divide-zinc-100 dark:divide-white/5">
            {impacts.slice(0, 3).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center px-12"
              >
                <div className="font-mono text-6xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="mt-6 flex items-center gap-3">
                   <div className="h-1 w-1 rounded-full bg-emerald-500" />
                   <div className="text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Infrastructure (Vision / Mission) */}
      <section className="py-24 bg-zinc-50 dark:bg-black/40 border-b border-zinc-100 dark:border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid gap-px bg-zinc-200 dark:bg-white/10 overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-white/10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-[#030712] p-12 lg:p-16 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <Eye className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Strategic Vision</span>
                  </div>
                  <h4 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight tracking-tighter uppercase">Architecting the definitive brand for sustainable packaging in Africa.</h4>
                </div>
                <div className="lg:max-w-md">
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    Accelerating the value of African products and the lives of those who create them through modular industrial intelligence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white dark:bg-[#030712] p-12 lg:p-16 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <Target className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Core Mission</span>
                  </div>
                  <h4 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight tracking-tighter uppercase">Securing a cleaner future for the next generation of entrepreneurs.</h4>
                </div>
                <div className="lg:max-w-md">
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    Empowering every SME to replace single-use plastic with high-quality eco-friendly alternatives through our connected platform.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Simplified Timeline */}
      <section className="py-32 bg-white dark:bg-black border-y border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-24">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none">Our Journey</h2>
            <div className="h-px flex-1 bg-zinc-100 dark:bg-white/10 mb-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-zinc-100 dark:bg-white/10 border border-zinc-100 dark:border-white/10 rounded-[3rem] overflow-hidden">
            {history.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#030712] p-12 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-2 w-2 rounded-full bg-emerald-500" />
                   <span className="font-mono text-emerald-500 text-sm font-bold tracking-widest leading-none">{item.year}</span>
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">{item.title}</h4>
                <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Strip Grid (Team Redesign) */}
      <section className="py-32 overflow-hidden bg-white dark:bg-black border-y border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-emerald-500" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400">Team</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.8]">
                BEHIND THE <br />
                <span className="text-emerald-600 uppercase">Brand.</span>
              </h2>
            </div>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light max-w-sm border-l border-zinc-100 dark:border-white/10 pl-8">
              A collective of specialists dedicated to engineering Africa's circular future through precise, data-driven systems.
            </p>
          </div>

          <div className="flex flex-col md:flex-row h-[1200px] md:h-[700px] gap-px bg-zinc-100 dark:bg-white/10 border border-zinc-100 dark:border-white/10 overflow-hidden rounded-[2rem]">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ flex: 1 }}
                whileHover={{ flex: 1.8 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="group relative h-full bg-white dark:bg-[#030712] overflow-hidden cursor-pointer"
              >
                {/* Background Image / Character */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Vertical Overlay Markers */}
                <div className="absolute inset-0 border-x border-zinc-100/10 dark:border-white/5 pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] font-bold text-emerald-500 tracking-widest bg-zinc-900/80 px-3 py-1 rounded-full border border-white/10">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="font-heading text-4xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase shadow-zinc-950/50 drop-shadow-sm">
                      {member.name.split(' ').map((word, idx) => (
                         <span key={idx} className="block">{word}</span>
                      ))}
                    </h3>
                    
                    {/* Role & Bio revealed on Hover via Group Hover */}
                    <div className="overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="mt-4 font-mono text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-8">
                        {member.role}
                      </p>
                      
                      <div className="hidden md:block">
                        <p className="text-zinc-100 text-sm font-light leading-relaxed max-w-[240px] border-l border-emerald-500/50 pl-6">
                          {member.description || "Leading the infrastructure development for high-performance sustainable ecosystems."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industrial Corner Accents */}
                <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Industrial Refinement) */}
      <section className="py-32 overflow-hidden border-t border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] p-12 overflow-hidden md:p-24 border border-zinc-100 dark:border-white/5 dark:shadow-none">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
               <Image 
                 src="/images/cta-bg.png"
                 alt="Future of Sustainability"
                 fill
                 className="object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
               <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400">Call to Action</span>
              </div>
              
              <h2 className="font-heading text-6xl font-black text-white md:text-8xl leading-[0.8] tracking-tighter">
                LET'S BUILD <br />
                <span className="text-emerald-500">THE FUTURE.</span>
              </h2>
              
              <p className="mt-10 text-xl text-zinc-200 font-light leading-relaxed max-w-xl">
                Join our ecosystem and transform how your business handles packaging, sustainability, and community impact through data-driven circularity.
              </p>
              
              <div className="mt-14 flex flex-wrap gap-6">
                <Button asChild size="lg" className="h-16 rounded-xl bg-emerald-500 px-10 text-lg font-bold text-white hover:bg-emerald-600 transition-all border-none">
                  <Link href="/contact">Partner with Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 rounded-xl px-10 text-lg font-bold bg-white text-zinc-950 border-none hover:bg-zinc-200 shadow-xl shadow-black/10 transition-all">
                  <Link href="/store">Browse Products</Link>
                </Button>
              </div>
            </div>

            {/* Decorative Tech Marker */}
            <div className="absolute bottom-12 right-12 hidden lg:block">
               <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest text-right">
                  System: INFRA-STRUCTURE <br />
                  Node: GH-ACCRA-01 <br />
                  Status: READY
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

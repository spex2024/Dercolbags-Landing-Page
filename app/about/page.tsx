"use client"

import * as React from "react"

import { motion, useInView, animate } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Recycle, ShoppingBag, Heart, Target, Eye, Shield, CheckCircle } from "lucide-react"

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
    description: "Designing tools like Watapak to solve real-world industrial friction.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Empowering local livelihoods and supporting the growth of African businesses.",
  },
]

const ecosystem = [
  {
    title: "01 Community Waste Recovery Program",
    description: "Community waste-recovery programs that turn waste into raw materials.",
    image: "/images/community_waste_pickers.png",
    icon: Heart,
    href: "/community",
  },
  {
    title: "02 Watapak Platform",
    description: "A waste-to-packaging digital platform connecting waste pickers, recyclers, manufacturers, and businesses in one ecosystem.",
    image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777040954/dercolbags/Y_-_BB.jpg_jensat.jpg",
    icon: Recycle,
    href: "/watapak",
  },
  {
    title: "03 Local Manufacturing Hub",
    description: "Reducing import dependency, delivery time, and cost by up to 30% compared to imported alternatives.",
    image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777037145/dercolbags/DERCOL_WEBSITEEEEE.jpg_rixtgf.jpg",
    icon: ShoppingBag,
    href: "/store",
  },
]

const history = [
  {
    year: "2021",
    title: "Foundation",
    description: "DercolBags established in Ghana to address Africa’s growing dependence on single-use plastic packaging.",
  },
  {
    year: "2024",
    title: "Traction & Impact",
    description: "Serving 610+ businesses and eliminating 16,000 MT of plastic waste across West Africa.",
  },
  {
    year: "2030",
    title: "Regional Hub",
    description: "Aiming to serve 3,000+ B2B clients and create 15,000+ green jobs across the continent.",
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
    socials: { 
      linkedin: "https://www.linkedin.com/company/dercolbagspackaging/", 
      twitter: "https://x.com/DercolBags", 
      facebook: "https://www.facebook.com/DercolBags/", 
      instagram: "https://www.instagram.com/dercolbags/" 
    }
  },
  {
    id: "OPS-002",
    name: "Bevelyn Dartey",
    role: "Chief Operating Officer",
    image: "/images/team_bevelyn.png",
    socials: { 
      linkedin: "https://www.linkedin.com/company/dercolbagspackaging/", 
      twitter: "https://x.com/DercolBags", 
      facebook: "https://www.facebook.com/DercolBags/", 
      instagram: "https://www.instagram.com/dercolbags/" 
    }
  },
  {
    id: "FIN-003",
    name: "Abednego Tetteh",
    role: "Head of Finance",
    image: "/images/team_abednego.png",
    socials: { 
      linkedin: "https://www.linkedin.com/company/dercolbagspackaging/", 
      twitter: "https://x.com/DercolBags", 
      facebook: "https://www.facebook.com/DercolBags/", 
      instagram: "https://www.instagram.com/dercolbags/" 
    }
  },
  {
    id: "TEC-004",
    name: "Enoch Ekow Enu",
    role: "Product Lead",
    image: "/images/team_enoch.png",
    socials: { 
      linkedin: "https://www.linkedin.com/company/dercolbagspackaging/", 
      twitter: "https://x.com/DercolBags", 
      facebook: "https://www.facebook.com/DercolBags/", 
      instagram: "https://www.instagram.com/dercolbags/" 
    }
  },
  {
    id: "DES-005",
    name: "Richard A. Nyarko",
    role: "Creative Designer",
    description: "Focused on combining design and storytelling in a way that not only captures attention but also creates real connection. Whether it's through visuals, reflective writing, or digital content, the goal is to help our customers see differently, think deeper, and grow stronger.",
    image: "/images/team_richard.png",
    socials: { 
      linkedin: "https://www.linkedin.com/company/dercolbagspackaging/", 
      twitter: "https://x.com/DercolBags", 
      facebook: "https://www.facebook.com/DercolBags/", 
      instagram: "https://www.instagram.com/dercolbags/" 
    }
  },
]

const impacts = [
  { label: "Businesses Served", value: "610+", subtext: "Across West Africa" },
  { label: "Plastic Eliminated", value: "16,000+", subtext: "Metric Tons" },
  { label: "CO2 Prevented", value: "38,400+", subtext: "Metric Tons" },
  { label: "People Reached", value: "5M+", subtext: "Through Engagement" },
]

export default function AboutPage() {

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
                DercolBags is a sustainable packaging and <span className="text-zinc-900 dark:text-white font-medium">Climate Tech Firm</span>, founded in 2021 to dismantle Africa’s dependence on single-use plastics.
              </p>
              <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                We design, manufacture, and distribute affordable, high-quality, eco-friendly packaging solutions for businesses across food services, agro-processing, manufacturing, retail, and e-commerce.
              </p>
              
              <div className="mt-12 flex items-center gap-8">
                <Button asChild variant="outline" size="lg" className="group h-14 rounded-none border-zinc-200 dark:border-white/10 px-8 text-lg font-black uppercase tracking-tighter hover:bg-zinc-50 dark:hover:bg-white/5 transition-all">
                  <Link href="/contact" className="flex items-center gap-3">
                    Talk to Us
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <div className="hidden md:block">
                  {/* Status indicator removed */}
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
              className="col-span-12 md:col-span-5 aspect-[4/3] relative rounded-none overflow-hidden"
            >
              <Image
                src="/images/community_waste_pickers.png"
                alt="Our Community"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="col-span-12 md:col-span-7 aspect-[16/10] relative rounded-none overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777037145/dercolbags/DERCOL_WEBSITEEEEE.jpg_rixtgf.jpg"
                alt="Sustainable Future"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 overflow-hidden bg-zinc-50/50 dark:bg-black/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-4 block">The Challenge</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9] uppercase mb-8">
                80% of packaging is <br />
                <span className="text-emerald-600">Single-Use Plastic.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                By 2050, Africa will reach 2.5 billion people. Yet today, 19 million MT of plastic waste is generated annually—60% linked to food packaging. 
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200 dark:border-white/10">
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white">10%</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Revenue spent on plastic by businesses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white">&lt;10%</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Plastic waste actually recycled</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Large Statement Section - Vision & Mission */}
      <section className="py-24 overflow-hidden border-y border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-zinc-100 dark:bg-white/10 border border-zinc-100 dark:border-white/10">
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
              className="p-12 lg:p-16 bg-zinc-900 text-white dark:bg-black"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-70">Mission</span>
              <h3 className="mt-8 text-3xl md:text-5xl font-black leading-tight tracking-tighter uppercase">
                Empowering entrepreneurs to replace single-use plastic for a cleaner Environment.
              </h3>
            </motion.div>
          </div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystem.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-12 bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 transition-all duration-500"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-black text-zinc-200 dark:text-zinc-800">
                        0{i + 1}
                      </span>
                      <div className="h-12 w-12 flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 text-emerald-500">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-6">
                        {item.title}
                      </h4>
                      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light italic">
                        {item.description}
                      </p>
                    </div>

                    <Link 
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                      Protocol Details
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
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
                   <div className="h-1 w-1 rounded-none bg-emerald-500" />
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
          <div className="grid gap-px bg-zinc-200 dark:bg-white/10 overflow-hidden rounded-none border border-zinc-200 dark:border-white/10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-[#030712] p-12 lg:p-20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-none bg-emerald-500/10 text-emerald-500">
                      <Shield className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Current Scaling</span>
                  </div>
                  <h4 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[0.9] tracking-tighter uppercase">Architecting the future of circular distribution.</h4>
                </div>
                <div className="lg:max-w-md">
                  <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed italic border-l border-emerald-500/30 pl-8">
                    We are currently investing in distribution trucks, e-bikes, and advanced machinery to scale our waste-recovery infrastructure and the Watapak digital platform.
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
              className="group relative bg-white dark:bg-[#030712] p-12 lg:p-20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-none bg-emerald-500/10 text-emerald-500">
                      <Target className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Core Mission</span>
                  </div>
                  <h4 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[0.9] tracking-tighter uppercase">Connecting every business to sustainable packaging.</h4>
                </div>
                <div className="lg:max-w-md">
                  <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed italic border-l border-emerald-500/30 pl-8">
                    Empowering every business to replace single-use plastic with high-quality eco-friendly alternatives through our connected platform.
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

          <div className="grid md:grid-cols-3 gap-px bg-zinc-100 dark:bg-white/10 border border-zinc-100 dark:bg-white/10 rounded-none overflow-hidden">
            {history.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#030712] p-16 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-2 w-2 rounded-none bg-emerald-500" />
                   <span className="font-mono text-emerald-500 text-base font-black tracking-[0.2em] leading-none">{item.year}</span>
                </div>
                <h4 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none">{item.title}</h4>
                <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light italic">
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
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.8]">
                BEHIND THE <br />
                <span className="text-emerald-600 uppercase">Brand.</span>
              </h2>
            </div>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light max-w-sm border-l border-zinc-100 dark:border-white/10 pl-8">
              A collective of specialists dedicated to engineering Africa's circular future through precise, data-driven systems.
            </p>
          </div>

          <div className="flex flex-col md:flex-row h-[1200px] md:h-[700px] gap-px bg-zinc-100 dark:bg-white/10 border border-zinc-100 dark:border-white/10 overflow-hidden rounded-none">
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
                    <span className="font-mono text-[10px] font-bold text-emerald-500 tracking-widest bg-zinc-900/80 px-3 py-1 rounded-none border border-white/10">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="font-heading text-4xl md:text-5xl font-black text-white leading-[0.8] tracking-tighter uppercase shadow-zinc-950/50 drop-shadow-sm">
                      {member.name.split(' ').map((word, idx) => (
                         <span key={idx} className="block">{word}</span>
                      ))}
                    </h3>
                    
                    <div className="mt-6">
                      <p className="font-mono text-xs font-black text-white uppercase tracking-[0.3em] mb-8">
                        {member.role}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center gap-5 mt-6">
                        {[
                          { name: 'linkedin', path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                          { name: 'twitter', path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" },
                          { name: 'instagram', path: "M12 0c-3.263 0-3.67.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c3.403 0 6.162 2.759 6.162 6.162s-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163 2.759-6.162 6.162-6.162zm0 10.162c2.209 0 4-1.79 4-4 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 2.21 1.791 4 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                          { name: 'facebook', path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                        ].map((social) => {
                          const href = member.socials?.[social.name as keyof typeof member.socials];
                          if (!href) return null;
                          return (
                            <Link 
                              key={social.name} 
                              href={href} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-emerald-400 transition-colors"
                            >
                              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d={social.path} />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industrial Corner Accents */}
                <div className="absolute top-6 left-6 h-6 w-6 border-t-2 border-l-2 border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 right-6 h-6 w-6 border-b-2 border-r-2 border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Industrial Refinement) */}
      <section className="py-32 overflow-hidden border-t border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="relative rounded-none p-12 overflow-hidden md:p-32 border border-zinc-100 dark:border-white/5">
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
            
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-2 w-2 rounded-none bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400">Call to Action</span>
              </div>
              
              <h2 className="font-heading text-7xl font-black text-white md:text-[10rem] leading-[0.8] tracking-tighter uppercase">
                BUILD <br />
                <span className="text-emerald-500">THE FUTURE.</span>
              </h2>
              
              <p className="mt-14 text-2xl text-zinc-200 font-light leading-snug max-w-2xl italic border-l border-emerald-500/50 pl-10">
                Join our ecosystem and transform how your business handles packaging, sustainability, and community impact.
              </p>
              
              <div className="mt-20 flex flex-wrap gap-8">
                <Button asChild size="lg" className="h-20 rounded-none bg-emerald-500 px-12 text-xl font-black uppercase tracking-tighter text-white hover:bg-white hover:text-black transition-all border-none">
                  <Link href="/contact">Partner with Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-20 rounded-none px-12 text-xl font-black uppercase tracking-tighter bg-white text-zinc-950 border-none hover:bg-emerald-500 hover:text-white transition-all">
                  <Link href="/store">Browse Products</Link>
                </Button>
              </div>
            </div>

            {/* Decorative Tech Marker */}
            <div className="absolute bottom-16 right-16 hidden lg:block">
               <div className="font-mono text-[12px] text-white/40 uppercase tracking-[0.3em] text-right leading-relaxed">
                  System: INFRA-STRUCTURE <br />
                  Node: GH-ACCRA-01 <br />
                  Status: OPERATIONAL_READY
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

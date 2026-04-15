"use client"

import * as React from "react"
import { motion, useInView, animate } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowUpRight, 
  Recycle, 
  Heart, 
  Leaf, 
  Users, 
  TrendingUp, 
  Workflow, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Factory, 
  Truck, 
  Smartphone,
  Activity,
  Terminal,
  Grid
} from "lucide-react"

import { Button } from "@/components/ui/button"

// --- Components ---

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

const metrics = [
  { label: "Lives Impacted", value: "5000000+", subtext: "Regional Density" },
  { label: "Waste Reduced", value: "16000", subtext: "Metric Tons / Annual" },
  { label: "CO₂ Prevented", value: "38400", subtext: "Metric Tons / Savings" },
  { label: "SMEs Supported", value: "610", subtext: "Active Network Nodes" },
]

const challenges = [
  { id: "01", title: "PLASTIC SATURATION.", desc: "Millions of tons of non-biodegradable waste fragments entering the ecosystem yearly." },
  { id: "02", title: "MARKET ASYMMETRY.", desc: "Broken supply chains keeping informal waste pickers in a cycle of low-value labor." },
  { id: "03", title: "LOGISTICAL FRICTION.", desc: "High import costs and lead times crippling local SME manufacturing capacity." },
]

const blueprintNodes = [
  { step: "01", title: "RECOVERY", desc: "Local community-led collection nodes." },
  { step: "02", title: "TRACE", desc: "Digital verification via WatPak OS." },
  { step: "03", title: "PROCESS", desc: "High-grade industrial fiber conversion." },
  { step: "04", title: "ENGINEER", desc: "Precision eco-packaging manufacturing." },
  { step: "05", title: "DEPLOY", desc: "Last-mile distribution to global SMEs." }
]

export default function CommunityImpactPage() {
  return (
    <div className="bg-white dark:bg-[#030712] selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. EDITORIAL HERO */}
      <section className="relative min-h-screen flex items-end pb-32 pt-40 overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/community_impact.png"
            alt="Impact Context"
            fill
            className="object-cover object-top transition-opacity duration-1000 opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 dark:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#030712] dark:via-[#030712]/40 dark:to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="h-0.5 w-16 bg-emerald-500" />
            </div>
            
            <h1 className="font-heading text-6xl font-black leading-[0.85] tracking-tighter text-zinc-950 dark:text-white md:text-8xl lg:text-9xl uppercase">
              Impact <br />
              <span className="text-emerald-600 font-medium italic">Infrastructure.</span>
            </h1>
            
            <div className="mt-16 grid lg:grid-cols-2 gap-20 items-end">
              <p className="text-2xl md:text-4xl text-zinc-700 dark:text-zinc-200 font-light leading-[1.1] tracking-tighter max-w-2xl">
                Dismantling legacy waste systems to architect a <span className="text-zinc-950 dark:text-white font-black">connected, circular African economy</span> via modular tech and community equity.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <Button asChild size="lg" className="h-[72px] rounded-none bg-zinc-900 dark:bg-emerald-500 px-12 text-xl font-bold text-white hover:bg-emerald-600 transition-all group border-none">
                  <Link href="/contact" className="flex items-center gap-4">
                    Join the Impact
                    <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
                <div className="py-4 border-l border-zinc-200 dark:border-white/10 pl-8">
                   <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mb-1">Base Node</div>
                   <div className="text-lg font-bold text-zinc-900 dark:text-white tracking-widest uppercase">Accra // Lagos</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CHASM SECTION (THE PROBLEM) - Editorial Layout */}
      <section className="py-40 bg-white dark:bg-[#030712] border-y border-zinc-100 dark:border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
             <div className="lg:w-1/2">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-emerald-600 dark:text-emerald-400 font-bold mb-6 block leading-none">The Systemic Friction</span>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.85] uppercase mb-12">Why Correct <br /> <span className="text-emerald-600">Now.</span></h2>
                
                <div className="aspect-[16/10] relative rounded-2xl overflow-hidden mt-20 border border-zinc-100 dark:border-white/5 shadow-2xl">
                    <Image 
                      src="/images/packaging-ecosystem.png"
                      alt="System friction"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
             </div>

             <div className="lg:w-1/2 space-y-20 lg:pt-32">
                {challenges.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="group border-t border-zinc-100 dark:border-white/5 pt-12 relative"
                  >
                    <div className="pl-0">
                      <h3 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase mb-6 leading-none italic">{item.title}</h3>
                      <p className="text-xl text-zinc-700 dark:text-zinc-300 font-light leading-relaxed max-w-lg italic">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-20">
                   <div className="h-px w-full bg-zinc-100 dark:bg-white/5 mb-10" />
                   <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 text-right">
                      Source // Environmental Protection Data [2024]
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. THE ARCHITECTURAL FLOW (IMPACT MODEL) */}
      <section className="py-40 relative bg-zinc-50/50 dark:bg-transparent px-6 overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none rotate-90 hidden lg:block">
           <Grid className="h-64 w-64 text-zinc-400" />
        </div>

        <div className="container mx-auto">
           <div className="max-w-4xl mb-32">
             <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.85] uppercase">
                The Integrated <br />
                <span className="text-emerald-600">Circuit.</span>
             </h2>
           </div>

           <div className="relative">
             <div className="space-y-16 lg:space-y-24">
               {blueprintNodes.map((node, i) => (
                 <motion.div
                   key={node.step}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col md:flex-row gap-8 items-start group border-l border-zinc-100 dark:border-white/5 pl-12"
                 >
                    <div className="flex-1">
                      <h4 className="text-4xl md:text-6xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-none mb-4 italic transition-colors group-hover:text-emerald-500">
                        {node.title}
                      </h4>
                      <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-light leading-relaxed max-w-2xl italic">
                        {node.desc}
                      </p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* 4. QUANTUM IMPACT (METRICS) - Massive Typo, No Boxes */}
      <section className="py-64 bg-zinc-900 dark:bg-black text-white relative">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group"
                >
                  <div className="font-heading text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white uppercase overflow-hidden">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <div className="mt-8">
                     <div>
                        <h4 className="text-3xl font-black uppercase tracking-tighter group-hover:text-emerald-500 transition-colors uppercase italic">{metric.label}</h4>
                        <p className="text-zinc-300 font-mono text-[10px] uppercase tracking-widest mt-2">{metric.subtext}</p>
                     </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. STRATEGIC PILLARS - Consolidated Layout */}
      <section className="py-40 bg-zinc-50 dark:bg-black/40 overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-32 items-start mb-40">
               <div className="lg:w-1/2">
                  <h2 className="text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.8] uppercase mb-12">The Dual <br /> <span className="text-emerald-600 font-medium italic">Impact.</span></h2>
                  <p className="text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-xl italic">
                    Architecting simultaneous growth for community livelihoods and business industrialization.
                  </p>
               </div>
               <div className="lg:w-1/2 aspect-[16/9] relative rounded-2xl overflow-hidden border border-zinc-100 dark:border-white/5 shadow-2xl">
                  <Image 
                    src="/images/community-impact.png"
                    alt="Pillar Context"
                    fill
                    className="object-cover"
                  />
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-white/10 border border-zinc-200 dark:border-white/10">
               {[
                 { label: "Community", stat: "40-70%", title: "INCOME GROWTH", desc: "Direct revenue increase for nodes participating in recovery." },
                 { label: "Equity", stat: "70%", title: "WOMEN EMPOWERED", desc: "Prioritizing women-led logistical and sorting hubs." },
                 { label: "Scale", stat: "-30%", title: "COST REDUCTION", desc: "Eliminating import dependency for local manufacturing." }
               ].map((item, i) => (
                 <div key={item.title} className="bg-white dark:bg-[#030712] p-16 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group">
                    <span className="font-mono text-[9px] text-zinc-400 tracking-widest block mb-10 uppercase">{item.label}</span>
                    <div className="text-7xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter mb-8 group-hover:text-emerald-500 transition-colors">{item.stat}</div>
                    <h4 className="text-xl font-bold text-zinc-950 dark:text-white uppercase mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light italic leading-snug">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. ROADMAP 2030 - Architecture Strip */}
      <section className="py-40 bg-white dark:bg-black overflow-hidden px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-32">
             <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[0.85] uppercase">Roadmap <br /> <span className="text-emerald-600 underline decoration-1 underline-offset-[20px]">2030.</span></h2>
             <div className="py-8 border-l border-zinc-200 dark:border-white/10 pl-12 max-w-xs">
                <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light italic leading-none tracking-tighter uppercase">Building the continent's definitive circular node network.</p>
             </div>
          </div>

          <div className="relative">
             <div className="grid lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-white/10 border border-zinc-100 dark:border-white/10">
                {[
                  { year: "24-25", title: "URBAN_HUBS", desc: "Establishing recovery nodes across Accra, Lagos, and Abidjan." },
                  { year: "26-28", title: "ECOSYSTEM_A", desc: "Full supply chain automation for West African SME networks." },
                  { year: "2030_M", title: "ZERO_VOID", desc: "Removing 500,000 MT of plastic waste via connected industrialism." }
                ].map((item, i) => (
                  <div key={item.title} className="bg-white dark:bg-[#030712] p-12 group border-b lg:border-b-0 lg:border-r border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                     <span className="font-mono text-emerald-500 text-sm font-bold tracking-[0.4em] block mb-12 uppercase">{item.year}</span>
                     <h4 className="text-3xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-none mb-6 italic transition-transform group-hover:text-emerald-500">{item.title}</h4>
                     <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light italic leading-snug">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 9. THE NEXUS (CTA) */}
      <section className="py-40 relative px-6">
        <div className="container mx-auto">
           <div className="relative group overflow-hidden">
             <div className="relative z-10 py-32 border-y border-zinc-100 dark:border-white/10 text-center">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-20 text-zinc-950 dark:text-white uppercase italic">
                   Join the <br />
                   <span className="text-emerald-500 font-medium tracking-tight">Impact.</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-12 mt-12">
                   <Link href="/contact" className="group/btn flex items-center gap-4 text-3xl font-black uppercase tracking-tighter text-zinc-950 dark:text-white hover:text-emerald-500 transition-colors">
                      Partner
                      <ArrowUpRight className="h-8 w-8 transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2" />
                   </Link>
                   <Link href="/watpak" className="group/btn flex items-center gap-4 text-3xl font-black uppercase tracking-tighter text-zinc-950 dark:text-white hover:text-emerald-500 transition-colors">
                      WatPak
                      <ArrowUpRight className="h-8 w-8 transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2" />
                   </Link>
                   <Link href="/store" className="group/btn flex items-center gap-4 text-3xl font-black uppercase tracking-tighter text-zinc-950 dark:text-white hover:text-emerald-500 transition-colors">
                      Products
                      <ArrowUpRight className="h-8 w-8 transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2" />
                   </Link>
                </div>
             </div>
             
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none -z-10" />
           </div>
        </div>
      </section>
    </div>
  )
}

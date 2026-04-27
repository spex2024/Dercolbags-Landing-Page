"use client"

import * as React from "react"
import { motion, useInView, animate } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowUpRight, 
  CheckCircle2,
  Recycle,
  Globe,
  TrendingUp,
  Leaf,
  Zap,
  Users,
  ShieldCheck,
  Factory
} from "lucide-react"

import { Button } from "@/components/ui/button"

// --- Components ---

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = React.useState("0")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  React.useEffect(() => {
    if (isInView) {
      const match = value.match(/(\d+)/)
      if (match) {
        const target = parseInt(match[0], 10)
        const suffix = value.replace(match[0], "")
        
        const controls = animate(0, target, {
          duration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate(val) {
            setDisplayValue(Math.floor(val).toLocaleString() + suffix)
          },
        })
        return () => controls.stop()
      }
    }
  }, [value, duration, isInView])

  return <span ref={ref}>{displayValue}</span>
}

const mainStats = [
  { label: "Plastic waste eliminated", value: "16000+", unit: "Metric Tons" },
  { label: "CO₂ Emissions reduced", value: "38400+", unit: "Metric Tons" },
  { label: "Businesses served", value: "610+", unit: "Active Partners" },
  { label: "Lives impacted", value: "5M+", unit: "Regional Reach" },
  { label: "Jobs created", value: "45+", unit: "Direct Roles" },
]

export default function CommunityImpactPage() {
  return (
    <div className="bg-white dark:bg-[#08120e] selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. ELEGANT HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 border-b border-zinc-100 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 grayscale dark:opacity-30 pointer-events-none">
           <Image src="/images/community_awareness.png" alt="Impact background" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-1 w-12 bg-emerald-500 mx-auto mb-8" />
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-zinc-950 dark:text-white mb-10 leading-[0.95] max-w-5xl mx-auto uppercase">
              Building a <br /><span className="text-emerald-600 italic">Circular Economy.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed mb-12 italic">
              At DercolBags, we go beyond packaging. We architect sustainable livelihoods, eliminate environmental waste, and empower regional businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. REFINED STATS DASHBOARD */}
      <section className="py-24 bg-zinc-50 dark:bg-white/5 relative border-b border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 text-center">
             {mainStats.map((stat, i) => (
               <motion.div 
                 key={stat.label}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
               >
                 <div className="text-3xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tighter mb-2">
                   <AnimatedCounter value={stat.value} />
                 </div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500 mb-2">{stat.unit}</div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 max-w-[120px] mx-auto leading-tight">{stat.label}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT PILLARS (NARRATIVE DRIVEN) */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          
          {/* COMMUNITY IMPACT */}
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-48">
             <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-7xl font-black tracking-tight text-zinc-950 dark:text-white mb-8 leading-[0.95] uppercase">
                   Empowering Communities Through <span className="text-emerald-600">Wealth Creation.</span>
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed font-light italic">
                   We work directly with local nodes to transform waste into economic opportunity.
                </p>
                
                <ul className="space-y-6 mb-16">
                  {[
                    "Supporting informal waste pickers with stable income",
                    "Creating opportunities for women and youth",
                    "Training individuals in sustainable packaging and recycling",
                    "Building inclusive participation in the circular economy"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4">
                       <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                       <span className="text-lg text-zinc-800 dark:text-zinc-300 font-bold uppercase tracking-tighter leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-zinc-100 dark:border-white/10">
                   <div>
                      <div className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">157</div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Trained</p>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">70%</div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Women</p>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">45%</div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Income ↑</p>
                   </div>
                </div>
             </div>
             <div className="lg:w-1/2 aspect-[4/3] relative rounded-none overflow-hidden border border-zinc-100 dark:border-white/5 bg-zinc-100 dark:bg-white/5">
                <Image src="/images/community_awareness.png" alt="Community Empowerment" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
          </div>

          {/* ENVIRONMENTAL IMPACT */}
          <div className="flex flex-col lg:flex-row-reverse gap-24 items-center mb-48">
             <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-7xl font-black tracking-tight text-zinc-950 dark:text-white mb-8 leading-[0.95] uppercase">
                   Reducing Waste. <span className="text-emerald-600 italic">Restoring Earth.</span>
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed font-light italic">
                   West Africa faces a growing waste crisis. We are reversing it by diverting waste from landfills and ecosystems.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-px bg-zinc-100 dark:bg-white/5 border border-zinc-100 dark:border-white/10">
                   <div className="p-10 bg-white dark:bg-background">
                      <Leaf className="h-8 w-8 text-emerald-500 mb-6" />
                      <div className="text-4xl font-black text-zinc-900 dark:text-white mb-1">16,000+</div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Tons Plastic Removed</p>
                   </div>
                   <div className="p-10 bg-white dark:bg-background">
                      <Zap className="h-8 w-8 text-emerald-500 mb-6" />
                      <div className="text-4xl font-black text-zinc-900 dark:text-white mb-1">38,400</div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">CO₂ Emissions Reduced</p>
                   </div>
                </div>
             </div>
             <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="aspect-[3/4] relative rounded-none overflow-hidden border border-zinc-100 dark:border-white/5 group">
                   <Image src="/images/plastic-waste.png" alt="Waste crisis" fill className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="aspect-[3/4] relative rounded-none overflow-hidden border border-zinc-100 dark:border-white/5 mt-12 group">
                   <Image src="/images/sustainable-packaging.png" alt="Eco Solution" fill className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-emerald-950/5" />
                </div>
             </div>
          </div>

          {/* ECONOMIC IMPACT */}
          <div className="flex flex-col lg:flex-row gap-24 items-center">
             <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-7xl font-black tracking-tight text-zinc-950 dark:text-white mb-8 leading-[0.95] uppercase">
                   Enabling SMEs to <span className="text-emerald-600">Scale Safely.</span>
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed font-light italic">
                   We architect the growth of small businesses by reducing environmental impact through precision packaging solutions.
                </p>
                
                <div className="grid gap-px bg-zinc-100 dark:bg-white/10 border border-zinc-100 dark:border-white/10">
                   {[
                     { title: "Reduce packaging costs by 20–30%", icon: TrendingUp },
                     { title: "Improve profit margins for SMEs", icon: ShieldCheck },
                     { title: "Enable access to better markets and exports", icon: Globe },
                     { title: "Support value addition in agro-processing", icon: Factory }
                   ].map(item => (
                     <div key={item.title} className="flex items-center gap-5 p-5 bg-white dark:bg-[#08120e] hover:bg-zinc-50 dark:hover:bg-white/5 transition-all">
                        <item.icon className="h-6 w-6 text-emerald-600" />
                        <span className="text-zinc-800 dark:text-zinc-200 font-black text-lg uppercase tracking-tighter leading-tight">{item.title}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="lg:w-1/2 bg-zinc-950 dark:bg-emerald-950/20 p-12 lg:p-24 rounded-none border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
                <div className="relative z-10">
                   <div className="text-8xl md:text-9xl font-black text-white tracking-tighter mb-4 group-hover:text-emerald-500 transition-colors">610+</div>
                   <p className="text-sm font-bold uppercase tracking-[0.4em] mb-12 text-emerald-500">Businesses Supported</p>
                   <div className="h-px w-full bg-white/10 mb-12" />
                   <div className="space-y-6">
                      <p className="text-2xl text-white font-light leading-snug italic opacity-90 tracking-tight">
                         Improved income across the entire regional supply chain.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* 4. CIRCULAR FLOW SYSTEM */}
      <section className="py-40 bg-zinc-950 dark:bg-black text-white">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-32 tracking-tighter uppercase leading-[0.9]">A Circular System That Benefits Everyone.</h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-16 relative">
               {[
                 { title: "Waste Generation", desc: "Communities and industries generate waste, identifying it as an untapped resource for the circular economy.", icon: Users },
                 { title: "Ethical Collection", desc: "Waste pickers recover materials under fair conditions, securing reliable income and environmental health.", icon: Recycle },
                 { title: "Aggregation", desc: "Local hubs consolidate recovered materials, streamlining them for industrial-scale processing.", icon: TrendingUp },
                 { title: "Precision Processing", desc: "Advanced recycling transforms raw waste into high-quality sustainable inputs for manufacturing.", icon: Factory },
                 { title: "Production", desc: "DercolBags engineers these inputs into premium, fibre-based packaging solutions.", icon: ShieldCheck }
               ].map((item, i) => (
                 <div key={item.title} className="relative group">
                    <div className="h-16 w-16 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 mb-10 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500">
                       <item.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed italic">{item.desc}</p>
                 </div>
               ))}
            </div>
            
            <div className="mt-32 p-12 bg-emerald-600 rounded-none flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-zinc-950">Result: Waste becomes <span className="italic">Value.</span></h3>
               </div>
               <p className="flex-1 text-xl font-light text-zinc-950 max-w-md leading-snug italic">
                  Transforming an environmental liability into a multidimensional economic asset for all.
               </p>
            </div>
         </div>
      </section>

      {/* 5. FUTURE IMPACT (2030) */}
      <section className="py-40 bg-white dark:bg-[#08120e]">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-24 items-end mb-24">
               <div className="lg:w-2/3">
                  <h2 className="text-5xl md:text-8xl font-black text-zinc-950 dark:text-white leading-[0.85] tracking-tighter uppercase">Scaling Impact <br /> Across Africa.</h2>
               </div>
               <p className="lg:w-1/3 text-2xl text-zinc-500 font-light italic leading-snug">By 2030, we are architecting the continent's definitive circular node network.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-white/10 border border-zinc-200 dark:border-white/10">
               {[
                 { val: "65,000+", label: "Waste Diverted [MT]" },
                 { val: "250+", label: "Green Jobs Built" },
                 { val: "1,500", label: "SMEs Empowered" },
                 { val: "5", label: "Countries Expanded" }
               ].map(item => (
                 <div key={item.label} className="bg-white dark:bg-[#08120e] p-16 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors group">
                    <div className="text-6xl font-black text-zinc-950 dark:text-white tracking-tighter mb-4 group-hover:text-emerald-500 transition-colors">{item.val}</div>
                    <div className="h-1 w-12 bg-emerald-500 mb-6" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{item.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. WHY THIS MATTERS (EDITORIAL) */}
      <section className="py-32 bg-zinc-50 dark:bg-black/20 border-y border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h3 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase mb-12">Why This <span className="text-emerald-600 italic">Matters.</span></h3>
           <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed italic tracking-tight">
              "Waste is not just an environmental problem—it is an untapped economic resource. 
              By building a circular ecosystem, we are creating jobs, supporting businesses, and protecting our environment at scale."
           </p>
        </div>
      </section>
    </div>
  )
}

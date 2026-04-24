"use client"

import * as React from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ShoppingBag, Recycle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isMuted, setIsMuted] = React.useState(true)
  const [showUnmuteHint, setShowUnmuteHint] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isMuted) setShowUnmuteHint(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [isMuted])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause()
      else videoRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (isMuted) setShowUnmuteHint(false)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col pt-32 pb-32 overflow-hidden bg-white dark:bg-[#030712]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 items-start mb-24 lg:mb-32"
        >
          {/* Left: Hook + Empathy */}
          <div className="max-w-2xl">
            <motion.div variants={itemVariants} className="h-1 w-12 bg-emerald-500 mb-10" />
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[1.05] uppercase"
            >
              IS YOUR PACKAGING<br />
              <span className="text-emerald-500">COSTING YOU SALES?</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-10 text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-medium border-l-2 border-emerald-500 pl-4"
            >
              We understand how this feels.
            </motion.p>
          </div>

          {/* Right: Solution + Value */}
          <div className="lg:pt-16 lg:pl-8 lg:pr-6">
            <motion.div variants={itemVariants} className="space-y-8">
              <p className="text-base md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-200 font-normal leading-relaxed max-w-lg">
                DercolBags provides premium eco-friendly packaging that helps your products{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-black">sell faster.</span>
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                {["Look better.", "Gain trust.", "Sell more.", "Reduce waste."].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-black uppercase tracking-widest text-zinc-950 dark:text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2 max-w-xs">
                <Button 
                  asChild
                  size="lg" 
                  className="w-full rounded-none bg-zinc-950 hover:bg-emerald-600 text-white h-12 transition-all font-black text-xs uppercase tracking-widest"
                >
                  <Link href="/store" className="flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Upgrade Your Packaging
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="w-full rounded-none bg-emerald-600 hover:bg-emerald-700 text-white h-12 transition-all font-black text-xs uppercase tracking-widest"
                >
                  <Link href="/watapak" className="flex items-center justify-center gap-2">
                    <Recycle className="w-4 h-4" />
                    Get Paid for Your Waste
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Block (Full Width) */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full aspect-video md:aspect-[21/10] lg:h-[800px] rounded-none overflow-hidden group bg-zinc-900 dark:border dark:border-white/8"
          onClick={() => togglePlay()}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            loop
            playsInline
            muted={isMuted}
            autoPlay
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <source 
              src="https://res.cloudinary.com/ddwet1dzj/video/upload/q_auto/f_auto/v1775588872/watpack/WatPak___From_Waste_to_Resource_moptqs.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* Controls */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />
          
          <div className="absolute bottom-12 left-12 flex items-center gap-6">
            <button
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="p-5 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-none border border-white/10 transition-all pointer-events-auto"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="p-5 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-none border border-white/10 transition-all pointer-events-auto"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>

          {/* Minimal Unmute Hint */}
          {showUnmuteHint && isMuted && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="absolute top-12 right-12 flex items-center gap-3 px-5 py-3 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.2em] pointer-events-auto hover:bg-emerald-500 transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Unmute</span>
            </motion.button>
          )}

        </motion.div>
      </div>
    </section>
  )
}

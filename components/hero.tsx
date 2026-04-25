"use client"

import * as React from "react"
import Link from "next/link"
import { motion, Variants, AnimatePresence } from "framer-motion"
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

  const [progress, setProgress] = React.useState(0)
  const [isBuffering, setIsBuffering] = React.useState(false)

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const duration = videoRef.current.duration
      setProgress((current / duration) * 100)
    }
  }

  const [isHovered, setIsHovered] = React.useState(false)

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
                  className="w-full rounded-none bg-zinc-950 dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-zinc-950 h-12 transition-all font-black text-xs uppercase tracking-widest"
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

        {/* Sci-Fi Player Frame */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* External Bezel / Thick Emerald Border */}
          <div className="absolute -inset-[4px] border-[4px] border-emerald-500/40 rounded-none pointer-events-none z-20" />
          <div className="absolute -inset-[1px] border border-white/20 rounded-none pointer-events-none z-30" />

          {/* Sci-Fi Corner Brackets */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-emerald-500 z-40 pointer-events-none" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-emerald-500 z-40 pointer-events-none" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald-500 z-40 pointer-events-none" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-emerald-500 z-40 pointer-events-none" />

          {/* Technical HUD Corner Labels */}
          <div className={cn(
            "absolute top-8 left-8 z-30 flex flex-col gap-1 pointer-events-none transition-all duration-700",
            (!isPlaying && !isHovered) ? "opacity-60" : "opacity-0 translate-y-[-10px]"
          )}>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-[0.2em]">Uplink: Active</span>
            </div>
            <span className="font-mono text-[8px] text-emerald-500/70 uppercase tracking-widest pl-3.5">Encryption: Eco-Secure</span>
          </div>

          <div className={cn(
            "absolute top-8 right-8 z-30 flex flex-col items-end gap-1 pointer-events-none transition-all duration-700 text-right",
            (!isPlaying && !isHovered) ? "opacity-60" : "opacity-0 translate-y-[-10px]"
          )}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-[0.2em]">4K // Cinematic</span>
              <div className="px-1.5 py-0.5 border border-red-500 text-[8px] font-black text-red-500 animate-pulse">REC</div>
            </div>
            <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Buffer: 100% // Latency: 12ms</span>
          </div>

          <motion.div 
            className="relative w-full aspect-video md:aspect-[21/10] lg:h-[800px] rounded-none overflow-hidden bg-zinc-950 border border-white/5 cursor-pointer"
            onClick={() => togglePlay()}
          >
            {/* Video Background */}
            <video
              ref={videoRef}
              playsInline
              muted={isMuted}
              autoPlay
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onWaiting={() => setIsBuffering(true)}
              onPlaying={() => setIsBuffering(false)}
              onEnded={() => setIsPlaying(false)}
              className={cn(
                "w-full h-full object-cover transition-all duration-1000",
                (isPlaying || isHovered) ? "grayscale-0 opacity-100 blur-0" : "grayscale opacity-30 blur-[2px]"
              )}
            >
              <source 
                src="https://res.cloudinary.com/ddwet1dzj/video/upload/q_auto,f_auto/v1777106177/dercolbags/DercolBags__Smart_Packaging_Sustainable_Success._xtaush.mp4" 
                type="video/mp4" 
              />
            </video>

            {/* Sci-Fi Green Gradient Overlay */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-950/20 pointer-events-none z-10 transition-opacity duration-700",
              (!isPlaying && !isHovered) ? "opacity-100" : "opacity-0"
            )} />

            {/* Scanlines Effect */}
            <div className={cn(
              "absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] transition-opacity duration-700",
              (!isPlaying && !isHovered) ? "opacity-20" : "opacity-0"
            )} />
            
            {/* HUD Grid */}
            <div className={cn(
              "absolute inset-0 bg-grid pointer-events-none z-10 transition-opacity duration-700",
              (!isPlaying && !isHovered) ? "opacity-[0.03]" : "opacity-0"
            )} />

            {/* Sci-Fi Target Crosshair (Center) */}
            <div className={cn(
              "absolute inset-0 flex items-center justify-center pointer-events-none z-20 transition-all duration-700",
              (!isPlaying && !isHovered) ? "opacity-20 scale-100" : "opacity-0 scale-110"
            )}>
              <div className="relative w-20 h-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-emerald-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-emerald-500" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-emerald-500" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-emerald-500" />
              </div>
            </div>

            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent pointer-events-none z-20" />

            {/* Center Play Overlay */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
                >
                  <div className="w-24 h-24 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center">
                    <Play className="w-10 h-10 text-emerald-500 fill-current" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buffering Indicator */}
            <AnimatePresence>
              {isBuffering && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-40"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                    <span className="font-mono text-[10px] text-emerald-500 animate-pulse uppercase tracking-widest">Re-Linking Stream...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5 z-40 overflow-hidden">
              <motion.div 
                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ type: "spring", bounce: 0, duration: 0.1 }}
              />
            </div>

            {/* Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30" />
            
            <div className="absolute bottom-12 left-12 flex items-center gap-4 z-40">
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="p-5 bg-emerald-500/10 backdrop-blur-xl hover:bg-emerald-500/20 text-emerald-500 rounded-none border border-emerald-500/30 transition-all pointer-events-auto"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-0.5 fill-current" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                className="p-5 bg-emerald-500/10 backdrop-blur-xl hover:bg-emerald-500/20 text-emerald-500 rounded-none border border-emerald-500/30 transition-all pointer-events-auto"
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
                className="absolute top-12 right-12 flex items-center gap-3 px-6 py-4 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.2em] pointer-events-auto hover:bg-emerald-500 transition-colors z-40"
              >
                <Volume2 className="w-4 h-4" />
                <span>Override Audio Lock</span>
              </motion.button>
            )}

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

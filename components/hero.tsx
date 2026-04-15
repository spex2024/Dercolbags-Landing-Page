"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Plus, Minus, RotateCcw, RotateCw, ShoppingBag, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isMuted, setIsMuted] = React.useState(true)
  const [volume, setVolume] = React.useState(1)
  const [showUnmuteHint, setShowUnmuteHint] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)

  // Sync state on mount
  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const attemptAutoplay = async () => {
      try {
        video.muted = false
        await video.play()
        setIsMuted(false)
        setIsPlaying(true)
      } catch (error) {
        console.warn("Autoplay blocked, falling back to muted.", error)
        video.muted = true
        await video.play()
        setIsMuted(true)
        setIsPlaying(true)
        setShowUnmuteHint(true)
      }
    }

    attemptAutoplay()
  }, [])

  // Handle Play/Pause
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  // Handle Mute/Unmute
  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    const newMuted = !isMuted
    video.muted = newMuted
    setIsMuted(newMuted)
    if (!newMuted) setShowUnmuteHint(false)
  }

  // Handle Volume
  const adjustVolume = (delta: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    const newVolume = Math.min(1, Math.max(0, volume + delta))
    video.volume = newVolume
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      video.muted = false
      setIsMuted(false)
    }
  }

  // Handle Skip
  const skip = (seconds: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.currentTime = Math.min(video.duration, Math.max(0, video.currentTime + seconds))
  }

  // Handle Seeker Change
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return
    const newTime = parseFloat(e.target.value)
    video.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Sync Progress
  const onTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const onLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // High-frequency sync backup
  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const interval = setInterval(() => {
      if (video.duration && video.duration !== Infinity && duration !== video.duration) {
        setDuration(video.duration)
      }
      if (video.currentTime !== currentTime) {
        setCurrentTime(video.currentTime)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [currentTime, duration])

  // Format Time (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  }

  return (
    <section className="relative w-full bg-zinc-50/50 pt-32 pb-20 overflow-hidden dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12"
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.9] text-zinc-950 dark:text-white uppercase">
                Engineering Africa's <br />
                <span className="text-emerald-600 italic dark:text-emerald-400">Circular</span> Future.
              </h1>
              <div className="flex items-center gap-3 mt-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Mission: Protocol 01
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
                  Empowering Entrepreneurs for a Cleaner Environment
                </span>
              </div>
            </motion.div>

            {/* Right Column: Description + Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8 lg:pt-4">
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl dark:text-zinc-300">
                Driving Africa’s circular economy, empowering communities, and 
                redefining how packaging supports climate resilience, economic 
                growth, and social equity.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-12 shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:shadow-emerald-500/20"
                >
                  <Link href="/store" className="flex items-center gap-2">
                    Visit Store
                    <ShoppingBag className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg" 
                  className="rounded-full border-zinc-200 text-zinc-900 px-8 h-12 transition-all hover:-translate-y-0.5 hover:bg-zinc-50 dark:border-white/12 dark:text-white dark:hover:bg-white/8"
                >
                  <Link href="/watpak" className="flex items-center gap-2">
                    Watpak
                    <Recycle className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Video Container */}
          <motion.div 
            variants={itemVariants}
            className="relative w-full aspect-video md:aspect-[21/10] lg:h-[750px] rounded-[3rem] md:rounded-[4rem] overflow-hidden group shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-zinc-900 dark:border dark:border-white/8 dark:shadow-[0_32px_90px_-24px_rgba(16,185,129,0.25)]"
            onClick={() => togglePlay()}
          >
            {/* Video Background */}
            <video
              ref={videoRef}
              loop
              playsInline
              onTimeUpdate={onTimeUpdate}
              onLoadedMetadata={onLoadedMetadata}
              className="w-full h-full object-cover"
            >
              <source 
                src="https://res.cloudinary.com/ddwet1dzj/video/upload/q_auto/f_auto/v1775588872/watpack/WatPak___From_Waste_to_Resource_moptqs.mp4" 
                type="video/mp4" 
              />
            </video>

            {/* Hint for blocked unmuted autoplay */}
            {showUnmuteHint && (
               <div className="absolute top-8 right-8 z-30">
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={toggleMute}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full text-base font-semibold shadow-2xl hover:bg-emerald-500 transition-colors backdrop-blur-md"
                  >
                    <VolumeX className="w-5 h-5" />
                    Unmute to hear sound
                  </motion.button>
               </div>
            )}

            {/* Hover-Controlled Compact Dark Glassmorphism Video Controls Bar */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
               <div className="flex items-center gap-3 md:gap-4 bg-black/50 backdrop-blur-3xl rounded-full px-5 py-2.5 border border-white/10 shadow-2xl max-w-4xl mx-auto">
                  {/* Real-time Timer Display */}
                  <div className="text-white font-mono font-bold text-xs md:text-sm tracking-tighter whitespace-nowrap min-w-[90px] text-center border-r border-white/20 pr-3 block opacity-90">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>

                  {/* High-Visibility Seeker ("Tier Line") */}
                  <div className="flex-grow relative h-3 bg-white/20 rounded-full overflow-hidden">
                    {/* Glowing Progress Fill (Direct-Style for Zero-Lag Updates) */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,1)] transition-all duration-100"
                      style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                    />
                    
                    {/* Functional Invisible Scrubber */}
                    <input
                      type="range"
                      min="0"
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 appearance-none"
                    />
                  </div>

                  {/* Volume Console */}
                  <div className="flex items-center gap-2 border-l border-white/20 pl-4">
                    <button onClick={(e) => adjustVolume(-0.1, e)} className="p-1.5 hover:bg-white/20 rounded-full transition-colors hidden sm:block">
                      <Minus className="w-4 h-4 text-white" />
                    </button>

                    <button onClick={toggleMute} className="px-2 hover:bg-white/20 rounded-full transition-colors flex items-center gap-4">
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                      
                      <div className="w-16 h-1.5 bg-white/20 rounded-full hidden md:block overflow-hidden">
                        <motion.div 
                          className="h-full bg-emerald-400" 
                          animate={{ width: `${volume * 100}%` }} 
                        />
                      </div>
                    </button>

                    <button onClick={(e) => adjustVolume(0.1, e)} className="p-1.5 hover:bg-white/20 rounded-full transition-colors hidden sm:block">
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
               </div>
            </div>

            {/* Central Play/Pause/Skip Controls */}
            <div className="absolute inset-0 flex items-center justify-center gap-8 md:gap-16 pointer-events-none">
               <button 
                 onClick={(e) => skip(-10, e)}
                 className="p-4 md:p-5 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-600 hover:scale-110 active:scale-95 pointer-events-auto shadow-xl"
               >
                 <RotateCcw className="w-6 h-6 md:w-10 md:h-10" />
               </button>

               <div 
                 className={cn(
                   "w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/95 backdrop-blur-xl flex items-center justify-center transition-all duration-700 shadow-3xl pointer-events-auto cursor-pointer",
                   isPlaying ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100" : "opacity-100 scale-100"
                 )}
                 onClick={(e) => togglePlay(e)}
               >
                 {isPlaying ? (
                   <Pause className="w-8 h-8 md:w-14 md:h-14 text-emerald-600 fill-emerald-600" />
                 ) : (
                   <Play className="w-8 h-8 md:w-14 md:h-14 text-emerald-600 fill-emerald-600 ml-2" />
                 )}
               </div>

               <button 
                 onClick={(e) => skip(10, e)}
                 className="p-4 md:p-5 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-600 hover:scale-110 active:scale-95 pointer-events-auto shadow-xl"
               >
                 <RotateCw className="w-6 h-6 md:w-10 md:h-10" />
               </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  BriefcaseBusiness,
  Camera,
  ChevronDown,
  Box,
  GraduationCap,
  Handshake,
  Home,
  Info,
  Layers,
  Mail,
  Moon,
  Package,
  Palette,
  Recycle,
  Send,
  ShoppingBag,
  SunMedium,
  Users,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Community", href: "/community-impact" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { 
    name: "X", 
    href: "https://x.com/DercolBags", 
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" 
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/dercolbagspackaging/", 
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/dercolbags/", 
    path: "M12 0c-3.263 0-3.67.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c3.403 0 6.162 2.759 6.162 6.162s-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163 2.759-6.162 6.162-6.162zm0 10.162c2.209 0 4-1.79 4-4 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 2.21 1.791 4 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/DercolBags/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@dercolbags2736",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  }
]

const socialLinksLegacy = [] // Kept empty for now to avoid breaking other logic if any

/** Bottom nav items — shown only on mobile */
const bottomNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Solutions", href: "/solutions", icon: Package },
  { name: "Community", href: "/community-impact", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-none border border-emerald-200 bg-white dark:border-white/10 dark:bg-white/6" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-11 w-11 items-center justify-center rounded-none border border-emerald-200 bg-white text-zinc-800 transition hover:-translate-y-0.5 hover:bg-emerald-50 dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <SunMedium className="h-4.5 w-4.5 text-amber-300" /> : <Moon className="h-4.5 w-4.5 text-emerald-700" />}
    </button>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* ── TOP HEADER ── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300",
          isScrolled
            ? "border-b border-emerald-100 bg-white/80 py-4 shadow-none backdrop-blur-md dark:border-white/8 dark:bg-background/80"
            : "bg-transparent"
        )}
      >
        <div className={cn("mx-auto flex items-center justify-between gap-4", isScrolled ? "max-w-screen-2xl" : "max-w-7xl")}>
          <Link
            href="/"
            className="relative h-20 w-80 transition-all hover:opacity-80"
          >
            <Image
              src="https://res.cloudinary.com/ddwet1dzj/image/upload/v1777042366/dercolbags/DERCOLBAGS_LOGO_tolkgw.png"
              alt="DercolBags Packaging Company Limited Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "group relative text-[10px] font-black uppercase tracking-[0.2em] transition-colors",
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : isScrolled
                      ? "text-zinc-900 hover:text-emerald-600 dark:text-zinc-100 dark:hover:text-emerald-400"
                      : "text-zinc-600 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                  )}
                >
                  {link.name}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} 
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop right controls */}
          <div className="hidden items-center gap-3 md:flex">
            <AnimatePresence>
              {isScrolled && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-2"
                >
                  <Button
                    asChild
                    size="sm"
                    className="h-8 rounded-none bg-zinc-900 px-3 text-[9px] font-black uppercase tracking-widest text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 border-none"
                  >
                    <Link href="/store" className="flex items-center gap-1.5">
                      <ShoppingBag className="h-3 w-3 flex-shrink-0" />
                      <span className="hidden xl:inline">Upgrade Your Packaging</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="h-8 rounded-none bg-emerald-600 px-3 text-[9px] font-black uppercase tracking-widest text-white hover:bg-emerald-700 border-none"
                  >
                    <Link href="/watapak" className="flex items-center gap-1.5">
                      <Recycle className="h-3 w-3 flex-shrink-0" />
                      <span className="hidden xl:inline">Get Paid for Waste</span>
                    </Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <ThemeToggle />
          </div>

          {/* Mobile right controls (theme toggle + sticky buttons) */}
          <div className="flex items-center gap-2 md:hidden">
            <AnimatePresence>
              {isScrolled && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-1.5"
                >
                  <Button
                    asChild
                    size="sm"
                    className="h-8 w-8 px-0 rounded-none bg-zinc-900 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 border-none"
                  >
                    <Link href="/store" aria-label="Upgrade Your Packaging">
                      <ShoppingBag className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="h-8 w-8 px-0 rounded-none bg-emerald-600 text-white hover:bg-emerald-700 border-none"
                  >
                    <Link href="/watapak" aria-label="Get Paid for Waste">
                      <Recycle className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      {/* ── SLIM FLOATING SOCIALS (EDGE MOUNTED) ── */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] hidden xl:flex flex-col"
      >
        <div className="flex flex-col border-y border-l border-zinc-100 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
          {socialLinks.map(({ name, href, path }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="group flex h-12 w-12 items-center justify-center transition-all hover:bg-emerald-500 hover:text-white text-zinc-400"
            >
              <svg className="h-4 w-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                <path d={path} />
              </svg>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── MOBILE BOTTOM NAV ── */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        {/* Frosted glass bar */}
        <div className="mx-3 mb-3 overflow-hidden rounded-[1.5rem] border border-zinc-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-background/90">
          <div className="flex items-center justify-around px-2 py-3">
            {bottomNavItems.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
              return (
                <Link
                  key={name}
                  href={href}
                  className="flex flex-col items-center gap-1 px-3 py-1 group"
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-emerald-500 text-white"
                        : "text-zinc-400 group-hover:text-emerald-500 dark:text-zinc-500 dark:group-hover:text-emerald-400"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider transition-colors leading-none",
                      isActive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-zinc-400 dark:text-zinc-600"
                    )}
                  >
                    {name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </>
  )
}

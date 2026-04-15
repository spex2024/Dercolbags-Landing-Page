"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  BriefcaseBusiness,
  Camera,
  Home,
  Info,
  Mail,
  Moon,
  Send,
  ShoppingBag,
  SunMedium,
  Users,
} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Community & Impact", href: "/community-impact" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Instagram", href: "#", icon: Camera },
  { name: "Twitter", href: "#", icon: Send },
  { name: "LinkedIn", href: "#", icon: BriefcaseBusiness },
]

/** Bottom nav items — shown only on mobile */
const bottomNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Community", href: "/community-impact", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white text-zinc-800 transition hover:-translate-y-0.5 hover:bg-emerald-50 dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
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
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
          isScrolled
            ? "border-b border-emerald-100 bg-white/80 py-3 shadow-sm backdrop-blur-md dark:border-white/8 dark:bg-zinc-950/80 dark:shadow-[0_10px_30px_-20px_rgba(16,185,129,0.45)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/"
            className={cn(
              "text-2xl font-heading font-bold tracking-tighter transition-colors",
              isScrolled ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-900 dark:text-white"
            )}
          >
            DercolBags
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "group relative text-sm font-medium transition-colors",
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
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 dark:border-white/8 dark:bg-white/6 dark:text-zinc-200 dark:hover:border-emerald-400/30 dark:hover:bg-white/10 dark:hover:text-emerald-300"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}

            <ThemeToggle />

            <Button
              asChild
              variant={isScrolled ? "default" : "outline"}
              size="sm"
              className={cn(
                "h-10 rounded-full px-6 transition-all",
                isScrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                  : "border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:border-white/12 dark:text-white dark:hover:bg-white/8"
              )}
            >
              <Link href="/#solutions">Explore Solutions</Link>
            </Button>
          </div>

          {/* Mobile: theme toggle only (bottom nav replaces hamburger) */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE BOTTOM NAV ── */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        {/* Frosted glass bar */}
        <div className="mx-3 mb-3 overflow-hidden rounded-[1.5rem] border border-zinc-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90">
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

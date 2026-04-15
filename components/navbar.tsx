"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  BriefcaseBusiness,
  Camera,
  ChevronDown,
  Home,
  Info,
  Mail,
  Moon,
  Recycle,
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
  { 
    name: "Solutions", 
    href: "/#solutions",
    dropdown: [
      { 
        name: "Store", 
        href: "/store", 
        description: "Premium sustainable packaging production.",
        icon: ShoppingBag 
      },
      { 
        name: "Watpak", 
        href: "/watpak", 
        description: "Circular supply chain operating system.",
        icon: Recycle 
      },
    ]
  },
  { name: "Community & Impact", href: "/community-impact" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { 
    name: "X", 
    href: "#", 
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" 
  },
  { 
    name: "LinkedIn", 
    href: "#", 
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
  },
  { 
    name: "Instagram", 
    href: "#", 
    path: "M12 0c-3.263 0-3.67.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c3.403 0 6.162 2.759 6.162 6.162s-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163 2.759-6.162 6.162-6.162zm0 10.162c2.209 0 4-1.79 4-4 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 2.21 1.791 4 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
  },
  {
    name: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  }
]

const socialLinksLegacy = [] // Kept empty for now to avoid breaking other logic if any

/** Bottom nav items — shown only on mobile */
const bottomNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Store", href: "/store", icon: ShoppingBag },
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
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) || (link.dropdown?.some(d => pathname === d.href))
              
              if (link.dropdown) {
                return (
                  <div key={link.name} className="group relative py-2">
                    <button
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors",
                        isActive
                          ? "text-emerald-600 dark:text-emerald-400"
                          : isScrolled
                          ? "text-zinc-900 hover:text-emerald-600 dark:text-zinc-100 dark:hover:text-emerald-400"
                          : "text-zinc-600 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      <div className="relative overflow-hidden rounded-2xl border border-zinc-100 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/95">
                        <div className="absolute inset-0 bg-grid-emerald/5 opacity-40" />
                        
                        <div className="relative z-10 flex flex-col gap-1">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-emerald-50 dark:hover:bg-white/6"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover/item:bg-emerald-500 group-hover/item:text-white dark:bg-white/8 dark:text-zinc-400">
                                <subItem.icon className="h-4.5 w-4.5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-zinc-900 dark:text-white">{subItem.name}</span>
                                <span className="text-[10px] text-zinc-500 transition-colors group-hover/item:text-emerald-600 dark:text-zinc-500 dark:group-hover:text-emerald-400">
                                  {subItem.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

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
            {socialLinks.map(({ name, href, path }) => (
              <Link
                key={name}
                href={href}
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 dark:border-white/8 dark:bg-white/6 dark:text-zinc-200 dark:hover:border-emerald-400/30 dark:hover:bg-white/10 dark:hover:text-emerald-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={path} />
                </svg>
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

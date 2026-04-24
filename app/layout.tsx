import { Geist_Mono, IBM_Plex_Sans, Roboto_Slab } from "next/font/google"
import Image from "next/image"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiChatbot } from "@/components/ai-chatbot"
import { NewsletterModal } from "@/components/newsletter-modal"
import { FloatingPathsBackground } from "@/components/ui/floating-paths"

import { Preloader } from "@/components/preloader"

const robotoSlabHeading = Roboto_Slab({subsets:['latin'],variable:'--font-heading'});

export const metadata = {
  title: "DercolBags | Sustainable Packaging Architects",
  description: "DercolBags is a sustainable packaging and Climate Tech Firm empowering African businesses.",
  icons: {
    icon: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777043740/dercolbags/favicon-32x32_vuryfb.png",
    shortcut: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777043740/dercolbags/favicon-32x32_vuryfb.png",
    apple: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777043740/dercolbags/favicon-32x32_vuryfb.png",
  }
}

const ibmPlexSans = IBM_Plex_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", fontMono.variable, ibmPlexSans.variable, robotoSlabHeading.variable)}
    >
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <Preloader />
          <FloatingPathsBackground position={-1} className="fixed inset-0 z-0 pointer-events-none" />
          <AiChatbot />
          <NewsletterModal />
          <Navbar />
          <main className="relative flex-grow">
            {children}
          </main>
          <div className="pb-bottom-nav md:pb-0">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

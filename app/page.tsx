import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { ProblemSection } from "@/components/problem-section"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProblemSection />
      <Solutions />
      <Testimonials />
      <CtaSection />
    </>
  )
}

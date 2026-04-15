import { Heart, Recycle, ShoppingBag, type LucideIcon } from "lucide-react"

export type Offering = {
  slug: "watpak" | "store" | "community"
  title: string
  eyebrow: string
  description: string
  details: string
  image: string
  icon: LucideIcon
  location: string
  hours: string
  tags: string[]
  learnMoreHref: string
  ctaLabel: string
  heroTitle: string
  heroBody: string
  featureList: string[]
}

export const offerings: Offering[] = [
  {
    slug: "community",
    title: "Waste Recovery Programme",
    eyebrow: "Community Impact",
    description: "Community programs that turn household and industrial waste into raw materials.",
    details:
      "Our recovery programs engage local communities to systematically collect and process plastic and fiber waste. This turns environmental hazards into valuable raw materials for our manufacturing ecosystem.",
    image: "/images/community_impact.png",
    icon: Heart,
    location: "Community Nodes",
    hours: "Active Recovery: Daily",
    tags: ["Social Impact", "Environment", "Recovery"],
    learnMoreHref: "/community",
    ctaLabel: "Explore Impact",
    heroTitle: "Community Waste Recovery Programme",
    heroBody:
      "We build community infrastructure that incentivizes waste collection, empowering thousands of individuals to participate in the circular economy.",
    featureList: [
      "Localized waste-recovery centers and collection nodes",
      "Incentivized programs for informal waste pickers",
      "Closing the loop on household and industrial waste",
    ],
  },
  {
    slug: "watpak",
    title: "WatPak Digital",
    eyebrow: "Technology Platform",
    description: "A platform connecting pickers, recyclers, and SMEs in one seamless ecosystem.",
    details:
      "WatPak is our proprietary waste-to-packaging digital platform. It creates supply chain visibility by connecting informal waste collectors, professional recyclers, and eco-conscious manufacturers in a single, data-driven circular network.",
    image: "/images/wastepack.png",
    icon: Recycle,
    location: "Ecosystem Hub",
    hours: "24/7 Digital Operations",
    tags: ["Web app", "Supply Chain", "Connectivity"],
    learnMoreHref: "/watpak",
    ctaLabel: "Open Platform",
    heroTitle: "Digital Infrastructure for Circularity",
    heroBody:
      "WatPak connects the entire value chain—from the person collecting waste on the street to the SME receiving sustainable packaging—ensuring every metric ton is accounted for.",
    featureList: [
      "Real-time connectivity between waste pickers and recyclers",
      "End-to-end traceability of recycled raw materials",
      "Unified supply chain visibility for businesses and SMEs",
    ],
  },
  {
    slug: "store",
    title: "Local Manufacturers",
    eyebrow: "Production Hub",
    description: "Cutting import costs and lead times by up to 30% through on-site production.",
    details:
      "By maintaining local manufacturing facilities, we eliminate the friction of international logistics. This allows us to deliver high-quality, recycled fiber packaging faster and more affordably than imported alternatives.",
    image: "/images/store.png",
    icon: ShoppingBag,
    location: "Accra // Lagos",
    hours: "Production: 24h Cycles",
    tags: ["Manufacturing", "Supply Chain", "Efficiency"],
    learnMoreHref: "/store",
    ctaLabel: "View Production",
    heroTitle: "Locally Engineered, Globally Sustainable",
    heroBody:
      "Our manufacturing plants convert processed waste into premium packaging, drastically reducing the carbon footprint and cost structure of our partners.",
    featureList: [
      "30% reduction in lead times compared to imports",
      "Custom branded packaging solutions for growing SMEs",
      "Local job creation and industrial capacity building",
    ],
  },
]

export function getOfferingBySlug(slug: string): Omit<Offering, "icon"> | undefined {
  const found = offerings.find((offering) => offering.slug === slug)
  if (!found) return undefined
  
  const { icon, ...serializableOffering } = found
  return serializableOffering
}

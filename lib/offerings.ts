import { Heart, Recycle, ShoppingBag, type LucideIcon } from "lucide-react"

export type Offering = {
  slug: "watapak" | "store" | "community"
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
    slug: "store",
    title: "Sustainable Packaging",
    eyebrow: "Production Hub",
    description: "We produce sustainable packaging locally, reducing import dependency, delivery time, and cost by up to 30% compared to imported alternatives.",
    details:
      "Our local manufacturing hubs convert processed fiber into premium packaging, eliminating international logistical friction while supporting regional industrial growth.",
    image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777037145/dercolbags/DERCOL_WEBSITEEEEE.jpg_rixtgf.jpg",
    icon: ShoppingBag,
    location: "Accra",
    hours: "Production: 24h Cycles",
    tags: ["Manufacturing", "Supply Chain", "Efficiency"],
    learnMoreHref: "/store",
    ctaLabel: "Visit Store",
    heroTitle: "Locally Engineered, Globally Sustainable",
    heroBody:
      "Our manufacturing plants convert processed waste into premium packaging, drastically reducing the carbon footprint and cost structure of our partners.",
    featureList: [
      "30% reduction in lead times compared to imports",
      "Custom branded packaging solutions for growing businesses",
      "Local job creation and industrial capacity building",
    ],
  },
  {
    slug: "watapak",
    title: "WatPak",
    eyebrow: "Technology Platform",
    description: "A waste-to-packaging digital platform connecting waste pickers, recyclers, manufacturers, and businesses in one ecosystem.",
    details:
      "Watapak is a waste-to-packaging digital platform that connects waste pickers, recyclers, manufacturers, and businesses in one seamless ecosystem, ensuring end-to-end traceability and circularity.",
    image: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777040954/dercolbags/Y_-_BB.jpg_jensat.jpg",
    icon: Recycle,
    location: "Ecosystem Hub",
    hours: "24/7 Digital Operations",
    tags: ["Web app", "Supply Chain", "Connectivity"],
    learnMoreHref: "/watapak",
    ctaLabel: "Open Platform",
    heroTitle: "Digital Infrastructure for Circularity",
    heroBody:
      "Watapak connects the entire value chain—from the person collecting waste on the street to the business receiving sustainable packaging—ensuring every metric ton is accounted for.",
    featureList: [
      "Real-time connectivity between waste pickers and recyclers",
      "End-to-end traceability of recycled raw materials",
      "Unified supply chain visibility for all partner businesses",
    ],
  },
  {
    slug: "community",
    title: "Community Waste Recovery Program",
    eyebrow: "Community Impact",
    description: "Community waste-recovery programs that turn waste into raw materials.",
    details:
      "Our community waste-recovery programs turn household and industrial waste into high-quality raw materials, creating a sustainable foundation for circular manufacturing.",
    image: "/images/community_waste_pickers.png",
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
]

export function getOfferingBySlug(slug: string): Omit<Offering, "icon"> | undefined {
  const found = offerings.find((offering) => offering.slug === slug)
  if (!found) return undefined
  
  const { icon, ...serializableOffering } = found
  return serializableOffering
}

import { notFound } from "next/navigation"

import { OfferingPage } from "@/components/offering-page"
import { getOfferingBySlug } from "@/lib/offerings"

export default function WatPakPage() {
  const offering = getOfferingBySlug("watpak")

  if (!offering) {
    notFound()
  }

  return <OfferingPage offering={offering} />
}

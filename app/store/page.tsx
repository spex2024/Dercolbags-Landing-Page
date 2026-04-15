import { notFound } from "next/navigation"

import { OfferingPage } from "@/components/offering-page"
import { getOfferingBySlug } from "@/lib/offerings"

export default function StorePage() {
  const offering = getOfferingBySlug("store")

  if (!offering) {
    notFound()
  }

  return <OfferingPage offering={offering} />
}

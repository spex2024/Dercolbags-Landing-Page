import { notFound } from "next/navigation"

import { OfferingPage } from "@/components/offering-page"
import { getOfferingBySlug } from "@/lib/offerings"

export default function CommunityPage() {
  const offering = getOfferingBySlug("community")

  if (!offering) {
    notFound()
  }

  return <OfferingPage offering={offering} />
}

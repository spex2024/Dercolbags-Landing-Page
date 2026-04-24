import { notFound } from "next/navigation"

import { OfferingPage } from "@/components/offering-page"
import { getOfferingBySlug } from "@/lib/offerings"

export default function WatapakPage() {
  const offering = getOfferingBySlug("watapak")

  if (!offering) {
    notFound()
  }

  return <OfferingPage offering={offering} />
}

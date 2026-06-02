import { SiteNav } from "@/components/shared/SiteNav"
import { Footer } from "@/components/shared/Footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteNav />
      {children}
      <Footer />
    </>
  )
}

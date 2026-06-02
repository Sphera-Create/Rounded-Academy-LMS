"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Success Stories", href: "/success-stories" },
]

export function SiteNav() {
  const pathname = usePathname()

  if (pathname === "/") return null

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/90 px-6 py-4 backdrop-blur-md dark:bg-brand-dark/90 dark:backdrop-blur-md lg:px-16 border-b border-brand-dark/5 dark:border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/branding/purple-logo-only.png" alt="The Rounded Academy" width={36} height={36} className="h-9 w-auto dark:hidden" />
          <Image src="/branding/yellow-logo-only.png" alt="The Rounded Academy" width={36} height={36} className="h-9 w-auto hidden dark:block" />
          <span className="text-lg font-semibold tracking-tight text-brand-dark dark:text-white">
            the rounded academy
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <ThemeToggle />
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-brand-gold after:transition-transform",
                  isActive
                    ? "font-semibold text-brand-gold-ink after:scale-x-100 dark:text-brand-gold"
                    : "text-brand-dark/70 hover:text-brand-dark dark:text-white/70 dark:hover:text-white",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
      <div className="h-16" />
    </>
  )
}

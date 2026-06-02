"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/layout/Sidebar"
import { BottomNav } from "@/components/layout/BottomNav"
import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BookOpen,
  Video,
  ClipboardList,
  FolderOpen,
  Trophy,
  User,
  type LucideIcon,
} from "lucide-react"
import { studentNavItems } from "@/constants"
const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  BookOpen,
  Video,
  ClipboardList,
  FolderOpen,
  Trophy,
  User,
}

interface DashboardShellProps {
  children: React.ReactNode
  user?: {
    email: string
    full_name: string
    role: string
    points: number
    avatar_url: string
  }
}

export function DashboardShell({ children, user }: DashboardShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      <Sidebar navItems={studentNavItems} />

      <DashboardHeader user={user} onMenuClick={() => setMobileMenuOpen(true)} />

      <main className="pt-16 pb-20 lg:ml-[280px] lg:pb-0">
        {children}
      </main>

      <BottomNav navItems={studentNavItems} />

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side="left"
          className="w-[280px] bg-[#1F0022] p-0"
          showCloseButton={false}
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <div className="flex h-16 items-center gap-3 border-b border-white/10 px-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/branding/yellow-logo-only.png" alt="the rounded academy" width={28} height={28} className="h-7 w-auto" />
              <span className="truncate text-base font-semibold tracking-tight text-brand-gold">the rounded academy</span>
            </Link>
          </div>
          <nav className="space-y-1 px-3 py-6">
            {studentNavItems.map((item) => {
              const Icon = iconMap[item.icon]
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/")

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#FFDE4E] text-[#1F0022]"
                      : "text-white/70 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {Icon && <Icon className="size-5 shrink-0" />}
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
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
import type { NavItem } from "@/types"


const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  BookOpen,
  Video,
  ClipboardList,
  FolderOpen,
  Trophy,
  User,
}

interface SidebarProps {
  navItems: NavItem[]
}

export function Sidebar({ navItems }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 z-30 hidden h-full w-[280px] flex-col bg-[#1F0022] text-white lg:flex">
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/branding/yellow-logo-only.png" alt="the rounded academy" width={28} height={28} className="h-7 w-auto" />
          <span className="truncate text-base font-semibold tracking-tight text-brand-gold">the rounded academy</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon]
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/")

          return (
            <Link
              key={item.href}
              href={item.href}
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

      <div className="border-t border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFDE4E] text-sm font-bold text-[#1F0022]">
            IF
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              Ifeoluwa Omolade
            </p>
            <p className="truncate text-xs text-white/50">Student</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

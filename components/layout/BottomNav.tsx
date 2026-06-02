"use client"

import Link from "next/link"
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

interface BottomNavProps {
  navItems: NavItem[]
}

export function BottomNav({ navItems }: BottomNavProps) {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-around border-t border-border bg-background px-2 pb-2 pt-1 lg:hidden">
      {navItems.slice(0, 5).map((item) => {
        const Icon = iconMap[item.icon]
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/")

        return (
          <Link
            key={item.href}
            href={item.href}
              className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1.5 text-[10px] font-medium transition-colors",
                  isActive
                    ? "text-brand-gold-ink dark:text-brand-gold"
                    : "text-muted-foreground hover:text-foreground",
                )}
          >
            {Icon && (
              <Icon
                className={cn("size-5", isActive && "fill-[#FFDE4E]/20")}
              />
            )}
            <span className="max-w-[64px] truncate text-center">
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

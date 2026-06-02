"use client"

import { useTransition } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, User, Settings, LogOut } from "lucide-react"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { signout } from "@/lib/actions/auth"

interface DashboardHeaderProps {
  onMenuClick?: () => void
  className?: string
  user?: {
    email: string
    full_name: string
    role: string
    points: number
    avatar_url: string
  }
}

function getInitials(name: string) {
  if (!name) return "ST"
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function DashboardHeader({
  onMenuClick,
  className,
  user,
}: DashboardHeaderProps) {
  const [isPending, startTransition] = useTransition()
  const name = user?.full_name || "Student"
  const initials = getInitials(name)

  const handleLogout = () => {
    startTransition(async () => {
      await signout()
    })
  }

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background px-4 lg:left-[280px] lg:px-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
        <h1 className="text-base font-semibold text-foreground">
          Welcome back,{" "}
          <span className="text-brand-gold-ink dark:text-brand-gold">{name}</span>
        </h1>
      </div>

      <div className="flex items-center gap-1">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />
          <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-brand-gold" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="gap-2 px-2">
                <Avatar size="sm">
                  {user?.avatar_url && (
                    <AvatarImage src={user.avatar_url} alt={name} />
                  )}
                  <AvatarFallback className="bg-brand-dark text-brand-gold text-xs font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium text-foreground sm:inline">
                  {name}
                </span>
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <User className="size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={handleLogout}
              disabled={isPending}
            >
              <LogOut className="size-4" />
              {isPending ? "Logging out..." : "Log out"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

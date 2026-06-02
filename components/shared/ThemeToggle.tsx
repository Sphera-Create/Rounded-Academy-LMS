"use client"

import { Moon, Sun } from "lucide-react"
import { useSyncExternalStore } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function getSnapshot() {
  return document.documentElement.classList.contains("dark")
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const dark = useSyncExternalStore(subscribe, getSnapshot, () => false)

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className={cn("size-9 rounded-full bg-transparent text-brand-dark hover:bg-brand-dark/10 dark:text-white dark:hover:bg-white/10", className)}
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

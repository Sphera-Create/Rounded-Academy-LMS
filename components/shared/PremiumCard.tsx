import { type ReactNode } from "react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"

interface PremiumCardProps {
  variant?: "default" | "dark"
  accent?: boolean
  title?: ReactNode
  action?: ReactNode
  className?: string
  children?: ReactNode
}

function PremiumCard({
  variant = "default",
  accent = false,
  title,
  action,
  className,
  children,
}: PremiumCardProps) {
  return (
    <Card
      data-slot="premium-card"
      data-variant={variant}
      className={cn(
        "relative bg-card",
        accent &&
          "before:absolute before:inset-x-0 before:top-0 before:h-1 before:rounded-t-xl before:bg-brand-gold",
        variant === "dark" && "bg-brand-dark text-white",
        className
      )}
    >
      {(title || action) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {action && <CardAction>{action}</CardAction>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export { PremiumCard }
export type { PremiumCardProps }

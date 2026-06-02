import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface StatCardTrend {
  direction: "up" | "down"
  label: string
}

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string
  trend?: StatCardTrend
  className?: string
}

function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  className,
}: StatCardProps) {
  const TrendIcon = trend?.direction === "up" ? TrendingUp : TrendingDown

  return (
    <div
      data-slot="stat-card"
      className={cn(
        "flex items-center gap-4 rounded-xl bg-card p-5 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-dark">
        <Icon className="size-6" />
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="text-sm text-muted-foreground">{label}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-card-foreground">{value}</span>
          {trend && (
            <span
              className={cn(
                "inline-flex items-center gap-0.5 text-xs font-medium",
                trend.direction === "up"
                  ? "text-green-600"
                  : "text-red-600"
              )}
            >
              <TrendIcon className="size-3" />
              {trend.label}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export { StatCard }
export type { StatCardProps, StatCardTrend }

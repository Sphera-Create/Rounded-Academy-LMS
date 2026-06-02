import { forwardRef } from "react"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface GoldButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean
  loadingText?: string
}

const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ className, loading, loadingText, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-slot="gold-button"
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-3 font-semibold text-brand-dark transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="size-4 animate-spin" />}
        {loading && loadingText ? loadingText : children}
      </button>
    )
  }
)

GoldButton.displayName = "GoldButton"

export { GoldButton }
export type { GoldButtonProps }

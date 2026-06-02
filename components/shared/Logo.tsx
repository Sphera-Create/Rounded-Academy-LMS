"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { SITE_NAME } from "@/constants"

interface LogoProps {
  variant?: "purple" | "white" | "gold"
  className?: string
  showText?: boolean
  href?: string
  width?: number
  height?: number
}

const logoMap = {
  purple: "/branding/logo-purple.png",
  white: "/branding/logo-white.png",
  gold: "/branding/logo-gold.png",
}

export function Logo({
  variant = "purple",
  className,
  showText = true,
  href,
  width = 36,
  height = 36,
}: LogoProps) {
  const img = (
    <Image
      src={logoMap[variant]}
      alt={SITE_NAME}
      width={width}
      height={height}
      className={cn("shrink-0 object-contain", className)}
    />
  )

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-3">
        {img}
        {showText && (
          <span
            className={cn(
              "truncate text-lg font-semibold tracking-tight",
              variant === "purple" && "text-brand-dark",
              variant === "white" && "text-white",
              variant === "gold" && "text-brand-gold",
            )}
          >
            {SITE_NAME}
          </span>
        )}
      </Link>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {img}
      {showText && (
        <span
          className={cn(
            "truncate text-lg font-semibold tracking-tight",
            variant === "purple" && "text-brand-dark",
            variant === "white" && "text-white",
            variant === "gold" && "text-brand-gold",
          )}
        >
          {SITE_NAME}
        </span>
      )}
    </div>
  )
}

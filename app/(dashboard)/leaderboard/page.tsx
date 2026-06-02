import { Trophy, Medal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { placeholderLeaderboard } from "@/constants"
import type { LeaderboardEntry } from "@/types"

const rankStyles = [
  { ring: "ring-brand-gold", bg: "bg-brand-gold/10", icon: Medal, label: "Gold" },
  { ring: "ring-gray-300", bg: "bg-gray-100", icon: Medal, label: "Silver" },
  { ring: "ring-amber-600", bg: "bg-amber-50", icon: Medal, label: "Bronze" },
]

function PodiumEntry({
  entry,
  index,
}: {
  entry: LeaderboardEntry
  index: number
}) {
  const style = rankStyles[index]
  const initials = entry.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "flex size-14 items-center justify-center rounded-full ring-2",
          style.ring
        )}
      >
        <Avatar size="lg">
          <AvatarFallback className="text-sm font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="text-sm font-semibold text-foreground">
        {entry.name}
      </span>
      <span className="text-lg font-bold text-foreground">
        {entry.points.toLocaleString()}
      </span>
      <Badge variant="secondary" className="text-[10px]">
        {entry.course}
      </Badge>
    </div>
  )
}

function LeaderboardRow({
  entry,
  isCurrentUser,
}: {
  entry: LeaderboardEntry
  isCurrentUser?: boolean
}) {
  const initials = entry.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl px-4 py-3 transition-colors",
        isCurrentUser && "ring-1 ring-brand-gold bg-brand-gold/5"
      )}
    >
      <span className="w-8 text-center text-sm font-bold text-muted-foreground">
        {entry.rank}
      </span>
      <Avatar size="default">
        <AvatarFallback className="text-xs">{initials}</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col">
        <span
          className={cn(
            "truncate text-sm font-semibold",
            isCurrentUser ? "text-brand-gold-ink dark:text-brand-gold" : "text-foreground"
          )}
        >
          {entry.name}
          {isCurrentUser && " (You)"}
        </span>
        <span className="text-xs text-muted-foreground">{entry.course}</span>
      </div>
      <span className="text-sm font-bold text-foreground">
        {entry.points.toLocaleString()}
      </span>
    </div>
  )
}

export default function LeaderboardPage() {
  const top3 = placeholderLeaderboard.slice(0, 3)
  const rest = placeholderLeaderboard.slice(3)

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          <Trophy className="size-7 text-brand-gold-ink dark:text-brand-gold" />
          Leaderboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Celebrate consistency, participation, and progress within the academy community.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {top3.map((entry, i) => (
          <PodiumEntry key={entry.rank} entry={entry} index={i} />
        ))}
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {rest.map((entry) => (
              <LeaderboardRow
                key={entry.rank}
                entry={entry}
                isCurrentUser={entry.name === "Chioma Eze"}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="rounded-xl border border-brand-gold/20 bg-brand-gold/5 px-5 py-4 text-sm text-foreground/70">
        <p className="font-medium text-foreground">How the leaderboard works</p>
        <p className="mt-1">
          The leaderboard rewards learning, implementation, assignment completion, and community participation. Growth matters more than perfection.
        </p>
      </div>
    </div>
  )
}

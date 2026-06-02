import { FileText, Play, ExternalLink, Download } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { placeholderResources } from "@/constants"
import type { Resource } from "@/types"

const typeIconMap: Record<Resource["type"], LucideIcon> = {
  pdf: FileText,
  video: Play,
  link: ExternalLink,
  document: FileText,
}

function ResourceCard({ item }: { item: Resource }) {
  const Icon = typeIconMap[item.type]

  return (
    <Card size="sm" className="group">
      <CardContent>
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/20">
            <Icon className="size-5 text-brand-dark" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <h3 className="truncate text-sm font-semibold text-card-foreground">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground">{item.course}</p>
            <div className="mt-1 flex items-center gap-2">
              <Badge variant="outline" className="text-[10px] capitalize">
                {item.type}
              </Badge>
              {item.size && (
                <span className="text-[10px] text-muted-foreground">
                  {item.size}
                </span>
              )}
            </div>
          </div>
          <a
            href="#"
            download={item.type !== "link"}
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-background p-1.5 text-muted-foreground opacity-0 transition-all hover:bg-muted hover:text-foreground group-hover:opacity-100"
          >
            {item.type === "link" ? (
              <ExternalLink className="size-4" />
            ) : (
              <Download className="size-4" />
            )}
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ResourcesPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Career Resources
        </h1>
        <p className="mt-1 text-muted-foreground">
          Templates, guides, recordings, and tools designed to support your growth as a social media manager.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderResources.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

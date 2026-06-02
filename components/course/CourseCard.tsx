import Link from "next/link"

import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

interface CourseCardProps {
  slug: string
  title: string
  instructor: string
  completedLessons: number
  totalLessons: number
  imageUrl?: string
  className?: string
}

function CourseCard({
  slug,
  title,
  instructor,
  completedLessons,
  totalLessons,
  imageUrl,
  className,
}: CourseCardProps) {
  const progress = Math.round((completedLessons / totalLessons) * 100)
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()

  return (
    <Link
      href={`/courses/${slug}`}
      data-slot="course-card"
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-gold/50",
        className
      )}
    >
      {imageUrl ? (
        <div
          className="aspect-[16/9] bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-brand-dark to-[#3a0040]">
          <span className="text-3xl font-bold text-brand-gold">{initials}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold leading-snug text-card-foreground group-hover:text-brand-gold-ink dark:group-hover:text-brand-gold">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{instructor}</p>
        </div>

        <div className="mt-auto flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {completedLessons} / {totalLessons} lessons completed
            </span>
            <span className="ml-auto text-sm text-muted-foreground tabular-nums">
              {progress}%
            </span>
          </div>
          <Progress value={progress} />
        </div>
      </div>
    </Link>
  )
}

export { CourseCard }
export type { CourseCardProps }

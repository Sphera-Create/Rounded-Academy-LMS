import { Search, Clock, Calendar, Play, User } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CourseCard } from "@/components/course/CourseCard"
import { GoldButton } from "@/components/shared/GoldButton"
import { getCourses, getUserEnrollments } from "@/lib/actions/courses"
import { placeholderLiveClasses } from "@/constants"

export default async function CoursesPage() {
  const [courses, enrollments] = await Promise.all([
    getCourses().catch(() => []),
    getUserEnrollments().catch(() => []),
  ])

  const enrollmentMap = new Map(
    enrollments.map((e) => [e.course_id, e])
  )

  const now = new Date(new Date().toDateString())
  const liveClass = placeholderLiveClasses.find((c) => c.isLive)
  const upcomingClass = placeholderLiveClasses.find(
    (c) => !c.isLive && new Date(c.date) >= now
  )
  const activeClass = liveClass || upcomingClass

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          My Learning Journey
        </h1>
        <p className="mt-1 text-muted-foreground">
          Access your courses, continue your progress, and work toward your career goals.
        </p>
      </div>

      {activeClass && (
        <Card size="sm" className="border-brand-gold/30 bg-brand-gold/5">
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {liveClass && (
                    <Badge className="bg-green-500 text-white">Live now</Badge>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" />
                    {activeClass.time}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  {activeClass.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {activeClass.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5" />
                    {activeClass.instructor}
                  </span>
                </div>
              </div>
              <GoldButton className="shrink-0 self-start sm:self-center">
                <Play className="size-4" />
                {liveClass ? "Join Now" : "View Details"}
              </GoldButton>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="relative max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          className="bg-white pl-9"
        />
      </div>

      {courses.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const enrollment = enrollmentMap.get(course.id)
            return (
              <div key={course.id} className="relative">
                {enrollment ? (
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Enrolled
                  </span>
                ) : (
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-full border border-brand-gold/30 px-2.5 py-0.5 text-[10px] font-medium text-brand-gold-ink dark:text-brand-gold">
                    Enroll
                  </span>
                )}
                <CourseCard
                  slug={course.id}
                  title={course.title}
                  instructor={course.instructor ?? ""}
                  completedLessons={enrollment?.completed_lessons ?? 0}
                  totalLessons={course.total_lessons}
                  imageUrl={course.thumbnail ?? undefined}
                />
              </div>
            )
          })}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No courses available yet. Check back soon.
        </p>
      )}
    </div>
  )
}

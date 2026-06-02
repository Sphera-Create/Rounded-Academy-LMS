import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Play, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PremiumCard } from "@/components/shared/PremiumCard"
import { GoldButton } from "@/components/shared/GoldButton"
import { getCourseById } from "@/lib/actions/courses"
import { getCourseLessons } from "@/lib/actions/lessons"
import { createClient } from "@/lib/supabase/server"
import { enrollInCourse, isEnrolled } from "@/lib/actions/courses"

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>
}) {
  const { courseId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const [course, lessons] = await Promise.all([
    getCourseById(courseId).catch(() => null),
    getCourseLessons(courseId).catch(() => []),
  ])

  if (!course) notFound()

  const enrolled = user ? await isEnrolled(courseId) : false

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <Link
        href="/courses"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to courses
      </Link>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {course.title}
          </h1>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {course.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Instructor: <span className="font-medium text-foreground">{course.instructor}</span>
            </span>
            <span className="text-sm text-muted-foreground">
              {course.total_lessons} lessons
            </span>
            {course.status === "coming_soon" && (
              <Badge variant="secondary">Coming Soon</Badge>
            )}
          </div>
        </div>

        {!enrolled && user ? (
          <form action={enrollInCourse.bind(null, courseId)}>
            <GoldButton type="submit" className="w-full sm:w-auto">
              Enroll Now
            </GoldButton>
          </form>
        ) : null}
      </div>

      {enrolled ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PremiumCard title="Lessons">
              {lessons.length > 0 ? (
                <div className="space-y-3">
                  {lessons.map((lesson, i) => (
                    <a
                      key={lesson.id}
                      href={lesson.drive_link || "#"}
                      target={lesson.drive_link ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-brand-gold/40 hover:shadow-sm"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-dark text-brand-gold">
                        {lesson.drive_link?.includes("file") || lesson.drive_link?.includes("drive") ? (
                          <Play className="size-5" />
                        ) : (
                          <FileText className="size-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-muted-foreground">
                            Lesson {i + 1}
                          </span>
                          {lesson.duration && (
                            <span className="text-xs text-muted-foreground">
                              {lesson.duration}
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-semibold text-card-foreground">
                          {lesson.title}
                        </h3>
                        {lesson.description && (
                          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                            {lesson.description}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  Lessons are being prepared. Check back soon.
                </p>
              )}
            </PremiumCard>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold">Course Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Lessons</span>
                  <span className="font-medium">{course.total_lessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Instructor</span>
                  <span className="font-medium">{course.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant={course.status === "available" ? "default" : "secondary"}>
                    {course.status === "available" ? "Available" : "Coming Soon"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : user ? null : (
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            <Link href="/login" className="font-medium text-foreground underline underline-offset-2 hover:text-brand-gold-ink dark:hover:text-brand-gold">
              Sign in
            </Link>{" "}
            to enroll in this course.
          </p>
        </div>
      )}
    </div>
  )
}

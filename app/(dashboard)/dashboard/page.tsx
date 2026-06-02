import {
  BookOpen,
  CheckCircle,
  Award,
  Trophy,
  Clock,
  Calendar,
  ChevronRight,
  Play,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { PremiumCard } from "@/components/shared/PremiumCard"
import { StatCard } from "@/components/shared/StatCard"
import { GoldButton } from "@/components/shared/GoldButton"
import { getUserEnrollments, getUserStats } from "@/lib/actions/courses"
import {
  placeholderLiveClasses,
} from "@/constants"

const statsIconMap: Record<string, LucideIcon> = {
  BookOpen,
  CheckCircle,
  Award,
  Trophy,
}

const recentActivity = [
  { action: 'Completed "Module 3: Content Pillars"', time: "2 hours ago" },
  { action: 'Submitted "Content Calendar Draft"', time: "Yesterday" },
  { action: 'Attended "Week 4: Content Strategy"', time: "2 days ago" },
  { action: 'Downloaded "Social Media Template"', time: "3 days ago" },
]

export default async function DashboardPage() {
  const [enrollments, stats] = await Promise.all([
    getUserEnrollments().catch(() => []),
    getUserStats().catch(() => ({
      coursesEnrolled: 0,
      completed: 0,
      points: 0,
      avgProgress: 0,
    })),
  ])

  const dbStats = [
    { label: "Courses Enrolled", value: String(stats.coursesEnrolled), icon: "BookOpen" },
    { label: "Completed", value: String(stats.completed), icon: "CheckCircle" },
    { label: "Points", value: String(stats.points), icon: "Award" },
    { label: "Avg Progress", value: `${stats.avgProgress}%`, icon: "Trophy" },
  ]

  const upcomingLive = placeholderLiveClasses.find((c) => c.isLive)
  const firstEnrollment = enrollments[0]

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Welcome back.
        </h1>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every lesson completed, assignment submitted, and project built brings you one step closer to becoming a confident and employable social media manager.
        </p>
        <p className="mt-1 text-sm font-medium text-brand-gold-ink dark:text-brand-gold">Keep going.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dbStats.map((stat) => {
          const Icon = statsIconMap[stat.icon]
          return (
            <StatCard
              key={stat.label}
              icon={Icon}
              label={stat.label}
              value={stat.value}
            />
          )
        })}
      </div>

      <div>
        <h2 className="mb-1 text-xl font-semibold text-foreground">
          Your Growth Journey
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Track your progress as you build skills, experience, and career readiness.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <Link
            href="/courses"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md"
          >
            <BookOpen className="size-5 text-brand-gold-ink dark:text-brand-gold" />
            Continue Learning
            <ArrowRight className="ml-auto size-4 text-muted-foreground/50" />
          </Link>
          <Link
            href="/assignments"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md"
          >
            <CheckCircle className="size-5 text-brand-gold-ink dark:text-brand-gold" />
            View Assignments
            <ArrowRight className="ml-auto size-4 text-muted-foreground/50" />
          </Link>
          <Link
            href="/courses"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md"
          >
            <Play className="size-5 text-brand-gold-ink dark:text-brand-gold" />
            Join Live Class
            <ArrowRight className="ml-auto size-4 text-muted-foreground/50" />
          </Link>
          <Link
            href="/resources"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md"
          >
            <Award className="size-5 text-brand-gold-ink dark:text-brand-gold" />
            Access Resources
            <ArrowRight className="ml-auto size-4 text-muted-foreground/50" />
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md"
          >
            <Trophy className="size-5 text-brand-gold-ink dark:text-brand-gold" />
            Update Profile
            <ArrowRight className="ml-auto size-4 text-muted-foreground/50" />
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PremiumCard
            title="Continue Learning"
            action={
              <Link href="/courses">
                <Button variant="ghost" size="sm">
                  View all
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
            }
          >
            {firstEnrollment ? (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-dark to-[#3a0040] sm:size-24">
                  <span className="text-2xl font-bold text-brand-gold">
                    {firstEnrollment.courses.title
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {firstEnrollment.courses.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {firstEnrollment.courses.instructor}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {firstEnrollment.completed_lessons} / {firstEnrollment.courses.total_lessons}{" "}
                      lessons
                    </span>
                    <span className="ml-auto text-sm text-muted-foreground tabular-nums">
                      {firstEnrollment.progress}%
                    </span>
                  </div>
                  <Progress value={firstEnrollment.progress} />
                </div>
              </div>
            ) : (
              <p className="py-6 text-center text-sm text-muted-foreground">
                Enroll in a course to start learning.
              </p>
            )}
          </PremiumCard>
        </div>

        <div>
          <PremiumCard
            title="Upcoming Live Class"
            variant="dark"
            accent
          >
            {upcomingLive ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 text-white">Live now</Badge>
                  <span className="flex items-center gap-1 text-xs text-white/60">
                    <Clock className="size-3" />
                    {upcomingLive.time}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {upcomingLive.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/60">
                    {upcomingLive.instructor}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Calendar className="size-3.5" />
                  {upcomingLive.date}
                </div>
                <GoldButton className="w-full">
                  <Play className="size-4" />
                  Join Live Class
                </GoldButton>
              </div>
            ) : (
              <p className="text-sm text-white/60">No upcoming live classes.</p>
            )}
          </PremiumCard>
        </div>
      </div>

      <PremiumCard title="Recent Activity">
        <div className="space-y-0">
          {recentActivity.map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-brand-gold/20">
                    <CheckCircle className="size-4 text-brand-dark" />
                  </div>
                  <span className="text-sm text-brand-dark">
                    {item.action}
                  </span>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {item.time}
                </span>
              </div>
              {i < recentActivity.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </PremiumCard>
    </div>
  )
}

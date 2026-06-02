import Link from "next/link"
import { BookOpen, Users, Star, DollarSign, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Total Students", value: "50", icon: Users },
  { label: "Active Cohort", value: "Q2 2026", icon: Star },
  { label: "Courses", value: "4", icon: BookOpen },
  { label: "Revenue", value: "—", icon: DollarSign },
]

const quickActions = [
  { label: "Add New Course", href: "/admin/courses/new" },
  { label: "Create Cohort", href: "/admin/cohorts/new" },
  { label: "Review Applications", href: "/admin/applications" },
  { label: "Send Announcement", href: "/admin/announcements" },
]

const recentActivities = [
  { action: "New student enrolled", detail: "Sarah K. joined SMM 101", time: "2 hours ago" },
  { action: "Cohort started", detail: "Q2 2026 Live Classes began", time: "1 day ago" },
  { action: "Course updated", detail: "Content Creation v2.1 published", time: "2 days ago" },
  { action: "Payment received", detail: "Invoice #0042 — $299", time: "3 days ago" },
  { action: "New application", detail: "Adeola R. applied for Agency track", time: "4 days ago" },
]

const students = [
  { name: "Sarah K.", email: "sarah@example.com", course: "SMM 101", status: "active" as const },
  { name: "Michael O.", email: "michael@example.com", course: "Content Pro", status: "active" as const },
  { name: "Adeola R.", email: "adeola@example.com", course: "Agency Track", status: "pending" as const },
  { name: "Chioma E.", email: "chioma@example.com", course: "SMM 101", status: "active" as const },
  { name: "David A.", email: "david@example.com", course: "Content Pro", status: "inactive" as const },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-brand-cream/40">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-brand-dark/10 bg-white/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-3 lg:px-10">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-base font-semibold text-brand-dark">
              Admin Dashboard
            </Link>
            <Badge
              variant="outline"
              className="rounded-full border-brand-gold/30 bg-brand-gold/10 px-2.5 text-[11px] font-medium text-brand-dark/60"
            >
              The Rounded Academy
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-brand-dark/40 sm:inline">admin@roundedacademy.com</span>
            <Link href="/">
              <Button
                variant="ghost"
                className="h-8 rounded-lg px-3 text-xs text-brand-dark/50 hover:text-brand-dark"
              >
                View Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 lg:px-10">
        {/* Stats row */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className="border-0 bg-white p-5 shadow-sm ring-1 ring-brand-dark/5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-dark/40">
                    {stat.label}
                  </p>
                  <Icon className="size-4 text-brand-gold-ink" />
                </div>
                <p className="mt-2 text-2xl font-bold text-brand-dark">{stat.value}</p>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Quick actions */}
          <Card className="border-0 bg-white p-6 shadow-sm ring-1 ring-brand-dark/5">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-sm font-semibold text-brand-dark">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-brand-dark/60 transition-colors hover:bg-brand-cream hover:text-brand-dark"
                  >
                    {action.label}
                    <ChevronRight className="size-3.5 text-brand-dark/30" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent activity */}
          <Card className="border-0 bg-white p-6 shadow-sm ring-1 ring-brand-dark/5">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-sm font-semibold text-brand-dark">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {recentActivities.map((activity, i) => (
                  <div
                    key={i}
                    className="border-b border-brand-dark/5 py-3 last:border-0"
                  >
                    <p className="text-sm font-medium text-brand-dark">{activity.action}</p>
                    <p className="mt-0.5 text-xs text-brand-dark/40">{activity.detail}</p>
                    <p className="mt-0.5 text-[11px] text-brand-dark/30">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Students preview */}
          <Card className="border-0 bg-white p-6 shadow-sm ring-1 ring-brand-dark/5">
            <CardHeader className="flex flex-row items-center justify-between p-0 pb-4">
              <CardTitle className="text-sm font-semibold text-brand-dark">Students</CardTitle>
              <Link
                href="/admin/students"
                className="text-xs font-medium text-brand-dark/40 hover:text-brand-dark"
              >
                View all
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-brand-dark/5 text-xs font-medium uppercase tracking-wider text-brand-dark/40">
                      <th className="pb-2 pr-4">Name</th>
                      <th className="pb-2 pr-4">Course</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.email} className="border-b border-brand-dark/5 last:border-0">
                        <td className="py-3 pr-4">
                          <div>
                            <p className="text-sm font-medium text-brand-dark">{student.name}</p>
                            <p className="text-xs text-brand-dark/40">{student.email}</p>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-sm text-brand-dark/60">{student.course}</td>
                        <td className="py-3">
                          <Badge
                            className={cn(
                              "rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                              student.status === "active" &&
                                "bg-emerald-100 text-emerald-700",
                              student.status === "pending" &&
                                "bg-amber-100 text-amber-700",
                              student.status === "inactive" &&
                                "bg-brand-dark/5 text-brand-dark/40"
                            )}
                          >
                            {student.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

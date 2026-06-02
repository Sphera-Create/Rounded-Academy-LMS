"use client"

import { Calendar, FileText } from "lucide-react"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { placeholderAssignments } from "@/constants"
import type { Assignment } from "@/types"

const statusColor: Record<Assignment["status"], string> = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  submitted: "bg-blue-100 text-blue-700 border-blue-200",
  graded: "bg-green-100 text-green-700 border-green-200",
  overdue: "bg-red-100 text-red-700 border-red-200",
}

function AssignmentCard({ item }: { item: Assignment }) {
  return (
    <Card size="sm">
      <CardContent>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/20">
              <FileText className="size-5 text-brand-dark" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.course}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="size-3" />
                Due: {item.dueDate}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-center">
            {item.grade !== undefined && (
              <span className="text-sm font-semibold text-card-foreground">
                {item.grade}%
              </span>
            )}
            <Badge
              className={cn(
                "border",
                statusColor[item.status]
              )}
            >
              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AssignmentsPage() {
  const filterByStatus = (status: Assignment["status"] | "all") => {
    if (status === "all") return placeholderAssignments
    return placeholderAssignments.filter((a) => a.status === status)
  }

  const tabs = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "submitted", label: "Submitted" },
    { value: "graded", label: "Graded" },
  ]

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Assignments &amp; Practical Work
        </h1>
        <p className="mt-1 text-muted-foreground">
          Learning happens through implementation. Complete assignments to strengthen your skills, build your portfolio, and prepare for real opportunities.
        </p>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-4">
            <div className="space-y-3">
              {filterByStatus(
                tab.value === "all" ? "all" : (tab.value as Assignment["status"])
              ).map((item) => (
                <AssignmentCard key={item.id} item={item} />
              ))}
              {filterByStatus(
                tab.value === "all" ? "all" : (tab.value as Assignment["status"])
              ).length === 0 && (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  No {tab.value === "all" ? "" : tab.value} assignments found.
                </p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

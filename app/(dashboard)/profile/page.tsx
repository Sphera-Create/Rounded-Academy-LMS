import {
  Calendar,
  BookOpen,
  CheckCircle,
  Award,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { PremiumCard } from "@/components/shared/PremiumCard"
import { placeholderStats } from "@/constants"

const statsIconMap: Record<string, LucideIcon> = {
  BookOpen,
  CheckCircle,
  Award,
  Trophy,
}

const user = {
  name: "Student Name",
  email: "student@roundedacademy.com",
  joined: "January 2026",
}

export default function ProfilePage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          My Profile
        </h1>
        <p className="mt-1 text-muted-foreground">
          Manage your personal information, track your journey, and showcase your progress.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <PremiumCard title="Personal Information">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex flex-col items-center gap-3 self-center sm:self-start">
                <Avatar size="lg" className="size-20">
                  <AvatarFallback className="text-xl font-bold">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  Edit Photo
                </Button>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground">
                      Full Name
                    </label>
                    <Input defaultValue={user.name} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <Input defaultValue={user.email} type="email" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="size-3.5" />
                  Joined {user.joined}
                </div>
              </div>
            </div>
          </PremiumCard>

          <PremiumCard title="Account Settings">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Email Notifications
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Receive updates about courses and assignments
                  </p>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground text-xs font-medium">
                  On
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Live Class Reminders
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Get notified before live sessions start
                  </p>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground text-xs font-medium">
                  On
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Weekly Digest
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Receive a weekly summary of your progress
                  </p>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground text-xs font-medium">
                  Off
                </div>
              </div>
              <Separator />
              <Link
                href="#"
                className="block text-sm font-medium text-card-foreground underline-offset-2 hover:underline"
              >
                Change password
              </Link>
            </div>
          </PremiumCard>
        </div>

        <div className="space-y-4">
          {placeholderStats.map((stat) => {
            const Icon = statsIconMap[stat.icon]
            return (
              <Card key={stat.label} size="sm">
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/20">
                      <Icon className="size-5 text-brand-dark" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-lg font-bold text-card-foreground">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

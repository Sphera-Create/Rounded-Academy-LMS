export interface NavItem {
  label: string
  href: string
  icon: string
  requiresAuth?: boolean
  adminOnly?: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  thumbnail: string
  progress: number
  totalLessons: number
  completedLessons: number
}

export interface LiveClass {
  id: string
  title: string
  date: string
  time: string
  instructor: string
  link: string
  isLive: boolean
}

export interface Assignment {
  id: string
  title: string
  course: string
  dueDate: string
  status: "pending" | "submitted" | "graded" | "overdue"
  grade?: number
}

export interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  avatar: string
  course: string
}

export interface Resource {
  id: string
  title: string
  type: "pdf" | "video" | "link" | "document"
  course: string
  size?: string
}

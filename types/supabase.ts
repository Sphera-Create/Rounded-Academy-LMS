export type Profile = {
  id: string
  full_name: string | null
  avatar_url: string | null
  role: "student" | "admin"
  points: number
  created_at: string
  updated_at: string
}

export type Course = {
  id: string
  title: string
  description: string | null
  instructor: string | null
  thumbnail: string | null
  total_lessons: number
  status: "available" | "coming_soon"
  created_at: string
  updated_at: string
}

export type Enrollment = {
  id: string
  user_id: string
  course_id: string
  progress: number
  completed_lessons: number
  enrolled_at: string
}

export type Lesson = {
  id: string
  course_id: string
  title: string
  description: string | null
  drive_link: string | null
  duration: string | null
  lesson_order: number
  created_at: string
  updated_at: string
}

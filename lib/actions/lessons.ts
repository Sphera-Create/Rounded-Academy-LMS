"use server"

import { createClient } from "@/lib/supabase/server"
import type { Lesson } from "@/types/supabase"

export async function getCourseLessons(courseId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", courseId)
    .order("lesson_order", { ascending: true })

  if (error) throw new Error(error.message)
  return data as Lesson[]
}

export async function getLessonById(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", id)
    .single()

  if (error) throw new Error(error.message)
  return data as Lesson
}

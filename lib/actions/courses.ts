"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/lib/supabase/server"
import type { Course, Enrollment } from "@/types/supabase"

export async function getCourses() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true })

  if (error) throw new Error(error.message)
  return data as Course[]
}

export async function getCourseById(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single()

  if (error) throw new Error(error.message)
  return data as Course
}

export async function getUserEnrollments() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { data, error } = await supabase
    .from("enrollments")
    .select("*, courses(*)")
    .eq("user_id", user.id)

  if (error) throw new Error(error.message)
  return data as (Enrollment & { courses: Course })[]
}

export async function enrollInCourse(courseId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { data: existing } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .maybeSingle()

  if (existing) {
    revalidatePath("/", "layout")
    redirect(`/courses/${courseId}`)
  }

  const { error } = await supabase
    .from("enrollments")
    .insert({ user_id: user.id, course_id: courseId })

  if (error) throw new Error(error.message)

  revalidatePath("/", "layout")
  redirect(`/courses/${courseId}`)
}

export async function isEnrolled(courseId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return false

  const { data } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .maybeSingle()

  return !!data
}

export async function getUserStats() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { data: enrollments, error: enrollError } = await supabase
    .from("enrollments")
    .select("*")
    .eq("user_id", user.id)

  if (enrollError) throw new Error(enrollError.message)

  const totalEnrolled = enrollments.length
  const completed = enrollments.filter((e) => e.progress >= 100).length
  const totalProgress = enrollments.reduce((sum, e) => sum + (e.progress || 0), 0)
  const avgProgress = totalEnrolled > 0 ? Math.round(totalProgress / totalEnrolled) : 0

  const { data: profile } = await supabase
    .from("profiles")
    .select("points")
    .eq("id", user.id)
    .single()

  return {
    coursesEnrolled: totalEnrolled,
    completed,
    points: profile?.points || 0,
    avgProgress,
  }
}

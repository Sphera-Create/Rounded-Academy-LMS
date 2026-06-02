import { DashboardShell } from "@/components/layout/DashboardShell"
import { createClient } from "@/lib/supabase/server"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let profile = null
  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single()
    profile = data
  }

  const userDetails = {
    email: user?.email || "",
    full_name: profile?.full_name || user?.user_metadata?.full_name || "Student",
    role: profile?.role || "student",
    points: profile?.points || 0,
    avatar_url: profile?.avatar_url || user?.user_metadata?.avatar_url || "",
  }

  return <DashboardShell user={userDetails}>{children}</DashboardShell>
}

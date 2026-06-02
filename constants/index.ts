import type { NavItem } from "@/types"

export const SITE_NAME = "The Rounded Academy"
export const SITE_TAGLINE = "building the well rounded social media experience"

export const studentNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "My Courses", href: "/courses", icon: "BookOpen" },
  { label: "Assignments", href: "/assignments", icon: "ClipboardList" },
  { label: "Resources", href: "/resources", icon: "FolderOpen" },
  { label: "Leaderboard", href: "/leaderboard", icon: "Trophy" },
  { label: "Profile", href: "/profile", icon: "User" },
]

export const adminNavItems: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
  { label: "Students", href: "/admin/students", icon: "Users" },
  { label: "Courses", href: "/admin/courses", icon: "BookOpen" },
  { label: "Live Classes", href: "/admin/live-classes", icon: "Video" },
  { label: "Assignments", href: "/admin/assignments", icon: "ClipboardList" },
]

export const placeholderStats = [
  { label: "Courses Enrolled", value: "3", icon: "BookOpen" },
  { label: "Completed", value: "1", icon: "CheckCircle" },
  { label: "Points", value: "2,450", icon: "Award" },
  { label: "Rank", value: "#12", icon: "Trophy" },
]

export const placeholderCourses = [
  {
    id: "1",
    title: "The Social Media Solution",
    description: "A practical, beginner-friendly course designed to teach you how to use social media strategically and professionally.",
    instructor: "Ifeoluwa Omolade",
    thumbnail: "",
    progress: 0,
    totalLessons: 24,
    completedLessons: 0,
  },
]

export const placeholderUpcomingCourses = [
  {
    title: "Video Editing for Social Media",
    description: "Learn to create engaging short-form and long-form video content optimized for social media platforms.",
    status: "coming_soon" as const,
    estimatedLaunch: "Q3 2026",
  },
  {
    title: "Graphics Design for Social Media",
    description: "Master visual storytelling with design principles tailored for social media content creation.",
    status: "coming_soon" as const,
    estimatedLaunch: "Q4 2026",
  },
]

export const placeholderLiveClasses = [
  {
    id: "1",
    title: "Week 4: Content Strategy Deep Dive",
    date: "2026-06-03",
    time: "7:00 PM WAT",
    instructor: "Ifeoluwa Omolade",
    link: "#",
    isLive: false,
  },
  {
    id: "2",
    title: "Week 5: Analytics & Optimization",
    date: "2026-06-10",
    time: "7:00 PM WAT",
    instructor: "Ifeoluwa Omolade",
    link: "#",
    isLive: false,
  },
  {
    id: "3",
    title: "Week 6: Client Management",
    date: "2026-06-17",
    time: "7:00 PM WAT",
    instructor: "Ifeoluwa Omolade",
    link: "#",
    isLive: true,
  },
]

export const placeholderAssignments = [
  { id: "1", title: "Social Media Audit", course: "Social Media Management", dueDate: "2026-06-05", status: "pending" as const },
  { id: "2", title: "Content Calendar Draft", course: "Social Media Management", dueDate: "2026-06-12", status: "submitted" as const },
  { id: "3", title: "Analytics Report", course: "Social Media Management", dueDate: "2026-06-19", status: "graded" as const, grade: 85 },
  { id: "4", title: "Brand Strategy Doc", course: "Graphics Design for Social Media", dueDate: "2026-05-28", status: "overdue" as const },
]

export const placeholderLeaderboard = [
  { rank: 1, name: "Sarah Johnson", points: 4850, avatar: "", course: "Social Media Management" },
  { rank: 2, name: "Amara Okafor", points: 4620, avatar: "", course: "Social Media Management" },
  { rank: 3, name: "Tunde Bakare", points: 4410, avatar: "", course: "Social Media Management" },
  { rank: 4, name: "Chioma Eze", points: 4230, avatar: "", course: "Graphics Design for Social Media" },
  { rank: 5, name: "Fatima Usman", points: 4010, avatar: "", course: "Social Media Management" },
  { rank: 6, name: "Kemi Adesina", points: 3890, avatar: "", course: "Video Editing for Social Media" },
  { rank: 7, name: "David Okonkwo", points: 3650, avatar: "", course: "Social Media Management" },
  { rank: 8, name: "Zainab Abdullah", points: 3420, avatar: "", course: "Social Media Management" },
]

export const placeholderResources = [
  { id: "1", title: "Social Media Strategy Template", type: "pdf" as const, course: "Social Media Management", size: "2.4 MB" },
  { id: "2", title: "Content Calendar Template", type: "document" as const, course: "Social Media Management", size: "1.1 MB" },
  { id: "3", title: "Analytics Dashboard Walkthrough", type: "video" as const, course: "Social Media Management", size: "45 MB" },
  { id: "4", title: "Brand Voice Guidelines", type: "pdf" as const, course: "Graphics Design for Social Media", size: "3.2 MB" },
  { id: "5", title: "Tools & Resources List", type: "link" as const, course: "Social Media Management", size: undefined },
]

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, BookOpen, Users, Star, ChevronRight, Briefcase, FileText, Target, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Footer } from "@/components/shared/Footer"

const outcomes = [
  {
    icon: Briefcase,
    title: "Portfolio Projects",
    description: "Build work that demonstrates your skills and strategic thinking.",
  },
  {
    icon: FileText,
    title: "Professional CV/Resume",
    description: "Present yourself confidently for opportunities.",
  },
  {
    icon: Target,
    title: "Case Studies",
    description: "Learn how to document and communicate results.",
  },
  {
    icon: Users,
    title: "Internship Opportunities",
    description: "Gain practical experience after completing the program.",
  },
  {
    icon: Star,
    title: "Client-Ready Skills",
    description: "Develop confidence in handling projects and working with clients.",
  },
  {
    icon: BookOpen,
    title: "Community Access",
    description: "Stay connected to a network of learners, opportunities, and support.",
  },
]

const journeySteps = [
  {
    step: "Learn",
    description: "Build strong foundations in social media management.",
  },
  {
    step: "Practice",
    description: "Complete assignments and real implementation exercises.",
  },
  {
    step: "Experience",
    description: "Participate in internship opportunities and portfolio projects.",
  },
  {
    step: "Grow",
    description: "Position yourself for long-term career opportunities.",
  },
]

const programs = [
  {
    title: "The Social Media Solution",
    description:
      "A practical, beginner-friendly course designed to teach you how to use social media strategically and professionally.",
    status: "available" as const,
  },
]

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/90 px-6 py-4 backdrop-blur-md dark:bg-brand-dark/90 dark:backdrop-blur-md lg:px-16 border-b border-brand-dark/5 dark:border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/branding/purple-logo-only.png" alt="The Rounded Academy" width={36} height={36} className="h-9 w-auto dark:hidden" />
          <Image src="/branding/yellow-logo-only.png" alt="The Rounded Academy" width={36} height={36} className="h-9 w-auto hidden dark:block" />
          <span className="text-lg font-semibold tracking-tight text-brand-dark dark:text-white">the rounded academy</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <ThemeToggle />
          <Link href="/about" className="text-sm font-medium text-brand-dark/70 transition-colors hover:text-brand-dark dark:text-white/70 dark:hover:text-white">
            About Us
          </Link>
          <Link href="/login" className="text-sm font-medium text-brand-dark/70 transition-colors hover:text-brand-dark dark:text-white/70 dark:hover:text-white">
            Login
          </Link>
          <Link href="/signup" className="text-sm font-medium text-brand-dark/70 transition-colors hover:text-brand-dark dark:text-white/70 dark:hover:text-white">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#2d0030] to-brand-dark px-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-gold/5 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-brand-gold/8 blur-3xl" />
          <div className="absolute left-1/2 top-1/4 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
          <div className="absolute bottom-1/4 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold uppercase">
            <Star className="size-3" />
            Career-Focused Social Media Training
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build More Than a Skill.{" "}
            <span className="text-brand-gold">Build a Career.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            The Rounded Academy helps aspiring social media managers gain practical experience, build strong portfolios, and become career-ready through structured learning and implementation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button className="h-12 rounded-full bg-brand-gold px-8 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-gold/20 transition-all hover:bg-brand-gold/90 hover:shadow-xl hover:shadow-brand-gold/30">
                Get Started
                <ArrowRight className="ml-1 size-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/80 bg-white px-8 text-sm font-medium text-brand-dark backdrop-blur-sm hover:bg-white/90 dark:border-white/80 dark:bg-white dark:text-brand-dark dark:hover:bg-white/90"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-brand-dark" />
      </section>

      {/* Why The Rounded Academy */}
      <section className="bg-white px-6 py-24 dark:bg-[#0d000f] lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              Why The Rounded Academy?
            </h2>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base leading-relaxed text-brand-dark/70 dark:text-white/70 sm:text-lg">
              Most people learn social media management but never gain the experience needed to confidently apply for jobs, internships, or client opportunities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-dark/70 dark:text-white/70 sm:text-lg">
              Our programs focus on practical implementation, portfolio development, career readiness, and long-term growth so you can move beyond learning and start building a professional future.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-24 dark:bg-[#1a001e] lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              What You&apos;ll Walk Away With
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon
              return (
                <Card
                  key={outcome.title}
                  className="border-0 bg-brand-dark/[0.04] p-6 shadow-sm ring-1 ring-brand-dark/10 transition-all hover:shadow-md hover:ring-brand-gold/20 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-brand-gold/30"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-dark dark:bg-white">
                    <Icon className="size-5 text-brand-gold dark:text-brand-dark" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-brand-dark dark:text-white">
                    {outcome.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-dark/60 dark:text-white/60">
                    {outcome.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Journey Timeline */}
      <section className="bg-white px-6 py-24 dark:bg-[#1a001e] lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              Your Career Journey Starts Here
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {journeySteps.map((step, i) => (
              <div key={step.step} className="relative text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-brand-dark text-lg font-bold text-brand-gold dark:bg-white dark:text-brand-dark">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-brand-dark dark:text-white">
                  {step.step}
                </h3>
                <p className="text-sm text-brand-dark/60 dark:text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white px-6 py-24 dark:bg-[#1a001e] lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-dark/60 dark:text-white/60">
              Curated tracks designed to take you from learning to earning.
            </p>
          </div>
          <div className="mx-auto grid max-w-md gap-8">
            {programs.map((program) => (
              <Card
                key={program.title}
                className={`relative border-0 bg-brand-dark/[0.04] p-8 shadow-sm ring-1 ring-brand-dark/10 transition-all dark:bg-white/5 dark:ring-white/10 ${
                  program.status === "available"
                    ? "hover:shadow-md"
                    : "opacity-80"
                }`}
              >
                <CardHeader className="p-0 pb-4">
                  <div className="mb-3">
                    {program.status === "available" ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-brand-gold dark:text-brand-dark">
                        Available
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-xs font-medium text-brand-dark/50 dark:border-brand-gold/20 dark:text-brand-gold/60">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold text-brand-dark dark:text-white">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm leading-relaxed text-brand-dark/60 dark:text-white/60">
                    {program.description}
                  </p>
                </CardContent>
                <div className="mt-6">
                  {program.status === "available" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold/90 dark:bg-brand-gold dark:text-brand-dark dark:hover:bg-brand-gold/90">
                      Enroll now
                      <ChevronRight className="size-4" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-dark/40 dark:rounded-full dark:bg-brand-gold dark:px-4 dark:py-2 dark:font-semibold dark:text-brand-dark">
                      Notify me
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="bg-white px-6 py-24 dark:bg-[#150018] lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              Success Stories
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-dark/60 dark:text-white/60">
              Real people. Real growth. Discover how our community is building careers through The Rounded Academy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-dark/5 transition-all hover:shadow-md dark:bg-white/5 dark:ring-white/10">
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-dark dark:bg-white">
                  <Quote className="size-6 text-brand-gold dark:text-brand-dark" />
                </div>
                <p className="text-sm italic text-brand-dark/60 dark:text-white/60">
                  &ldquo;This program gave me the confidence and portfolio I needed to start my career.&rdquo;
                </p>
                <p className="text-sm font-semibold text-brand-dark dark:text-white">— Student Name</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-dark/5 transition-all hover:shadow-md dark:bg-white/5 dark:ring-white/10">
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-dark dark:bg-white">
                  <Briefcase className="size-6 text-brand-gold dark:text-brand-dark" />
                </div>
                <p className="text-sm text-brand-dark/60 dark:text-white/60">
                  Students build real projects that demonstrate their skills and strategic thinking.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-dark/5 transition-all hover:shadow-md dark:bg-white/5 dark:ring-white/10">
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-dark dark:bg-white">
                  <Users className="size-6 text-brand-gold dark:text-brand-dark" />
                </div>
                <p className="text-sm text-brand-dark/60 dark:text-white/60">
                  Graduates gain practical experience through internship opportunities after completing the program.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-dark/5 transition-all hover:shadow-md dark:bg-white/5 dark:ring-white/10">
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-dark dark:bg-white">
                  <ArrowUpRight className="size-6 text-brand-gold dark:text-brand-dark" />
                </div>
                <p className="text-sm text-brand-dark/60 dark:text-white/60">
                  From first job offers to client wins — our community is building careers in social media.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/success-stories">
              <Button className="h-12 rounded-full border-2 border-brand-dark bg-transparent px-8 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-dark hover:text-brand-gold dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-dark">
                View All Success Stories
                <ArrowRight className="ml-1 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark px-6 py-24 lg:px-16 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-brand-gold sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mb-10 max-w-md text-base text-white/60">
            Join The Rounded Academy today and gain the skills, experience, and portfolio you need to build a career in social media.
          </p>
          <Link href="/signup">
            <Button className="h-12 rounded-full bg-brand-gold px-8 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-gold/20 transition-all hover:bg-brand-gold/90 hover:shadow-xl hover:shadow-brand-gold/30">
              Get Started
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

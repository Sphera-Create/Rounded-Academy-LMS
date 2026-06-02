import Link from "next/link"
import { Star, Target, Users, ArrowRight, Award, Heart, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Practical Over Theory",
    description: "We believe in learning by doing. Every program includes real projects, exercises, and implementation work.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Growth happens together. We foster a supportive network where students learn, share, and succeed as a community.",
  },
  {
    icon: Star,
    title: "Career Readiness",
    description: "Everything we teach is designed to prepare you for real-world opportunities in the social media industry.",
  },
  {
    icon: Heart,
    title: "Accessible Education",
    description: "Quality social media education should be available to everyone. We keep our programs affordable and flexible.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We are honest about outcomes, expectations, and what it takes to build a sustainable career.",
  },
  {
    icon: Award,
    title: "Continuous Growth",
    description: "The social media landscape evolves constantly, and so do we. Our curriculum stays current with industry trends.",
  },
]

const team = [
  { name: "Ifeoluwa Omolade", role: "Founder & Lead Instructor", initials: "IO" },
  { name: "Coming Soon", role: "Course Instructor", initials: "?" },
  { name: "Coming Soon", role: "Community Manager", initials: "?" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2d0030] to-brand-dark px-6 pt-24 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold uppercase">
            <Star className="size-3" />
            About Us
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            About Us — Building Careers in{" "}
            <span className="text-brand-gold">Social Media</span>
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/60">
            The Rounded Academy exists to bridge the gap between learning social media management and actually building a career from it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-6 py-20 dark:bg-[#0d000f] lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed text-brand-dark/70 dark:text-white/70 sm:text-lg">
              Most people who learn social media management never gain the practical experience needed to confidently apply for jobs, internships, or client work. The Rounded Academy was founded to change that.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-dark/70 dark:text-white/70 sm:text-lg">
              We provide structured programs that combine skill-building, hands-on implementation, portfolio development, and internship opportunities so our students leave career-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-brand-cream px-6 py-20 dark:bg-[#1a001e] lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
                The Story Behind The Rounded Academy
              </h2>
              <p className="text-base leading-relaxed text-brand-dark/70 dark:text-white/70">
                Founded by Ifeoluwa Omolade, The Rounded Academy emerged from a simple observation: too many people learn social media skills but never build the experience required to turn those skills into a career.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-dark/70 dark:text-white/70">
                The name &ldquo;Rounded&rdquo; reflects our commitment to developing well-rounded professionals — people who don&apos;t just know how to post on social media, but understand strategy, analytics, client management, and how to deliver real results.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-dark/70 dark:text-white/70">
                The Rounded Academy is part of The Rounded Media Ltd, a network dedicated to media education and professional development.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex size-64 items-center justify-center rounded-full bg-brand-dark">
                <span className="text-4xl font-bold text-brand-gold">RA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-6 py-20 dark:bg-[#0d000f] lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-dark/60 dark:text-white/60">
              Our values guide everything we do — from how we design our programs to how we support our students.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border-0 bg-brand-dark/[0.04] p-6 shadow-sm ring-1 ring-brand-dark/10 transition-all hover:shadow-md hover:ring-brand-gold/20 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-brand-gold/30">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-dark dark:bg-white">
                    <Icon className="size-5 text-brand-gold dark:text-brand-dark" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-brand-dark dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-dark/60 dark:text-white/60">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-cream px-6 py-20 dark:bg-[#1a001e] lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark dark:text-white sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-dark/60 dark:text-white/60">
              The people working to make The Rounded Academy a place where careers are built.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-brand-dark/5 transition-all hover:shadow-md dark:bg-white/5 dark:ring-white/10">
                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-brand-dark text-2xl font-bold text-brand-gold dark:bg-white dark:text-brand-dark">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-brand-dark dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-brand-dark/50 dark:text-white/50">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark px-6 py-20 lg:px-16 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-brand-gold sm:text-4xl">
            Ready to Build Your Career?
          </h2>
          <p className="mx-auto mb-10 max-w-md text-base text-white/60">
            Join The Rounded Academy and start building the skills, portfolio, and experience you need.
          </p>
          <Link href="/signup">
            <Button className="h-12 rounded-full bg-brand-gold px-8 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-gold/20 transition-all hover:bg-brand-gold/90 hover:shadow-xl hover:shadow-brand-gold/30">
              Get Started
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

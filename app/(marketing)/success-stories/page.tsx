import Link from "next/link"
import { Star, Quote, Briefcase, Users, ArrowUpRight, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PremiumCard } from "@/components/shared/PremiumCard"

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2d0030] to-brand-dark px-6 pt-24 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold uppercase">
            <Star className="size-3" />
            Success Stories
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Real People.{" "}
            <span className="text-brand-gold">Real Growth.</span>
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/60">
            Discover how students are applying what they learn and building careers through The Rounded Academy.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream px-6 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark sm:text-4xl">
              What Our Community Achieves
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-dark/60">
              From first job offers to client wins — see how our community is building careers in social media.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <PremiumCard title="Student Testimonials" accent>
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-dark">
                  <Quote className="size-6 text-brand-gold" />
                </div>
                <p className="text-sm italic text-card-foreground/60">
                  &ldquo;This program gave me the confidence and portfolio I needed to start my career.&rdquo;
                </p>
                <p className="text-sm font-semibold text-card-foreground">— Student Name</p>
              </div>
            </PremiumCard>

            <PremiumCard title="Portfolio Showcases" accent>
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-gold/20">
                  <Briefcase className="size-6 text-card-foreground" />
                </div>
                <p className="text-sm text-card-foreground/60">
                  Students build real projects that demonstrate their skills and strategic thinking.
                </p>
              </div>
            </PremiumCard>

            <PremiumCard title="Internship Experiences" accent>
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-gold/20">
                  <Users className="size-6 text-card-foreground" />
                </div>
                <p className="text-sm text-card-foreground/60">
                  Graduates gain practical experience through internship opportunities after completing the program.
                </p>
              </div>
            </PremiumCard>

            <PremiumCard title="Career Milestones" accent>
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-gold/20">
                  <ArrowUpRight className="size-6 text-card-foreground" />
                </div>
                <p className="text-sm text-card-foreground/60">
                  From first job offers to client wins — our community is building careers in social media.
                </p>
              </div>
            </PremiumCard>
          </div>

          <div className="mt-12 rounded-xl border border-brand-gold/20 bg-brand-gold/5 px-6 py-8 text-center">
            <Star className="mx-auto mb-3 size-8 text-brand-gold-ink" />
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              More Stories Coming Soon
            </h2>
            <p className="mx-auto max-w-lg text-sm text-muted-foreground">
              Success stories and student showcases will be added soon as we continue documenting student journeys and outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center lg:px-16 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark sm:text-4xl">
            Start Your Own Story
          </h2>
          <p className="mx-auto mb-8 max-w-md text-base text-brand-dark/60">
            Join The Rounded Academy and build the skills, portfolio, and confidence to launch your social media career.
          </p>
          <Link href="/signup">
            <Button className="h-12 rounded-full bg-brand-gold px-8 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-gold/20 transition-all hover:bg-brand-gold/90 hover:shadow-xl">
              Get Started Today
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

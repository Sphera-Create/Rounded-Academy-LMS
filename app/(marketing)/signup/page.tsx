"use client"

import Link from "next/link"
import Image from "next/image"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { signup } from "@/lib/actions/auth"

export default function SignupPage() {
  const [state, action, pending] = useActionState(signup, { error: null as string | null })

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-brand-dark to-[#2d0030] px-4">
      <Card className="w-full max-w-sm border-0 bg-white/95 p-0 shadow-2xl backdrop-blur-sm">
        <CardHeader className="items-center pt-10 pb-6 text-center">
          <Link href="/" className="mb-4 inline-flex items-center gap-3">
            <Image src="/branding/yellow-logo-only.png" alt="the rounded academy" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight text-brand-dark">the rounded academy</span>
          </Link>
          <CardTitle className="text-2xl font-semibold text-brand-dark">Create your account</CardTitle>
          <p className="mt-1 text-sm text-brand-dark/50">Start your social media journey</p>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form action={action} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-brand-dark/70">
                Full Name
              </Label>
              <Input
                id="full_name"
                name="full_name"
                type="text"
                placeholder="Your full name"
                required
                className="h-11 rounded-lg border-brand-dark/10 bg-brand-cream/50 px-4 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-gold focus:ring-brand-gold/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-brand-dark/70">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="h-11 rounded-lg border-brand-dark/10 bg-brand-cream/50 px-4 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-gold focus:ring-brand-gold/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-brand-dark/70">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                required
                className="h-11 rounded-lg border-brand-dark/10 bg-brand-cream/50 px-4 text-sm text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-gold focus:ring-brand-gold/20"
              />
            </div>
            {state?.error && (
              <p className="text-sm text-red-500">{state.error}</p>
            )}
            <Button
              type="submit"
              disabled={pending}
              className="h-11 w-full rounded-full bg-brand-gold text-sm font-semibold text-brand-dark shadow-sm transition-all hover:bg-brand-gold/90 hover:shadow-md disabled:opacity-50"
            >
              {pending ? "Creating account..." : "Create Account"}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-brand-dark/50">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-brand-dark underline-offset-2 hover:text-brand-gold-ink hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

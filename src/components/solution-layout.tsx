"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })

interface SolutionLayoutProps {
  title: string
  subtitle: string
  description: string
  features: {
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  benefits: {
    title: string
    description: string
  }[]
  integrations?: string[]
  imageSrc: string
  primaryAction?: string
  secondaryAction?: string
}

export default function SolutionLayout({
  title,
  subtitle,
  description,
  features,
  benefits,
  integrations,
  imageSrc,
  primaryAction = "Start Free Trial",
  secondaryAction = "Schedule Demo",
}: SolutionLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4 lg:text-6xl">{title}</h1>
                <p className="text-xl text-gray-400 mb-6">{subtitle}</p>
                <p className="text-lg text-gray-400 mb-8">{description}</p>
                <div className="flex gap-4">
                  <Button size="lg" className="rounded-full">
                    {primaryAction} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    {secondaryAction}
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={`${title} illustration`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
                  {feature.icon && <div className="mb-4">{feature.icon}</div>}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        {integrations && (
          <section className="py-24 bg-white/5">
            <div className="container">
              <h2 className="text-3xl font-bold mb-12 text-center">Integrations</h2>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="bg-white/10 p-4 rounded-lg text-center border border-white/10 hover:border-white/20 transition"
                  >
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using {title} to improve their customer experience.
            </p>
            <Button size="lg" className="rounded-full">
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

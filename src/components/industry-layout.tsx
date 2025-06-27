"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })

interface IndustryLayoutProps {
  industry: string
  title: string
  description: string
  challenges: {
    title: string
    description: string
  }[]
  solutions: {
    title: string
    description: string
    features: string[]
  }[]
  stats?: {
    value: string
    label: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
  imageSrc: string
}

export default function IndustryLayout({
  industry,
  title,
  description,
  challenges,
  solutions,
  stats,
  testimonial,
  imageSrc,
}: IndustryLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <div className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-6">
                  {industry}
                </div>
                <h1 className="text-4xl font-bold mb-6 lg:text-6xl">{title}</h1>
                <p className="text-xl text-gray-400 mb-8">{description}</p>
                <div className="flex gap-4">
                  <Button size="lg" className="rounded-full">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={`${industry} illustration`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {stats && (
          <section className="py-24 bg-white/5">
            <div className="container">
              <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Challenges Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Industry Challenges</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                  <p className="text-gray-400">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 bg-white/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {testimonial && (
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-2xl font-medium mb-8">"{testimonial.quote}"</blockquote>
                <div className="text-gray-400">
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div>{testimonial.role}</div>
                  <div>{testimonial.company}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-white/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your {industry} Business Today</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join leading {industry.toLowerCase()} businesses who trust Konversly to power their customer experience.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

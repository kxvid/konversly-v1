import Navbar from "./navbar"
import Footer from "./footer"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface IndustryPageProps {
  industry: string
  title: string
  description: string
  imageSrc: string
  features: string[]
}

export function IndustryPage({ industry, title, description, imageSrc, features }: IndustryPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="container">
            <div className={`grid gap-12 ${imageSrc ? "lg:grid-cols-2" : "lg:grid-cols-1"} lg:gap-24 items-center`}>
              <div>
                <div className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white mb-6">
                  {industry}
                </div>
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-gray-400 mb-8">{description}</p>
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4 text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="rounded-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              {imageSrc && (
                <div className="relative aspect-video">
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`${industry} illustration`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="py-24 bg-white/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our AI-Powered Solutions</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="Fortify"
                description="Monitor and amplify your online reputation across 200+ review sites."
                link="/solutions/fortify"
              />
              <FeatureCard
                title="Echo"
                description="Collect and analyze customer feedback with AI-powered insights."
                link="/solutions/echo"
              />
              <FeatureCard
                title="Nexus"
                description="Engage customers across all digital channels from a single platform."
                link="/solutions/nexus"
              />
              <FeatureCard
                title="Lumina"
                description="Boost your local SEO and outrank competitors in search results."
                link="/solutions/lumina"
              />
              <FeatureCard
                title="Clarity"
                description="Gain actionable insights from customer sentiment and online presence."
                link="/solutions/clarity"
              />
              <FeatureCard
                title="Vantage"
                description="Analyze competitors and gain market advantage with AI-powered intelligence."
                link="/solutions/vantage"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeatureCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline">
        Learn more <ArrowRight className="inline ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

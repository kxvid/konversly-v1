import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface FeaturePageProps {
  title: string
  description: string
  imageSrc: string
  benefits: string[]
}

export function FeaturePage({ title, description, imageSrc, benefits }: FeaturePageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-gray-400 mb-8">{description}</p>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4 text-gray-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="rounded-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
      </main>
      <Footer />
    </div>
  )
}

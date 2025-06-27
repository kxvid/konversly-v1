"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Shield, Share2, Lightbulb, Search } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    value: "fortify",
    title: "Fortify: Reputation Management",
    description:
      "Monitor, manage, and amplify your online reputation across 200+ review sites with our AI-powered tools. Build trust and attract more customers effortlessly.",
    icon: <Shield />,
    image: "/placeholder.svg?width=1000&height=600",
  },
  {
    value: "nexus",
    title: "Nexus: Unified Engagement",
    description:
      "Create seamless, personalized customer experiences across all channels. Our AI unifies communications, automates responses, and provides deep insights.",
    icon: <Share2 />,
    image: "/placeholder.svg?width=1000&height=600",
  },
  {
    value: "lumina",
    title: "Lumina: Local SEO",
    description:
      "Dominate local search results and attract more customers. Lumina optimizes your local presence, manages listings, and helps you outrank competitors.",
    icon: <Search />,
    image: "/placeholder.svg?width=1000&height=600",
  },
  {
    value: "clarity",
    title: "Clarity: Business Intelligence",
    description:
      "Transform customer data into actionable insights. Clarity helps you understand trends, predict behavior, and make informed business decisions.",
    icon: <Lightbulb />,
    image: "/placeholder.svg?width=1000&height=600",
  },
]

export default function VisualFeatures() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">One Platform, Endless Possibilities</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our integrated suite of AI-powered tools provides everything you need to manage and grow your online
            presence, all from a single, intuitive dashboard.
          </p>
        </div>

        <Tabs defaultValue="fortify" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto p-2 bg-white/5 rounded-xl">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.value}
                value={feature.value}
                className="flex flex-col sm:flex-row items-center gap-2 p-3 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-lg"
              >
                {feature.icon}
                <span className="hidden sm:inline">{feature.title.split(":")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.value} value={feature.value} className="mt-8">
              <motion.div
                key={feature.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 overflow-hidden">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                    <div className="relative aspect-video">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

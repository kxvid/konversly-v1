"use client"

import { Card } from "@/components/ui/card"
import { Rocket, Clock, DollarSign, TrendingUp, Shield, MessageSquare } from "lucide-react"

export default function SmallBusinessFeatures() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: "Quick Setup",
      description: "Get started in minutes with our guided onboarding process and templates.",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Time-Saving Tools",
      description: "Reduce manual work with smart automation and AI assistance.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
      title: "Affordable Pricing",
      description: "Flexible plans starting at $99/month with no long-term contracts.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Growth Tools",
      description: "Everything you need to attract more customers and grow your business.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "All-in-One Platform",
      description: "Manage your entire online presence from a single dashboard.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-500" />,
      title: "Expert Support",
      description: "Get help when you need it with our dedicated support team.",
    },
  ]

  return (
    <section className="py-24 bg-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Built for Small Business Success</h2>
          <p className="text-lg text-gray-400">Powerful yet simple tools to help your business grow</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-black/50 border-white/10">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

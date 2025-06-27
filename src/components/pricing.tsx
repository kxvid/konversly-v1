"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check, Star } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Faq from "./faq" // Import the new FAQ component

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const getPrice = (monthly: number) => {
    return isAnnual ? (monthly * 12 * 0.9).toFixed(0) : monthly
  }

  const plans = [
    {
      name: "Starter",
      description: "For small businesses ready to grow.",
      price: getPrice(99),
      features: [
        "Fortify: 500 reviews/month",
        "Nexus: 100 posts/month",
        "Lumina: Basic local SEO",
        "Echo: 250 surveys/month",
        "Clarity: Basic insights",
        "Email support",
      ],
    },
    {
      name: "Growth",
      description: "For scaling businesses that need more power.",
      price: getPrice(299),
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "Fortify: 2,000 reviews/month",
        "Nexus: 500 posts/month",
        "Lumina: Advanced local SEO",
        "Vantage: Basic competitor tracking",
        "Priority support & strategy reviews",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs.",
      price: "Custom",
      features: [
        "Everything in Growth, plus:",
        "Unlimited usage",
        "Custom AI model training",
        "Advanced security & compliance",
        "Dedicated account manager",
        "24/7 dedicated support",
      ],
    },
  ]

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 sm:text-5xl">Full-Service AI, Predictable Pricing</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Choose an all-inclusive plan that includes implementation, training, and ongoing support from our expert
            team. No hidden fees.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn("font-medium", !isAnnual && "text-primary")}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} id="pricing-switch" />
            <span className={cn("font-medium", isAnnual && "text-primary")}>
              Annual <span className="text-xs text-emerald-400 font-bold tracking-wider">SAVE 10%</span>
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {plans.map((plan) => (
            <PricingTier key={plan.name} {...plan} isAnnual={isAnnual} />
          ))}
        </div>
        <Faq />
      </div>
    </section>
  )
}

function PricingTier({
  name,
  description,
  price,
  features,
  popular = false,
  isAnnual,
}: {
  name: string
  description: string
  price: string | number
  features: string[]
  popular?: boolean
  isAnnual: boolean
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-8 backdrop-blur-sm transition-all relative",
        popular
          ? "border-primary/50 bg-primary/10 ring-2 ring-primary/50"
          : "border-white/10 bg-white/5 hover:border-white/20",
      )}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
            <Star className="h-4 w-4" />
            Most Popular
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-2 text-sm text-gray-400 h-10">{description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        {typeof price === "number" ? (
          <>
            <span className="text-4xl font-bold">${price.toLocaleString()}</span>
            <span className="text-gray-400">/{isAnnual ? "year" : "month"}</span>
          </>
        ) : (
          <span className="text-4xl font-bold">{price}</span>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-1 h-4">
        {typeof price === "number" && isAnnual ? `$${(price / 12).toFixed(0)}/month, billed annually` : " "}
      </p>
      <Button className="mt-6 w-full" variant={popular ? "default" : "secondary"} asChild>
        <Link href="/try">{name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}</Link>
      </Button>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

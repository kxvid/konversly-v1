"use client"

import { Rocket, Shield, Zap, Users, BarChart, Clock } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function SmallBusinessPage() {
  return (
    <SolutionLayout
      title="Small Business Solutions"
      subtitle="Grow Your Business with Enterprise-Grade AI"
      description="Get the power of enterprise AI technology at a price that works for your small business. Konversly helps you compete with larger companies by providing smart, affordable tools to manage your online presence and customer experience."
      imageSrc="/small-business-growth.png"
      features={[
        {
          title: "Quick Setup",
          description: "Get started in minutes with our guided onboarding process and templates.",
          icon: <Rocket className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "All-in-One Platform",
          description: "Manage reviews, customer feedback, and communications in one place.",
          icon: <Shield className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Smart Automation",
          description: "Save time with AI-powered responses and automated workflows.",
          icon: <Zap className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Team Collaboration",
          description: "Enable your whole team to manage customer experience efficiently.",
          icon: <Users className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Growth Analytics",
          description: "Track your progress and identify opportunities for improvement.",
          icon: <BarChart className="w-8 h-8 text-red-500" />,
        },
        {
          title: "Time-Saving Tools",
          description: "Reduce manual work with smart automation and templates.",
          icon: <Clock className="w-8 h-8 text-indigo-500" />,
        },
      ]}
      benefits={[
        {
          title: "Affordable Pricing",
          description: "Pay only for what you need with flexible monthly plans starting at $99/month.",
        },
        {
          title: "Compete with Larger Businesses",
          description: "Access the same AI technology used by enterprise companies at a fraction of the cost.",
        },
        {
          title: "Save Time",
          description: "Reduce manual work by up to 75% with smart automation and AI assistance.",
        },
        {
          title: "Grow Faster",
          description: "Attract more customers and increase revenue with better online presence.",
        },
        {
          title: "Easy to Use",
          description: "No technical expertise required - get started in minutes with our intuitive platform.",
        },
      ]}
      integrations={[
        "Google Business Profile",
        "Facebook",
        "Instagram",
        "Yelp",
        "TripAdvisor",
        "Email Marketing Tools",
        "Popular CRM Systems",
        "Scheduling Software",
      ]}
    />
  )
}

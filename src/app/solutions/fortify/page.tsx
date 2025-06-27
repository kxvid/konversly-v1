"use client"

import { Shield, Star, MessageSquare, TrendingUp, BarChart } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function FortifyPage() {
  return (
    <SolutionLayout
      title="Fortify"
      subtitle="AI-Powered Reputation Management"
      description="Monitor, manage, and amplify your online reputation across 200+ review sites with Konversly's Fortify. Our AI-powered platform helps you build trust, attract more customers, and grow your business."
      imageSrc="/digital-shield-network.png"
      features={[
        {
          title: "Review Monitoring",
          description: "Monitor reviews across 200+ sites in real-time with AI-powered alerts and insights.",
          icon: <Shield className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "Smart Response Assistant",
          description: "Generate personalized review responses with AI that maintains your brand voice.",
          icon: <MessageSquare className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Reputation Score",
          description: "Track your reputation score and benchmark against competitors in your industry.",
          icon: <Star className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Performance Analytics",
          description: "Get detailed analytics and insights about your online reputation and customer sentiment.",
          icon: <BarChart className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Competitive Analysis",
          description: "Monitor and analyze your competitors' online reputation and review strategies.",
          icon: <TrendingUp className="w-8 h-8 text-red-500" />,
        },
      ]}
      benefits={[
        {
          title: "Increase Customer Trust",
          description: "Build credibility and trust with potential customers through better review management.",
        },
        {
          title: "Save Time",
          description: "Automate review monitoring and response generation to focus on growing your business.",
        },
        {
          title: "Improve Customer Experience",
          description: "Identify and address customer concerns quickly to enhance satisfaction.",
        },
        {
          title: "Drive More Revenue",
          description: "Convert more customers with a strong online reputation and positive reviews.",
        },
        {
          title: "Stay Ahead of Issues",
          description: "Detect and address potential problems before they impact your business.",
        },
      ]}
      integrations={[
        "Google Business Profile",
        "Yelp",
        "Facebook",
        "TripAdvisor",
        "OpenTable",
        "Trustpilot",
        "BBB",
        "Industry-Specific Review Sites",
      ]}
    />
  )
}

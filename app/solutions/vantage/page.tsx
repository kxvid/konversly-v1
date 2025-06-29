"use client"

import { Target, TrendingUp, Search, LineChart, Eye } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function VantagePage() {
  return (
    <SolutionLayout
      title="Vantage"
      subtitle="AI-Powered Competitive Intelligence"
      description="Stay ahead of the competition with Konversly's Vantage. Our AI platform monitors competitor activities, analyzes market trends, and provides strategic insights to help you maintain a competitive edge."
      imageSrc="/competitive-intelligence.png"
      features={[
        {
          title: "Competitor Monitoring",
          description: "Track competitor activities across digital channels in real-time.",
          icon: <Eye className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "Market Analysis",
          description: "Analyze market trends and identify new opportunities.",
          icon: <TrendingUp className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Competitive Research",
          description: "Gather and analyze competitor strategies and performance.",
          icon: <Search className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Performance Tracking",
          description: "Compare your performance against industry benchmarks.",
          icon: <LineChart className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Strategic Planning",
          description: "Generate actionable strategies based on competitive insights.",
          icon: <Target className="w-8 h-8 text-red-500" />,
        },
      ]}
      benefits={[
        {
          title: "Strategic Advantage",
          description: "Stay ahead of market trends and competitor moves.",
        },
        {
          title: "Market Opportunities",
          description: "Identify gaps in the market for new products or services.",
        },
        {
          title: "Risk Mitigation",
          description: "Anticipate and prepare for competitive threats.",
        },
        {
          title: "Informed Strategy",
          description: "Make strategic decisions based on comprehensive market data.",
        },
        {
          title: "Performance Optimization",
          description: "Improve your strategies based on competitor analysis.",
        },
      ]}
      integrations={[
        "SEMrush",
        "Ahrefs",
        "Moz",
        "Google Trends",
        "Social Media Platforms",
        "News APIs",
        "Industry Databases",
        "Market Research Tools",
      ]}
    />
  )
}

"use client"

import { Search, Map, Globe, Target, BarChart } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function LuminaPage() {
  return (
    <SolutionLayout
      title="Lumina"
      subtitle="AI-Enhanced Local SEO and Visibility"
      description="Dominate local search results and attract more customers with Konversly's Lumina. Our AI-powered platform optimizes your local presence, manages business listings, and helps you outrank competitors."
      imageSrc="/local-seo-visibility.png"
      features={[
        {
          title: "Local Search Optimization",
          description: "Optimize your business for local search queries and Google's local pack.",
          icon: <Search className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "Location Management",
          description: "Manage multiple business locations and keep information consistent across platforms.",
          icon: <Map className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Citation Building",
          description: "Automatically create and maintain business listings across directories.",
          icon: <Globe className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Competitor Tracking",
          description: "Monitor local competitors' rankings and strategies.",
          icon: <Target className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Performance Analytics",
          description: "Track your local search performance with detailed analytics.",
          icon: <BarChart className="w-8 h-8 text-red-500" />,
        },
      ]}
      benefits={[
        {
          title: "Increased Local Visibility",
          description: "Improve your rankings in local search results and map listings.",
        },
        {
          title: "More Foot Traffic",
          description: "Drive more customers to your physical locations.",
        },
        {
          title: "Consistent Information",
          description: "Maintain accurate business information across all platforms.",
        },
        {
          title: "Competitive Edge",
          description: "Stay ahead of local competitors in search results.",
        },
        {
          title: "Better Conversion Rates",
          description: "Convert more local searches into customers.",
        },
      ]}
      integrations={[
        "Google Business Profile",
        "Bing Places",
        "Apple Maps",
        "Yelp",
        "Facebook Local",
        "Foursquare",
        "Local Directories",
        "Industry-Specific Platforms",
      ]}
    />
  )
}

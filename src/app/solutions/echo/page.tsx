"use client"

import { MessageCircle, LineChart, Brain, Target, Filter } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function EchoPage() {
  return (
    <SolutionLayout
      title="Echo"
      subtitle="AI-Powered Customer Feedback Analysis"
      description="Transform customer feedback into actionable insights with Konversly's Echo. Our advanced AI analyzes customer sentiment, identifies trends, and helps you make data-driven decisions to improve your business."
      imageSrc="/customer-feedback-analysis.png"
      features={[
        {
          title: "Smart Surveys",
          description: "Create dynamic surveys that adapt based on customer responses and sentiment.",
          icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "Sentiment Analysis",
          description: "Understand customer emotions and sentiment across all feedback channels.",
          icon: <Brain className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Trend Detection",
          description: "Automatically identify emerging patterns and issues in customer feedback.",
          icon: <LineChart className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Action Items",
          description: "Convert feedback into prioritized action items for your team.",
          icon: <Target className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Custom Categories",
          description: "Organize feedback with AI-powered categorization and tagging.",
          icon: <Filter className="w-8 h-8 text-red-500" />,
        },
      ]}
      benefits={[
        {
          title: "Deeper Customer Understanding",
          description: "Gain comprehensive insights into customer needs and preferences.",
        },
        {
          title: "Proactive Issue Resolution",
          description: "Identify and address problems before they impact your business.",
        },
        {
          title: "Data-Driven Decisions",
          description: "Make informed decisions based on real customer feedback and trends.",
        },
        {
          title: "Improved Product Development",
          description: "Guide product improvements with direct customer insights.",
        },
        {
          title: "Enhanced Customer Experience",
          description: "Create better experiences by acting on customer feedback.",
        },
      ]}
      integrations={[
        "Survey Monkey",
        "Typeform",
        "Google Forms",
        "Salesforce",
        "HubSpot",
        "Zendesk",
        "Intercom",
        "Customer Support Platforms",
      ]}
    />
  )
}

"use client"

import { LineChart, PieChart, Lightbulb, Bell, Share2 } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function ClarityPage() {
  return (
    <SolutionLayout
      title="Clarity"
      subtitle="AI-Powered Business Intelligence"
      description="Transform your customer data into actionable insights with Konversly's Clarity. Our AI analytics platform helps you understand trends, predict customer behavior, and make informed business decisions."
      imageSrc="/business-intelligence-dashboard.png"
      features={[
        {
          title: "Predictive Analytics",
          description: "Forecast trends and customer behavior using advanced AI models.",
          icon: <LineChart className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "Custom Dashboards",
          description: "Create personalized dashboards for different roles and departments.",
          icon: <PieChart className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Smart Insights",
          description: "Get AI-powered recommendations for business improvements.",
          icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Automated Alerts",
          description: "Receive notifications about important trends and anomalies.",
          icon: <Bell className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Report Sharing",
          description: "Share insights across your organization with automated reports.",
          icon: <Share2 className="w-8 h-8 text-red-500" />,
        },
      ]}
      benefits={[
        {
          title: "Data-Driven Decisions",
          description: "Make strategic decisions based on comprehensive data analysis.",
        },
        {
          title: "Improved Efficiency",
          description: "Automate data analysis and reporting processes.",
        },
        {
          title: "Better Collaboration",
          description: "Share insights across teams and departments.",
        },
        {
          title: "Risk Management",
          description: "Identify and address potential issues before they escalate.",
        },
        {
          title: "ROI Tracking",
          description: "Measure the impact of your customer experience initiatives.",
        },
      ]}
      integrations={[
        "Salesforce",
        "HubSpot",
        "Google Analytics",
        "Power BI",
        "Tableau",
        "Looker",
        "Custom Data Sources",
        "Business Intelligence Tools",
      ]}
    />
  )
}

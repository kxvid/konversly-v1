"use client"

import { MessageSquare, Users, Bot, Zap, BarChart3 } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function NexusPage() {
  return (
    <SolutionLayout
      title="Nexus"
      subtitle="Unified Customer Engagement Platform"
      description="Create seamless, personalized customer experiences across all channels with Konversly's Nexus. Our AI-powered platform unifies customer communications, automates responses, and provides deep insights into customer interactions."
      imageSrc="/unified-communications.png"
      features={[
        {
          title: "Omnichannel Inbox",
          description:
            "Manage all customer interactions from social media, email, messaging, and more in one unified inbox.",
          icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "AI Chat Automation",
          description: "Deploy intelligent chatbots that understand context and provide human-like responses.",
          icon: <Bot className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Team Collaboration",
          description: "Enable seamless teamwork with shared inboxes, assignments, and internal notes.",
          icon: <Users className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Smart Routing",
          description:
            "Automatically route conversations to the right team member based on expertise and availability.",
          icon: <Zap className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Engagement Analytics",
          description: "Track customer engagement metrics and team performance with detailed analytics.",
          icon: <BarChart3 className="w-8 h-8 text-red-500" />,
        },
      ]}
      benefits={[
        {
          title: "Faster Response Times",
          description: "Reduce customer wait times with automated routing and AI-powered responses.",
        },
        {
          title: "Improved Customer Satisfaction",
          description: "Provide consistent, high-quality responses across all channels.",
        },
        {
          title: "Increased Team Efficiency",
          description: "Streamline workflows and reduce manual tasks with automation.",
        },
        {
          title: "Better Customer Insights",
          description: "Gain deep understanding of customer needs and preferences.",
        },
        {
          title: "Scalable Support",
          description: "Handle growing customer interactions without proportionally increasing headcount.",
        },
      ]}
      integrations={[
        "Facebook Messenger",
        "WhatsApp",
        "Instagram",
        "Twitter",
        "Email",
        "Live Chat",
        "SMS",
        "Microsoft Teams",
        "Slack",
        "Zendesk",
      ]}
    />
  )
}

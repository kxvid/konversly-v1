"use client"

import IndustryLayout from "@/components/industry-layout"

export default function WellnessPage() {
  return (
    <IndustryLayout
      industry="Wellness"
      title="Nurture Growth with AI-Powered Client Experience"
      description="Transform your wellness business with Konversly's AI solutions designed to enhance client relationships, streamline operations, and build a thriving practice."
      imageSrc="/wellness-hero.png"
      challenges={[
        {
          title: "Client Retention",
          description: "Maintaining long-term client relationships and engagement.",
        },
        {
          title: "Appointment Management",
          description: "Optimizing scheduling and reducing no-shows.",
        },
        {
          title: "Online Presence",
          description: "Building a strong reputation in the wellness community.",
        },
        {
          title: "Client Communication",
          description: "Maintaining consistent and meaningful client engagement.",
        },
      ]}
      solutions={[
        {
          title: "Wellness Practice Suite",
          description: "Comprehensive practice management and client engagement tools.",
          features: [
            "Automated appointment scheduling",
            "Client journey tracking",
            "Review management system",
            "Progress monitoring tools",
          ],
        },
        {
          title: "Client Experience Platform",
          description: "Enhance client satisfaction and retention.",
          features: [
            "Personalized wellness plans",
            "Client feedback collection",
            "Automated follow-up system",
            "Wellness content distribution",
          ],
        },
      ]}
      stats={[
        {
          value: "87%",
          label: "Client Retention",
        },
        {
          value: "45%",
          label: "More Client Referrals",
        },
        {
          value: "4.9",
          label: "Average Rating",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has helped us create deeper connections with our clients while streamlining our operations. It's been transformative for our practice.",
        author: "Lisa Chen",
        role: "Wellness Director",
        company: "Harmony Wellness Center",
      }}
    />
  )
}

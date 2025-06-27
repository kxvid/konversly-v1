"use client"

import IndustryLayout from "@/components/industry-layout"

export default function RealEstatePage() {
  return (
    <IndustryLayout
      industry="Real Estate"
      title="Transform Real Estate with AI-Powered Client Experiences"
      description="Elevate your real estate business with Konversly's AI solutions designed to enhance client relationships, streamline communications, and drive more closings."
      imageSrc="/real-estate-hero.png"
      challenges={[
        {
          title: "Lead Management",
          description: "Converting inquiries into qualified leads and closings.",
        },
        {
          title: "Client Communication",
          description: "Maintaining consistent communication throughout the buying/selling process.",
        },
        {
          title: "Online Reputation",
          description: "Building and maintaining a strong presence across review platforms.",
        },
        {
          title: "Market Competition",
          description: "Standing out in a crowded real estate market.",
        },
      ]}
      solutions={[
        {
          title: "Real Estate Success Suite",
          description: "Comprehensive real estate business management tools.",
          features: [
            "Lead qualification AI",
            "Automated follow-up system",
            "Review management platform",
            "Client communication tools",
          ],
        },
        {
          title: "Client Experience Platform",
          description: "Enhance client satisfaction and generate referrals.",
          features: [
            "Transaction progress tracking",
            "Client feedback collection",
            "Automated market updates",
            "Referral program management",
          ],
        },
      ]}
      stats={[
        {
          value: "42%",
          label: "More Qualified Leads",
        },
        {
          value: "3.8x",
          label: "More Online Reviews",
        },
        {
          value: "28%",
          label: "Higher Closing Rate",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has transformed how we manage client relationships and our online presence. Our team is more efficient, and our clients are happier than ever.",
        author: "Sarah Martinez",
        role: "Broker/Owner",
        company: "Elite Real Estate Group",
      }}
    />
  )
}

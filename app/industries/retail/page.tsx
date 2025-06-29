"use client"

import IndustryLayout from "@/components/industry-layout"

export default function RetailPage() {
  return (
    <IndustryLayout
      industry="Retail"
      title="Transform Retail with AI-Powered Customer Experiences"
      description="Elevate your retail business with Konversly's AI solutions designed to enhance customer engagement, streamline operations, and drive sales across all channels."
      imageSrc="/retail-tech-hero.png"
      challenges={[
        {
          title: "Omnichannel Presence",
          description: "Managing customer experience across online and physical stores.",
        },
        {
          title: "Customer Loyalty",
          description: "Building and maintaining customer relationships in a competitive market.",
        },
        {
          title: "Inventory Management",
          description: "Balancing stock levels with customer demand.",
        },
        {
          title: "Review Management",
          description: "Managing reviews across multiple platforms and locations.",
        },
      ]}
      solutions={[
        {
          title: "Retail Experience Suite",
          description: "Comprehensive customer experience and reputation management.",
          features: [
            "Omnichannel review monitoring",
            "Customer feedback analysis",
            "Inventory demand prediction",
            "Automated response management",
          ],
        },
        {
          title: "Customer Loyalty Platform",
          description: "Build lasting customer relationships and drive repeat business.",
          features: [
            "Personalized communication",
            "Loyalty program integration",
            "Customer sentiment analysis",
            "Automated follow-up campaigns",
          ],
        },
      ]}
      stats={[
        {
          value: "32%",
          label: "Increase in Customer Retention",
        },
        {
          value: "4.2x",
          label: "More Online Reviews",
        },
        {
          value: "27%",
          label: "Higher Customer Satisfaction",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has revolutionized how we interact with our customers. The AI-powered insights have helped us make better inventory decisions and improve customer satisfaction.",
        author: "Rachel Thompson",
        role: "Director of Operations",
        company: "Urban Retail Group",
      }}
    />
  )
}

"use client"

import IndustryLayout from "@/components/industry-layout"

export default function SelfStoragePage() {
  return (
    <IndustryLayout
      industry="Self Storage"
      title="Optimize Self Storage with AI-Powered Customer Experience"
      description="Transform your self storage business with Konversly's AI solutions designed to enhance customer satisfaction, streamline operations, and maximize occupancy rates."
      imageSrc="/self-storage-hero.png"
      challenges={[
        {
          title: "Occupancy Rates",
          description: "Maintaining high occupancy rates across units.",
        },
        {
          title: "Customer Communication",
          description: "Managing customer inquiries and payment reminders effectively.",
        },
        {
          title: "Online Presence",
          description: "Standing out in local search results and managing reviews.",
        },
        {
          title: "Facility Management",
          description: "Coordinating access, maintenance, and security efficiently.",
        },
      ]}
      solutions={[
        {
          title: "Storage Management Suite",
          description: "Comprehensive facility and customer management tools.",
          features: [
            "Automated payment reminders",
            "Unit availability tracking",
            "Review management system",
            "Customer communication platform",
          ],
        },
        {
          title: "Customer Experience Platform",
          description: "Enhance customer satisfaction and retention.",
          features: [
            "24/7 customer support automation",
            "Facility access management",
            "Customer feedback collection",
            "Local SEO optimization",
          ],
        },
      ]}
      stats={[
        {
          value: "92%",
          label: "Occupancy Rate",
        },
        {
          value: "38%",
          label: "Reduction in Payment Delays",
        },
        {
          value: "4.8",
          label: "Average Rating",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has revolutionized how we manage our facilities and communicate with customers. Our occupancy rates and customer satisfaction have never been higher.",
        author: "Robert Johnson",
        role: "Operations Director",
        company: "SecureSpace Storage",
      }}
    />
  )
}

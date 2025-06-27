"use client"

import IndustryLayout from "@/components/industry-layout"

export default function HomeServicesPage() {
  return (
    <IndustryLayout
      industry="Home Services"
      title="Grow Your Service Business with AI-Powered Solutions"
      description="Enhance your home service business's online presence and customer satisfaction with Konversly's AI tools designed for service professionals."
      imageSrc="/home-services-hero.png"
      challenges={[
        {
          title: "Schedule Management",
          description: "Efficiently managing appointments and service calls.",
        },
        {
          title: "Customer Reviews",
          description: "Building and maintaining a strong online reputation.",
        },
        {
          title: "Lead Generation",
          description: "Converting online searches into service appointments.",
        },
        {
          title: "Service Quality",
          description: "Maintaining consistent service quality across all jobs.",
        },
      ]}
      solutions={[
        {
          title: "Service Business Suite",
          description: "Comprehensive business management and customer service tools.",
          features: [
            "Automated scheduling system",
            "Review management platform",
            "Job tracking and updates",
            "Customer communication tools",
          ],
        },
        {
          title: "Customer Experience Platform",
          description: "Enhance customer satisfaction and generate referrals.",
          features: [
            "Automated follow-up system",
            "Customer feedback collection",
            "Service quality monitoring",
            "Referral program management",
          ],
        },
      ]}
      stats={[
        {
          value: "85%",
          label: "Customer Satisfaction",
        },
        {
          value: "3.2x",
          label: "More Online Reviews",
        },
        {
          value: "35%",
          label: "Increase in Referrals",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has transformed how we manage our customer relationships and online presence. Our business has grown significantly since implementation.",
        author: "Tom Wilson",
        role: "Owner",
        company: "Wilson's Home Services",
      }}
    />
  )
}

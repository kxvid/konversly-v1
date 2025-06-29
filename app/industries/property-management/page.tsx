"use client"

import IndustryLayout from "@/components/industry-layout"

export default function PropertyManagementPage() {
  return (
    <IndustryLayout
      industry="Property Management"
      title="Elevate Property Management with AI-Powered Solutions"
      description="Transform your property management business with Konversly's AI platform, designed to enhance tenant satisfaction, streamline operations, and maximize property value."
      imageSrc="/property-management-hero.png"
      challenges={[
        {
          title: "Tenant Communication",
          description: "Managing efficient communication with multiple tenants.",
        },
        {
          title: "Maintenance Requests",
          description: "Handling and prioritizing maintenance issues effectively.",
        },
        {
          title: "Online Reputation",
          description: "Managing reviews across multiple properties and platforms.",
        },
        {
          title: "Occupancy Rates",
          description: "Maintaining high occupancy rates across properties.",
        },
      ]}
      solutions={[
        {
          title: "Property Management Suite",
          description: "Comprehensive property and tenant management tools.",
          features: [
            "Automated maintenance tracking",
            "Tenant communication platform",
            "Review management system",
            "Occupancy optimization",
          ],
        },
        {
          title: "Tenant Experience Platform",
          description: "Enhance tenant satisfaction and retention.",
          features: [
            "Tenant feedback collection",
            "Satisfaction monitoring",
            "Automated follow-up system",
            "Property performance analytics",
          ],
        },
      ]}
      stats={[
        {
          value: "94%",
          label: "Tenant Satisfaction",
        },
        {
          value: "45%",
          label: "Faster Response Time",
        },
        {
          value: "23%",
          label: "Increase in Renewals",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has streamlined our operations and improved our tenant relationships significantly. The AI-powered insights help us make better decisions for our properties.",
        author: "James Wilson",
        role: "Regional Manager",
        company: "Premier Property Management",
      }}
    />
  )
}

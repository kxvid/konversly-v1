"use client"

import IndustryLayout from "@/components/industry-layout"

export default function AutomotivePage() {
  return (
    <IndustryLayout
      industry="Automotive"
      title="Drive Success with AI-Powered Customer Experience"
      description="Transform your automotive business with Konversly's AI solutions designed to enhance customer satisfaction, streamline operations, and boost sales in the competitive automotive market."
      imageSrc="/placeholder-fmkut.png"
      challenges={[
        {
          title: "Inventory Management",
          description: "Balancing inventory levels while meeting customer demands and market trends.",
        },
        {
          title: "Customer Experience",
          description: "Managing customer expectations throughout the sales and service process.",
        },
        {
          title: "Online Reputation",
          description: "Maintaining a strong online presence across multiple review platforms.",
        },
        {
          title: "Lead Generation",
          description: "Converting online interest into showroom visits and sales.",
        },
      ]}
      solutions={[
        {
          title: "Dealership Reputation Management",
          description: "Comprehensive review management and response system.",
          features: [
            "Automated review monitoring across platforms",
            "Smart response suggestions for reviews",
            "Reputation score tracking",
            "Customer satisfaction surveys",
          ],
        },
        {
          title: "Sales & Service Enhancement",
          description: "Streamline customer communication and follow-up.",
          features: [
            "Automated appointment scheduling",
            "Service reminder system",
            "Lead qualification AI",
            "Customer feedback analysis",
          ],
        },
      ]}
      stats={[
        {
          value: "47%",
          label: "Increase in Review Response Rate",
        },
        {
          value: "3.8x",
          label: "More Online Leads",
        },
        {
          value: "28%",
          label: "Higher Customer Retention",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has revolutionized how we handle customer communications and online reputation. Our sales and service departments are more efficient than ever.",
        author: "Mike Anderson",
        role: "General Manager",
        company: "Premier Auto Group",
      }}
    />
  )
}

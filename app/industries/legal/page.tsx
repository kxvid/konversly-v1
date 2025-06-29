"use client"

import IndustryLayout from "@/components/industry-layout"

export default function LegalPage() {
  return (
    <IndustryLayout
      industry="Legal"
      title="Elevate Your Law Firm's Digital Presence"
      description="Transform your law firm's client communication and online reputation with Konversly's AI solutions designed specifically for legal professionals."
      imageSrc="/legal-tech-hero.png"
      challenges={[
        {
          title: "Client Confidentiality",
          description: "Maintaining attorney-client privilege while managing online presence.",
        },
        {
          title: "Lead Generation",
          description: "Attracting qualified clients in a competitive legal market.",
        },
        {
          title: "Client Communication",
          description: "Managing client expectations and providing timely updates.",
        },
        {
          title: "Online Reputation",
          description: "Building trust through reviews while maintaining professional standards.",
        },
      ]}
      solutions={[
        {
          title: "Legal Practice Enhancement",
          description: "Comprehensive practice management and communication tools.",
          features: [
            "Secure client communication portal",
            "Automated case updates",
            "Review management system",
            "Lead qualification AI",
          ],
        },
        {
          title: "Client Experience Platform",
          description: "Improve client satisfaction and retention.",
          features: [
            "Client feedback analysis",
            "Satisfaction monitoring",
            "Automated follow-up system",
            "Referral management",
          ],
        },
      ]}
      stats={[
        {
          value: "89%",
          label: "Client Satisfaction",
        },
        {
          value: "2.5x",
          label: "More Qualified Leads",
        },
        {
          value: "40%",
          label: "Time Saved on Communication",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has helped us maintain our professional standards while significantly improving our online presence and client communication efficiency.",
        author: "David Martinez",
        role: "Managing Partner",
        company: "Martinez & Associates Law Firm",
      }}
    />
  )
}

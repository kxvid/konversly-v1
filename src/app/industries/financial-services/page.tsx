"use client"

import IndustryLayout from "@/components/industry-layout"

export default function FinancialServicesPage() {
  return (
    <IndustryLayout
      industry="Financial Services"
      title="Build Trust and Growth with AI-Powered Solutions"
      description="Enhance your financial institution's reputation and client relationships with Konversly's secure, compliant AI solutions designed specifically for the financial services sector."
      imageSrc="/financial-services-hero.png"
      challenges={[
        {
          title: "Regulatory Compliance",
          description: "Maintaining compliance with financial regulations while managing client communications.",
        },
        {
          title: "Client Trust",
          description: "Building and maintaining trust in an increasingly competitive market.",
        },
        {
          title: "Digital Transformation",
          description: "Adapting to changing client expectations for digital services.",
        },
        {
          title: "Data Security",
          description: "Protecting sensitive client information while providing personalized service.",
        },
      ]}
      solutions={[
        {
          title: "Compliant Communication Suite",
          description: "Secure, regulation-compliant client engagement tools.",
          features: [
            "FINRA-compliant review management",
            "Secure client messaging system",
            "Automated compliance checking",
            "Audit trail documentation",
          ],
        },
        {
          title: "Client Experience Platform",
          description: "Enhanced client service and relationship management.",
          features: [
            "Personalized client communications",
            "Satisfaction monitoring",
            "Service quality analytics",
            "Automated follow-up system",
          ],
        },
      ]}
      stats={[
        {
          value: "99.9%",
          label: "Compliance Rate",
        },
        {
          value: "42%",
          label: "Increase in Client Satisfaction",
        },
        {
          value: "65%",
          label: "Time Saved on Compliance",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has transformed how we manage client relationships while ensuring we maintain strict compliance standards. It's been a game-changer for our firm.",
        author: "Jennifer Chen",
        role: "Chief Compliance Officer",
        company: "Capital Trust Advisors",
      }}
    />
  )
}

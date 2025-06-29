"use client"

import IndustryLayout from "@/components/industry-layout"

export default function HealthcarePage() {
  return (
    <IndustryLayout
      industry="Healthcare"
      title="Elevate Patient Care with AI-Powered Reputation Management"
      description="Transform your healthcare practice's online presence and patient experience with Konversly's comprehensive AI solutions designed specifically for healthcare providers."
      imageSrc="/placeholder-uemgk.png"
      challenges={[
        {
          title: "Patient Privacy",
          description: "Maintaining HIPAA compliance while managing online reviews and patient communications.",
        },
        {
          title: "Review Management",
          description:
            "Monitoring and responding to patient reviews across multiple platforms while maintaining professionalism.",
        },
        {
          title: "Patient Communication",
          description:
            "Engaging with patients effectively across various channels while ensuring accurate information.",
        },
        {
          title: "Competitive Landscape",
          description: "Standing out in a crowded healthcare market with multiple providers and facilities.",
        },
      ]}
      solutions={[
        {
          title: "HIPAA-Compliant Review Management",
          description: "Securely manage patient feedback while maintaining compliance.",
          features: [
            "Automated HIPAA-compliant review responses",
            "Secure patient communication portal",
            "Privacy-first review management",
            "Compliant review generation system",
          ],
        },
        {
          title: "Patient Experience Enhancement",
          description: "Improve patient satisfaction and engagement.",
          features: [
            "Patient feedback analysis",
            "Sentiment tracking",
            "Appointment reminders",
            "Patient satisfaction surveys",
          ],
        },
      ]}
      stats={[
        {
          value: "94%",
          label: "Patient Satisfaction",
        },
        {
          value: "3.2x",
          label: "More Online Reviews",
        },
        {
          value: "45%",
          label: "Time Saved",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has transformed how we manage our online presence while maintaining HIPAA compliance. Our patient satisfaction scores have never been higher.",
        author: "Dr. Sarah Johnson",
        role: "Medical Director",
        company: "Wellness Medical Center",
      }}
    />
  )
}

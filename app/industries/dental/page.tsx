"use client"

import IndustryLayout from "@/components/industry-layout"

export default function DentalPage() {
  return (
    <IndustryLayout
      industry="Dental"
      title="Grow Your Dental Practice with AI-Powered Patient Experience"
      description="Transform your dental practice with Konversly's AI solutions designed to enhance patient satisfaction, streamline communications, and build a stellar online reputation."
      imageSrc="/dental-practice-hero.png"
      challenges={[
        {
          title: "Patient Communication",
          description: "Maintaining consistent and effective patient engagement.",
        },
        {
          title: "Appointment Management",
          description: "Reducing no-shows and managing schedule efficiently.",
        },
        {
          title: "Online Reputation",
          description: "Building trust through patient reviews and testimonials.",
        },
        {
          title: "Treatment Acceptance",
          description: "Improving treatment plan acceptance rates.",
        },
      ]}
      solutions={[
        {
          title: "Dental Practice Suite",
          description: "Comprehensive practice management and patient communication tools.",
          features: [
            "Automated appointment reminders",
            "Review management system",
            "Treatment follow-up automation",
            "Patient feedback collection",
          ],
        },
        {
          title: "Patient Experience Platform",
          description: "Enhance patient satisfaction and retention.",
          features: [
            "Patient satisfaction monitoring",
            "Treatment plan communication",
            "Automated recall system",
            "Patient education tools",
          ],
        },
      ]}
      stats={[
        {
          value: "89%",
          label: "Patient Satisfaction",
        },
        {
          value: "47%",
          label: "Fewer No-Shows",
        },
        {
          value: "32%",
          label: "More Patient Reviews",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has helped us build stronger relationships with our patients and significantly improved our online presence. It's been invaluable for our practice growth.",
        author: "Dr. Emily Chen",
        role: "Practice Owner",
        company: "Bright Smile Dental",
      }}
    />
  )
}

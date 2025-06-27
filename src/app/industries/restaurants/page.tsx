"use client"

import IndustryLayout from "@/components/industry-layout"

export default function RestaurantsPage() {
  return (
    <IndustryLayout
      industry="Restaurants"
      title="Serve Up Success with AI-Powered Customer Experience"
      description="Enhance your restaurant's reputation and customer satisfaction with Konversly's AI solutions designed specifically for the food service industry."
      imageSrc="/restaurant-tech-hero.png"
      challenges={[
        {
          title: "Online Reviews",
          description: "Managing reviews across multiple platforms and responding promptly.",
        },
        {
          title: "Customer Feedback",
          description: "Collecting and acting on customer feedback effectively.",
        },
        {
          title: "Reservation Management",
          description: "Streamlining bookings and reducing no-shows.",
        },
        {
          title: "Local Competition",
          description: "Standing out in a crowded local restaurant market.",
        },
      ]}
      solutions={[
        {
          title: "Restaurant Reputation Suite",
          description: "Comprehensive review and reputation management.",
          features: [
            "Review monitoring and response",
            "Sentiment analysis",
            "Customer feedback collection",
            "Competitor tracking",
          ],
        },
        {
          title: "Guest Experience Platform",
          description: "Enhance customer satisfaction and loyalty.",
          features: [
            "Reservation management",
            "Automated follow-up",
            "Guest feedback analysis",
            "Loyalty program integration",
          ],
        },
      ]}
      stats={[
        {
          value: "4.8",
          label: "Average Rating",
        },
        {
          value: "45%",
          label: "More Reviews",
        },
        {
          value: "28%",
          label: "Increase in Reservations",
        },
      ]}
      testimonial={{
        quote:
          "Konversly has helped us maintain our reputation and connect with our customers in ways we never could before. It's been essential to our growth.",
        author: "Maria Rodriguez",
        role: "Owner",
        company: "La Mesa Restaurant",
      }}
    />
  )
}

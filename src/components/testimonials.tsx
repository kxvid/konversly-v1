"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Konversly's platform has been a game-changer for our multi-location enterprise. The AI-driven insights and streamlined workflows have boosted our efficiency by over 40%.",
    author: "Sarah Johnson",
    role: "COO, TechCorp",
    avatar: "/placeholder.svg?width=48&height=48",
  },
  {
    quote:
      "The level of support and expertise from the Konversly team is unmatched. They handled our entire implementation, allowing us to focus on our customers. We saw a 30% increase in positive reviews within the first quarter.",
    author: "Michael Chen",
    role: "CEO, Innovate Inc.",
    avatar: "/placeholder.svg?width=48&height=48",
  },
  {
    quote:
      "As a non-technical founder, I was worried about integrating AI. Konversly made it seamless. Their platform is intuitive, powerful, and has fundamentally changed how we approach customer engagement.",
    author: "Jessica Rodriguez",
    role: "Founder, Solutions Co.",
    avatar: "/placeholder.svg?width=48&height=48",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by Industry Leaders</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their success with Konversly.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col justify-between bg-black/50 border-white/10">
                <blockquote className="text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

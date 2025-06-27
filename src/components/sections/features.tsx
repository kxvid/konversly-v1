"use client"

import React, { Suspense } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ErrorBoundary } from "react-error-boundary"
import { Sparkles, ShieldCheck, Zap, Users } from "lucide-react"

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-accent-aurora1" aria-hidden="true" />,
    title: "Conversational AI",
    desc: "Natural, human-like conversations powered by advanced LLMs."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-aurora2" aria-hidden="true" />,
    title: "Enterprise Security",
    desc: "SOC2, GDPR, and enterprise-grade compliance by default."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent-aurora3" aria-hidden="true" />,
    title: "Instant Integration",
    desc: "Zero-code setup, API, and embeddable widgets for any stack."
  },
  {
    icon: <Users className="w-8 h-8 text-accent-aurora1" aria-hidden="true" />,
    title: "Team Collaboration",
    desc: "Multi-user, multi-channel, and role-based access for teams."
  }
]

function FeaturesContent() {
  return (
    <section aria-labelledby="features-heading" className="py-24 bg-gradient-to-br from-primary-900/80 to-primary-700/80">
      <div className="container mx-auto px-4">
        <h2 id="features-heading" className="sectionTitle mb-10 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="glassCard hover:scale-105 hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center h-full">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg text-primary-100 mb-2">{f.title}</h3>
                <p className="text-primary-300 text-sm">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
      <h3 className="text-lg font-semibold text-red-800">Something went wrong</h3>
      <p className="text-red-600 mb-2">{error.message}</p>
      <button onClick={resetErrorBoundary} className="mt-2 px-4 py-2 bg-red-600 text-white rounded">Try again</button>
    </div>
  )
}

const FeaturesSection: React.FC = () => (
  <ErrorBoundary FallbackComponent={FeaturesErrorFallback}>
    <Suspense fallback={<Skeleton className="h-64 w-full rounded-2xl" />}>
      <FeaturesContent />
    </Suspense>
  </ErrorBoundary>
)

export default FeaturesSection 
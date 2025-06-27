"use client"

import { Card } from "@/components/ui/card"
import { Shield, Users, Zap, Globe, Lock, BarChart3 } from "lucide-react"

export default function EnterpriseFeatures() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security with SSO, role-based access, and encryption at rest and in transit.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Multi-Location Management",
      description: "Manage thousands of locations from a central dashboard while maintaining local relevance.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Advanced Automation",
      description: "Custom workflows and AI-powered automation for enterprise-scale operations.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Capabilities",
      description: "Support for multiple languages, currencies, and regional requirements.",
    },
    {
      icon: <Lock className="h-8 w-8 text-red-500" />,
      title: "Compliance Tools",
      description: "Built-in compliance features and audit trails for regulated industries.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
      title: "Advanced Analytics",
      description: "Custom reporting and deep insights across all locations and operations.",
    },
  ]

  return (
    <section className="py-24 bg-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Features</h2>
          <p className="text-lg text-gray-400">
            Powerful tools designed for large-scale operations and complex requirements
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-black/50 border-white/10">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Building2, Shield, Network, LineChart, Lock, Globe } from "lucide-react"
import SolutionLayout from "@/components/solution-layout"

export default function EnterprisePage() {
  return (
    <SolutionLayout
      title="Enterprise Solutions"
      subtitle="Scale Your Customer Experience with AI"
      description="Transform customer experience across your enterprise with Konversly's AI-powered platform. Manage thousands of locations, maintain brand consistency, and drive growth with our enterprise-grade solutions."
      imageSrc="/enterprise-scale.png"
      features={[
        {
          title: "Multi-Location Management",
          description: "Centrally manage thousands of locations while maintaining local relevance.",
          icon: <Building2 className="w-8 h-8 text-blue-500" />,
        },
        {
          title: "Enterprise Security",
          description: "Bank-grade security with SSO, role-based access, and data encryption.",
          icon: <Shield className="w-8 h-8 text-green-500" />,
        },
        {
          title: "Advanced Analytics",
          description: "Deep insights across all locations with custom reporting and dashboards.",
          icon: <LineChart className="w-8 h-8 text-yellow-500" />,
        },
        {
          title: "Global Scale",
          description: "Support for multiple languages, currencies, and regional requirements.",
          icon: <Globe className="w-8 h-8 text-purple-500" />,
        },
        {
          title: "Custom Workflows",
          description: "Tailor processes to your specific business needs and compliance requirements.",
          icon: <Network className="w-8 h-8 text-red-500" />,
        },
        {
          title: "Compliance & Governance",
          description: "Built-in compliance tools and audit trails for regulated industries.",
          icon: <Lock className="w-8 h-8 text-indigo-500" />,
        },
      ]}
      benefits={[
        {
          title: "Scalable Growth",
          description: "Easily scale from 10 to 10,000+ locations with consistent customer experience.",
        },
        {
          title: "Brand Consistency",
          description: "Maintain brand standards across all locations while enabling local customization.",
        },
        {
          title: "Operational Efficiency",
          description: "Reduce costs and improve efficiency with AI-powered automation.",
        },
        {
          title: "Risk Management",
          description: "Minimize risks with built-in compliance and governance tools.",
        },
        {
          title: "Data-Driven Decisions",
          description: "Make informed decisions with comprehensive analytics and insights.",
        },
      ]}
      integrations={[
        "Enterprise CRM Systems",
        "Business Intelligence Tools",
        "Identity Providers (SSO)",
        "Enterprise Resource Planning",
        "Custom APIs",
        "Data Warehouses",
        "Compliance Tools",
        "Security Information and Event Management (SIEM)",
      ]}
    />
  )
}

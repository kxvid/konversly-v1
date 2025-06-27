"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does 'full-service implementation' include?",
    answer:
      "Our full-service implementation means we handle everything from setup and configuration to data migration and team training. We tailor the platform to your specific needs so you can get value from day one without any technical overhead.",
  },
  {
    question: "Can Konversly integrate with our existing tools?",
    answer:
      "Yes. Konversly is designed to be the central hub for your customer experience and integrates with hundreds of popular tools, including CRMs, marketing automation platforms, and business intelligence software. We handle the integrations as part of our service.",
  },
  {
    question: "Is there a limit to the number of users or locations?",
    answer:
      "Our plans are designed to scale with your business. The Growth plan includes support for multiple locations, and our Enterprise plan offers unlimited users and locations with customized pricing and support.",
  },
  {
    question: "What kind of support can we expect?",
    answer:
      "All plans include email support. Our Growth plan adds priority support, and the Enterprise plan includes a dedicated account manager, 24/7 support, and regular strategic reviews to ensure you're maximizing the platform's value.",
  },
]

export default function Faq() {
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        <p className="text-gray-400 mt-2">Find answers to common questions about our plans and services.</p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

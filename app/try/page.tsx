"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, MessageSquare, Wand2, Brain, Zap, Globe } from "lucide-react"
import dynamic from "next/dynamic"
import AIAssistant from "@/components/ai-assistant"

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })

export default function TryPage() {
  const [activeDemo, setActiveDemo] = useState<"chat" | "voice">("chat")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl">
                Experience the Future of Customer Engagement
              </h1>
              <p className="mb-12 text-lg text-gray-400">
                Try our AI-powered chat and voice assistants in action. See how Konversly can transform your customer
                experience with natural, intelligent conversations.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  variant={activeDemo === "chat" ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveDemo("chat")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Try Chat Demo
                </Button>
                <Button
                  size="lg"
                  variant={activeDemo === "voice" ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveDemo("voice")}
                >
                  <Mic className="mr-2 h-4 w-4" />
                  Try Voice Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white/5">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 bg-black/50 border-white/10">
                <div className="mb-4">
                  <Wand2 className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Natural Conversations</h3>
                <p className="text-gray-400">
                  Experience human-like interactions powered by advanced language models and conversation design.
                </p>
              </Card>
              <Card className="p-6 bg-black/50 border-white/10">
                <div className="mb-4">
                  <Brain className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contextual Understanding</h3>
                <p className="text-gray-400">
                  Our AI understands context and maintains coherent conversations across multiple topics.
                </p>
              </Card>
              <Card className="p-6 bg-black/50 border-white/10">
                <div className="mb-4">
                  <Zap className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-Time Responses</h3>
                <p className="text-gray-400">
                  Get instant, accurate responses to customer queries with our high-performance AI system.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
              <p className="text-lg text-gray-400">
                Interact with our AI assistant using chat or voice. Ask questions about our platform, pricing, or
                features.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Demo Instructions */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Example Questions to Try:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <span>"What features does Konversly offer for review management?"</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-green-500" />
                    <span>"How can Konversly help my restaurant improve customer satisfaction?"</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-yellow-500" />
                    <span>"Tell me about your pricing plans for small businesses."</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-purple-500" />
                    <span>"What industries does Konversly specialize in?"</span>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-xl font-bold mb-4">Why Try Our Demo?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span>Experience our AI's natural language understanding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span>Test voice recognition accuracy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <span>See how our AI handles complex queries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500" />
                      <span>Preview the customer experience</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Live Demo Area */}
              <div className="lg:sticky lg:top-24">
                <AIAssistant />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Konversly to deliver exceptional customer experiences.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

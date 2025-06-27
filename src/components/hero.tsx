"use client"

import React, { useState, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mic, ArrowRight } from "lucide-react"
import { VoiceDemoModal } from "@/components/voice-demo-modal"
import { TrialFlow } from "./trial-flow"
import { AuroraBackground } from "./ui/aurora-background"
import LogoCloud from "./logo-cloud"

// Simulated A/B test hook (replace with real A/B test logic)
function useABTest(key: string) {
  // For demo, alternate between A and B on each render
  const [variant] = useState<"A" | "B">(() => (Math.random() > 0.5 ? "A" : "B"))
  return { variant, isLoading: false }
}

// Error boundary for Hero
class HeroErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return <div className="p-8 text-center text-red-500 bg-red-50 rounded-xl">Something went wrong loading the hero section.</div>
    }
    return this.props.children
  }
}

const heroHeadlines = {
  A: "Enterprise AI in Minutes, Not Months.",
  B: "Zero-Code AI Implementation for Every Business."
}

const heroSubtitles = {
  A: "Deploy intelligent AI solutions across your organization without technical complexity.",
  B: "Let our experts handle everything—from setup to optimization—so you can focus on growth."
}

const Hero: React.FC = () => {
  const [isVoiceDemoOpen, setIsVoiceDemoOpen] = useState(false)
  const [isTrialFlowOpen, setIsTrialFlowOpen] = useState(false)
  const { variant, isLoading } = useABTest("hero-headline")

  return (
    <HeroErrorBoundary>
      <AuroraBackground>
        <section
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4"
          aria-label="Hero section"
        >
          <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-8">
            <Suspense fallback={<div className="h-16" />}> {/* Placeholder for async A/B test */}
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-24 flex items-center justify-center"
                  >
                    <span className="animate-pulse text-lg text-gray-400">Loading...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key={variant}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-primary-300" aria-describedby="hero-subtitle">
                      {heroHeadlines[variant]}
                    </h1>
                    <p id="hero-subtitle" className="mb-10 text-lg text-gray-300 max-w-2xl mx-auto">
                      {heroSubtitles[variant]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Suspense>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-900 hover:to-primary-700 text-neutral-50 shadow-lg"
                aria-label="Start Free Trial"
                onClick={() => setIsTrialFlowOpen(true)}
              >
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-neutral-100"
                aria-label="Try Voice Demo"
                onClick={() => setIsVoiceDemoOpen(true)}
              >
                <Mic className="mr-2 h-4 w-4" />
                Try Voice Demo
              </Button>
            </motion.div>
            <LogoCloud />
          </div>
          <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
          <TrialFlow isOpen={isTrialFlowOpen} onClose={() => setIsTrialFlowOpen(false)} />
        </section>
      </AuroraBackground>
    </HeroErrorBoundary>
  )
}

export default Hero

"use client"

import { useState, useEffect } from "react"
import { Modal } from "@/components/ui/modal"
import { VoiceAssistant } from "@/components/voice-assistant"
import { TrialFlow } from "./trial-flow"
import { DemoFlow } from "./demo-flow"
import { Button } from "./ui/button"
import { ArrowRight, Calendar } from "lucide-react"

interface VoiceDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VoiceDemoModal({ isOpen, onClose }: VoiceDemoModalProps) {
  const [showNextSteps, setShowNextSteps] = useState(false)
  const [isTrialOpen, setIsTrialOpen] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleClose = () => {
    onClose()
    // After closing the main voice modal, trigger the demo flow funnel
    if (!showNextSteps) {
      setIsDemoOpen(true)
    }
  }

  useEffect(() => {
    if (!isOpen) {
      // Reset states when main modal is closed
      setShowNextSteps(false)
      setIsTrialOpen(false)
      setIsDemoOpen(false)
    }
  }, [isOpen])

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} className="max-w-2xl">
        <div className="flex flex-col h-full">
          <div className="border-b border-white/10 p-6 text-center">
            <h2 className="text-2xl font-bold">Experience Konversly Voice AI</h2>
            <p className="text-gray-400 mt-1">
              Talk with our AI assistant to learn how Konversly can help your business.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center p-6">
            {showNextSteps ? (
              <div className="text-center space-y-6">
                <h3 className="text-xl font-semibold">Where to next?</h3>
                <p className="text-gray-400">
                  You've had a glimpse of what our Voice AI can do. <br />
                  Let's take the next step in your AI transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => {
                      setIsTrialOpen(true)
                      onClose()
                    }}
                  >
                    Start 14-Day Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => {
                      setIsDemoOpen(true)
                      onClose()
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" /> Schedule a Full Demo
                  </Button>
                </div>
              </div>
            ) : (
              <VoiceAssistant onTimeElapsed={() => setShowNextSteps(true)} />
            )}
          </div>
        </div>
      </Modal>

      {/* Funnel Modals */}
      <TrialFlow isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
      <DemoFlow isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}

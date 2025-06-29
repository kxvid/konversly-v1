"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, MicOff, Wand2, Bot, RefreshCw, AlertTriangle } from "lucide-react"
import Vapi from "@vapi-ai/web"

// Use environment variable for Vapi API key, fallback to demo key
const vapiApiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY || "c25d2837-1573-45ab-bbeb-b8f4951d774f"
const vapi = new Vapi(vapiApiKey)

interface Transcript {
  text: string
  speaker: string
}

interface VoiceAssistantProps {
  onTimeElapsed?: () => void
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ onTimeElapsed }) => {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState<Transcript[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const transcriptRef = useRef<HTMLDivElement>(null)

  // Memoize handlers for proper removal
  const handleCallStart = useCallback(() => setIsListening(true), [])
  const handleCallEnd = useCallback(() => setIsListening(false), [])
  const handleError = useCallback((err: any) => setError(err.message || "Unknown error"), [])
  const handleMessage = useCallback((msg: any) => {
    if (msg.type === "transcript") {
      setTranscript((prev) => [...prev, { text: msg.transcript, speaker: msg.role }])
    }
  }, [])

  useEffect(() => {
    vapi.on("call-start", handleCallStart)
    vapi.on("call-end", handleCallEnd)
    vapi.on("error", handleError)
    vapi.on("message", handleMessage)
    return () => {
      vapi.off("call-start", handleCallStart)
      vapi.off("call-end", handleCallEnd)
      vapi.off("error", handleError)
      vapi.off("message", handleMessage)
    }
  }, [handleCallStart, handleCallEnd, handleError, handleMessage])

  const startCall = () => {
    setLoading(true)
    setError(null)
    vapi.start({
      model: {
        provider: "openai",
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are Konversly's voice AI assistant. Answer clearly and helpfully."
          }
        ]
      },
      voice: {
        provider: "11labs",
        voiceId: "nova"
      }
    })
    setLoading(false)
  }

  const stopCall = () => {
    vapi.stop()
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-live="polite"
      >
        <Card className="glassCard w-96 p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-accent-aurora1" aria-hidden="true" />
            <h2 className="font-bold text-lg text-primary-300">Voice Assistant</h2>
        </div>
          <div
            ref={transcriptRef}
            className="h-32 overflow-y-auto bg-black/10 rounded p-2 mb-4 text-primary-200 text-sm"
            aria-label="Transcript"
          >
            {transcript.length === 0 ? (
              <span className="text-primary-400">No transcript yet.</span>
            ) : (
              transcript.map((t, i) => (
                <div key={i} className="mb-1">
                  <span className="font-semibold text-accent-aurora2">{t.speaker}:</span> {t.text}
                </div>
              ))
        )}
      </div>
          {error && (
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}
          <div className="flex gap-2">
        <Button
              onClick={isListening ? stopCall : startCall}
              variant={isListening ? "secondary" : "default"}
              aria-label={isListening ? "Stop voice assistant" : "Start voice assistant"}
              disabled={loading}
              className="flex items-center gap-2"
            >
              {isListening ? <MicOff /> : <Mic />}
              {isListening ? "Stop" : "Start"}
        </Button>
            <Button
              onClick={() => setTranscript([])}
              variant="secondary"
              aria-label="Clear transcript"
              disabled={loading || transcript.length === 0}
              className="flex items-center gap-2"
            >
              <RefreshCw />
              Clear
            </Button>
          </div>
              </Card>
            </motion.div>
        </AnimatePresence>
  )
}

export default VoiceAssistant

"use client"

import type React from "react"

import { createContext, useContext } from "react"

type AIAssistantContextType = {
  voiceCallRef: React.MutableRefObject<{
    startVoiceCall: () => Promise<void>
  } | null>
}

export const AIAssistantContext = createContext<AIAssistantContextType | null>(null)

export function useAIAssistant() {
  const context = useContext(AIAssistantContext)
  if (!context) {
    throw new Error("useAIAssistant must be used within an AIAssistantProvider")
  }
  return context
}

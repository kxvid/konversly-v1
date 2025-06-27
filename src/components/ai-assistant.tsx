"use client"

import * as React from "react"
import { Bot, Send, X, Minimize2, Maximize2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useChat } from "ai/react"

export default function AIAssistant() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "initial",
        role: "assistant",
        content:
          "Hello! I'm the Konversly AI assistant. How can I help you today? I can answer questions about our platform and help schedule a demo.",
      },
    ],
  })

  const scrollToBottom = React.useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  React.useEffect(() => {
    if (!isMinimized) {
      scrollToBottom()
    }
  }, [messages, isMinimized, scrollToBottom])

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 size-14 rounded-full shadow-lg z-50">
        <Bot className="size-6" />
      </Button>
    )
  }

  return (
    <Card
      data-ai-assistant
      className={cn(
        "fixed bottom-4 right-4 w-[380px] shadow-lg transition-all duration-200 ease-in-out z-50",
        isMinimized ? "h-[60px]" : "h-[600px]",
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="size-5" />
          <div>
            <p className="text-sm font-medium leading-none">Konversly Assistant</p>
            <p className="text-xs text-muted-foreground">How can I help you today?</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="size-8" onClick={() => setIsMinimized(!isMinimized)}>
            {isMinimized ? <Maximize2 className="size-4" /> : <Minimize2 className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="size-8" onClick={() => setIsOpen(false)}>
            <X className="size-4" />
          </Button>
        </div>
      </CardHeader>
      {!isMinimized && (
        <>
          <CardContent className="flex flex-col gap-4 overflow-y-auto p-4 h-[460px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "assistant"
                    ? "bg-muted text-muted-foreground"
                    : "ml-auto bg-primary text-primary-foreground",
                )}
                dangerouslySetInnerHTML={{ __html: message.content }}
              />
            ))}
            <div ref={messagesEndRef} />
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="size-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </>
      )}
    </Card>
  )
}

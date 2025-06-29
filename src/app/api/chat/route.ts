import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { createOpenAI } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Zod schema for request validation
const schema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["system", "user", "assistant"]),
      content: z.string()
    })
  )
})

export async function POST(req: NextRequest) {
  try {
    // Rate limiting placeholder (implement as needed)
    // if (!rateLimitOk) return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Please set OPENAI_API_KEY environment variable." },
        { status: 500 }
      )
    }

    // Validate request body
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request", details: parsed.error.errors }, { status: 400 })
    }

    // Create OpenAI provider instance with API key
    const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY })

    // Stream response from OpenAI
    const userMessages: { role: "system" | "user" | "assistant"; content: string }[] = parsed.data.messages.map((m: any) => ({
      role: m.role,
      content: m.content
    }));
    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      {
        role: "system",
        content: "You are Konversly, an enterprise AI assistant. Respond with clarity, professionalism, and actionable insight."
      },
      ...userMessages
    ];
    const result = await streamText({
      model: openai("gpt-3.5-turbo"),
      messages
    })

    return new Response(result.textStream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream"
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: (error as Error).message },
      { status: 500 }
    )
  }
}

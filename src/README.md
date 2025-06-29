# Konversly Landing Page

A beautiful, modern landing page for Konversly - an enterprise-grade AI platform with zero technical overhead. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Dark theme with aurora background effects
- 🤖 **AI Chat Assistant**: Interactive chat widget powered by OpenAI
- 🎤 **Voice Demo**: Voice assistant demo using Vapi AI
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Fast**: Built with Next.js 15 for optimal performance
- 🎭 **Animations**: Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **AI Chat**: OpenAI API
- **Voice AI**: Vapi AI
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies:**
```bash
pnpm install
```
2. **Set up environment variables:**
   Create a `.env.local` file in the project root with:
```env
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key_here
```
3. **Run the development server:**
```bash
pnpm dev
```
4. **Open [http://localhost:3000](http://localhost:3000) to view the app.**

## Project Structure

- `src/app/` - Next.js app directory (pages, API routes)
- `src/components/` - UI and section components
- `src/components/ui/` - shadcn/ui and custom UI primitives
- `src/components/sections/` - Page sections (Hero, Features, Pricing, etc.)
- `src/components/layout/` - Layout components (Navbar, Footer)
- `src/components/interactive/` - Interactive widgets (AI Chat, Voice Demo)
- `src/hooks/` - React hooks
- `src/lib/` - Utilities and constants
- `src/contexts/` - React context providers
- `src/styles/` - Global and component styles

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (for AI chat)
- `NEXT_PUBLIC_VAPI_API_KEY` - Your Vapi AI key (for voice assistant)

## License & Monetization

- The codebase supports both SaaS (licensed) and one-time sale models. See `/src/app/pricing` for details.

## PRD & Development

- See `Product Requirements Document (PRD)` in `/docs` or project root for full specs.
- Built in YOLO mode with Cursor IDE and AI Assistant.

---

> For questions or support, contact the product team. 
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Konversly — Enterprise-Grade AI, Zero Technical Overhead",
  description:
    "Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion, redesigned by v0.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-gray-950 text-gray-50 antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

import VisualFeatures from "@/components/visual-features"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Pricing from "@/components/pricing"
import AIAssistant from "@/components/ai-assistant"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VisualFeatures />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  )
}

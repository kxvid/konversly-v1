import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ReputationAIPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="container">
            <h1 className="text-5xl font-bold mb-8">Reputation AI</h1>
            <p className="text-xl mb-12">
              Monitor, manage, and amplify your online reputation across 200+ review sites.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <UseCase
                title="Review Monitoring"
                description="Get real-time alerts for new reviews across all major platforms."
              />
              <UseCase
                title="Sentiment Analysis"
                description="Understand customer sentiment with AI-powered analysis."
              />
              <UseCase
                title="Review Generation"
                description="Encourage satisfied customers to leave positive reviews."
              />
              <UseCase title="Review Response" description="Respond to reviews quickly with AI-assisted suggestions." />
              <UseCase
                title="Reputation Scoring"
                description="Track your reputation score and benchmark against competitors."
              />
              <UseCase
                title="Review Widgets"
                description="Showcase your best reviews on your website and social media."
              />
            </div>
            <div className="mt-12 text-center">
              <Button size="lg">Start Your Free Trial</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function UseCase({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

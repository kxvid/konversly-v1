import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function Cta() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="aspect-square border border-white/10 bg-white/5" />
        ))}
      </div>
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <MessageSquare className="h-8 w-8" />
          </div>
          <h2 className="mb-4 text-4xl font-bold">Let our experts handle your AI transformation.</h2>
          <p className="mb-8 text-gray-400">
            Join leading businesses who trust our team to implement and manage their AI customer engagement platform. No
            technical expertise required.
          </p>
          <Button size="lg" className="rounded-full">
            Start Free Trial →
          </Button>
        </div>
      </div>
    </section>
  )
}

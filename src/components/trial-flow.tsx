"use client"

import { useState, useEffect, useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { ArrowRight, Loader2, PartyPopper } from "lucide-react"
import { startTrial } from "@/app/actions/start-trial"
import { toast } from "sonner"

const initialState = {
  message: "",
  success: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Starting Trial...
        </>
      ) : (
        <>
          Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

export function TrialFlow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [state, formAction] = useActionState(startTrial, initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (state.success && !isSubmitted) {
      toast.success("Trial Activated!", {
        description: "Welcome to Konversly! We're excited to have you.",
      })
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
      }, 2000)
    } else if (state.message && !state.success) {
      toast.error("Something went wrong", {
        description: "Please check the form and try again.",
      })
    }
  }, [state, onClose, isSubmitted])

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-8 text-center space-y-4">
          <PartyPopper className="mx-auto h-12 w-12 text-primary" />
          <h2 className="text-2xl font-bold">Welcome Aboard!</h2>
          <p className="text-gray-400">Your 14-day free trial has started. Check your email for next steps.</p>
          <Button onClick={onClose}>Get Started</Button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <div className="p-8">
        <div className="space-y-2 text-center mb-8">
          <h3 className="text-2xl font-bold">Start Your Free Trial</h3>
          <p className="text-gray-400">No credit card required. Instantly access the platform.</p>
        </div>
        <form action={formAction} className="space-y-4">
          <Input name="name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Work Email" required />
          <Input name="company" placeholder="Company Name" required />
          <Input name="role" placeholder="Your Role" required />
          <div className="pt-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </Modal>
  )
}

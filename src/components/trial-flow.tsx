"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Modal } from "./ui/modal"
import { ArrowRight, Loader2, PartyPopper } from "lucide-react"
import { startTrial } from "../app/actions/start-trial"
import { toast } from "sonner"

interface TrialState {
  message: string;
  success: boolean;
}

function flattenFieldErrors(errors: any): string {
  if (!errors || typeof errors === 'string') return errors || '';
  return Object.values(errors)
    .flat()
    .filter(Boolean)
    .join(' ');
}

export function TrialFlow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [state, setState] = useState<TrialState>({ message: "", success: false })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data: Record<string, string> = {};
            formData.forEach((value, key) => {
              data[key] = value.toString();
            });
            try {
              const formDataObj = new FormData();
              Object.entries(data).forEach(([key, value]) => formDataObj.append(key, value));
              const result = await startTrial(null, formDataObj);
              setState({
                message: flattenFieldErrors(result.message),
                success: result.success,
              });
            } catch (err: any) {
              setState({ message: err?.message || "Unknown error", success: false });
            } finally {
              setLoading(false);
            }
          }}
        >
          <Input name="name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Work Email" required />
          <Input name="company" placeholder="Company Name" required />
          <Input name="role" placeholder="Your Role" required />
          <div className="pt-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
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
          </div>
        </form>
      </div>
    </Modal>
  )
}

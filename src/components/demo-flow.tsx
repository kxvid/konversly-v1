"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Modal } from "./ui/modal"
import { ArrowRight, Loader2, PartyPopper } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { requestDemo } from "../app/actions/request-demo"
import { toast } from "sonner"
import React from "react"

interface Step {
  title: string
  description: string
  content: ReactNode
}

interface DemoState {
  message: string;
  success: boolean;
}

function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <Button type="submit" disabled={loading}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Scheduling...
        </>
      ) : (
        <>
          Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

function flattenFieldErrors(errors: any): string {
  if (!errors || typeof errors === 'string') return errors || '';
  return Object.values(errors)
    .flat()
    .filter(Boolean)
    .join(' ');
}

export function DemoFlow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [state, setState] = useState<DemoState>({ message: "", success: false })
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const steps: Step[] = [
    {
      title: "Schedule Your Demo",
      description: "Tell us about yourself so we can tailor the demo for you.",
      content: (
        <div className="space-y-4">
          <Input name="name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Work Email" required />
        </div>
      ),
    },
    {
      title: "Company Information",
      description: "Help us understand your business needs.",
      content: (
        <div className="space-y-4">
          <Input name="company" placeholder="Company Name" required />
          <Select name="industry" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="financial">Financial Services</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
    },
    {
      title: "Choose Your Time",
      description: "Select a convenient time for your personalized demo.",
      content: (
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
              const result = await requestDemo(null, formDataObj);
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
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Date</label>
              <Input name="date" type="date" required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Time</label>
              <Select name="time" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <SubmitButton loading={loading} />
          </div>
        </form>
      ),
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  React.useEffect(() => {
    if (state.success && !isSubmitted) {
      toast.success("Demo Scheduled!", {
        description: "You'll receive a confirmation email shortly.",
      });
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setCurrentStep(0);
        setIsSubmitted(false);
      }, 2000);
    } else if (state.message && !state.success) {
      toast.error("Something went wrong", {
        description: state.message,
      });
    }
  }, [state, onClose, isSubmitted]);

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-8 text-center space-y-4">
          <PartyPopper className="mx-auto h-12 w-12 text-primary" />
          <h2 className="text-2xl font-bold">Demo Scheduled!</h2>
          <p className="text-gray-400">
            We've sent a calendar invite to your email. We look forward to speaking with you!
          </p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-lg">
      <div className="p-8">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">{steps[currentStep].title}</h3>
            <p className="text-gray-400">{steps[currentStep].description}</p>
          </div>

          {steps[currentStep].content}

          {currentStep < steps.length - 1 && (
            <div className="flex justify-end gap-4">
              {currentStep > 0 && (
                <Button variant="secondary" onClick={() => setCurrentStep(currentStep - 1)}>
                  Back
                </Button>
              )}
              <Button onClick={handleNext}>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </Modal>
  )
}

"use client"

import Link from "next/link"
import { MessageSquare, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Konversly</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              The enterprise-grade AI platform with zero technical overhead. We handle the tech, you handle the growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/solutions/fortify" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/try" className="hover:text-white">
                    Try Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-400">
              Join our newsletter to get the latest on AI and customer experience.
            </p>
            <form className="mt-4 flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button size="icon" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Konversly. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Status
            </Link>
            <Link href="#" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

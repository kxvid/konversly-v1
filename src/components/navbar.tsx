"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Shield } from "lucide-react"
import "./navbar.css"

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            Konversly
          </Link>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-white rounded-lg data-[state=open]:bg-white/5">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-4 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white/60">Core Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/fortify"
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                              <Shield className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Fortify</div>
                              <div className="text-sm text-white/60">Monitor and manage your online reputation</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/nexus"
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                              <Shield className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Nexus</div>
                              <div className="text-sm text-white/60">Unified customer engagement platform</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/lumina"
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                              <Shield className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Lumina</div>
                              <div className="text-sm text-white/60">Boost your local SEO and search presence</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white/60">Advanced Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/echo"
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                              <Shield className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Echo</div>
                              <div className="text-sm text-white/60">Collect and analyze customer feedback</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/clarity"
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                              <Shield className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Clarity</div>
                              <div className="text-sm text-white/60">AI-powered business intelligence</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/vantage"
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                              <Shield className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Vantage</div>
                              <div className="text-sm text-white/60">AI-driven competitive intelligence</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-white rounded-lg data-[state=open]:bg-white/5">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] gap-4 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-white/60">Services</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            {
                              name: "Healthcare",
                              icon: "🏥",
                              href: "/industries/healthcare",
                              desc: "Medical practices and facilities",
                            },
                            {
                              name: "Financial Services",
                              icon: "💳",
                              href: "/industries/financial-services",
                              desc: "Banks and financial institutions",
                            },
                            {
                              name: "Legal",
                              icon: "⚖️",
                              href: "/industries/legal",
                              desc: "Law firms and legal services",
                            },
                            {
                              name: "Home Services",
                              icon: "🏠",
                              href: "/industries/home-services",
                              desc: "Home repair and maintenance",
                            },
                          ].map((industry) => (
                            <NavigationMenuLink key={industry.href} asChild>
                              <Link
                                href={industry.href}
                                className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                              >
                                <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-purple-500 to-purple-600">
                                  <span className="text-sm">{industry.icon}</span>
                                </div>
                                <div>
                                  <div className="font-medium text-white">{industry.name}</div>
                                  <div className="text-sm text-white/60">{industry.desc}</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-white/60">Retail & Hospitality</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            {
                              name: "Restaurants",
                              icon: "🍽️",
                              href: "/industries/restaurants",
                              desc: "Restaurants and food service",
                            },
                            { name: "Retail", icon: "🛍️", href: "/industries/retail", desc: "Retail stores and chains" },
                            {
                              name: "Automotive",
                              icon: "🚗",
                              href: "/industries/automotive",
                              desc: "Auto dealers and services",
                            },
                            {
                              name: "Property Management",
                              icon: "🏢",
                              href: "/industries/property-management",
                              desc: "Property and facilities",
                            },
                          ].map((industry) => (
                            <NavigationMenuLink key={industry.href} asChild>
                              <Link
                                href={industry.href}
                                className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                              >
                                <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-green-500 to-green-600">
                                  <span className="text-sm">{industry.icon}</span>
                                </div>
                                <div>
                                  <div className="font-medium text-white">{industry.name}</div>
                                  <div className="text-sm text-white/60">{industry.desc}</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-white/60">Other Industries</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            {
                              name: "Real Estate",
                              icon: "🏘️",
                              href: "/industries/real-estate",
                              desc: "Real estate and brokers",
                            },
                            {
                              name: "Dental",
                              icon: "🦷",
                              href: "/industries/dental",
                              desc: "Dental practices and clinics",
                            },
                            {
                              name: "Self Storage",
                              icon: "📦",
                              href: "/industries/self-storage",
                              desc: "Storage facilities",
                            },
                            {
                              name: "Wellness",
                              icon: "🧘",
                              href: "/industries/wellness",
                              desc: "Wellness and fitness",
                            },
                          ].map((industry) => (
                            <NavigationMenuLink key={industry.href} asChild>
                              <Link
                                href={industry.href}
                                className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                              >
                                <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-orange-500 to-orange-600">
                                  <span className="text-sm">{industry.icon}</span>
                                </div>
                                <div>
                                  <div className="font-medium text-white">{industry.name}</div>
                                  <div className="text-sm text-white/60">{industry.desc}</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-white rounded-lg data-[state=open]:bg-white/5">
                  Company Size
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
                    <div className="grid gap-2">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/solutions/small-business"
                          className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                        >
                          <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                            <span className="text-sm">🏪</span>
                          </div>
                          <div>
                            <div className="font-medium text-white">Small Business</div>
                            <div className="text-sm text-white/60">Perfect for businesses with 1-10 locations</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/solutions/enterprise"
                          className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                        >
                          <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600">
                            <span className="text-sm">🏢</span>
                          </div>
                          <div>
                            <div className="font-medium text-white">Enterprise</div>
                            <div className="text-sm text-white/60">
                              For organizations with 10+ locations or custom needs
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/pricing" className="text-sm text-gray-400 hover:text-white">
            Pricing
          </Link>
          <Link href="/login" className="text-sm text-gray-400 hover:text-white">
            Log in
          </Link>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
            Start Free Trial
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

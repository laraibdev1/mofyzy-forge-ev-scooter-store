"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsOpen(true)}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-16 items-center justify-between px-4 border-b">
              <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                <span className="text-eco-600">Aman</span> Enterprises
              </Link>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <div className="px-4 py-6 space-y-6">
              <nav className="flex flex-col space-y-6">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>

                <div>
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium"
                    onClick={() => toggleCategory("products")}
                  >
                    Products
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedCategory === "products" ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedCategory === "products" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          <Link
                            href="/products"
                            className="block text-base text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            All Products
                          </Link>
                          <Link
                            href="/products?category=urban"
                            className="block text-base text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            Urban Scooters
                          </Link>
                          <Link
                            href="/products?category=offroad"
                            className="block text-base text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            Off-Road Scooters
                          </Link>
                          <Link
                            href="/products?category=lightweight"
                            className="block text-base text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            Lightweight Scooters
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>

                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </nav>

              <div className="pt-6 border-t">
                <Link href="/products" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full bg-eco-gradient">Shop Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


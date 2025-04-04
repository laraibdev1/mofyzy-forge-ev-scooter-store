import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Facebook, Twitter, Instagram } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import MobileNav from "@/components/mobile-nav"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Aman Enterprises-Ev Scooters",
  description: "Premium electric scooters for urban mobility",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, poppins.variable, "font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b glass-effect">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link href="/" className="font-bold text-xl font-heading">
                    <span className="text-eco-600">Aman</span> Enterprises
                  </Link>
                </div>
                <nav className="hidden md:flex gap-8">
                  <Link href="/" className="text-sm font-medium hover:text-eco-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/products" className="text-sm font-medium hover:text-eco-600 transition-colors">
                    Products
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-eco-600 transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-eco-600 transition-colors">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-eco-100 hover:text-eco-600 transition-colors"
                  >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                  {/* <Link href="/cart">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-eco-100 hover:text-eco-600 transition-colors"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Cart</span>
                    </Button> */}
                  {/* </Link> */}
                  <Link href="/products" className="hidden md:block">
                    <Button className="rounded-full bg-eco-gradient hover:shadow-lg hover:shadow-eco-500/20 transition-all duration-300">
                      Shop Now
                    </Button>
                  </Link>
                  <MobileNav />
                </div>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="w-full border-t py-12 bg-gradient-to-b from-white to-eco-50 dark:from-gray-950 dark:to-gray-900">
              <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <Link href="/" className="font-bold text-xl font-heading">
                    <span className="text-eco-600">Aman</span> Scooters
                  </Link>
                  <p className="text-sm text-gray-500">
                    Revolutionizing urban mobility with eco-friendly electric scooters that don't compromise on style or
                    performance.
                  </p>
                  <div className="flex space-x-4">
                    <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-eco-100 hover:text-eco-600">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-eco-100 hover:text-eco-600">
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-eco-100 hover:text-eco-600">
                      <a href="https://www.instagram.com/aman_enterprises_madhupur?igsh=MXRibzZ2cG5pb3R5Yw==" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Shop</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/products" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products?category=urban"
                        className="text-sm text-gray-500 hover:text-eco-600 transition-colors"
                      >
                        Urban Scooters
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products?category=offroad"
                        className="text-sm text-gray-500 hover:text-eco-600 transition-colors"
                      >
                        Off-Road Scooters
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products?category=lightweight"
                        className="text-sm text-gray-500 hover:text-eco-600 transition-colors"
                      >
                        Lightweight Scooters
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Support</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/faq" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/shipping" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        Shipping & Returns
                      </Link>
                    </li>
                    <li>
                      <Link href="/warranty" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        Warranty
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-sm text-gray-500 hover:text-eco-600 transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="container mt-12 pt-6 border-t">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Aman Scooters. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <Link href="/terms" className="text-xs text-gray-500 hover:text-eco-600 transition-colors">
                      Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-xs text-gray-500 hover:text-eco-600 transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/cookies" className="text-xs text-gray-500 hover:text-eco-600 transition-colors">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
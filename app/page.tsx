"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Star, Truck, Shield, Leaf, Zap, Battery } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { featuredProducts } from "@/lib/products"

export default function Home() {
  // Refs for scroll animations
  const featuresRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".section-fade-in")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-eco-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-100 px-3 py-1 text-sm text-eco-700 mb-4">
                <Leaf className="mr-1 h-3.5 w-3.5" />
                <span>Eco-friendly transportation</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-6xl font-bold tracking-tighter sm:text-12xl xl:text-6xl/none">
                  Ride the <span className="text-gradient">Future</span> with Electric Scooters
                </h1>
                {/* <br /> */}

                <p className="max-w-[600px] text-gray-500 md:text-2xl">
                  Discover our premium range of electric scooters that combine style, performance, and sustainability.
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="px-8 rounded-full bg-eco-gradient">
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 rounded-full border-eco-200 text-eco-700 hover:bg-eco-50"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             <div className="relative">
  <div className="absolute -inset-4 rounded-full bg-eco-radial animate-pulse-glow"></div>
  <Image
    src="/aman.png"
    width={550}
    height={550}
    alt="Electric Scooter"
    className="relative z-10 rounded-full object-cover"
  />
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-eco-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-eco-300">25+</div>
              <div className="text-sm md:text-base text-eco-100">Mile Range</div>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-eco-300">20</div>
              <div className="text-sm md:text-base text-eco-100">MPH Speed</div>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-eco-300">2yr</div>
              <div className="text-sm md:text-base text-eco-100">Warranty</div>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-eco-300">5k+</div>
              <div className="text-sm md:text-base text-eco-100">Happy Riders</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-fade-in w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-100 px-3 py-1 text-sm text-eco-700 mb-2">
              <Zap className="mr-1 h-3.5 w-3.5" />
              <span>Powerful Features</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Scooters?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our electric scooters are designed with you in mind, offering the perfect blend of performance, style,
                and sustainability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="eco-card flex flex-col justify-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-eco-100 text-eco-700">
                <Truck className="h-7 w-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Fast Delivery</h3>
                <p className="text-gray-500">Get your scooter delivered to your doorstep within 3-5 business days.</p>
              </div>
            </div>
            <div className="eco-card flex flex-col justify-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-eco-100 text-eco-700">
                <Shield className="h-7 w-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">2-Year Warranty</h3>
                <p className="text-gray-500">
                  All our scooters come with a comprehensive 2-year warranty for peace of mind.
                </p>
              </div>
            </div>
            <div className="eco-card flex flex-col justify-center space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-eco-100 text-eco-700">
                <Battery className="h-7 w-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Long Battery Life</h3>
                <p className="text-gray-500">Enjoy extended rides with our high-capacity, fast-charging batteries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={productsRef} className="section-fade-in w-full py-16 md:py-24 lg:py-32 bg-eco-radial">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-100 px-3 py-1 text-sm text-eco-700 mb-2">
              <Star className="mr-1 h-3.5 w-3.5" />
              <span>Featured Collection</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our range of high-performance electric scooters designed for urban mobility.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/products">
              <Button size="lg" className="rounded-full bg-eco-gradient">
                View All Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-fade-in w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-100 px-3 py-1 text-sm text-eco-700 mb-2">
              <Star className="mr-1 h-3.5 w-3.5" />
              <span>Customer Love</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our customers have to say about their experience with our
                electric scooters.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=100&width=100",
                quote:
                  "The Urban Glide Pro has transformed my daily commute. It's fast, reliable, and so much fun to ride!",
              },
              {
                name: "Michael Chen",
                avatar: "/placeholder.svg?height=100&width=100",
                quote:
                  "Excellent customer service and a top-quality product. The Explorer Max handles off-road terrain like a dream.",
              },
              {
                name: "Priya Patel",
                avatar: "/placeholder.svg?height=100&width=100",
                quote:
                  "I love how portable the Commuter Elite is. I can easily take it on public transport when needed.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="eco-card flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-2">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3 pt-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-eco-gradient text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Ride Electric?</h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed">
                Join thousands of satisfied customers who have made the switch to eco-friendly urban transportation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/products">
                <Button size="lg" className="px-8 rounded-full bg-white text-eco-700 hover:bg-white/90">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

